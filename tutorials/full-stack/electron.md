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
const { app, BrowserWindow } = require("electron");
const path = require("node:path");
const started = require("electron-squirrel-startup");

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
      preload: path.join(__dirname, "preload.js"),
    },
  });

  // Load the index.html file.
  mainWindow.loadFile(path.join(__dirname, "index.html"));

  // Open the DevTools.
  mainWindow.webContents.openDevTools();
};

// Create the browser window when the app is ready.
app.whenReady().then(() => {
  createWindow();

  // On macOS, recreate a window if the app is activated and there are no other windows open.
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

// Quit the app when all windows are closed (except on macOS).
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

// You can include additional app-specific logic or imports below.
```

## **preload.js**

The **preload.js** file acts as a secure and controlled environment to expose specific functionalities from the main process to the renderer (web pages) while maintaining security.

---

### **Key Responsibilities of preload.js**

1. **Context Bridge**

- **Electron's contextBridge API** prevents direct access to **Node.js** and **Electron APIs** from the renderer process, which mitigates security risks like **Cross-Site Scripting (XSS) attacks**.
- The **preload.js** file runs in a special context, giving it access to both the **Node.js environment** and the **browser context**.
- Using **contextBridge.exposeInMainWorld**, you can safely expose specific APIs to the renderer process, ensuring that only intended functionalities are accessible.

---

2. **Isolated World**

- The **preload.js** script runs in an **isolated world** where it has access to **Node.js modules** (like **fs**, **path**) and **Electron APIs** (like **ipcRenderer**).
- The **renderer process** (the web page) does not have direct access to **Node.js modules** unless they are explicitly exposed via the **preload.js** script.
- This isolation helps maintain a higher level of security and control over what can be accessed from the renderer.

---

3. **Security**

- **Electron recommends disabling Node.js integration** in the renderer for security reasons. This is done by setting:
  ```javascript
  webPreferences: {
    nodeIntegration: false;
  }
  ```

---

4. **Inter-Process Communication (IPC)**

- **IPC (Inter-Process Communication)** enables communication between the main process and the renderer process.
- The preload.js script acts as a bridge, exposing a secure interface for message exchange.
- It uses ipcRenderer (from the Electron API) to send and receive messages between the main process and the renderer process.

If you open the preload.js file, you may find it empty, as the content is usually added later in development.
In the upcoming sections of the tutorial, you will add specific logic for exposing APIs, inter-process communication, and custom features for your app.

## index.html and index.css

These are just pure for UI purposes. The only thing we need to worry about is that name the classes of our html elements correctly so we can reference these correctly in our renderer.js.

## **renderer.js**

The **renderer.js** file is executed in the **renderer process** of an Electron application. Similar to how **Google Chrome** separates browser tabs into distinct processes, Electron separates its windows and web pages into individual **renderer processes**.

---

### **Primary Functions of renderer.js**

1. **User Interface (UI) Control**

- Handles the rendering and manipulation of **HTML/CSS** to create the user interface.
- Manages **DOM interactions**, such as updating elements, responding to button clicks, and other user actions.
- Acts as a "controller" that mediates between user actions and the displayed content.

**Example:**

```javascript
// Update the title text when a button is clicked
const titleElement = document.querySelector(".app-title");
const button = document.querySelector(".update-title");

button.addEventListener("click", () => {
  titleElement.textContent = "Updated Title!";
});
```

2. \*\*Event Listeners & DOM Interactions

- Listens for user input events (like clicks, keypresses, and form inputs) and triggers logic.
- Uses JavaScript to modify elements on the page, add animations, or change content dynamically.

3. Inter-Process-Communication

- Communicates with the main process using Electron's IPC system (Inter-Process Communication).
- Requests access to system-level functionality (like the file system, menus, notifications) via ipcRenderer.

4. **Integration with Node.js & Native Modules**

- Unlike regular web browsers, the renderer process has access to Node.js APIs like fs (file system) and path.
- This allows you to read files, write files, and access system-level resources.
- However, due to potential security risks, modern Electron apps enable context isolation to limit access and enhance security.

5. **Calling Native Functions from the Main Process**

- Since some system-level operations (like file access) can only be done in the main process, renderer.js sends requests to the main process using ipcRenderer.
- The main process then performs the action and sends back the response.

**Since our project doesn't have a renderer.js file yet, we can create one. It should be placed in the src folder, so it sits on the same level as the other files.**

## Tutorial

In this tutorial we will give you all the code with comments and an extensive explanation.

### Index.html and index.css

Because these aren’t important for the functionality of the application and because this is basic we won’t be giving any explanation with these files.

1. HTML

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Simple Screen Recorder</title>

    <!-- Import Bulma CSS framework for simple and modern UI design -->
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bulma@0.8.0/css/bulma.min.css"
    />

    <!-- Import custom styles from index.css -->
    <link rel="stylesheet" href="index.css" />

    <!-- Import renderer.js to handle the interaction and logic for the UI -->
    <script defer src="renderer.js"></script>
  </head>

  <body class="content">
    <h1>⚡ Electron Screen Recorder</h1>

    <!-- Notification message for when recording starts -->
    <div id="recordingMessage" class="notification is-hidden">
      Recording has started...
    </div>

    <!-- Video element to display the recording -->
    <video></video>

    <!-- Buttons to control the recording process -->
    <button id="startBtn" class="button is-primary">Start</button>
    <button id="stopBtn" class="button is-warning">Stop</button>

    <hr />

    <!-- Button to select the video source (like screen, window, or tab) -->
    <button id="videoSelectBtn" class="button is-text">
      Choose a Video Source
    </button>
  </body>
</html>
```

2. CSS

```css
/* Global styles for the entire page */
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif;
  padding: 0;
  margin: 0;
}

body {
  text-align: center;
  padding-top: 20px;
}

/* Style for the video element */
video {
  width: 100%;
  height: auto;
}

/* Notification style for the recording message */
#recordingMessage {
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  padding: 10px 20px;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  border-radius: 5px;
  z-index: 1000;
  text-align: center;
  font-size: 16px;
  display: none;
}

/* Utility class to hide elements */
.is-hidden {
  display: none !important;
}

/* Utility class to make elements visible */
.is-visible {
  display: block !important;
}
```

3. Index.js

```javascript
const {
  app,
  BrowserWindow,
  ipcMain,
  desktopCapturer,
  Menu,
} = require("electron");
const path = require("path");

// Function to create the main application window
const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 800, // Set the width of the window to 800 pixels
    height: 600, // Set the height of the window to 600 pixels
    webPreferences: {
      preload: path.join(__dirname, "preload.js"), // Specify the path to the preload script
      contextIsolation: true, // Isolate context to improve security
      enableRemoteModule: false, // Disable remote module for security reasons
      nodeIntegration: false, // Prevent node.js integration in the renderer process
    },
  });

  mainWindow.loadFile(path.join(__dirname, "index.html")); // Load the HTML file into the window
  mainWindow.webContents.openDevTools(); // Open developer tools for debugging
};

// Handle the 'get-sources' IPC call from the renderer process
ipcMain.handle("get-sources", async (event) => {
  try {
    const sources = await desktopCapturer.getSources({
      types: ["window", "screen"],
    }); // Get available screen and window sources
    return sources; // Return the sources to the renderer process
  } catch (error) {
    console.error("Error fetching sources:", error); // Log any errors that occur
    throw error; // Re-throw the error to propagate it to the renderer process
  }
});

// Handle the 'show-context-menu' IPC call from the renderer process
ipcMain.handle("show-context-menu", (event, menuItems) => {
  const menu = Menu.buildFromTemplate(
    menuItems.map((item) => ({
      label: item.label, // Label for the context menu item
      click: () => {
        event.sender.send("context-menu-selection", item.id); // Send back the selection to the renderer process
      },
    }))
  );
  menu.popup(BrowserWindow.fromWebContents(event.sender)); // Show the context menu at the cursor position
});

// When the Electron application is ready, create the main window
app.whenReady().then(createWindow);

// Quit the application when all windows are closed, unless on macOS
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    // macOS typically keeps apps running even when windows are closed
    app.quit(); // Quit the app if not on macOS
  }
});

// Recreate the window if the app is activated (for macOS behavior)
app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    // If no windows are open, recreate one
    createWindow(); // Create a new main window
  }
});
```

1. **Main Application Setup**

- Modules Imported:
  electron: Used to create windows (BrowserWindow), handle inter-process communication (ipcMain), capture screen sources (desktopCapturer), and build context menus (Menu).
  path: Used to work with file paths, ensuring cross-platform compatibility.

**Main Window Creation**

- The createWindow function creates a new BrowserWindow with a width of 800px and height of 600px.
- It loads an index.html file to display the app's content.
- Developer tools (DevTools) are opened to assist with debugging.

**Security Measures:**

- Context Isolation: Ensures scripts in the renderer cannot access Electron or Node.js APIs directly.
- Disable Remote Module: Disables Electron's remote API to reduce security risks.
- Disable Node Integration: Prevents Node.js modules from being directly available in the renderer process.

2. **Screen capture**

**IPC handler to get sources**

- When the renderer process sends a message with the channel get-sources, this handler responds.
- Uses desktopCapturer to capture screen and window sources.
- It returns the list of available screen and window sources back to the renderer process.

3. **Context Menu**

**IPC Handler for show-context-menu**

- When the renderer process sends a message to show a context menu, this handler dynamically creates a menu using the provided items.
- The menu items are mapped to include a label (visible text) and a click event, which sends the user's menu selection back to the renderer.
- The context menu is displayed near the user's cursor on the screen.
  
1. **Application Lifecycle Management**

**App Initialization**

- When Electron is ready (app.whenReady), it calls createWindow to create the main window.

**Window Closing Behavior**

- If all windows are closed (except on macOS), the app will quit.
- On macOS, when the app is "activated" (like clicking the app icon), and no windows are open, it re-creates a new window.

4. Renderer.js

```javascript
// Get the screen stream
const screenStream = await navigator.mediaDevices.getUserMedia({
  video: {
    mediaSource: 'screen', // Capture the screen video
  },
});

// Get the microphone stream
const micStream = await navigator.mediaDevices.getUserMedia({
  audio: true, // Enable microphone audio
  video: false, // Do not capture video from the microphone
});

// Combine the screen stream and microphone audio into a single MediaStream
const combinedStream = new MediaStream([
  ...screenStream.getVideoTracks(), 
  ...screenStream.getAudioTracks(), 
  ...micStream.getAudioTracks(), 
]);

// Set the video element source to the combined stream
videoElement.srcObject = combinedStream; 
videoElement.muted = true; // Mute the video playback to prevent audio feedback
videoElement.play(); // Start video playback

// Set up the MediaRecorder to record the combined stream
setupRecorder(combinedStream);

// Function to set up the MediaRecorder to record the provided stream
function setupRecorder(stream) {
  recordedChunks = []; // Clear previous recordings
  mediaRecorder = new MediaRecorder(stream); // Create a new MediaRecorder

  // When data is available, store it in recordedChunks
  mediaRecorder.ondataavailable = (event) => {
    if (event.data.size > 0) {
      recordedChunks.push(event.data); 
    }
  };

  // When recording stops, save the recorded video
  mediaRecorder.onstop = () => {
    const blob = new Blob(recordedChunks, { type: 'video/mp4' }); // Combine the chunks into a video file
    const url = URL.createObjectURL(blob); // Create a download URL for the blob

    const a = document.createElement('a'); 
    a.style.display = 'none'; 
    a.href = url; 
    a.download = 'recording.mp4'; 
    document.body.appendChild(a); 
    a.click(); // Trigger the download
    URL.revokeObjectURL(url); // Revoke the URL to free up memory
  };
}

// Event listener for the Start button
startBtn.onclick = () => {
  if (mediaRecorder) {
    mediaRecorder.start(); 
    console.log('Recording started'); 
    toggleRecordingMessage(true, 'Recording has started...');
  }
};

// Event listener for the Stop button
stopBtn.onclick = () => {
  if (mediaRecorder && mediaRecorder.state !== 'inactive') {
    mediaRecorder.stop(); 
    console.log('Recording stopped'); 
    toggleRecordingMessage(false);
  }
};
```

### **Detailed Explanation**

---

#### **1. Variables and Elements**
- **inputSources**: Stores available screen/window sources.  
- **mediaRecorder**: The **MediaRecorder** object used to capture and record the stream.  
- **recordedChunks**: Stores chunks of recorded video until it's combined into a full video file.  
- **videoElement**: The video player element used to display the current stream.  
- **videoSelectBtn**: Button to select the screen or window source.  
- **startBtn**: Button to **start recording**.  
- **stopBtn**: Button to **stop recording**.  
- **recordingMessage**: A message that displays "Recording has started..." when recording begins.  

---

#### **2. Video Source Selection**
**Handles the click event for selecting a video source.**

| **Component**             | **Purpose**                                  |
|---------------------------|----------------------------------------------|
| **window.electronAPI.getSources()** | Gets the list of available screen sources. |
| **videoOptionsMenu**      | Generates the context menu options for available sources. |

---

#### **3. Source Selection**
**Listens for the context menu selection and selects the source.**

| **Component**             | **Purpose**                                   |
|---------------------------|----------------------------------------------|
| **window.electronAPI.onContextMenuSelection()** | Listens for user's source selection. |
| **selectSource()**         | Handles the selected source and configures the stream. |

---

#### **4. Select Source**
**Selects the source and sets up video and microphone streams.**

| **Stream**                | **Source**                | **Purpose**                     |
|--------------------------|--------------------------|----------------------------------|
| **Screen Stream**          | User-selected window/screen | Captures video and audio.       |
| **Microphone Stream**      | Microphone                | Captures microphone audio.      |

---

#### **5. Setup MediaRecorder**
**Combines the streams and initializes the MediaRecorder.**

| **Component**              | **Purpose**                                   |
|----------------------------|-----------------------------------------------|
| **screenStream.getVideoTracks()** | Gets video tracks from the screen.        |
| **screenStream.getAudioTracks()** | Gets audio tracks from the screen.        |
| **micStream.getAudioTracks()**    | Gets audio tracks from the microphone.     |

---

#### **6. Record and Stop**
**Start and stop recording process.**

| **Button**                 | **Action**                                     |
|----------------------------|-----------------------------------------------|
| **Start**                  | Starts recording and shows a message.         |
| **Stop**                   | Stops recording and hides the message.        |

---

#### **7. Record and Download**
**Save the recorded chunks into a downloadable file.**

| **Component**               | **Purpose**                                    |
|-----------------------------|-----------------------------------------------|
| **Blob**                    | Combines recorded chunks into a complete video file. |
| **URL.createObjectURL()**   | Creates a downloadable URL for the video file. |
| **click()**                 | Simulates a click to download the file.        |
| **URL.revokeObjectURL()**   | Frees up memory after download is complete.    |

---

### **Summary of Key Functions**

| **Function**                 | **Purpose**                                           |
|------------------------------|-----------------------------------------------------|
| **toggleRecordingMessage()**  | Shows/hides the recording message.                   |
| **selectSource()**            | Selects the screen/window source to record.           |
| **setupRecorder()**           | Sets up the MediaRecorder to capture the combined stream. |
| **ondataavailable**           | Collects video chunks as they become available.      |
| **onstop**                    | Combines the chunks into a video file and downloads it. |
| **startBtn.onclick**          | Starts the recording and shows the recording message. |
| **stopBtn.onclick**           | Stops the recording and allows the video to be downloaded. |

---

```javascript
const { contextBridge, ipcRenderer } = require("electron"); // Import Electron's contextBridge and ipcRenderer modules

// Expose specific API methods to the renderer process in a secure way
contextBridge.exposeInMainWorld("electronAPI", {
  
  // Method to get the list of available screen/window sources
  getSources: async () => {
    try {
      const sources = await ipcRenderer.invoke("get-sources"); // Invoke the 'get-sources' method in the main process
      return sources; // Return the list of sources to the renderer
    } catch (error) {
      console.error("Error in getSources:", error); // Log any errors that occur
      throw error; // Re-throw the error so the caller is aware of the issue
    }
  },
  
  // Method to show a context menu with the provided menu items
  showContextMenu: async (menuItems) => {
    try {
      await ipcRenderer.invoke("show-context-menu", menuItems); // Invoke the 'show-context-menu' method with menu items
    } catch (error) {
      console.error("Error in showContextMenu:", error); // Log any errors that occur
      throw error; // Re-throw the error so the caller is aware of the issue
    }
  },
  
  // Listens for context menu selection events and calls the provided callback with the selected source ID
  onContextMenuSelection: (callback) => {
    ipcRenderer.on("context-menu-selection", (event, sourceId) => {
      callback(sourceId); // Call the provided callback with the ID of the selected source
    });
  },
});
```



## **Modules Imported**

### **contextBridge**
- **Purpose**: Allows the exposure of safe APIs in the global window object for the renderer process.  
- **Use Case**: Provides a secure bridge to expose selected APIs to the renderer process while maintaining app security.  

### **ipcRenderer**
- **Purpose**: Enables communication between the **renderer process** and the **main process** using **inter-process communication (IPC)**.  
- **Use Case**: Used to send and receive messages between the renderer and the main process.  

---

## **Context Bridge**

- The script exposes a secure object called **electronAPI** in the global scope of the renderer via `contextBridge.exposeInMainWorld("electronAPI", { ... });`.  
- This object provides access to specific functions that the renderer can safely call without exposing sensitive Electron or Node.js APIs.  
- It creates a **safe, isolated environment** for the renderer to communicate with the main process.  

---

# **Available Functions**

---

## **getSources()**

### **Purpose**
- **To get a list of available sources** (like open windows, tabs, or screens) that can be used for **screen recording** or **screen sharing**.

### **How It Works**
1. Calls the main process using `ipcRenderer.invoke('get-sources')`.  
2. The main process responds with an **array of source objects** containing information about each available screen or window.  
3. If an **error occurs**, it logs the error and re-throws it so the caller can handle it.  

### **Use Case**
- **To let users choose** which screen, window, or tab to share or record in a screen capture application.  
- Example: When a user wants to select a window or screen to record, **getSources()** provides the list of available options.  

---

## **showContextMenu(menuItems)**

### **Purpose**
- **To display a context menu** that allows users to make a selection from a list of options.  

### **How It Works**
1. Calls the main process using `ipcRenderer.invoke('show-context-menu', menuItems)`.  
2. The **menuItems** argument is an array of objects that specify the menu items to be displayed. Each menu item typically has the format `{ label: 'Menu Item Name', id: 'unique-id' }`.  
3. If an **error occurs**, it logs the error and re-throws it for the caller to handle.  

### **Use Case**
- **To provide a list of options** for the user.  
- Example: When users click on a button to select a screen source, a **context menu** appears listing the available screens/windows. The user can select one from the menu.  

---

## **3onContextMenuSelection(callback)**

### **Purpose**
- **To handle the user's selection** from the context menu and act on it.  

### **How It Works**
1. Listens for a **context-menu-selection** event from the main process using `ipcRenderer.on('context-menu-selection', (event, sourceId) => { callback(sourceId); });`.  
2. When a user selects an item from the **context menu**, the main process sends the **ID** of the selected source back to the renderer.  
3. The **callback function** is triggered with the **sourceId** as an argument.  

### **Use Case**
- **To know which option the user selected** so the app can respond accordingly.  
- Example: When a user selects a screen/window source from the context menu, the app can start capturing that specific screen or window.  

---

# **Functionalities**

---

## **1. Screen & Window Selection**

### **Select Screen/Window Source**
- **Options Available**:
  - Entire Screen
  - Specific Application Windows (like Google Chrome, File Explorer, etc.)
  - Browser Tabs (depending on availability)
- **How It Works**:
  - Users select from a context menu listing all available screen sources.
  - The context menu is dynamically generated to display the available options.

---

## **2. Live Video Preview**

### **Live Preview of Selected Source**
- **What It Does**:
  - After selecting a screen or window, users see a live video preview of the selected source.
  - The video preview is displayed in a **video player** embedded in the app's window.
  - **Audio Muting**:
    - The preview video is muted to prevent a feedback loop.

---

## **3. Audio & Video Recording**

### **Record Screen Video**
- Captures video from the selected screen, window, or tab using **Electron's desktopCapturer**.

### **Record System Audio**
- Captures **system audio** (like app sounds, browser sounds) from the selected screen.

### **Record Microphone Audio**
- Captures **microphone audio** as a separate stream.
- Combines this stream with the screen/system audio.

### **Combine Video & Audio**
- Combines **screen video**, **system audio**, and **microphone audio** into a single **media stream**.
- The combined stream is used for **live preview** and **recording**.

---

## **4. Recording Controls**

### **Start Recording**
- **Action**: Clicking the Start button begins the recording.
- **How It Works**:
  - **MediaRecorder** starts capturing the combined video and audio stream.
  - A message appears: **"Recording in Progress..."**.

### **Stop Recording**
- **Action**: Clicking the Stop button stops the recording.
- **How It Works**:
  - The app stops the **MediaRecorder** and finalizes the video file.

### **Pause/Resume Recording (Optional)**
- This functionality is **not currently implemented**, but it can be added using:
  - **MediaRecorder.pause()** to pause the recording.
  - **MediaRecorder.resume()** to resume the recording.

---

## **5. Automatic File Download**

### **Download MP4 File**
- **How It Works**:
  - Once the recording stops, the app automatically generates a **downloadable MP4 file**.
  - The video file is named **recording.mp4**.
  - No manual saving or file dialogs are required.
- **Technical Details**:
  - Uses the **Blob API** and **URL.createObjectURL()** to create the download link.

---

## **6. Context Menu for Source Selection**

### **Custom Context Menu**
- **How It Works**:
  - When the user clicks **"Select Source"**, a context menu appears listing available screen and window sources.
  - The user selects the source they want to preview and record.
- **Implementation**:
  - Uses **Electron's Menu API** to create a context menu.

---

## **7. User Notifications**

### **Recording Message**
- **What It Does**:
  - While recording, a message appears stating: **"Recording in Progress..."**.
  - The message disappears when recording stops.

### **Error Notifications**
- **What It Does**:
  - If an error occurs (like issues getting screen sources or issues with media recording), the error is logged to the **console** for debugging purposes.

---

## **8. App Lifecycle Management**

### **Multi-Platform Support**
- **Supported Platforms**: 
  - Works on **Windows**, **macOS**, and **Linux**.

### **App Quit Behavior**
- **Windows and Linux**: The app quits completely when all windows are closed.
- **macOS**: The app follows macOS behavior, where the app remains open even after all windows are closed.

### **App Relaunch Behavior**
- **macOS Only**:
  - If the app is re-activated (by clicking its icon on the dock) and no windows are open, a **new window is created**.

---

## **9. Secure IPC Communication**

### **Context Isolation**
- **What It Does**:
  - Uses **Electron's context isolation** for enhanced security.
  - The **preload script** exposes only limited, secure methods to the renderer via `window.electronAPI`.

### **Custom IPC Handlers**
- **Available Handlers**:
  - **Get Available Sources**: Calls `ipcRenderer.invoke('get-sources')` to get available screen and window sources.
  - **Show Context Menu**: Calls `ipcRenderer.invoke('show-context-menu')` to display the context menu.
  - **Listen for Source Selection**: Uses `ipcRenderer.on('context-menu-selection')` to listen for the user's source selection.

---

## **10. Security Features**

### **Context Isolation**
- **Best Practices**:
  - Ensures that the renderer process **(user-facing UI)** cannot access **Node.js modules directly**.
  - The **preload script** exposes only limited, safe functions via **window.electronAPI**.
  
### **No Remote Module**
- The **Electron remote module** is disabled to avoid potential security risks.

### **No Node Integration**
- **Node.js integration is disabled** in the renderer to reduce potential attack vectors.

---

# **Updates You Can Add**

---

## **1. Cross-Platform Compatibility**
- **Purpose**: Ensure that the application runs smoothly on **Windows**, **macOS**, and **Linux**.  
- **Benefit**: Expanding cross-platform compatibility increases the user base and allows a broader audience to use the tool.  
- **Impact**: Improves user reach and usability on all major desktop platforms, enhancing the app's utility and accessibility.  

---

## **2. Improved UI/UX**
- **Purpose**: Enhance the user interface (UI) and user experience (UX) to make the application more intuitive and visually appealing.  
- **Benefit**: 
  - Results in a **better user experience**, reducing learning curves for new users.  
  - Improves **user satisfaction**, encouraging repeat use of the application.  
- **Possible Enhancements**:  
  - Add **drag-and-drop features**.  
  - Use a modern **design system** or **UI framework** (like **Bulma** or **Tailwind CSS**).  
  - Add tooltips, animations, and better error messages to improve user guidance.  

---

## **3. Export Options (e.g., Export in Different Formats)**
- **Purpose**: Provide users with the ability to export recordings in multiple file formats.  
- **Possible Formats**:  
  - **MP4** (default)  
  - **WEBM**  
  - **AVI**  
  - **MKV**  
- **Benefit**:  
  - **Flexibility**: Users can choose file formats that best fit their workflow or platform constraints.  
  - **Versatility**: Enables sharing on platforms that only support specific file formats.  
- **Implementation**:  
  - Add a file format selection menu before recording or after recording.  
  - Use tools like **FFmpeg** for format conversion.  

---

## **4. Audio Control (Select Input Audio Sources)**
- **Purpose**: Allow users to select and manage input audio sources, such as **internal system audio** and **external microphones**.  
- **Benefit**:  
  - **Customization**: Users can choose whether to record internal audio, microphone audio, or both.  
  - **Content Creation**: Useful for **content creators**, **educators**, and **streamers** who need to manage multiple audio inputs.  
- **Possible Enhancements**:  
  - Add an **audio source selector** in the UI to let users pick from available input devices.  
  - Use **navigator.mediaDevices.enumerateDevices()** to list all available audio devices.  
  - Allow users to **toggle audio sources** during recording.  

---
       |

These updates will significantly enhance the **usability**, **customization**, and **cross-platform compatibility** of the application, making it more versatile for end users and increasing its marketability.


