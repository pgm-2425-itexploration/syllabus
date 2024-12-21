---
title: 'Astro’s Ship Less Approach.'
synopsis: >
  Astro is an all-in-one web framework for building content-focused websites such as blogs,
  e-commerce platforms and so on. Astro is designed around the core idea of reducing the
  amount of JavaScript sent to the browser.
date: 2024-10-02
author:
  name: 'Cas Verheye'
  avatarUrl: '/assets/avatars/cas-verheye.png'
  socials:
    website: ''
    linkedin: 'https://www.linkedin.com/in/casverheye/'
    github: ''
thumbnailUrl: '/assets/posts/astros-ship-less-approach_img_3.png'
head:
  - - meta
    - name: description
      content: "Astro is an all-in-one web framework for building content-focused websites such as blogs, e-commerce platforms and so on. Astro is designed around the core idea of reducing the amount of JavaScript sent to the browser."
  - - meta
    - name: keywords
      content: 'front-end'
sources:
  - title: 'AstroJS Website'
    url: 'https://astro.build/'
  - title: 'AstroJS Documentation'
    url: 'https://docs.astro.build/'
---

## Table of Contents

1. [Astro’s Ship Less Approach](#astros-ship-less-approach)
2. [Why Astro? Ship Less JavaScript, Build Faster Sites](#why-astro-ship-less-javascript-build-faster-sites)
3. [Astro's Key Features](#astros-key-features)
   - [Astro Islands](#astro-islands)
   - [Astro Themes](#astro-themes)
4. [How Astro Works: A Deeper Look](#how-astro-works-a-deeper-look)
   - [Static by Default](#static-by-default)
   - [JavaScript Only When Needed](#javascript-only-when-needed)
5. [Astro vs Traditional JavaScript Frameworks (Gatsby)](#astro-vs-traditional-javascript-frameworks-gatsby)
   - [JavaScript Payload, Astro vs Gatsby](#javascript-payload-astro-vs-gatsby)
   - [Real-World Comparison](#real-world-comparison)
   - [Astro vs Gatsby Conclusion](#astro-vs-gatsby-conclusion)
6. [Practical Use Cases for Astro](#practical-use-cases-for-astro)
   - [Blogs and Personal Sites](#blogs-and-personal-sites)
   - [Documentation Sites](#documentation-sites)
   - [E-Commerce Websites](#e-commerce-websites)
   - [Marketing and Landing Pages](#marketing-and-landing-pages)
7. [Performance Benefits of Astro](#performance-benefits-of-astro)
   - [Faster Load Times](#faster-load-times)
   - [Improved SEO](#improved-seo)
   - [Reduced Hosting Costs](#reduced-hosting-costs)
8. [Future of Astro](#future-of-astro)
9. [Conclusion](#conclusion)

<br>

# Astro’s Ship Less Approach.
Astro is an **<u>all-in-one web framework</u>** for building content-focused websites such as blogs, e-commerce platforms and so on. Astro is designed around the core idea of reducing the amount of JavaScript sent to the browser.

In this blog, we'll cover some of the essential topics to help you get started with Astro.

<br>

## Why Astro? Ship Less JavaScript, Build Faster Sites.
Astro is an innovative static site generator designed to build **<u>high-performance websites</u>** by shipping less JavaScript. Its key philosophy revolves around generating fully static HTML and only using JavaScript when absolutely necessary. This approach ensures fast loading times, smooth user experiences, and an efficient development process.

Astro is flexible and can easily integrate with popular UI frameworks such as React, Vue, and Svelte, making it a powerful tool for developers.

<br>

## Astro's Key Features.

### <em>Astro Islands:</em>
Astro's Islands architecture optimizes your website in ways no other web framework can.

![title](/assets/posts/astros-ship-less-approach_img_1.png)

<br>

### <em>Astro Themes:</em>
Kickstart your project with a pre-made Astro theme and tailor the design and functionality to suit your specific needs.

![title](/assets/posts/astros-ship-less-approach_img_2.png)

<br>

## How Astro Works: A Deeper Look.
Astro’s architecture is built around the idea of delivering high-performance, content-focused websites by prioritizing static HTML generation. Its key strength lies in compiling pages into static HTML by default and only including JavaScript when absolutely necessary. This results in faster loading times, minimal overhead, and a leaner site.

### Static by Default:
Unlike traditional JavaScript-heavy frameworks (React, Angular), Astro compiles each page as pure HTML at build time. This means that when a visitor opens a page, the browser only has to render static content, avoiding the delays typically associated with JavaScript-heavy pages. With Astro, pages load faster and are ready to interact with almost instantly.

For example, a basic page in Astro might look like this:
```astro
---
// Astro component
const data = await fetch('https://api.example.com/data');
---
<html>
  <head>
    <title>My Astro Page</title>
  </head>
  <body>
    <h1>Welcome to Astro</h1>
    <p>{data}</p>
  </body>
</html>
```
This page will be rendered as static HTML with no client-side JavaScript required unless explicitly defined. Astro's build process generates pure HTML, giving you a lightweight page, perfect for SEO and fast performance.

### JavaScript Only When Needed:
Astro introduces a approach called partial hydration, where only the interactive components of a webpage like a search bar or a dropdown menu are hydrated (activated) with JavaScript.

Unlike many other frameworks (React, Vue) that hydrate the entire page, Astro limits this process to specific components, leaving the rest of the page as static HTML. This reduces the amount of JavaScript that gets loaded on the client-side, making the website faster and more efficient.

This selective loading is what Astro refers to as "Astro Islands." Here’s an example of how this works in Astro:
```astro
---
import ReactComponent from '../components/ReactComponent.astro';
---

<html>
  <head>
    <title>My Astro Page with React</title>
  </head>
  <body>
    <h1>Welcome to Astro</h1>
    <p>This part is static HTML.</p>
    <ReactComponent client:load />
  </body>
</html>
```
In this example, only the ReactComponent will be hydrated with JavaScript when it’s loaded into the browser. The rest of the page remains static. You can control how and when components are hydrated using directives like `client:load`, `client:idle`, or `client:visible`.

<br>

## Astro vs Traditional JavaScript Frameworks (Gatsby).
While Astro focuses on delivering minimal JavaScript, Gatsby takes a different approach. Gatsby is a static site generator built on React, which means that even though it pre-renders static HTML during the build process, it fully hydrates the entire page with JavaScript on the client side.

This can slow down performance, especially for sites with minimal interactivity.

### JavaScript Payload, Astro vs Gatsby:
Astro ships zero JavaScript by default for static pages, only loading JavaScript for components that require interactivity. For many static pages, the total JavaScript size can be `0KB`, leading to faster load times.

Gatsby, on the other hand, ships a significant amount of JavaScript to the client, even for purely static pages, it typically ships `200KB` to `500KB` or more of JavaScript to hydrate the page. This includes the React runtime and other framework-related scripts.

### Real-World Comparison:
A typical content-heavy blog built with Astro has been reported to have an overall page weight (HTML, CSS, JavaScript) of under `100KB` with `0KB` of JavaScript on non-interactive pages.

The same blog rebuilt in Gatsby, with the React runtime and minimal JavaScript dependencies, had a page weight of over `400KB`, with `250KB` of that being JavaScript.

### Astro vs Gatsby Conclusion.
Astro's architecture allows it to load pages 2-3 times faster than Gatsby on content-heavy sites with minimal interactivity.

![title](/assets/posts/astros-ship-less-approach_img_1.png)

<br>

## Practical Use Cases for Astro

Astro excels in building content-focused websites that prioritize performance and user experience. Here are some common scenarios where Astro shines:

### Blogs and Personal Sites

Astro’s Markdown support makes it an excellent choice for blogs and personal sites. Its ability to generate lightweight, static HTML ensures fast page loads and improved SEO rankings.

### Documentation Sites

Astro is perfect for creating documentation sites. Its static nature, combined with Markdown support and built-in navigation tools, makes it easy to create clear and structured content.

### E-Commerce Websites

With Astro, you can build fast-loading e-commerce sites by combining static pages with dynamic, partially hydrated components for features like shopping carts or product filters.

### Marketing and Landing Pages

Astro’s ability to produce lightweight, static pages ensures that marketing and landing pages load quickly, improving conversion rates.

## Performance Benefits of Astro

Astro’s approach to reducing JavaScript has tangible benefits for website performance:

### Faster Load Times

By limiting the amount of JavaScript sent to the browser, Astro ensures that pages load quickly, even on slower networks. This improves the overall user experience.

### Improved SEO

Search engines prioritize fast-loading sites. Astro’s static HTML output ensures that your content is fully indexed, boosting your search rankings.

### Reduced Hosting Costs

Smaller JavaScript payloads and static HTML files mean that Astro-powered sites are lighter on server resources, leading to lower hosting costs.

## Future of Astro

Astro continues to grow with new features and improvements. The roadmap includes:

- **Enhanced SSR Support**: Expanding server-side rendering capabilities.
- **New Integrations**: Adding support for more CMSs and tools.
- **Improved Developer Experience**: Streamlining workflows and adding more debugging tools.

Astro’s commitment to innovation ensures it will remain a top choice for developers building fast, content-focused websites.

## Conclusion

Astro’s innovative approach to web development—emphasizing static HTML and minimal JavaScript—makes it a standout framework for creating high-performance websites. Whether you’re building a blog, an e-commerce platform, or a documentation site, Astro offers the tools and flexibility you need to succeed. With its growing ecosystem and active community, Astro is poised to shape the future of web development.