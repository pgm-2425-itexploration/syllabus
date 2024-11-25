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

## Installation

To get started with Websockets, you need to install the necessary libraries or dependencies depending on your project requirements and setup.

In this tutorial we will use Node.js so make sure Node.js is installed on your machine. You can download it from the official Node.js website. Node.js will also include npm (Node Package Manager), which you’ll use to install libraries.

To install Socket.io we will install two seperate parts. A server-side library for Node.js and a client-side library for the browser. To install the server-side library run this command:

``` bash
npm install socket.io  
```

For the client-side, you can either use a CDN link in your HTML or install it via npm for more control:

``` bash
npm install socket.io-client
```

