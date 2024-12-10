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
  - title: 'Example Source'
    url: 'https://example.com'
  - title: 'Example Source 2'
    url: 'https://example.com'
---


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
*Image I*

<br>

### <em>Astro Themes:</em>
Kickstart your project with a pre-made Astro theme and tailor the design and functionality to suit your specific needs.

![title](/assets/posts/astros-ship-less-approach_img_2.png)
*Image II*

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
```
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
*Image I*

<br>

## Step-by-Step Guide to Building with Astro.
