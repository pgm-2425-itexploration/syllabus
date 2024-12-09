---
title: 'Websockets'
synopsis: 'This is an example tutorial. You can use this file as a template to create your own tutorials.'
date: 2024-10-10
author:
  name: 'Nicolas Ghyselincks'
  avatarUrl: '/assets/avatars/john-doe.png'
  socials:
    website: 'https://johndoe.eu'
    linkedin: 'https://www.linkedin.com/in/john-doe/'
    github: 'https://www.github.com/johndoe/'
thumbnailUrl: '/assets/example-image.jpg'
head:
  - - meta
    - name: description
      content: '...'
  - - meta
    - name: keywords
      content: 'svelte front-end'
---

# Websockets & Socket.IO

WebSocket is a protocol that enables two-way communication between a client and a server over a single connection. Unlike traditional HTTP requests, which are initiated by the client, WebSocket allows both client and server to send data to each other at any time, making it ideal for real-time applications like chat apps, live notifications, and multiplayer games.

Socket.IO, on the other hand, is a powerful library built on top of WebSocket. It simplifies the implementation of real-time communication by providing additional features like automatic reconnections, fallback support for older browsers, and an intuitive API for handling events. This makes it an excellent choice for developers who want to create reliable and scalable real-time systems without dealing with the complexity of WebSocket directly.

In this tutorial, we will take a look at how we can make a chat application using websockets. 


## What are Websockets?

WebSockets are a communication protocol that provides full-duplex, real-time interaction between a client and a server. Unlike traditional HTTP, which follows a request-response model, WebSockets establish a persistent connection that remains open for continuous data exchange. This means both the client and the server can send and receive messages independently, without the need to repeatedly establish new connections.

WebSockets are particularly useful for applications where real-time updates are essential, such as live chat systems, online gaming, financial dashboards, and collaborative tools. They are designed to work efficiently with minimal overhead, enabling fast and responsive user experiences.

When a WebSocket connection is established, it begins with a standard HTTP request known as the handshake. Once the handshake is completed, the protocol upgrades to WebSocket, allowing seamless two-way communication over the same connection.

### Sockets.IO

Socket.IO is a JavaScript library that simplifies the process of working with WebSockets. While WebSockets provide the foundation for real-time communication, implementing them from scratch can be complex and requires handling low-level details, like reconnection logic, browser compatibility, and fallback mechanisms for environments where WebSocket is not supported.

## Setup 

To get started with Websockets, you need to install the necessary libraries or dependencies depending on your project requirements and setup.

In this tutorial we will use Node.js so make sure Node.js is installed on your machine. You can download it from the official Node.js website. Node.js will also include npm (Node Package Manager), which you’ll use to install libraries.

This chat application will contain a front-end made in React, and a Nodejs back-end. First we will start with the backend. 

``` bash
mkdir server
cd server
npm init
```

Make a server.js file and paste this in:

``` js
const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    credentials: true,
  },
});

io.on("connection", (socket) => {
  console.log("A new user has connected", socket.id);

  socket.on("message", (message) => {
    io.emit("message", message);
  });

  socket.on("disconnect", () => {
    console.log(socket.id, " disconnected");
  });
});

server.listen(5000, () => {
  console.log("Server is running on port 5000");
});

```

Run your server with:

```bash
node server.js
```

The first step is done, now we will create the front-end of the application. In the root of the application make a React app:

```bash
npx create-react-app client
```

In the App.js paste the following code: 

``` js
import logo from './logo.svg';
import Chat from "./components/Chat";
import './App.css';

function App() {
  return (
    <Chat />     
  );
}

export default App;
```

Now it's time to create the Chat component. Paste the following code in Chat.jsx:

``` jsx
import { useState, useEffect } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:5000"); // Replace with your server address

function Chat() {
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState("");

  useEffect(() => {
    // Socket.IO event listeners

    // Listen for incoming messages
    socket.on("message", (message) => {
      setMessages([...messages, message]);
    });

    return () => {
      // Cleanup on component unmount
      socket.off("message");
    };
  }, [messages]);

  const sendMessage = () => {
    if (messageInput.trim() !== "") {
      const message = { text: messageInput, timestamp: new Date() };
      socket.emit("message", message);
      setMessageInput("");
    }
  };

  return (
    <div className="flex justify-center items-center w-full h-screen bg-gradient-to-b from-blue-300 to-blue-200">
      <div className="bg-white rounded-lg w-96 h-96 p-4 shadow-md">
        <div className="flex flex-col h-full">
          <div className="flex-1 p-2 overflow-y-auto bg-gray-100 rounded-md">
            {messages.map((msg, index) => (
              <div key={index} className="flex flex-col items-start">
                <div
                  className="bg-blue-500 
                   text-white p-2 rounded-md"
                >
                  {msg.text}
                </div>
                <span className="text-gray-500 text-xs">
                  {new Date(msg.timestamp).toLocaleTimeString()}
                </span>
              </div>
            ))}
          </div>
          <div className="p-2 border-t border-gray-300">
            <div className="flex">
              <input
                type="text"
                className="w-full px-2 py-1 border rounded-l-md outline-none"
                placeholder="Type your message..."
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
              />
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600"
                onClick={sendMessage}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
```



