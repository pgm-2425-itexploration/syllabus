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

## Configuration

### Project structure

You should have the following project structure

## File Descriptions

- **`index.html`**: This file defines the layout and structure of the application's user interface. You can add HTML elements like buttons, text fields, and containers here.

- **`index.js`**: This is the main process file. It controls the life cycle of the Electron app, manages windows, and handles system events.

- **`preload.js`**: This script runs in a special context that bridges the main process and the renderer process. It allows secure communication between them.

- **`styles.css`**: This file is used to style the application's UI, including fonts, colors, and layouts.

- **`package.json`**: This file holds the project's metadata, dependencies, and scripts. It allows you to run commands like `npm run start` and defines the entry points for the app.

This structure serves as the foundation for building and managing your Electron application.

If we navigate to the “my-app" folder and type in the terminal “npm run start”, we can start our application. 

### Import problem

When running the application we get an error message. This is due to the index.js file using imports at the top level. 

```bash
   import { app, BrowserWindow} from 'electron';
   import path from 'node:path';
   import started from 'electron-squirrel-startup';
```
We need to replace these imports with

```bash
   const { app, BrowserWindow } = require('electron');
   const path = require('node:path');
   const started = require('electron-squirrel-startup');
```

If we try and run the application again with “npm run start”, we can see an electron screen popup with Hello world and the devtools open.

## Basic setup

### **index.js**

The **index.js** file is the entry point for your Electron application. It controls the main process, handles the app lifecycle, and creates the main browser window.

---

### **Key Concepts of index.js**

1. **Import Statements**
   - **BrowserWindow**: Used to create a new browser window. You can set the window's size, position, and load preferences.  
   - **path**: Used to join paths to ensure cross-platform compatibility.  
   - **app**: Manages the app lifecycle, events, and platform-specific behaviors.  
   - **electron-squirrel-startup**: Handles Windows-specific logic for creating/removing shortcuts on install/uninstall.  

2. **Browser Window**
   - The **BrowserWindow** object is responsible for creating a new window.  
   - We define its width, height, and webPreferences.  
   - The **webPreferences** specify the path to the **preload.js** file to bridge communication between the main and renderer processes.  

3. **Loading HTML File**
   - The `mainWindow.loadFile(path.join(__dirname, 'index.html'))` tells the app to load the **index.html** file when the app starts.  

4. **DevTools**
   - The **mainWindow.webContents.openDevTools()** command automatically opens DevTools when the app starts, which is useful for debugging.  

---

### **index.js Code Breakdown**

```javascript
const { app, BrowserWindow } = require('electron');
const path = require('node:path');
const started = require('electron-squirrel-startup');

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (started) {
  app.quit();
}

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  // Load the index.html file.
  mainWindow.loadFile(path.join(__dirname, 'index.html'));

  // Open the DevTools.
  mainWindow.webContents.openDevTools();
};

// Create the browser window when the app is ready.
app.whenReady().then(() => {
  createWindow();

  // On macOS, recreate a window if the app is activated and there are no other windows open.
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

// Quit the app when all windows are closed (except on macOS).
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// You can include additional app-specific logic or imports below.
```