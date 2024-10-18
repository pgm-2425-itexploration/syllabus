---
title: 'Astro: The New Player on the Block'
synopsis: 'Astro is a fast web framework for content-driven websites, that is especially build for content-rich sites where performance matters most.'
date: 2024-10-02
author:
  name: 'Mees Akveld'
  avatarUrl: '/assets/avatars/mees-akveld.png'
  socials:
    website: 'https://www.meesakveld.be/'
    linkedin: 'https://www.linkedin.com/in/meesakveld/'
    github: 'https://www.github.com/meesakveld/'
thumbnailUrl: '/assets/1728555601054.jpg'
head:
  - - meta
    - name: description
      content: 'Hi 👋 and welcome to Fronteers BE. We are a community for people with an interest in front-end development and we host casual meetups in Ghent. Occiasionally also in Antwerp and Kortrijk.'
  - - meta
    - name: keywords
      content: 'front-end'
---

# Astro: The New Player on the Block

In the ever-changing technical world of developers, there is a constant search for newer, faster, and more efficient ways to build websites. One newcomer that is gaining more and more attention is AstroJS. A fast web framework for content-driven websites, that is especially build for content-rich sites where performance matters most.

In this article, I will dive deeper into what Astro is, what sets it apart from other frameworks, how to set it up, and share my experience of using AstroJS in a proof of concept.


## What is AstroJS?

Astro is a **static site generator (SSG)** but with a twist. Astro renders as much as possible on the server and only sends JavaScript if needed. This means that the pages that are send to the client mostly only consists pure HTML, which makes the loading time very fast.

Astro is a fully featured framework with everything you need to build a modern website.

1. ### Content Collections
   AstroJS comes with built-in support for content collections, making it very easy to work with organized groups of content. This feature is especially useful for generating lists of blog posts or similar content types quickly and efficiently, with minimal coding effort. 

    In practice this looks like this:

    ```
    src/content/
    ├── /blogs          // The blog collection
    │    ├── week-1.md  // A collection entry
    │    ├── week-2.md  // A collection entry 
    │    └── week-3.md  // A collection entry
    ```

    If you folders are set, you can now start querying your content using their build in content APIs.

    AstroJS provides two functions to query data collections. One to query all the articles of a collection `getCollection()` and the other to query one item that is equal to the given name `getEntry()`.

    ```js
      import { getCollection, getEntry } from 'astro:content';

      // —— Get all entries from a collection. ——
      // Requires the name of the collection as an argument.
      // Example: retrieve `src/content/blogs/**`
      const allBlogPosts = await getCollection('blogs');

      // —— Get a single entry from a collection. ——
      // Requires the name of the collection and either
      // the entry `slug` (content collections) or `id` (data collections)
      // Example: retrieve `src/content/blogs/week-1.json`
      const graceHopperProfile = await getEntry('blogs', 'week-1');
    ```

<br>

2. ### Components
   Astro components are like the Lego® blocks of a Astro project. Astro components are like components in other frameworks like React of NextJS. They consist of a small or larger piece of HTML that can — if wanted — be mofified with params. In Astro these params are called *props*. Astro components are recognizable by the file extension `.astro`.

    If you've ever written in Markdown before, you probably are already be familiar with the concept of frontmatter. In AstroJS they started with a similar concept but uses the lines between the `---` to write JavaScript to write any code that you need to render your template.

    ::: code-group
    ```astro [src/components/some-component.astro]
    ---
    import SomeAstroComponent from '../components/SomeAstroComponent.astro';
    import SomeReactComponent from '../components/SomeReactComponent.jsx';
    import someData from '../data/blogs.json';

    // Access passed-in component props, like `<X title="Hello, World" />`
    const { title } = Astro.props;
    // Fetch external data, even from a private API or database
    const data = await fetch('SOME_SECRET_API_URL/users').then(r => r.json());

    const name = 'Astro';
    ---

    <!-- Your template here! -->
    <div id="content-wrapper">

      <h1>Hello, world!</h1>

      <!-- Use props and other variables from the component script: -->
      <p>{title}</p>

      <!-- Usage of consts -->
      <h1>{name}</h1>

      <!-- Children -->
      <div>
        <slot name="after-header" />  <!--  children with the `slot="after-header"` attribute will go here -->

        <slot />  <!--  children without a `slot`, or with `slot="default"` attribute will go here -->

        <slot name="after-footer" /> <!--  children with the `slot="after-footer"` attribute will go here -->
      </div>

      <!-- Children with fallback content -->
      <slot>
        <p>This is my fallback content, if there is no child passed into slot</p>
      </slot>

    </div>
    ```
    :::

    As demonstrated in the example above, Astro components offer a range of flexible features:

    1. **Plain HTML**: Simple HTML markup can be used directly in your component.
    2. **HTML with props**: You can dynamically insert data using props passed into the component, allowing customization and reusability.
    3. **Children and named slots**: Use slots to insert content into specific parts of the component. Named slots give you more control over where each piece of content appears.
    4. **Fallback content for slots**: If no child content is provided for a slot, you can define fallback content to be displayed by default.

<br>

3. ### Middleware
   Just like in other frameworks, in AstroJS middleware allows you to intercept requests and responses and modify or add data. 

   Middleware also allows you to set and share request-specific information across endpoints and pages by mutating a `locals` object that is available in all Astro components and API endpoints. 

   #### Usage
   ::: code-group
   ```js [src/middleware.js]
    export function onRequest (context, next) {
      // intercept data from a request
      // optionally, modify the properties in `locals`
      context.locals.user.name = "John Wick";
      context.locals.welcomeTitle = () => {
          return "Welcome back " + locals.user.name;
      };

      // return a Response or the result of calling `next()`
      return next();
    };

   ```
   :::

   Then you can use this information inside any .astro file with Astro.locals.

   ::: code-group
   ```astro [src/pages/orders.astro]
    ---
    const title = Astro.locals.welcomeTitle();
    const orders = Array.from(Astro.locals.orders.entries());
    ---
    <h1>{title}</h1>
    <p>This {data.property} is from middleware.</p>
    <ul>
        {orders.map(order => {
            return <li>{/* do something with each order */}</li>;
        })}
    </ul>
   ```
   :::

   In case that you want to chain multiple middlewares, in AstroJS this is possible with `sequence()`.

   ::: code-group
   ```js [src/middleware.js]
    import { sequence } from "astro:middleware";

    async function validation(_, next) {
        console.log("validation request");
        const response = await next();
        console.log("validation response");
        return response;
    }

    async function auth(_, next) {
        console.log("auth request");
        const response = await next();
        console.log("auth response");
        return response;
    }

    async function greeting(_, next) {
        console.log("greeting request");
        const response = await next();
        console.log("greeting response");
        return response;
    }

    export const onRequest = sequence(validation, auth, greeting);
   ```
   :::

<br>

4. ### Actions

   Data actions are a way to interact with data in AstroJS. Interactions like fetching data from an external source, like an API, and then use that data in your AstroJS application.

   #### Getting started

   Actions are defined in the `src/actions` directory. Each file in this directory is an action that can be called from any AstroJS component.

   ::: code-group
   ```js [src/actions/getData.js]
    export async function getData() {
      const response = await fetch('https://api.example.com/data');
      return response.json();
    }
   ```

   ```astro [src/pages/index.astro]
    ---
    import { getData } from 'astro:actions';
    const data = await getData();
    ---
    <h1>{data.title}</h1>
    <p>{data.description}</p>
   ```
   :::   

    In the example above, the `getData` action fetches data from an external API and returns it as a JSON object. This data is then used in the `index.astro` component to display the title and description.

    Actions are a powerful way to interact with data in AstroJS, and they can be used to fetch data from APIs, databases, or other sources.
    
    Actions can also be used for buttons, forms, and other interactive elements in your AstroJS application.

    In the example below, `getGreeting` action is called when the button is clicked, and the result is shown in a alert.

    ::: code-group
    ```ts [src/actions/index.ts]
    import { defineAction } from 'astro:actions';
    import { z } from 'astro:schema';

    export const server = {
      getGreeting: defineAction({
        input: z.object({
          name: z.string(),
        }),
        handler: async (input) => {
          return `Hello, ${input.name}!`
        }
      })
    };
    ```

    ```astro [src/pages/index.astro]
    ---
    ---

    <button>Get greeting</button>

    <script>
    import { actions } from 'astro:actions';

    const button = document.querySelector('button');
    button?.addEventListener('click', async () => {
      // Show alert pop-up with greeting from action
      const { data, error } = await actions.getGreeting({ name: "Houston" });
      if (!error) alert(data);
    })
    </script>
    ```
    :::

    <br>

    #### Organizing actions

    All actions are stored in the `src/actions` directory. Each file in this directory is an action that can be called from any AstroJS component.

    As a developer you can also organize your actions in subdirectories to keep your codebase clean and organized.

    For example you can create a `src/actions/user.ts` directory to store all actions related to user.

    ::: code-group
    ```ts [src/actions/user.ts]
    import { defineAction } from 'astro:actions';

    export const user = {
      getUser: defineAction(/* ... */),
      createUser: defineAction(/* ... */),
    }
    ```
    :::

    Then, you can import the actions from the `user.ts` file in your AstroJS `src/actions/index.ts` file.

    ::: code-group
    ```ts [src/actions/index.ts]
    import { user } from './user';

    export const server = {
      user,
    };
    ```
    :::

    Now the `getUser` and `createUser` actions are available in your AstroJS application, and are callable from the `actions.user` object.

    - `actions.user.getUser()`
    - `actions.user.createUser()`


<br>

5. ### Environment Variables
   Astro uses Vite's built-in support for environment variables what means that the environment variables are statically replaced at build time. 

   In AstroJS it's important to know that *all* environment variables are available in server-side code. And only the environment variables prefixed with `PUBLIC_` are available in client-side code. 
   
   ::: code-group
   ```[.env]
   SECRET_PASSWORD=password123
   PUBLIC_ANYBODY=there
   ```
   :::

   In this example, `PUBLIC_ANYBODY` (accessible via `import.meta.env.PUBLIC_ANYBODY`) will be available in server or client code, while `SECRET_PASSWORD` (accessible via `import.meta.env.SECRET_PASSWORD`) will be server-side only.

   <br>

   #### Default environment variables

   In AstroJS there are a few environment variables build-in.

   - `import.meta.env.MODE`: The mode your AstroJS application is running is.

      Example: `development` or `production`

   - `import.meta.env.PROD`: Is `true` when the AstroJS application is running in *production*. `false` if not.
   - `import.meta.env.DEV`: Is `true` when the AstroJS application is running in *development*. `false` if not. 
   - `import.meta.env.BASE_URL`: The base url of your AstroJS application.
   
      Example: `/`

   - `import.meta.env.SITE`: The full URL of the website where your AstroJS application is hosted.
   
      Example: `https://www.example.com`
      
   - `import.meta.env.ASSETS_PREFIX`: The URL prefix used for loading static assets (e.g., images, scripts).
   
      Example: `/assets/` or `https://cdn.example.com/`
   
   <br>

   #### Usage
   Environment variables in AstroJS are accessed with `import.meta.env`.

   For example, use `import.meta.env.SECRET_PASSWORD` to get the `SECRET_PASSWORD` environment variable.

   ```js
    const secretPassword = import.meta.env.SECRET_PASSWORD;
    const isProd = import.meta.env.PROD;
    const isDev = import.meta.env.DEV;
   ```

   <br>

6. ### UI Integrations

   AstroJS makes it very easy to add additional functionalities and behaviors. 

   Frameworks like TailwindCSS, Partytown, React, Vue, Svelte, Solid and many more are supported out of the box. Also the integration of custom features is very easy, like a automatic site map generator or a RSS adapter.

   <br>

   #### Usage

   To add a new UI integration(s), you can add them by typing the following in the terminal:

   ::: code-group
   ```bash [npm]
   npx astro add react
   ```
   ```bash [pnpm]
   pnpm astro add react
   ```
   ```bash [yarn]
   yarn astro add react
   ```
   :::

   Also adding multiple UI integrations at once is possible.

   ::: code-group
   ```bash [npm]
   npx astro add react tailwind partytown
   ```
   ```bash [pnpm]
   pnpm astro add react tailwind partytown
   ```
   ```bash [yarn]
   yarn astro add react tailwind partytown
   ```
   :::

   If you want to remove a UI integration, you can do this by typing the following in the terminal:

    ::: code-group
    ```bash [npm]
    npm uninstall @astrojs/react
    ```
    ```bash [pnpm]
    pnpm remove @astrojs/react
    ```
    ```bash [yarn]
    yarn remove @astrojs/react
    ```
    :::

    In AstroJS it's also possible to toggle UI integrations on and off with specific parameters.

    ::: code-group
    ```js [astro.config.mjs]
    import { defineConfig } from 'astro/config';
    import sitemap from '@astrojs/sitemap';

    export default defineConfig({
      // ...
      integrations: [
        process.platform !== 'win32' && sitemap()
      ],
      // ...
    });
    ```
    :::


## Getting Started

Now that you know what AstroJS is and what it can do, let's get started with setting up AstroJS.

### Installation

Let's start by installing AstroJS. You can do this by running the following command in your terminal:

::: code-group
```bash [npm]
npm create astro@latest
```

```bash [pnpm]
pnpm create astro@latest
```

```bash [yarn]
yarn create astro
```
:::

Make sure you have Node.js installed on your machine. If you don't have Node.js installed, you can download it from the official website: [https://nodejs.org/](https://nodejs.org/)

After running the command, you will be prompted to enter a name for your new AstroJS project. You can choose any name you like.

In this example, I will use `my-astro-project` as the project name. You can replace `my-astro-project` with the name you want to use for your project.

The options i will choose are:
```bash
? Where should we create your new project?: my-astro-project
? How would you like to start your project?: Empty
? Do you plan to write TypeScript?: Yes
? How strict should TypeScript be?: Strict
? Install dependencies? (recommended): Yes
? Initialize a new git repository? (optional): No
```

After the installation is complete, you can navigate to the project directory by running the following command in your terminal:

```bash
cd my-astro-project
```

<br>

### Start the development server

After creating a new AstroJS project, you can start the development server by running the following command in your terminal:

::: code-group
```bash
npm run dev
```

```bash
pnpm dev
```

```bash
yarn dev
```
:::

After running the command, you will see a message in your terminal that the development server is running. You can now open your browser and navigate to `http://localhost:4321/` to see your AstroJS project in action.

If everything is set up correctly, you should see a welcome message in your browser that says "Astro".

Now you are ready to start building your AstroJS project!


## How is AstroJS different?

AstroJS is a modern web framework that is designed to be fast, efficient, and easy to use. It is built with performance in mind, and it is optimized for content-driven websites.

AstroJS is different from other frameworks in several ways:

1. **Performance**: AstroJS is designed to be fast and efficient. It uses server-side rendering to generate static HTML pages, which makes the loading time very fast.

2. **Content Collections**: AstroJS comes with built-in support for content collections, making it very easy to work with organized groups of content.

3. **Optional JavaScript**: AstroJS only sends JavaScript to the client if needed, which reduces the amount of code that needs to be loaded. AstroJS works on a component-by-component basis, which means that only the components that require JavaScript will ship with JavaScript, wich makes the loading time very fast.

4. **SEO friendly**: AstroJS is designed to be SEO friendly. It generates static HTML pages that are optimized for search engines. Because of the server-side rendering, the pages are fully rendered before they are sent to the client, which makes them easier to index by search engines. And with the optional JavaScript, its for search engines very easy to index the pages.


## Conclusion

AstroJS may be a new player on the block, but it’s already making a significant impact in the web development world. With its focus on fast, efficient, **Javascript Optional** and **SEO friendly** websites, AstroJS is a great choice for developers who are looking for a modern web framework that is easy to use and optimized for performance. 

With the flexibility of the use of **components**, **middleware**, **actions**, **environment variables** and **UI integrations**, AstroJS can compete with other frameworks like React, NextJS, Gatsby and Svelte. 

If you are looking for a modern framework that is **fast**, **efficient**, and easy to use, AstroJS is definitely worth checking out. 