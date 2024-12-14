---
title: "Electron JS"
synopsis: "Electron JS is a cross-platform web application framework"
date: 2024-12-14
author:
  name: "Colin Willems"
  socials:
    website: ""
    linkedin: "https://www.linkedin.com/in/colin-willems-2bb071292"
    github: "https://github.com/pgm-coliwill"
thumbnailUrl: "/assets/tutorials/electron/electron_thumbnail.png"
head:
  - - meta
    - name: description
      content: "Electron JS is a cross-platform web application framework"
  - - meta
    - name: keywords
      content: "Electron Node HTML Javascript CSS Cross-platform Web-application"
---

# Tutorial: Screenrecorder with Electron JS

## Introduction


Electron has become one of the most significant tools for modern desktop application development. It allows developers to create cross-platform applications using familiar web technologies like **HTML**, **CSS**, and **JavaScript**. By leveraging **Chromium** and **Node.js**, Electron provides a robust framework for building versatile desktop apps.

This is especially relevant for roles such as:

- **Full-Stack JavaScript Developers**
- **Front-End Developers**
- **Back-End Developers**
- **PHP Web Developers**
- **CMS Themers**

All of these roles can benefit from the ability to create desktop apps with web development skills.

---

## What You Will Learn

In this tutorial, we will guide you through the process of building a fully functional **screen recording application** using Electron. This project will help you understand the core concepts of Electron development, including:

- **Desktop app creation**
- **Inter-process communication**
- **Media stream handling**

---

## What You Will Build

By the end of this tutorial, you will have a working **screen recorder** that allows users to:

- **Select video sources**
- **Start and stop recordings**
- **Save the recordings as video files**

This hands-on project will give you a strong foundation for future Electron development projects, helping you build powerful cross-platform desktop applications with ease.

## Prerequisites

To follow this tutorial, you should have a basic understanding of **JavaScript**, **Node.js**, and **HTML/CSS**. This knowledge is essential for understanding the logic behind Electron’s processes, the scripting required for UI interactions, and the implementation of core functionalities.

---

### Required Tools

You will also need the following tools installed on your system:

1. **Node.js (v16 or later)**  
   - Required to run and manage the Electron app.  
   - It allows you to run JavaScript code outside of a browser environment and is essential for executing Electron's core features.  
   - [Download Node.js here](https://nodejs.org/)

2. **Code Editor (like VS Code)**  
   - A code editor helps you write, debug, and manage your project files more effectively.  
   - **Visual Studio Code** provides useful extensions and debugging tools that are especially helpful for Electron development.  
   - [Download Visual Studio Code here](https://code.visualstudio.com/)

3. **Git (optional but recommended)**  
   - While not strictly necessary, Git allows you to track changes to your codebase and collaborate with others effectively.  
   - It also enables easy version control for your project.  
   - [Download Git here](https://git-scm.com/)

With these prerequisites in place, you will be ready to start building your screen recording application with Electron.

## Installation

To ensure a smooth setup process, follow these step-by-step instructions. Each step is accompanied by explanations to make the process more user-friendly.

---

### Step 1: **Set up a New Project Directory**
1. **Create a new project directory** and give it a descriptive name.  
2. **Open this directory** in your preferred code editor (like **Visual Studio Code**).  

---

### Step 2: **Create a New Electron App**
1. **Open the terminal** (inside your code editor or your system terminal).  
2. Run the following command:  
   ```bash
   npx create-electron-app@latest my-app
   ```
3. This will create a new folder called my-app with some basic files and a pre-configured project structure inside the app folder, giving you a head start on your Electron development journey.
Once these steps are complete, you’ll have a functional Electron project ready for customization and further development.