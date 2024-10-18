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
Astro is a web framework for building content-driven websites. A new version, Astro 5.0, is in beta at the time of writing this article. Astro as framework focuses on content-oriented websites and is currently very relevant in the web world. This is mainly due to the speed and efficiency with which it can generate static websites. Thanks to these features, Astro is a powerful choice for developers who want to build fast, lightweight and high-performing websites.

## What is Astro?
Astro is a JavaScript web framework that focuses on creating content-centric websites quickly and efficiently. What is unique about Astro is that it supports server-side rendering, meaning that components are rendered on the server instead of in the browser. As a result, lightweight HTML, without unnecessary JavaScript, is sent to the browser. This reduces the load on the server and significantly improves website performance. In addition, client-side resources are minimised, ensuring faster load times and a better user experience.

Another key feature of Astro is its content-first approach. This means that the delivery of content, such as texts, images and videos, is paramount. The framework optimises the presentation of this content, allowing users to access important information faster without being slowed down by unnecessary scripts or heavy JavaScript files.

Astro also uses the so-called ‘island architecture’. This means that the application uses small, focused interactive parts of a web page, called ‘islands’. Instead of the whole page being loaded at once, these islands are loaded independently of each other, progressively enhancing the page. This ensures better performance and a smoother user experience.
Other unique features of Astro include the ability to run components without a JavaScript runtime on the client, the default setting where client-side JavaScript is minimised, and the option to combine multiple frameworks in a single project.
Thanks to these advantages, Astro's popularity is growing rapidly, especially in the United States, and it is also gaining popularity in Europe.

![Chart frameworks](./assets/images/chart-framework.png)

## Setup
The fastest way to create a new Astro project is through a CLI command, namely 'create Astro'. This will walk you through the steps of setting up an Astro project and allows you to choose from a few different official starter templates.

Or you can begin your project using an existing theme or starter template though this way requires more time and is quite different. This is through manual setup, and is not automated like the CLI command.

The steps are:
1. Create directory (npm init --yes)
2. Install Astro
2.1 npm i astro
2.2 replace the placeholderscripts with:
```
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
![directory](./assets/images/directory-astro-setup.png)

:::code-group
```js [src/test/test.js]
const test = "Hallo"
```
:::


Prerequisites for Astro are:
- Node.js -> v18.17.1 or V20.3.0 (V19 is not supported)
- Text editor ([VS Code](https://code.visualstudio.com/) is a recommended editor thanks to the [official Astro extension](https://marketplace.visualstudio.com/items?itemName=astro-build.astro-vscode))
- Terminal -> Astro is accessed through its command-line interface (CLI).

Since Astro is built with Vite almost all browsers can run Astro projects

## JavaScript in Astro: Only when you need it
Astro follows the principle of ‘zero JavaScript by default’, meaning that no JavaScript is sent to the browser by default unless needed. This makes Astro very efficient, as the basis of every page consists of pure HTML and CSS. JavaScript is added only when a specific functionality requires it, such as for interactive elements. This keeps load times to a minimum and optimises website performance.

When JavaScript is required, Astro adds the scripts to the page. This is done by ‘hydration’, assigning only specific JavaScript components. These components, which are often dynamic parts of a page such as a form or an interactive map, receive only the required JavaScript. This keeps the page fast and light.

In practice, specific pages are created that act as API enpoints for tasks such as database access, authentication, ... to hide sensitive data from the client. This data is retrieved via a fetch(). Those pages are also protected by restricting access based on usage rights determined on the server.

Moreover, Astro makes using framework-independent components easy. Whether you work with React, Vue, Svelte or another framework, Astro allows you to combine different frameworks in one project. For developers using multiple technologies, this offers great flexibility
In short, Astro offers a powerful, flexible solution that uses JavaScript only when it is really needed, without unnecessarily burdening the browser.

## Impact on the Server
Astro prioritizes server-side rendering over client-side rendering as much as possible, similar to other server-side frameworks. However, unlike those frameworks, with Astro, you don't need to learn a separate server-side language to enable this. Simply using HTML, CSS, and JavaScript (or TypeScript) is sufficient.

This is different from other modern JS web frameworks. Frameworks such as Next.js or Remix for example are built for client-side rendering of the entire website and include server-side rendering to adress performance issues. This is called the Single-Page App or SPA, while Astro uses Multi-Page App or MPA.

While the SPA has its benefits an MPA approach allows you to opt in client-side rendering only if necessary.

Yet another strong point is the support for SSR (Server-Side Rendering) or ODR (On-Demand Rendering): generating HTML pages on the server when requested and passing them on to the client. The result of SSR is that users can see content from a page faster. Because the static elements are loaded first.

In practice, this provides an implementation option for the login status in the app.
Earlier, zero JavaScript by default was also covered. These improve not only the impact on the server, but also other presentation techniques such as the ‘Time to Interactive’ and ‘Largest Contentful Paint’. By adding only the essential JavaScript to specific components, the server load factor remains low, even for large websites with many visitors.

## Integration with Existing Frameworks
Astro integrations adds a whole lot of new functionality and behaviors to projects. Through official integrations, integrations built by the community or even custom build integrations

Official integrations are maintained by Astro and these include UI frameworks such as: alpinejs, lit, preact, react, ... . These also include SSR Adapters such as cloudfare, netlify, node, vercel. Other integrations maintained by Astro are for example: db, markdoc, mdx, ... .

In order to setup these integrations you need to run the astro add command: npx astro add (your integration of choosing). You can add multiple integrations at once by adding a space and then the other integration

These integrations can
- Unlock popular UI frameworks such as React, Vue, Svelte, Solid, ... with a [renderer](https://docs.astro.build/en/guides/framework-components/)
- Enable on-demand rendering with an [SSR adapter](https://docs.astro.build/en/guides/server-side-rendering/)
- Integrate tools such as Tailwind
- Add new features to projects, for example an automatici sitemap generation
- Write custom hooks into the build process

## Best Practices in Using Astro
*Learnings from the meetup on how to best use Astro.*
- Tips on how to efficiently implement Astro in projects.
- How to work with dynamic data in an otherwise static environment.
- Which plugins or extensions for Astro are recommended.

## Comparison with Other Frameworks.
*Short overview of how Astro compares to other popular frameworks.*
- Comparisons with frameworks such as Next.js, Nuxt.js, or Gatsby.
- The strengths of Astro versus the weaknesses of other frameworks.
- Situations where Astro may be a better choice.

## Conclusion
*Concluding remarks and summary of key learning points from the meetup.*
- Why Astro is a framework to keep an eye on.
- Future developments within the Astro ecosystem that were discussed during the meetup.
- Any feedback or questions asked during the meetup's Q&A.

## Resources and Further Reading Tips.
- Links to official documentation, blog posts, videos or tutorials.
https://astro.build/
https://docs.astro.build/en/concepts/islands/
https://www.patterns.dev/vanilla/islands-architecture/
https://lookerstudio.google.com/u/0/reporting/55bc8fad-44c2-4280-aa0b-5f3f0cd3d2be/page/M6ZPC