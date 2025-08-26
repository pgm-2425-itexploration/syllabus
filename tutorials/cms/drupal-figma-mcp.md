---
title: "Generating Drupal Components with Figma and AI"
synopsis: "Learn how to automatically convert Figma components into working Drupal UI Patterns using GitHub Copilot and the MCP protocol. This tutorial shows a modern workflow that connects designers and developers."
date: 2025-08-25
author:
  name: "Witze Van der Straeten"
  avatarUrl: "/assets/avatars/witze.jpg"
  socials:
    website: "https://witzevds-portoflio.onrender.com"
    linkedin: "https://www.linkedin.com/in/witze-van-der-straeten-705731193/"
    github: "https://github.com/Witzevds"
thumbnailUrl: "/assets/tutorials/drupal-figma-mcp/drupal-figma-mcp-thumbnail.png"
head:
  - - meta
    - name: description
      content: "Automate your Drupal development workflow by directly converting Figma designs to UI Patterns with AI assistance."
  - - meta
    - name: keywords
      content: "Drupal, Figma, MCP, Copilot, UI Patterns, AI, CMS, Design Systems"
sources:
  - title: "DDEV Documentation"
    url: "https://ddev.readthedocs.io/"
  - title: "Drupal UI Patterns"
    url: "https://www.drupal.org/project/ui_patterns"
  - title: "Model Context Protocol"
    url: "https://modelcontextprotocol.io/"
---

# Generating Drupal Components with Figma and AI

## Introduction

Anyone working with web development knows how frustrating it can be to get a design made in Figma pixel-perfect into a CMS like Drupal. Often it's a process of manually creating YAML files, writing Twig templates, adding CSS, testing for errors, and trying everything again. This takes a lot of time and quickly leads to inconsistencies: a button looks slightly different here than there, or a heading isn't quite what the designer intended.

With the rise of AI tools like GitHub Copilot and the new MCP protocol (Model Context Protocol), this process is changing. In this tutorial, I show you how to automatically convert Figma components into working Drupal UI Patterns, with the help of Copilot. The result:

- **Designers** work normally in Figma
- **Developers** create a basic structure once
- **Copilot** generates the Twig, CSS, and YAML
- **Content editors** can fill everything in without code

This tutorial is written for developers, but also interesting for designers who want to understand how their work ends up in Drupal. We combine various trends in the ICT sector: no-code/low-code development, AI-assisted coding, design systems, and headless CMS architectures.

## Step 1: Setting up Drupal 11 with DDEV

For this project, I use DDEV, a tool that runs on top of Docker. DDEV is a kind of all-in-one development environment: it ensures that you have a working stack with PHP, MySQL, and Apache/Nginx without any hassle. So you don't need to install XAMPP, MAMP, or separate servers.

### Why DDEV?

- **Consistent development environment**: your project runs the same for you as it does for your team members
- **Quick setup**: in less than 5 minutes you have a working Drupal installation
- **Flexibility**: you can run multiple projects side by side

::: tip DDEV Installation
If you don't have DDEV yet, you should follow the [official guide](https://ddev.readthedocs.io/en/stable/users/install/).
:::

### Creating the project

Open your terminal and run these steps:

```bash
# Create a new folder and go into it
mkdir drupal-mcp-demo
cd drupal-mcp-demo

# Create a standard Drupal project
composer create-project drupal/recommended-project .

# Initialize DDEV
ddev config --project-type=drupal --docroot=web --create-docroot

# Start the containers
ddev start
```

When you run `ddev start`, DDEV automatically starts the containers. You get a URL like:

**https://drupal-mcp-demo.ddev.site**

Open that URL in your browser and you'll get the Drupal installation wizard. Follow the steps (choose language, database details — which are already filled in by DDEV) and in a few minutes you'll have a fresh Drupal 11 site running. 🎉

::: warning Troubleshooting
- **Getting an error "port already in use"?** Then there's already another service running on your computer (e.g., MySQL). Close it or change the port in `.ddev/config.yaml`.
- **See "command not found"?** Check if DDEV is correctly installed and added to your PATH.
:::

## Step 2: Installing additional tools

Besides Drupal, we need two crucial tools:

### 1. Figma

Figma is our starting point. Here we create the designs. Later we'll enable the Dev Mode MCP Server in Figma so that VS Code and Copilot can read those designs. Make sure you have an account and install the desktop app (works faster than just the browser).

### 2. Visual Studio Code with Copilot

We use VS Code as an editor because it's one of the first editors that fully supports MCP. Copilot runs seamlessly in it and can talk directly to Figma via MCP.

::: warning Editor Support
Editors like Sublime Text or Atom don't (yet) have support for MCP. That's why we explicitly use VS Code here.
:::

## Step 3: Installing modules

Drupal works modularly: the core is quite bare, and almost everything is added via modules. For our project, we need the following modules:

```bash
ddev composer require drush/drush
ddev composer require 'drupal/classy:^2.0'
ddev composer require 'drupal/ui_patterns:^2.0'
ddev composer require 'drupal/admin_toolbar:^3.6'
```

### What do these modules do?

| Module | Description |
|--------|-------------|
| **Drush** | A command line tool for Drupal. With this you can clear cache, enable modules, run updates, etc. faster than via the interface. |
| **Classy** | A minimalist theme that we use as a base. It has hardly any styling, giving us maximum control. |
| **UI Patterns** | With this you define components (via YAML). It's the bridge between design and implementation. |
| **UI Patterns Blocks** | Makes it possible to use UI Patterns as blocks that you can drag into the Layout Builder. |
| **UI Patterns Library** | A central place where you get an overview of all your components. Handy for testing. |
| **Layout Builder** | Gives you a visual way to compose pages with sections and components. |
| **Admin Toolbar** | Replaces the standard toolbar with a faster version with dropdown menus. Saves a lot of clicking. |

### Enabling modules

1. Go to your Drupal admin and click on **Extend** in the top toolbar
2. Search for the modules and check:
   - UI Patterns
   - UI Patterns Blocks
   - UI Patterns Library
   - Layout Builder
   - Admin Toolbar
3. Click **Install** at the bottom

::: tip Drush Command
Use Drush to enable modules faster:

```bash
ddev drush en ui_patterns ui_patterns_blocks ui_patterns_library layout_builder admin_toolbar -y
```
:::

## Step 4: Activating the Classy theme

Now we activate the Classy theme.

1. Go to **Appearance** in the Drupal admin
2. Search for **Classy**
3. Click **Install and set as default**

::: tip Why Classy?
Your site now looks bare, without styling. This might seem strange, but this is exactly what we want: a neutral foundation where our Figma styling will come on top later.

**Why not Bartik, Claro, or Olivero?** Those themes already have a lot of built-in CSS. That makes it harder to implement the exact Figma styling. So Classy is ideal: lightweight and flexible.
:::

## Step 5: Creating component folder

Now we're going to create the basic structure for our components.

1. Open your project in VS Code
2. Navigate to: `web/themes/classy`
3. Create a new folder `components` here ⚠️ The name is important, otherwise UI Patterns won't work
4. In `components/` create a folder `structuur`
5. Add two files in it:
   - `structuur.component.yml`
   - `structuur.twig` (can be empty, otherwise Drupal complains)

### Content of structuur.component.yml

```yaml
$schema: https://git.drupalcode.org/project/drupal/-/raw/HEAD/core/assets/schemas/v1/metadata.schema.json

name: Test Figma
status: experimental
description: Component based on Figma design (node 288:32)
group: Figma

variants:
  default:
    title: Default
    description: Standard variant

props:
  type: object
  properties:
    title:
      type: string
      title: Title
      description: Title of the block
    description:
      type: string
      title: Description
      description: Short description (HTML allowed)
    image_url:
      type: string
      title: Image
      description: URL to image (optional)
    button_text:
      type: string
      title: Button text
      description: Text for the button
    button_url:
      type: string
      title: Button URL
      description: Link for the button
```

::: tip Component Structure
This file describes the structure of the component:

- **name**: internal name
- **props**: the properties you can set in Drupal
- **title, description, image_url, button_text, button_url**: fields we'll fill with data later

**Why this is important:** This file teaches Copilot how a component should look. Once you define this well, Copilot can generate new components that follow the same structure.
:::

## Part 2 – From Figma to VS Code via MCP

## Step 6: Creating a Figma component

Now that our Drupal setup is ready and we have a first YAML structure, it's time to bridge to Figma. Figma is our "design system" in this process where we build the visual elements that will later be automatically translated into components in Drupal.

### Why Figma?

- **Design-first workflow**: designers first create a pixel-perfect design in Figma. Developers no longer have to blindly type this over.
- **Design tokens**: colors, typography, and spacing that you define in Figma can later be passed to Copilot and converted to CSS.
- **Dev Mode**: Figma recently has a Developer Mode, with which you can easily extract code snippets and properties from designs. In combination with MCP, this becomes even more powerful.

### Example: Hero component

To keep it simple, we'll create one of the most classic parts of a website: a Hero. This is usually the top block on a page, with a title, subtitle, an image or background, and one or more buttons.

1. Open Figma and create a new file
2. Add a Frame (e.g., 1440x600 px)
3. Place a title (`<h1>`), a subtitle (`<p>`), and two buttons ("Get Started" and "Learn More")
4. Optionally add a background image or color

::: tip Element Naming
Give your elements clear names, such as **Hero Title**, **Hero Button Primary**, **Hero Button Secondary**. This helps enormously later, because Copilot recognizes these labels via MCP and can convert them directly to YAML properties.
:::

**Result**: you now have a visual Hero component that you'll soon automatically generate in Drupal.

## Step 7: Activating Figma MCP

Now comes a crucial step: turning on the Dev Mode MCP Server in Figma. Without this, VS Code cannot connect to Figma.

1. Click on the Figma logo in the top left
2. Go to **Preferences**
3. Scroll down and look for **Enable Dev Mode MCP Server**
4. Check this box

**From now on, there's a local MCP server running that makes your Figma design accessible to other tools (like VS Code).**

### What is MCP actually?

MCP stands for **Model Context Protocol**. It's a protocol that allows AI tools like Copilot to retrieve additional context. In this case: reading properties from your Figma design.

- **Without MCP**: Copilot only sees your code
- **With MCP**: it can also read Figma
- **Result**: Copilot understands the whole picture (design + code)

::: warning Dev Mode Required
MCP currently only works in Developer Mode of Figma. So you need a Figma account with access to Dev Mode (free for students and small teams, paid in large organizations).
:::

## Step 8: Configuring VS Code for MCP

Now that Figma is ready, we switch to Visual Studio Code.

### Why VS Code?

As mentioned earlier, not all editors support MCP. VS Code does, and it's also the standard environment for Copilot.

### Opening settings

1. Open VS Code
2. Click on the gear icon in the bottom left → **Settings**
3. Search for **MCP** in the search bar
4. Click **Edit in settings.json**

### Adding configuration

Add the following rules:

```json
{
  "chat.mcp.discovery.enabled": true,
  "chat.mcp.servers": [
    {
      "name": "figma-devmode",
      "transport": { 
        "type": "sse", 
        "url": "http://127.0.0.1:3845/mcp" 
      }
    }
  ],
  "chat.agent.enabled": true
}
```

### What does this mean?

| Setting | Description |
|---------|-------------|
| `"chat.mcp.discovery.enabled": true` | This allows VS Code to actively search for MCP servers |
| `"chat.mcp.servers": [...]` | Here we define the MCP server. In this case, it runs locally (127.0.0.1) on port 3845, as Figma has set up |
| `"chat.agent.enabled": true` | Without this, Copilot cannot really communicate with the server. This is the switch that activates the integration |

::: tip Server Naming
Give your server a recognizable name. In this example we use "figma-devmode".
:::

### Debugging

If you notice that VS Code doesn't connect:

- Check if the MCP server in Figma is really running
- Look in your terminal if port 3845 isn't already in use
- Try restarting VS Code after changing settings.json

## Step 9: Connecting Figma component to VS Code

Now that everything is ready, we make the first real connection between Figma and VS Code.

### Copying Dev Mode Link

1. Select your Hero component in Figma
2. Click **Share** in the top right
3. Choose **Copy Dev Mode Link**

This generates a URL that refers to your specific component in Dev Mode.

### Sending link to Copilot

1. Go back to VS Code
2. Open Copilot Chat via `CMD + SHIFT + I` (Mac) or `CTRL + SHIFT + I` (Windows)
3. Paste your link and type for example:

```
Can you look at this Figma component via this link: [paste your Dev Mode link here]?
```

**If everything is set up correctly, you'll see that Copilot now connects to the MCP server.** You can even ask it:

```
What properties do you see in this component?
```

And Copilot will answer with something like:

- Title: Hero Title
- Subtitle: Hero Subtitle
- Button1: Get Started
- Button2: Learn More

### What exactly happens here?

1. **Copilot retrieves metadata from Figma via MCP**
2. **This metadata is put in context with your existing YAML structure**
3. **Copilot can now make direct suggestions to generate YAML, Twig, and CSS that match the Figma design**

::: tip Benefits
- No manual "peeking" in Figma and copying over
- Less chance of typos or inconsistencies
- Direct connection between design and implementation
:::

### Extra depth: Why this is groundbreaking

Until now, there was always a gap between designers and developers. Designers delivered Figma files, developers had to interpret and convert them. Often a lot of information was lost in the process.

With MCP and Copilot, this changes fundamentally:

- **Design is data**: Figma delivers not just pixels, but also properties (names, structures, component variants)
- **AI understands both sides**: Copilot can both write code and read design information
- **Faster iteration**: If the designer adds a button in Figma, you can have it appear in Drupal the same day, without anyone manually writing code for it

**This connects to larger trends in the sector:**

- Design-to-code tools like Anima, Locofy, and Framer
- Low-code CMS where non-developers can compose pages
- AI-assisted development, where developers become more curators than code writers

### Preview to Step 10

Now that Copilot can see your Figma component, it's time to let it do real work. In the next step, we'll combine the YAML we made earlier with the Figma data, and let Copilot generate the rest:

- A complete `.component.yml`
- A `.twig` file for the markup
- A `.css` file with styling

**In short: the real automation.** 🚀

## Part 3 – YAML to Copilot and testing in Drupal

## Step 10: Giving YAML to Copilot

So far we have three things ready:

1. **A Drupal 11 project** with DDEV, modules, and the Classy theme
2. **A Figma component** (the Hero) that's ready in Dev Mode
3. **A basic YAML structure** (`structuur.component.yml`) that Copilot can use as an example

Now it's time to let the real AI magic happen.

### Why YAML first?

You can naturally ask Copilot right away: *"Make a Drupal component for this Figma design"*. But that often results in a mess: the AI has to guess what structure Drupal expects.

By giving an example YAML first, you're essentially telling Copilot:
**"This is how I want you to work. Stick exactly to this pattern."**

This makes the chance of errors much smaller, and Copilot will build the next components following the same logic.

### Giving the YAML file to Copilot

1. Go to your folder `web/themes/classy/components/structuur/` in VS Code
2. Drag the file `structuur.component.yml` to the Copilot chat window
3. Copilot automatically recognizes that this is YAML. You often see a message like:
   *"I see this is a Drupal UI Patterns component definition in YAML."*

### The prompt for Copilot

Here comes the important part. You don't want to just "let Copilot guess", but give it a clear task. Below is a prompt that you can literally copy-paste in your tutorial.

```
Hey Copilot, I have a component in YAML that I use with Drupal UI Patterns.  
Study this file and use it as a basis.  

When I give you a component (via YAML or via a Figma Dev Mode link), I want you to automatically create a complete setup with:  
1. The `.component.yml` file with all properties that are present in Figma (e.g., title, description, buttons, images, …).  
2. A `.twig` file in which those properties are correctly displayed.  
3. A `.css` file in which the styling happens, as much as possible resembling the Figma design.  
4. Everything together in its own folder per component (e.g., `/components/[component-name]/`).  

⚠️ Important:  
- If there are multiple variants or multiple buttons in Figma, also add multiple properties (e.g., `button1_text`, `button2_text`, …).  
- Make sure the Twig only shows something if the property is filled in.  
- Use semantic HTML and clean CSS classes (e.g., `.hero-buttons`).  
- Put buttons and variants nicely next to each other with flexbox or grid, so the design matches Figma.  

Always stick to the Drupal UI Patterns structure:  
- `[component].component.yml`  
- `[component].twig`  
- `[component].css`
```

### What does Copilot do now?

Suppose your Hero in Figma has the following properties:

- **Title**: "Welcome to our site"
- **Subtitle**: "Building with AI and design systems"
- **Button1**: "Get Started" (link: `/start`)
- **Button2**: "Learn More" (link: `/docs`)
- **Image**: a background photo

Copilot will then do the following:

#### Hero.component.yml expansion:
- Add properties for `title`, `subtitle`, `image`, `button1_text`, `button1_url`, `button2_text`, `button2_url`
- Keep a "default variant"

#### Hero.twig generation:
- Create HTML markup that nicely displays the properties
- For example: title in `<h1>`, subtitle in `<p>`, buttons in `<a>` tags
- Only show what is filled in (no empty buttons)

#### Hero.css generation:
- Add styling with flexbox for the buttons
- Style buttons according to Figma (primary = blue, secondary = white with border)
- Provide responsive layout

**Result**: a complete Hero component that matches your Figma design 1-to-1.

### Best practices for Copilot prompts

From experience, these tips work well:

- **Give Copilot small tasks**: Ask it first only for YAML + Twig, then CSS. This way you keep more control
- **Be explicit about Drupal**: Sometimes Copilot thinks you're working in React or Vue. Always add: "This is for Drupal UI Patterns"
- **Ask for explanation**: Let Copilot explain its choices. This way you better understand why it adds certain properties or classes
- **Use examples**: You can say: "Follow the same style as in my structuur.component.yml"

### Example output

This is what Copilot could return (shortened example):

#### hero.component.yml

```yaml
name: Hero
status: experimental
description: Hero component based on Figma design
group: Figma

variants:
  default:
    title: Default

props:
  type: object
  properties:
    title:
      type: string
      title: Title
    subtitle:
      type: string
      title: Subtitle
    image_url:
      type: string
      title: Background image
    button1_text:
      type: string
      title: Primary button text
    button1_url:
      type: string
      title: Primary button link
    button2_text:
      type: string
      title: Secondary button text
    button2_url:
      type: string
      title: Secondary button link
```

#### hero.twig

```twig
<section class="hero" style="background-image: url('{{ image_url }}')">
  <div class="hero-content">
    {% if title %}
      <h1>{{ title }}</h1>
    {% endif %}
    {% if subtitle %}
      <p>{{ subtitle }}</p>
    {% endif %}
    <div class="hero-buttons">
      {% if button1_text and button1_url %}
        <a href="{{ button1_url }}" class="btn btn-primary">{{ button1_text }}</a>
      {% endif %}
      {% if button2_text and button2_url %}
        <a href="{{ button2_url }}" class="btn btn-secondary">{{ button2_text }}</a>
      {% endif %}
    </div>
  </div>
</section>
```

#### hero.css

```css
.hero {
  background-size: cover;
  background-position: center;
  padding: 80px 40px;
  text-align: center;
}

.hero h1 {
  font-size: 3rem;
  margin-bottom: 20px;
}

.hero-buttons {
  display: flex;
  gap: 16px;
  justify-content: center;
}

.btn-primary {
  background: #007bff;
  color: #fff;
  padding: 12px 24px;
  border-radius: 6px;
  text-decoration: none;
}

.btn-secondary {
  background: #fff;
  color: #000;
  border: 1px solid #ccc;
  padding: 12px 24px;
  border-radius: 6px;
  text-decoration: none;
}
```

**With one prompt, you have a fully working component.** 🚀

## Step 11: Testing in Drupal

Okay, we now have a component folder with three files (`.yml`, `.twig`, `.css`). Time to make this visible in Drupal.

### Clearing cache with Drush

In your terminal:

```bash
ddev drush cr
```

#### What this does:

- **"cr"** = cache rebuild
- Drupal stores a lot in cache to load faster. New components only appear after you clear the cache

::: tip Cache Management
You'll do this often during development. So remember: **"If I don't see something, first run drush cr."**
:::

### Finding your component

1. Go to your Drupal site in the browser
2. Hover over **Appearance** in the top bar
3. Click **UI Patterns → Components**

Here you now see a list of all available components. If everything went well, your Hero component is listed there.

::: warning Styling
It will still look bare — probably without the Figma styling. That's normal. The CSS is there, but you still need to properly link and use it in a page layout.
:::

### Debugging

| Problem | Solution |
|---------|----------|
| **Don't see the Hero?** | Check if your folder name is correct. Must be `components/hero/` |
| **Error about Twig?** | Maybe a typo in your `.twig` file (check syntax) |
| **Empty fields?** | Possibly your properties are named differently in YAML and Twig. Make sure they match 1-to-1 |

### Why this is important

At this point, the circle is almost complete:

- ✅ You have a design in Figma
- ✅ You have YAML + Twig + CSS automatically generated
- ✅ You see the component appear in Drupal

**This is something companies normally spend days working on. You have it running in less than an hour.** 🤯

### Preview to next steps

Now it gets really interesting: we're going to not only see components, but also link them to Drupal Content Types and the Layout Builder. This allows content editors (people without technical knowledge) to choose which text, buttons, and images go in your component — without ever seeing code.

## Part 4 – Linking Content Types and using Layout Builder

So far we have a working Hero component in Drupal: YAML + Twig + CSS, nicely generated via Copilot, and visible in the UI Patterns Library. That's already a milestone, but in practice you naturally want more: you want editors without technical knowledge to be able to adjust the text, buttons, and images of that component themselves via the CMS.

That's where Content Types and the Layout Builder in Drupal come into play. These two systems ensure that your components are not only "beautiful" but also functional and editable.

### Content Types in Drupal – what and why?

A Content Type is the building block of Drupal. Think of it as a template for a certain type of content.

**Examples:**
- A "Blogpost" usually has fields like title, body, author, date
- A "Product" might have name, price, image, description
- A "Hero" (in our case) has title, subtitle, button text, button link, background image

**By creating a Content Type, you can give editors the right fields so they can enter content without touching HTML or CSS. Drupal then automatically fills your component with those fields.**

## Step 12.1: Creating a Content Type

1. Log into your Drupal site
2. Hover over **Structure** in the admin bar at the top
3. Click **Content types**
4. Click **Add content type**

You now come to a page where you can define a new content type.

- **Name**: give the name of your component, e.g., "Hero"
- **Description**: something like "A hero component with title, subtitle, image, and buttons, linked to UI Patterns"
- Click **Save and manage fields**

## Step 12.2: Adding fields

Now you see a "Manage fields" screen. This is where you define the fields needed for your component. Think back to your YAML structure (which Copilot generated). There we had:

- `title`
- `subtitle`
- `image_url`
- `button1_text`
- `button1_url`
- `button2_text`
- `button2_url`

**For each of these, you create a field.**

**Example:**
1. Click **Add field** → choose **Text (plain)** → name this "Title"
2. Add another field: **Text (plain)** → name this "Subtitle"
3. Add a field: **Image** → name this "Background image"
4. Add two fields: **Text (plain)** for `button1_text` and `button2_text`
5. Add two fields: **Link** for `button1_url` and `button2_url`

After each field, click **Save and continue** and set the maximum length if necessary.

::: tip Why this is important
By adding fields, you create a bridge between editing and component.

- **The editor** sees just fields to fill in text and images
- **The developer** (you) knows that those fields automatically go to the right Twig property

This means: no more copy-paste from content to code. Everything runs through the CMS interface.
:::

## Step 12.3: Adding content and testing

1. Go to the top bar and click **Content → Add content → Hero**
2. You now get a form with all the fields you just created. Fill in for example:
   - **Title**: "Welcome to my site"
   - **Subtitle**: "AI and design work together here"
   - **Background image**: upload an image from Unsplash
   - **Button1_text**: "Get Started"
   - **Button1_url**: `/start`
   - **Button2_text**: "Learn More"
   - **Button2_url**: `/docs`
3. Click **Save**

You now have a piece of content that contains all the data for your Hero component. But how do you link that to your YAML/Twig/CSS files? We do that with the Layout Builder.

### Layout Builder – the visual glue

The Layout Builder is one of the most powerful features of Drupal. It allows you to visually build pages with sections, columns, and blocks — similar to tools like Elementor (WordPress) or Webflow.

But the difference is: **Layout Builder works deeply integrated with Drupal's entity and field system. This allows you to link UI Patterns components to Content Types.**

## Step 12.4: Activating Layout Builder for Hero

1. Go to **Structure → Content types → Hero**
2. Click **Manage display**
3. At the bottom you see a **Layout options** section. Check **Use Layout Builder**
4. Click **Save**

Now Layout Builder is enabled for the Hero Content Type.

## Step 12.5: Adjusting layout

1. Click **Manage layout** on the same page
2. You now come to the Layout Builder interface:
   - You see one or more default sections
   - Within those sections you see the fields you just created (title, subtitle, buttons, image)

**But that's not how we want it: we want to link those fields to our Hero component that Copilot created.**

## Step 12.6: Linking fields to UI Patterns

1. Click **Add section** in the top right. Choose for example a **1 column layout**
2. Give the section a name: "Hero"
3. Click **Add block** in that section
4. Scroll all the way down in the list of blocks. There you see a **UI Patterns** section
5. Choose your **Hero component**

Now a configuration window opens for your component. You see all the props that Copilot put in your YAML (`title`, `subtitle`, `image_url`, `button1_text`, `button1_url`, `button2_text`, `button2_url`).

### The magical step: Linking Source

For each prop, you choose a **source**. This means: which Drupal field should be linked to this?

**Example:**
- `title` → Source: `[entity]` → Field: **Title** → `[field item]` → **Text value**
- `subtitle` → Source: `[entity]` → Field: **Subtitle** → `[field item]` → **Text value**
- `image_url` → Source: `[entity]` → Field: **Background image** → `[field item]` → **File URL**
- `button1_text` → Source: `[entity]` → Field: **Button 1 text** → `[field item]` → **Text value**
- `button1_url` → Source: `[entity]` → Field: **Button 1 link** → `[field item]` → **URL**
- `button2_text` → Source: `[entity]` → Field: **Button 2 text** → `[field item]` → **Text value**
- `button2_url` → Source: `[entity]` → Field: **Button 2 link** → `[field item]` → **URL**

6. Click **Save layout**

### What happens now?

Drupal knows:
- **The data** comes from a Content Type (entered by an editor)
- **That data** is forwarded to the properties of your Hero component
- **Rendering the component** happens via your Twig + CSS

**Result: the Hero you designed in Figma now appears in Drupal — but completely filled with content that comes from the CMS fields.**

### Why this is a game changer

Normally, as a developer, you would have to write hardcoded HTML every time the content changes. That takes time, and editors can't adjust anything themselves.

**Now it works like this:**
1. **Designer** creates a Figma component
2. **Developer** links it once via YAML + Copilot
3. **Editor** fills in the fields in Drupal
4. **Everyone** does what they're good at. And Drupal + Copilot do the boring work.

## Best practices

### Naming conventions
- Keep your YAML names (e.g., `button1_text`) simple and clear
- Use underscores, no spaces
- Ensure consistency between YAML and Drupal field names

### Documentation
- Document your mapping: note somewhere which Drupal fields belong to which props
- This helps new team members and yourself later

### Version control
- Commit each component separately in Git
- Use clear commit messages like `feat(hero): add YAML, twig, css`

### Reusability
- Think ahead. Maybe you'll have a "Card" or "Feature List" later
- Use the same structure so Copilot learns faster

## Acknowledgments

During my internship at Calibrate, I had the opportunity to experiment with new technologies and workflows within Drupal. The idea of linking Figma with Drupal via MCP and Copilot was first discovered there. Thanks to the freedom and guidance during my internship, I was able to further develop and apply this concept in a realistic project.

A special thanks to my internship supervisors and the entire Calibrate team for their support and the space to learn. Without that experience, I would never have been able to make this experiment and this tutorial so concrete.

