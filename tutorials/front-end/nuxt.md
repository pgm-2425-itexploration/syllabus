---
title: 'Nuxt'
synopsis: 'Nuxt is a framework for building Vue.js applications. This tutorial will show you how to make your own Nuxt application.'
date: 2024-10-10
author:
  name: 'Lauren Wille'
  avatarUrl: '/assets/avatars/lauren-wille.png'
  socials:
    website: ''
    linkedin: 'https://www.linkedin.com/in/lauren-🐦-wille-2457141b7'
    github: 'https://github.com/Lauren-Wille'
thumbnailUrl: '/assets/nuxt_img.png'
head:
  - - meta
    - name: description
      content: 'Nuxt is a framework for building Vue.js applications. This tutorial will show you how to make your own Nuxt application.'
  - - meta
    - name: keywords
      content: 'nuxt front-end appliction tutorial'
---

## What is Nuxt?
Nuxt is a free and open-source framework that provides an intuitive way to create full-stack web applications and websites using Vue.js.
You can start writing .vue files right away, with server-side rendering by default.
Nuxt also has no vendor lock-ins, allowing applications to be deployed anywhere.  

Nuxt uses conventions, automation and a directory structure to automate repetitive tasks:

1. With file-based routing, **you define routes based on the structure of the directory**. This makes your application easier to organize and eliminates the need to manually configure routes.
2. Nuxt automatically **breaks code into smaller chunks**, which can reduce application load time.
3. If you write Vue components in their respective directories, you can **use them without having to import them**, due to tree-shaking.


What else is good to know about Nuxt? The framework uses the **server engine Nitro**. This is useful because in production this engine builds the output in 1 directory and the application minimized. A Nuxt application **can also be deployed to a Node server**, rendered to be hosted in static environments or deployed to serverless and edge providers. Finally, you can extend Nuxt with custom features and integrations with **third-party services**.


## 