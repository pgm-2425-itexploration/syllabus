---
title: 'Discovery of the Astro Framework'
synopsis: 'Hi 👋 and welcome to Fronteers BE.
We are a community for people with an interest in front-end development and we host casual meetups in Ghent. Occiasionally also in Antwerp and Kortrijk.'
date: 2024-10-02
author:
  name: 'Tristan De Ridder'
  avatarUrl: '/assets/avatars/john-doe.png'
  socials:
    website: ''
    linkedin: 'https://www.linkedin.com/in/tristan-de-ridder/'
    github: ''
thumbnailUrl: '/assets/1728555601054.jpg'
head:
  - - meta
    - name: description
      content: 'Hi 👋 and welcome to Fronteers BE.
We are a community for people with an interest in front-end development and we host casual meetups in Ghent. Occiasionally also in Antwerp and Kortrijk.'
  - - meta
    - name: keywords
      content: 'front-end'
---

# Discovery of the Astro Framework

## Introduction
Astro is a web framework designed for building content-driven websites. As of this writing, Astro 5.0 is in beta, and its popularity is growing rapidly. The framework focuses on creating content-oriented websites and is highly relevant in today’s web development landscape. This is largely due to its ability to generate static websites with speed and efficiency. These features make Astro a powerful choice for developers looking to build fast, lightweight, and high-performance websites.


## What is Astro?
Astro is a JavaScript web framework that focuses on creating content-centric websites quickly and efficiently. Astro uniquely supports server-side rendering, meaning components are rendered on the server instead of in the browser. As a result, lightweight HTML, without unnecessary JavaScript, is sent to the browser. This reduces the load on the server and significantly improves website performance. Additionally, client-side resources are minimized, ensuring faster load times and a better user experience.

Another key feature of Astro is its content-first approach. This means that the delivery of content, such as texts, images, and videos, is paramount. The framework optimizes the presentation of this content, allowing users to access important information faster without being slowed down by unnecessary scripts or heavy JavaScript files.

Astro also uses the so-called ‘island architecture’. This means that the application uses small, focused interactive parts of a web page, called ‘islands’. Instead of the whole page being loaded at once, these islands are loaded independently of each other, progressively enhancing the page. This ensures better performance and a smoother user experience.
Other unique features of Astro include the ability to run components without a JavaScript runtime on the client, the default setting where client-side JavaScript is minimized, and the option to combine multiple frameworks in a single project.
Thanks to these advantages, Astro's popularity is growing rapidly, especially in the United States, and it is also gaining popularity in Europe.

![Chart frameworks](/assets/posts/discovery-of-the-astro-framework_img-1.png)

## Setup
The fastest way to create a new Astro project is through a CLI command, namely 'create Astro'. This will walk you through the steps of setting up an Astro project and allow you to choose from a few different official starter templates.

Or you can begin your project using an existing theme or starter template though this way requires more time and is quite different. This is through manual setup and is not automated like the CLI command.

The steps are:
1. Create directory (npm init --yes)
2. Install Astro
2.1 npm i astro
2.2 replace the placeholderscripts with:
```package.json
    "dev": "astro dev",
    "start": "astro dev",
    "build": "astro build",
    "preview": "astro preview"
```
3. Create the first page
3.1 create a file named index.astro in the pages folder
4. Create astro.config.mjs (optional if no configuration is needed)
5. Add Typescript support through tsconfig.json
6. Your directory should look like this:  
```directory
├── node_modules  
├── public/  
│    └── robots.txt  
├── src/  
│    └── pages/  
│         └── index.astro  
├── astro.config.mjs  
├── package-lock.json  
├── package.json  
├── tsconfig.json  
```

Prerequisites for Astro are:
- Node.js -> v18.17.1 or V20.3.0 (V19 is not supported)
- Text editor ([VS Code](https://code.visualstudio.com/) is a recommended editor thanks to the [official Astro extension](https://marketplace.visualstudio.com/items?itemName=astro-build.astro-vscode))
- Terminal -> Astro is accessed through its command-line interface (CLI).

Since Astro is built with Vite almost all browsers can run Astro projects

## Astro Islands
The concept of component islands was first introduced in 2019 and expanded upon in 2020

> The general idea of an “Islands” architecture is deceptively simple: render HTML pages on the server, and inject placeholders or slots around highly dynamic regions […] that can then be “hydrated” on the client into small self-contained widgets, reusing their server-rendered initial HTML.
— Jason Miller, Creator of Preact

Astro is the first framework to use the frontend architecture that are Islands. Thanks to these Islands helping you to avoid monolithic JS patterns and stripping the non-essential JS from the page the frontend performance is increased.

### What is an island
In Astro, it refers to any interactive UI component on the page. Think of it as an interactive widget floating in around in the static, lightweight, server-rendered HTML.

An island always runs in isolation from each other on a page, and multiple islands can exist on the same page. Islands can share a state and communicate with each other, even though they run in different component contexts.

This flexibility allows Astro to support multiple UI frameworks. And because they are independent, you can even mix several frameworks on each page.

By default, Astro will automatically render every UI component to just HTML & CSS, stripping out all client-side JavaScript automatically.

```src/pages/index.astro
<MyReactComponent />
```

While this approach may seem strict, it’s what ensures Astro websites remain fast by default. It prevents developers from unintentionally sending unnecessary JavaScript that could slow down their site.

To make a static UI component interactive, you simply use a client:* directive. Astro then automatically builds and bundles the client-side JavaScript for optimal performance.

With Astro’s island architecture, client-side JavaScript is loaded only for the specific interactive components you designate using client:* directives. This selective loading helps maintain performance.

Additionally, since interaction is configured at the component level, you have control over the loading priorities for each component. For example, client:idle allows a component to load when the browser is idle, while client:visible triggers loading only when the component enters the viewport.

```src/pages/index.astro
<!-- This component is now interactive on the page!
     The rest of your website remains static. -->
<MyReactComponent client:load />```
```

### Benefits of the Islands
Performance is a significant benefit. But next to performance another benefit is parallel loading. For example, a low-priority "image carousel" island does not need to block a high-priority "header" island. With parallel loading, both can load and hydrate independently, meaning that the header becomes interactive immediately without having to wait for the heavier carousel lower down the page.

You can even tell Astro how and when each component should be rendered. For example, if an image carousel is expensive to load, you can use a client:visible directive to ensure it only loads when it becomes visible on the page, saving resources if the user never scrolls to it. This same approach applies to other components using directives like client:idle for loading during browser idle time, giving you full control over when and how components load, optimizing performance without sacrificing functionality.

## JavaScript in Astro: Only when you need it
Astro follows the principle of ‘zero JavaScript by default’, meaning that no JavaScript is sent to the browser by default unless needed. This makes Astro very efficient, as the basis of every page consists of pure HTML and CSS. JavaScript is added only when a specific functionality requires it, such as for interactive elements. This keeps load times to a minimum and optimizes website performance.

When JavaScript is required, Astro adds the scripts to the page. This is achieved through ‘hydration,’ where only specific JavaScript components are assigned. These components, which are often dynamic parts of a page such as a form or an interactive map, receive only the required JavaScript. This keeps the page fast and light.

In practice, specific pages act as API endpoints for tasks like database access and authentication, hiding sensitive data from the client.

Moreover, Astro makes using framework-independent components easy. Whether you work with React, Vue, Svelte or another framework, Astro allows you to combine different frameworks in one project. For developers using multiple technologies, this offers great flexibility.
In short, Astro offers a powerful, flexible solution that uses JavaScript only when it is needed, without unnecessarily burdening the browser.

## Impact on the Server
Astro prioritizes server-side rendering over client-side rendering as much as possible, similar to other server-side frameworks. However, unlike those frameworks, with Astro, you don't need to learn a separate server-side language to enable this. Simply using HTML, CSS, and JavaScript (or TypeScript) is sufficient.

This approach contrasts with other modern JavaScript frameworks. Frameworks such as Next.js or Remix for example are built for client-side rendering of the entire website and include server-side rendering to address performance issues. This is called the Single-Page App or SPA, while Astro uses Multi-Page App or MPA.

While the SPA has its benefits an MPA approach allows you to opt in client-side rendering only if necessary.

Yet another strong point is the support for SSR (Server-Side Rendering) or ODR (On-Demand Rendering): generating HTML pages on the server when requested and passing them on to the client. The result of SSR is that users can see content from a page faster. Because the static elements are loaded first.

In practice, this provides an implementation option for the login status in the app.
Earlier, zero JavaScript by default was also covered. These improve not only the impact on the server but also other presentation techniques such as the ‘Time to Interactive’ and ‘Largest Contentful Paint’. By adding only the essential JavaScript to specific components, the server load factor remains low, even for large websites with many visitors.

## Integration with Existing Frameworks
Astro integrations add a whole lot of new functionality and behaviors to projects. Through official, community-built, or custom integrations.

Official integrations are maintained by Astro and these include UI frameworks such as Alpinejs, lit, preact, react, ... . These also include SSR Adapters such as Cloudflare, netlify, Node, and Vercel. Other integrations maintained by Astro are for example: db, markdoc, mdx, ... .

To set these integrations you need to run the astro add command: npx astro add (your integration of choosing). You can add multiple integrations at once by adding a space and then the other integration.

These integrations can
- Unlock popular UI frameworks such as React, Vue, Svelte, Solid, ... with a [renderer](https://docs.astro.build/en/guides/framework-components/)
- Enable on-demand rendering with an [SSR adapter](https://docs.astro.build/en/guides/server-side-rendering/)
- Integrate tools such as Tailwind
- Add new features to projects, for example, an automatic sitemap generation
- Write custom hooks into the build process

## Conclusion
In summary, Astro is rapidly emerging as a powerful tool for building fast, content-driven websites. With its innovative island architecture and focus on performance, it empowers developers to create lightweight applications without unnecessary JavaScript. Whether you’re a seasoned pro or just starting in front-end development, Astro offers the flexibility to integrate with various frameworks and optimize your workflow. As we continue to explore its capabilities, it’s clear that Astro is a framework to watch in the evolving landscape of web development. We hope this meetup has sparked your interest and encouraged you to dive deeper into Astro’s features and possibilities!

## Resources and Further Reading Tips.
- Links to official documentation, blog posts, videos or tutorials.
https://astro.build/
https://docs.astro.build/en/concepts/islands/
https://www.patterns.dev/vanilla/islands-architecture/
https://lookerstudio.google.com/u/0/reporting/55bc8fad-44c2-4280-aa0b-5f3f0cd3d2be/page/M6ZPC