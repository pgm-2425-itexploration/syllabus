---
title: 'Statamic'
synopsis: 'In this tutorial, I’ll rebuild my personal portfolio using Statamic. We’ll cover setup, content management, and adding flexibility.'
date: 2024-10-10
author:
  name: 'Bénoît Biraguma'
  avatarUrl: '/assets/avatars/benoit-biraguma.png'
  socials: # Add social media links -> If you don't have any, place an empty string ''
    website: 'https://benoitbiraguma.be/'
    linkedin: 'https://www.linkedin.com/in/beno%C3%AEt-biraguma-48422a194/'
    github: 'https://github.com/pgm-benobira'
thumbnailUrl: '/assets/tutorials/statamic.png'
head:
  - - meta
    - name: description
      content: 'Learn how to transform a static site into a dynamic portfolio using Statamic CMS. This tutorial walks you through setting up Statamic, managing content, and adding flexibility, perfect for developers transitioning from static-site generators to CMS-driven websites.' # Add a description of the article
  - - meta
    - name: keywords
      content: 'front-end development, CMS, static site to dynamic site, Statamic, Laravel, content management, portfolio website, flat-file CMS, web development' # Add keywords related to the article
---

# Rebuilding My Portfolio with Statamic

In this tutorial, I’ll walk you through how to a portfolio using Statamic CMS. We’ll cover the setup process, key features, and best practices. (🚧 first draft)

## Table of Contents
- [Introduction](#introduction)
- [Installation](#installation)
- [Step by Step Tutorial](#step-by-step-tutorial)
- [Future Versions and Updates](#future-versions-and-updates)

## Introduction

Statamic is a powerful flat-file CMS built on Laravel, designed to offer developers flexibility and ease of use without the complexity of traditional database-driven CMS platforms. Unlike many CMSs, Statamic stores content in flat files, which makes it lightweight, fast, and version-control friendly. This approach allows you to edit content directly in files or through a sleek control panel interface, making it ideal for both developers and content managers.

Statamic’s main features include:
- **Collections and Entries**: These allow you to organize and manage content flexibly, enabling you to create anything from blogs and portfolios to full-fledged websites.
- **Blueprints and Fields**: Blueprint templates and customizable fields make it easy to define and structure different types of content, allowing for tailored and specific data input.
- **Antlers Template Engine**: Statamic’s unique Antlers template language provides straightforward syntax and powerful templating features for dynamic content rendering, reducing the need for complex logic within templates.
- **Control Panel**: The user-friendly control panel lets you manage content, upload assets, and set up custom fields without touching code, but developers can also dive into code for full customization.
- **Flexible Taxonomy**: Organize your content with tags, categories, and other taxonomies for greater structure and discoverability.

For creating a dynamic, CMS-powered portfolio, Statamic stands out because it combines the best of both static and CMS worlds. It enables you to build a visually rich portfolio site with minimal setup, giving you all the tools to manage, update, and expand your portfolio as your projects grow—all while keeping things fast and secure. Whether you’re used to static site generators or looking for more CMS capabilities, Statamic offers the versatility to bridge that gap seamlessly.

## Installation
To get started, you'll need to install Statamic and its assets. Here's how:

1. **Set up your local environment (using Composer):**
   Make sure you have Composer installed. Navigate to your project directory and run:
   ```bash
   composer create-project statamic/statamic portfolio-benoit-biraguma
   ```

2. **Run the local server (using PHP):**
   After installation, you can run a local server with PHP. Use the following command:
   ```bash
   php please serve
   ```

3. **Don’t forget to use npm to install dependencies for the Vite dev server:**
   To ensure that all necessary JavaScript packages are installed, run:
   ```bash
   npm install
   ```

4. **Run the Vite server:**
   To start the Vite development server, execute:
   ```bash
   npm run dev
   ```

5. **Using Laravel Herd (Optional):**
   You can use Laravel Herd, which combines Composer, PHP, and NPM in one easy-to-use tool. This is particularly beneficial for managing dependencies and running your local server seamlessly.
   
   [🚧 Here’s a picture of Laravel Herd]

6. **Explore the folder structure:**
   Familiarize yourself with the folder structure. Key folders include `content`, `resources`, and `config`. Each serves a specific purpose in managing your website's content and configurations.

7. **Edit the `site.css` in the `resources/css`:**
  Prepare your styling for the portfolio, you can download the `site.css` file [here](https://eu-central-1-shared-euc1-02.graphassets.com/cm08fb0cq0rt707uve8jz391a/cm2ymd4yx7yea07unni9g7zhw).

8. **Download the fonts:**
   To change the default font to match your portfolio, download your preferred fonts and place them in the `resources` folder. You can find your fonts [here](https://eu-central-1-shared-euc1-02.graphassets.com/cm08fb0cq0rt707uve8jz391a/cm2ymiynl8hkv07uw690npemw).

Please note that we are going to keep it simple and use old-school HTML and plain CSS. While Tailwind CSS would be the better choice, to save time, I will utilize the CSS already made from my real portfolio.

## Step by Step Tutorial

### STEP 1: Signing Into the Control Panel

To access the Statamic control panel, you need to create a super user account. This is crucial because only a super user can log in to the control panel.

1. **Create a Super User:**

   Run the following command to create a super user. Make sure to designate the user as a super user to gain access:
   ```bash
   php please make:user
   ```
   [🚧 Insert screenshot of terminal showing the command execution]

2. **Access the Control Panel:**

   Once the super user is created, you can log into the Statamic control panel. The control panel offers a user-friendly interface that allows you to manage your content easily. Here are some of the key features you can access:
   - **Content Management:** Easily add, edit, and delete content like pages, collections, and entries.
   - **Asset Management:** Upload and organize your media files, such as images and documents.
   - **User Management:** Manage user roles and permissions for team members who might need access to the control panel.
   - **Settings Configuration:** Adjust various site settings, including site metadata and routing.

   While the control panel is more user-friendly than working directly in code editors like Visual Studio Code, both options are available, allowing flexibility depending on your workflow.

   [🚧 Insert screenshot of the authentication page for the control panel]


### STEP 2: Make a Home Page

In my portfolio, you'll notice several pages: Home, About, Web Dev Projects, and Design Projects. For clarity in this tutorial, we will only rebuild part of the Home page, the full Web Dev Projects page, and a detail page for a project.

1. **Check the Pages Collection:**
   Navigate to the collections in your Statamic control panel. You'll see a **Pages** collection with a **Home** entry ready for use. Here are a few options available for this entry:
   - **Title:** The name of the page, which appears in the browser tab and as a heading on the page.
   - **Content:** The main body text for the page, where you can add detailed information.
   - **Author:** The person responsible for the content, useful for multi-author setups.
   - **Template:** The template file associated with this entry, determining how the content is displayed.

    [🚧 Insert screenshot of the Home entry]

   This is a good start, but it’s not quite what we want for our portfolio.

2. **Create a New Entry:**
   If we were to create an entry right now, we would only have the standard options available. However, we need more flexibility for our page. Let's head to **Blueprints** under **Fields** and select the **Page Blueprint**.

    [🚧 Insert screenshot of where to find the blueprint]

   Here, you have the option to add some fields. For the hero section on [benoitbiraguma.be](https://benoitbiraguma.be), we need the following fields:
   - **Hero Title (Text):** The title for the hero section.
   - **Hero Image (Asset):** The image for the hero section.
   - **Hero SVG (Asset):** The floating SVG icon for the hero section.
   
    [🚧 Insert screenshot of the page collection blueprint]

   We don’t actually need the content field anymore, so let's delete it to keep the blueprint clean.

3. **Edit the Home Page:**
   Now, let's edit the Home page. Type the same title as on my portfolio, add the hero image, and include the floating icon.

    [🚧 Insert screenshot of the Home entry]

   After you've added these, click **Save & Publish**. Note that the entry is using the **home** template (visible in the template field). Now that we have some content, let's reveal it in the browser.

4. **Update the Home Template:**
   In your code editor, open the file `resources/views/home.antlers.html`. This is the home template. The "name" of a template corresponds to the filename up until the file extension. Any view ending in `.antlers.html` will be parsed with Statamic's Antlers template parser. This parser allows you to include dynamic content within your templates using special tags.

   Delete all the placeholder HTML from the template and replace it with the following markup:
   ```html
   <!-- [🚧 Insert code snippet] -->
   ```

5. **View Your Changes:**
   Refresh the site in your browser, and you should see your content displayed beautifully. Each of those double curly tags  represents a variable. When you navigate to a URL that matches an entry's route rule, all of that entry's field data is automatically available in the defined template.
  
    [🚧 Insert screenshot of the results]


### STEP 3: Customize the Layout

You probably noticed that there is some styling going on. That's coming from the layout. Your layout file contains any markup you want to be present no matter what page you’re on. It's usually the best place to put your `<head>` meta markup, persistent site navigation, site footer, and other global elements (similar to the `base.njk` file in 11ty, remember?). Let's customize it.

1. **Update the Layout File:**

   Open `resources/views/layout.antlers.html` in your code editor and replace its content with the following:
   ```html
   <!-- [🚧 Insert code snippet here] -->
   ```

2. **Portfolio To-Do List:**

   Now, it’s time to really build the portfolio. Here’s our to-do list:
   1. Create a **Projects** collection with the following fields:
      - **Title**
      - **Summary**
      - **Content**
      - **Live** (URL to the live project)
      - **Repo** (GitHub repository link)
      - **Recording** (Link to any video or media showcasing the project)
      - **Thumbnail** (Image representing the project)
   2. Create a **Projects Index Page** (located at `/projects`).
   3. Create a **Project Detail Page** (located at `/projects/rfc-doggen`).

3. **Create a New Collection:**

   Go back to the Control Panel and click on the **Collections** link in the sidebar. Then, click the blue **Create Collection** button and name your new collection **Projects**.
    
    [🚧 Insert screenshot of creating a new collection]

### STEP 4: Scaffold Your Views

To save some time, we’ll use Statamic’s built-in tool to generate the index and show templates for our projects.

1. **Scaffold the Views:**
   Head to the **Scaffold Views** option in the control panel.
   
   [🚧 Insert screenshot of Scaffold Views]

2. **Generate the Views:**
   Click the **Create Views** button. The default options are perfect, so no further configuration is needed.

   After this step, two new files will be created in your project:
   - `resources/views/projects/index.antlers.html` - This will be the template for the projects index page.
   - `resources/views/projects/show.antlers.html` - This will serve as the template for individual project detail pages.

   We’ll be editing these files shortly to display the content of our projects.

### STEP 5: Configure the Collection

To set up our collection correctly, let’s go through some essential settings.

1. **Access the Collection Settings:**
   Start by navigating to the settings for your **Projects** collection.
   
   [🚧 Insert screenshot of where to click]

2. **Key Settings to Update:**
   We’ll review some important settings, but we only need to adjust three to configure our portfolio correctly:
   - **Enable Publish Dates:** The default sub-settings are fine.
   - **Enable Ordering:** The default sub-settings are fine.
   - **Set Your Route Rule** for URL patterns.

3. **Explanation of Key Settings:**
   Here's a summary from the Statamic documentation to clarify each setting:

   - **Publish Dates:** By enabling Publish Dates, Statamic adds a date field to the entry's available fields (called a Blueprint). This date determines whether an entry should be visible. For example, a blog post with a future date would be considered scheduled and unpublished, while a past date would mean it’s published and visible. This is useful if you plan to release projects or posts on specific dates.

   - **Ordering:** This setting allows you to control the order in which entries are displayed, such as arranging projects by creation date or custom order.

   - **Routing & URLs:** In the Routing & URLs section, you’ll find the Route setting. Here, you can define the URL pattern for your entries. You can use any fields from the collection as variables in the pattern by surrounding them in single braces, e.g., `{title}`.

4. **Finalizing Settings:**
   When in doubt, keep it simple. Don’t change any settings you’re unsure about. Once you’ve made the necessary adjustments, click **Save** to apply the changes.

### STEP 6: Creating Your First Entry

To set up our projects with the right fields, let’s add additional fields to the blueprint for our Projects collection.

1. **Default Entry Fields:**
   If we created an entry right now, we’d only see options for **Title**, **Content**, **Author**, and **Template**. While these are useful, they aren’t enough for showcasing our projects.

2. **Customize the Project Blueprint:**
   Let’s go to the **Blueprints** section under **Fields** and select the **Project Blueprint**.

   Just like we did for the Page Blueprint earlier, here we can add custom fields for our projects.

3. **Add Project-Specific Fields:**
   Add the following fields to the Project Blueprint:
   - **Summary (Text Area):** For a brief summary of the project.
   - **Live Link (Link Type):** A link to the live version of the project.
   - **Repo Link (Link Type):** A link to the project’s repository.
   - **Recording Link (Link Type):** A link to any recording of the project in action.
   - **Thumbnail (Asset):** An image thumbnail for the project.
   
   [🚧 Insert screenshot of all the fields]

4. **Create Your First Entry:**
   Go back to your **Projects Collection** screen and click **Create Entry** to start adding your project content.

   [🚧 Insert screenshot of data for the first project]

5. **Add Additional Entries:**
   Let’s create a few more projects to showcase in the portfolio:

   [🚧 Insert screenshot of data for the second project]
   
   [🚧 Insert screenshot of data for the third project]


### STEP 7: Make the Project Page

Now that we’ve created entries for our projects, the question is, where will we display them? Let’s make an overview page for the projects, similar to the one at [https://benoitbiraguma.be/web-development-projects](https://benoitbiraguma.be/web-development-projects).

1. **Create a Projects Page in the Page Collection:**
   - Go to your **Pages Collection** and create a new page named **Projects**.
   - For the **Hero Icon**, add the GIF you’d like to use.
   - Set the **Title** and **Hero Title** fields for the page.
   - Select the **projects/index** template.
   - Ensure the **slug** for the page is set to **projects**.

2. **Test the Projects Page:**
   Now, when you click on the Dev Projects button on the Home page, you won’t get a 404 error. Instead, you’ll see a dark blank page, meaning the URL exists.

3. **Edit the Index Template:**
   Open `resources/views/projects/index.antlers.html` in your code editor. Remove any existing code and replace it with the following markup to set up the hero section:

   ```html
   <!-- [🚧 Insert code snippet with hero_title and hero_icon here] -->
   ```

4. **View the Projects Overview Page:**
   You should now have a page with a nicely designed title and a looping GIF on the side.

   [🚧 Insert screenshot of the page with the title and looping GIF]


### STEP 8: Get All the Projects on The "Index" Page

Now that we’re setting up our Projects page, we’ll add markup to the `index.antlers.html` template to display each project entry.

1. **Add Project Collection Markup:**
   In `resources/views/projects/index.antlers.html`, add the following markup (don’t worry, I’ll explain what’s happening in a moment):

   ```html
   <!-- [🚧 Insert code snippet that adds the projects collection here] -->
   ```

2. **Understanding the Collection Tag:**
   Here, you can see that we’re telling the **Collection Tag** to use the **Projects** collection. Inside this tag pair is a loop that iterates over each entry, giving us access to all the data available through `variables`.

   - **URL Pattern:** The URL will follow the pattern you set in the route rule, such as `/projects/rfc-doggen`. If you click this link, you’ll be taken to a new page that uses the `resources/views/projects/show.antlers.html` template.

3. **Next Step:**
   Since `show.antlers.html` is currently empty, there’s not much to see. Let’s edit that template next to create the detail view for each project.


### STEP 9: The Projects "Show" Page

Now that we’re on an entry's unique URL, we no longer need the `collection:projects` tag pair to fetch data. All of the entry's data is available automatically.

1. **Add Detail Page Markup:**
   Here’s a snippet you can drop into `show.antlers.html` to display the project's data:

   ```html
   <!-- [🚧 Insert code snippet for the detail page here] -->
   ```

2. **Note on Content Fields:**
   - The **Content** field is automatically converted from Markdown to HTML because we’re using a Markdown field.
   - If you were to use a generic **Textarea** field, you’d need to transform the Markdown manually by using a modifier. For example:
     ```html
     {{ textarea | markdown }}
     ```

   This will parse the Markdown content correctly for display.


### STEP 10: What Now?

Voilà! You’ve just built my portfolio website. It’s not perfect, and there are definitely things you can upgrade if you have the time or want to explore Statamic further. Here are a couple of ideas to enhance your project (or take on a challenge by building the design side of my portfolio—are you up for it?):

1. **Partials:** Just like in 11ty, you can create partials for reusable template chunks in Statamic. Try making one for the header and the footer. The convention is to prefix the template with an underscore to indicate that it’s a reusable partial and not a full layout.

2. **The Nav Tag:** The nav tags are designed to help users navigate through your hierarchy of navigations and collections. The nav tag works similarly to the collections tag. It loops through the entries and gives you access to all the data inside each. For more details, check out the Statamic documentation.

---

For more learning, Statamic offers a screencast series covering the basics and much more advanced topics. Feel free to check that out [here](https://www.youtube.com/playlist?list=PLVZTm2PNrzMwYLGotkQvTvjsXAkANJIkc). Good luck!

## Future Versions and Updates
(🚧 coming soon)
An overview of Statamic’s roadmap, highlighting upcoming features and improvements relevant to portfolio functionality.