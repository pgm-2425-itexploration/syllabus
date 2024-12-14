---
title: 'Websockets'
synopsis: 'WebSockets is a protocol that enables full-duplex, bidirectional communication between a client and a server over a single, persistent connection. Unlike traditional HTTP, which relies on request-response cycles, WebSockets allow both the client and server to send data at any time, making them ideal for real-time applications like chat systems, online gaming, and collaborative tools.'
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
      content: 'websockets front-end'
---

# Websockets & Socket.IO

WebSocket is a protocol that enables full-duplex, bidirectional communication between a client (such as a browser or application) and a server over a single, persistent connection. Unlike traditional HTTP requests, which follow a request-response model initiated by the client, WebSockets allow both the client and server to send data to each other at any time. This feature makes WebSockets particularly well-suited for real-time applications like chat apps, live notifications, multiplayer games, and collaborative tools.

## How WebSockets work

When a WebSocket connection is initiated, it begins with a standard HTTP request known as a handshake. The client sends this HTTP request to the server, including a specific header (Upgrade: websocket) signaling its intention to establish a WebSocket connection. Once the server accepts this request and sends back an acknowledgment, the connection upgrades to the WebSocket protocol, enabling direct two-way communication over a single, long-lived TCP connection.

This persistent connection eliminates the need for repeated HTTP requests, reducing latency and increasing efficiency. After the handshake, messages are exchanged as lightweight frames, avoiding the overhead of headers typically associated with HTTP communication.

## Why Use Websockets?
WebSockets are highly valuable for scenarios that demand low latency, real-time updates, or interactive communication. Common use cases include:

1. **Live Chat Applications**: WebSockets support instant message exchange, ensuring seamless and real-time interaction between users.
2. **Online Gaming**: Real-time gameplay requires near-instant communication between clients and servers for events, actions, and updates, which WebSockets enable with minimal delay.
3. **Collaborative Tools**: Tools like shared document editors or online whiteboards rely on WebSockets to provide real-time updates as users interact simultaneously.
4. **Financial Dashboards**: Applications such as stock tickers or cryptocurrency trackers benefit from real-time data streaming provided by WebSockets.
5. **IoT and Sensor Data Streaming**: WebSockets enable continuous communication between IoT devices and central servers, making them ideal for transmitting sensor data.

## Benefits of WebSockets

- **Real-Time Communication**: WebSockets enable instantaneous data transfer, crucial for time-sensitive applications.
- **Persistent Connection**: Eliminates the need to repeatedly open and close connections, reducing latency and resource overhead.
- **Efficiency**: Utilizes a single TCP connection, exchanging data as lightweight packets rather than full HTTP requests, conserving bandwidth.
- **Bidirectional Communication**: Allows both client and server to send messages independently, unlike HTTP’s client-initiated request model.
- **Reduced Server Load**: Avoiding repeated HTTP connections significantly reduces server workload, especially in high-frequency communication scenarios.




### Sockets.IO

Socket.IO is a widely-used JavaScript library that builds upon the WebSocket protocol, simplifying its implementation and extending its capabilities. While WebSockets provide the foundation for real-time communication, implementing them directly can be complex. Socket.IO addresses this by offering a high-level abstraction and additional features such as:
1. Automatic Reconnection: Socket.IO handles reconnection in case of network interruptions, ensuring seamless communication.
2. Fallback Mechanisms: If WebSockets are unsupported (e.g., in older browsers or restrictive network environments), Socket.IO gracefully falls back to alternative methods like HTTP long polling.
3. Cross-Browser Compatibility: Ensures consistent behavior across different browsers by abstracting away compatibility issues.
4. Room and Namespace Support: Provides structured ways to segment communication into rooms or namespaces for better management.
5. Event-Based Communication: Uses an event-driven model, allowing developers to easily define and handle custom events between clients and servers.

### How Socket.IO Works

Socket.IO consists of two primary components:
- **Client Library**: A JavaScript library that runs in browsers or Node.js client applications.
- **Server Library**: A Node.js library that manages WebSocket connections and provides APIs for handling events, rooms, and namespaces.

When a client connects to a Socket.IO server, it first attempts to establish a WebSocket connection. If this fails, it falls back to alternative protocols like HTTP long polling. Once the connection is established, communication occurs using an event-based system, where developers can emit and listen for events.

You can use Socket.IO to simplify development and to use enhanced features.

## Building a Real-Time Project with WebSockets

Now that you understand how WebSockets work and their role in enabling real-time communication, it’s time to put that knowledge into practice. In this section, we’ll create a real-time chat application where multiple users can connect and chat with each other seamlessly.

## Setup 

This chat application will contain a front-end made in React, and a Nodejs back-end. First we will start with the backend. 

Make a folder for the backend and give initialize a Node.js project. Run these commands in the root of your project:

``` bash
mkdir server
cd server
npm init
```

make a file called `server.js`, this file will contain all the back-end code you will need for a real-time chat application.

First, install the required libraries:

```bash
npm install express socket.io
```

Now u can import the libraries in your server:

``` js
const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
```

Now make a server by initializing a express instance. We then use the http.createServer function to create an HTTP server and pass in the Express app. This allows Socket.IO to use the server for WebSocket communication.


``` js
const app = express();
const server = http.createServer(app);

```

We can now use Socket.io as a server by using `io`. io is an instance of the Socket.IO server, created by passing the HTTP server to it. 

With this code you can initialize the Websocket server: 

``` js
const io = new Server(server, {
  cors: {
    origin: "*", // Allows cross-origin requests from any domain
    credentials: true,
  },
});

// Handle WebSocket connections here
io.on("connection", (socket) => {
  console.log("A new user has connected", socket.id);

  // Listen for incoming messages from clients
  socket.on("message", (message) => {
    // Broadcast the message to all connected clients
    io.emit("message", message);
  });

  // Handle disconnections
  socket.on("disconnect", () => {
    console.log(socket.id, "disconnected");
  });
});
```

The last step for the backend is to allocate a port to run the server on: 

``` js
server.listen(5000, () => {
  console.log("Server is running on port 5000");
});
```

Run your server with:

```bash
node server.js
```

The first step is done, now we will create the front-end of the application. We will do this with React. 

In the root of your project you can create a new React application called client. You can do this by runnning this command:

```bash
npx create-react-app client
```

In your src folder, create a new folder called **components**. In this folder create a new File called "Chat.jsx". This will contain all our Chat functionalities.

Install the package for the websockets:

``` bash
npm install socket.io-client
```

In your Chat.jsx import the necessary packages:

``` js
import { useState, useEffect } from "react";
import io from "socket.io-client";
```

Now intialize a Websocket with the following line:

``` js
const socket = io("http://localhost:5000");
```

Now we can create the component function:

``` js
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

Last but not least, paste the following code in your App.jsx so that we use the Chat component: 

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

## Final Conclusion

In this tutorial, we’ve explored how to implement real-time communication in web applications using WebSockets and Socket.IO. By creating a simple chat application with React and Node.js, we’ve learned how WebSockets enable full-duplex communication between the client and the server, providing the foundation for real-time, bidirectional data exchange.

Socket.IO simplifies the use of WebSockets by offering additional features such as automatic reconnection, fallback mechanisms, and support for events, rooms, and namespaces. These features allow us to build robust, scalable real-time applications with minimal effort.

In the backend, we set up a Node.js server with Express and Socket.IO to handle WebSocket connections. On the frontend, we used React to build a simple user interface that communicates with the server through WebSockets.

With this knowledge, you can further enhance your application by adding features like user authentication, private messaging, or even integrating it with databases to persist chat history. The possibilities are endless, and real-time communication is a powerful tool to bring your web applications to life.


## Next Steps

### 1. User Authentication and Usernames

- Implement User Authentication: Add user authentication to your app so users can log in before sending messages. You can use JWT (JSON Web Tokens) for a stateless authentication system or integrate with popular authentication services like Firebase or OAuth.
- Allow Custom Usernames: Let users set a unique username when they log in. You can store these usernames on the server-side and display them with each message in the chat.

### 2. Private Messaging

- Create Private Chat Rooms: Extend your app to support private messaging between users. You can create private chat rooms where only two users can communicate. Use the concept of "rooms" in Socket.IO to manage which users are allowed to send and receive messages within specific rooms.
- Direct Message Functionality: Provide a UI for users to search for and initiate direct messages with other users. This feature is useful for users who may want to have one-on-one conversations rather than group chats.

### 3. Message Persistence and Database Integration

- Store Chat History in a Database: Currently, your chat messages are only stored in memory, meaning they’ll be lost when the server restarts. To address this, you can integrate a database like MongoDB or PostgreSQL to persist chat messages. This way, users can see their message history even after disconnecting and reconnecting.
- Integrate with a Backend Framework: Expand your backend by integrating a more sophisticated framework like Express or NestJS, which will allow for better scalability, middleware management, and routing for features like user authentication or message storage.
