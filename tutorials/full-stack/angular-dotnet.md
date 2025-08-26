---
title: "Angular + .NET: A Complete Guide"
synopsis: "Learn how to build a modern full-stack application with Angular as frontend and .NET as backend. This tutorial covers installation, configuration, basic and advanced functionality, best practices, and more."
date: 2024-10-10
author:
  name: "Gust Pêre"
  avatarUrl: "/assets/avatars/john-doe.png"
  socials:
    website: ""
    linkedin: "https://www.linkedin.com/in/gust-petre/"
    github: ""
thumbnailUrl: "/assets/tutorials/angular/angular_logo.png"
head:
  - - meta
    - name: description
      content: "A deep dive tutorial for developers about building a full-stack application with Angular and .NET."
  - - meta
    - name: keywords
      content: "angular dotnet full-stack tutorial web development api frontend backend"
sources:
  - title: "Angular - Official documentation"
    url: "https://angular.io/docs"
  - title: ".NET - Official documentation"
    url: "https://learn.microsoft.com/en-us/dotnet/"
  - title: "GitHub Classroom Repository"
    url: "https://classroom.github.com/a/AZUUOYo3"
  - title: "VitePress - Docs"
    url: "https://vitepress.dev/"
  - title: "Markdown Guide"
    url: "https://www.markdownguide.org/"
---

## What's the Difference? .NET, ASP.NET, and ASP.NET Core

Before we dive in, it's important to clarify the terminology, as it can be confusing for newcomers:

- **.NET** is the overall development platform from Microsoft. It supports building all kinds of applications (web, desktop, mobile, cloud, etc.) and is the foundation for everything else.
- **ASP.NET** is the original web framework for .NET, released in the early 2000s. It is Windows-only and sometimes called "ASP.NET Framework" or "ASP.NET MVC."
- **ASP.NET Core** is the modern, cross-platform version of ASP.NET. It was introduced in 2016, is open source, runs on Windows, Linux, and macOS, and is much faster and more modular. Today, when people talk about building web APIs or web apps with .NET, they almost always mean **ASP.NET Core**.

**In this tutorial, we focus on building a full-stack application with Angular (frontend) and ASP.NET Core (backend).**

# Angular + ASP.NET Core: A Complete Guide

## Introduction

Angular and ASP.NET Core are a great match when it comes to building modern web apps. Angular, made by Google, helps you create fast and interactive single-page applications (SPAs) on the front end. On the back end, you've got ASP.NET Core from Microsoft, a flexible, cross-platform framework that's perfect for building APIs and web services.

Together, they offer a solid setup that's popular in the real world. Thanks to the clean separation between front and back ends, their scalability, and all the helpful tools they come with. In this tutorial, we'll walk you through how to build a simple full-stack app using both technologies. We'll keep things beginner-friendly, so you don't need a complex backend or database to follow along.

### Why Angular + ASP.NET Core?

- **Scalability**: Both frameworks are suitable for small and large projects.
- **Community and support**: Angular and ASP.NET Core have large, active communities and extensive documentation.
- **Separation of concerns**: You can develop and deploy frontend and backend independently.
- **Versatility**: Suitable for web apps, mobile apps (with Ionic or MAUI), and even desktop apps.

### Who is this tutorial for?

This tutorial is for developers who want to learn how to build a modern web application with Angular and ASP.NET Core, without immediately setting up complex infrastructure. You need basic knowledge of JavaScript, HTML, and optionally C#, but everything is explained step by step.

**What will you learn?**

- How to set up and connect an Angular frontend and an ASP.NET Core backend
- Implementing CRUD functionality
- UX improvements and validation
- Best practices for project structure, security, and performance
- How to expand your app with fun features
- And more!

---

## Installation

Good preparation is half the battle. In this section, we explain which tools you need, how to install them, and how to set up your first projects.

### Requirements

- **Node.js (v18+)**: For running Angular and managing packages.
- **.NET SDK (v8+)**: For building and running the backend.
- **Angular CLI**: Command-line tool to quickly generate Angular projects.
- **Visual Studio Code or JetBrains Rider**: Modern code editors with great support for Angular and .NET.

#### Why these tools?

- **Node.js** is the runtime for JavaScript outside the browser and essential for modern web development.
- **.NET SDK** provides everything you need to build C# applications, including a powerful CLI.
- **Angular CLI** speeds up your workflow: you can create new components, services, and more in seconds.
- **VS Code** is lightweight, free, and has countless extensions for Angular, .NET, Git, and more.

### Steps

1. **Install Node.js**  
   Download from [nodejs.org](https://nodejs.org/)  
   Check installation:

   ```bash
   node -v
   ```

   You should see the installed version. Version 18 or higher is recommended.

2. **Install .NET SDK**  
   Download from [.NET download page](https://dotnet.microsoft.com/download)  
   Check installation:

   ```bash
   dotnet --version
   ```

   You should see the installed version. Version 8 or higher is recommended.

3. **Install Angular CLI**

   ```bash
   npm install -g @angular/cli
   ng version
   ```

   This installs the CLI globally. Check with `ng version` if everything works.

4. **Create projects**

   ```bash
   ng new angular-dotnet-frontend
   dotnet new webapi -n angular-dotnet-backend
   ```

   For Angular, choose routing (Yes) and SCSS or CSS as stylesheet.

5. **Project structure**
   <!-- Project structure image removed - file not found -->
   You now have two folders: one for the frontend and one for the backend. This makes it easy to develop and test both parts separately.

#### Extra tips

- Install the Angular Language Service extension in VS Code for better autocompletion.
- Use Git from the start to track your progress.
- Prefer working online? Try [StackBlitz](https://stackblitz.com/) for Angular or [GitHub Codespaces](https://github.com/features/codespaces).

---

## Configuration

In this chapter, you'll learn how to configure the Angular frontend and ASP.NET Core backend so they work well together. We cover setting up both projects, enabling CORS (Cross-Origin Resource Sharing) in .NET, and setting up a proxy in Angular so your frontend can easily communicate with your backend during development.

### 1. Setting up the Angular frontend

Navigate to your frontend project folder:

```bash
cd angular-dotnet-frontend
```

Start the Angular development server:

```bash
ng serve
```

By default, this runs on [http://localhost:4200](http://localhost:4200).

#### Angular project structure

- **src/app/**: Your components, services, and modules.
- **src/assets/**: For images, icons, and other static files.
- **angular.json**: Project configuration.
- **package.json**: Manages dependencies and scripts.

### 2. Setting up the ASP.NET Core backend

Open a new terminal and navigate to the backend folder:

```bash
cd Angular-dotnet-backend
```

Start the .NET Web API:

```bash
dotnet run
```

By default, this runs on [https://localhost:5001](https://localhost:5001) (or port 5000 for http). **Note:** Your system might use different ports (like 5195, 7000, etc.). Check the console output when you run `dotnet run` to see the actual URLs.

#### ASP.NET Core project structure

- **Controllers/**: Your API controllers.
- **Program.cs**: Entry point of your application.
- **appsettings.json**: Configuration files.

### 3. Enabling CORS in .NET

To allow requests from your Angular frontend, you need to enable CORS in your .NET backend. Open `Program.cs` in your backend project and add the following:

```csharp
var builder = WebApplication.CreateBuilder(args);

// Enable CORS for Angular development server
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAngularDev",
        policy => policy.WithOrigins("http://localhost:4200")
                        .AllowAnyHeader()
                        .AllowAnyMethod());
});

var app = builder.Build();

// Use the CORS policy
app.UseCors("AllowAngularDev");

// ... your endpoints and app.Run() ...
```

This allows your Angular app to send requests to your .NET API during development.

### 4. Setting up a proxy in Angular

To avoid CORS issues during development, you can set up a proxy in Angular. In the root of your Angular project, create a file called `proxy.conf.json`:

```json
{
  "/api": {
    "target": "https://localhost:5000",
    "secure": false,
    "changeOrigin": true,
    "logLevel": "debug"
  }
}
```

**Important:** Replace `5000` with the actual port your .NET backend is running on (check your console output when you run `dotnet run`).

Then update your `angular.json` so your Angular server uses this proxy:

```json
"serve": {
  "options": {
    "proxyConfig": "proxy.conf.json"
  }
}
```

Now start your Angular app with:

```bash
ng serve --proxy-config proxy.conf.json
```

You can now make API calls to `/api/...` in your Angular code, and these will be automatically forwarded to your .NET backend.

### 5. Project structure diagram

Below is a diagram of the typical project structure:

```mermaid
graph TD;
  A[angular-dotnet-frontend (Angular)] -- API calls --> B[angular-dotnet-backend (.NET Web API)]
  B -- Data --> C[(Database)]
```

#### Extra tips

- Use environment files (`environment.ts`) in Angular to manage API URLs and settings.
- Run your backend on a different port if you encounter conflicts.
- Use HTTPS for your backend to avoid issues with modern browsers.

---

## Core Functionality

In this chapter, we'll build the core of our full-stack application: a simple to-do list app where you can create, view, update, and delete tasks (CRUD). We'll cover both the backend (API in .NET) and the frontend (Angular), and show how they communicate.

### 1. Designing the data model

#### .NET (C#) - Model

For this simple demo, the data model is defined directly in the backend's `Program.cs` file as a C# record:

```csharp
// Program.cs (at the bottom)
record TaskItem
{
    public int Id { get; set; }
    public string Title { get; set; } = string.Empty;
    public bool IsCompleted { get; set; }
}
```

**Explanation:**

- **Id**: Unique identifier for each task.
- **Title**: The name or description of the task.
- **IsCompleted**: Whether the task is completed.

> In larger projects, you would typically place models in a separate Models folder, but for this tutorial, everything is kept in one file for simplicity.

### 2. Building the API in .NET

All API logic is contained in a single file: Program.cs. This keeps the project simple and easy to follow. Normally in big projects, you would use more files to keep things clean!

```csharp
// Program.cs

// Simple .NET backend for a task list (no database)
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Hosting;
using System.Collections.Generic;

var builder = WebApplication.CreateBuilder(args);

// CORS for Angular frontend
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAngularDev",
        policy => policy.WithOrigins("http://localhost:4200")
                        .AllowAnyHeader()
                        .AllowAnyMethod());
});

var app = builder.Build();
app.UseCors("AllowAngularDev");

// In-memory list of tasks


var tasks = new List<TaskItem>();

// Get all tasks
app.MapGet("/api/tasks", () => tasks);

// Add a new task
app.MapPost("/api/tasks", (TaskItem task) =>
{
    task.Id = tasks.Count > 0 ? tasks[^1].Id + 1 : 1;
    tasks.Add(task);
    return Results.Created($"/api/tasks/{task.Id}", task);
});

// Update a task
app.MapPut("/api/tasks/{id}", (int id, TaskItem updatedTask) =>
{
    var task = tasks.Find(t => t.Id == id);
    if (task is null) return Results.NotFound();
    task.Title = updatedTask.Title;
    task.IsCompleted = updatedTask.IsCompleted;
    return Results.NoContent();
});

// Delete a task
app.MapDelete("/api/tasks/{id}", (int id) =>
{
    var task = tasks.Find(t => t.Id == id);
    if (task is null) return Results.NotFound();
    tasks.Remove(task);
    return Results.NoContent();
});

app.Run();

// Simple task model
record TaskItem
{
    public int Id { get; set; }
    public string Title { get; set; } = string.Empty;
    public bool IsCompleted { get; set; }
}
```

**Explanation:**

- **GET**: Retrieves all tasks.
- **POST**: Adds a new task.
- **PUT**: Updates an existing task.
- **DELETE**: Deletes a task.

> **Tip:** In production, use a database (like SQLite, SQL Server, or PostgreSQL) instead of a static list. For this tutorial, we keep it simple.

### 3. Angular frontend: service and component

#### Service for API communication

```typescript
// src/app/services/task.service.ts
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

export interface Task {
  id: number;
  title: string;
  isCompleted: boolean;
}

@Injectable({ providedIn: "root" })
export class TaskService {
  private apiUrl = "/api/tasks";

  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }

  addTask(task: Partial<Task>): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, task);
  }

  updateTask(task: Task): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${task.id}`, task);
  }

  deleteTask(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
```

#### Component for the task list

```typescript
// src/app/components/task-list/task-list.component.ts
import { Component, OnInit } from "@angular/core";
import { Task, TaskService } from "../../services/task.service";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-task-list",
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: "./task-list.component.html",
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];
  newTaskTitle = "";

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.loadTasks();
  }

  loadTasks() {
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }

  addTask() {
    if (!this.newTaskTitle.trim()) return;
    this.taskService
      .addTask({ title: this.newTaskTitle, isCompleted: false })
      .subscribe(() => {
        this.newTaskTitle = "";
        this.loadTasks();
      });
  }

  updateTask(task: Task) {
    this.taskService.updateTask(task).subscribe();
  }

  deleteTask(id: number) {
    this.taskService.deleteTask(id).subscribe(() => this.loadTasks());
  }
}
```

#### Template (HTML)

```html
<!-- src/app/components/task-list/task-list.component.html -->
<div class="task-list-container">
  <h2>My Task List</h2>
  <p>
    Add tasks, check them off, or delete them. Everything happens directly in
    the server's memory (no database).
  </p>

  <form (submit)="addTask(); $event.preventDefault()">
    <input
      type="text"
      [(ngModel)]="newTaskTitle"
      name="newTaskTitle"
      placeholder="E.g.: Buy groceries"
      required
    />
    <button type="submit">Add Task</button>
  </form>

  <ul *ngIf="tasks.length > 0; else noTasks">
    <li *ngFor="let task of tasks">
      <input
        type="checkbox"
        [(ngModel)]="task.isCompleted"
        (change)="updateTask(task)"
      />
      <span [ngClass]="{ completed: task.isCompleted }">{{ task.title }}</span>
      <button (click)="deleteTask(task.id)">Delete Task</button>
    </li>
  </ul>

  <ng-template #noTasks>
    <p>No tasks found. Add one!</p>
  </ng-template>

  <footer
    style="margin-top:2rem; text-align:center; color:#888; font-size:0.9em;"
  >
    <hr />
    <p>Demo app without a database, for explanation and testing only.</p>
  </footer>
</div>

<style>
  .task-list-container {
    max-width: 400px;
    margin: 2rem auto;
    padding: 1rem;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);
  }
  .task-list-container h2 {
    text-align: center;
  }
  .task-list-container form {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 1rem;
  }
  .task-list-container ul {
    list-style: none;
    padding: 0;
  }
  .task-list-container li {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.25rem 0;
  }
  .completed {
    text-decoration: line-through;
    color: #888;
  }
</style>
```

**Explanation:**

- **ngOnInit**: Loads the tasks when the page opens.
- **addTask**: Adds a new task via the API.
- **updateTask**: Updates the status of a task.
- **deleteTask**: Deletes a task.

#### Extra: Styling and UX

- Use clear buttons and labels.
- Add animations when adding/removing tasks.
- Make your app responsive with CSS Flexbox or Grid.

### 4. Testing the core functionality

- Start both the backend (`dotnet run`) and the frontend (`ng serve`).
- Open the Angular app in your browser and test adding, editing, and deleting tasks.
- Check the backend console to see if API calls are coming through correctly.
- Try edge cases: adding an empty task, task name too short, etc.

---

## Advanced Features

In this chapter, we go beyond the basics and add extra features that make your app more fun, user-friendly, and modern. We keep it accessible: you don't need a database or complex backend. All examples are directly applicable in your own project!

### 1. Validation and User Experience (UX)

#### Form validation in Angular

A good user experience starts with clear feedback. In Angular, you can easily add validation to your input fields:

```html
<!-- In task-list.component.html -->
<input
  [(ngModel)]="newTaskTitle"
  placeholder="New task..."
  required
  minlength="3"
  #titleInput="ngModel"
/>
<button (click)="addTask()" [disabled]="titleInput.invalid">Add</button>
<div *ngIf="titleInput.invalid && titleInput.touched" class="error">
  The task must be at least 3 characters long.
</div>
```

**Explanation:**

- With `required` and `minlength`, you validate directly in the template.
- With `#titleInput="ngModel"`, you can read the validation status.
- Show an error message if the field is invalid and the user has touched it.

#### Visual feedback and animations

Make your app more lively with simple CSS animations:
(Remove current CSS for better outcome)

```css
/* Modern, elegant styling for the task list */
:root {
  --primary: #6366f1;
  --primary-hover: #4f46e5;
  --primary-light: #e0e7ff;
  --accent: #ef4444;
  --accent-hover: #dc2626;
  --success: #10b981;
  --background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --card-bg: rgba(255, 255, 255, 0.95);
  --card-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  --border: rgba(255, 255, 255, 0.2);
  --text: #1f2937;
  --text-muted: #6b7280;
  --input-bg: rgba(255, 255, 255, 0.9);
  --radius: 16px;
  --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

body {
  background: var(--background);
  font-family: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
  color: var(--text);
  min-height: 100vh;
  margin: 0;
  padding: 20px;
}

.task-list-container {
  max-width: 520px;
  margin: 2rem auto;
  padding: 2.5rem;
  background: var(--card-bg);
  border-radius: var(--radius);
  box-shadow: var(--card-shadow);
  backdrop-filter: blur(10px);
  border: 1px solid var(--border);
  position: relative;
  overflow: hidden;
}

.task-list-container::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(
    90deg,
    var(--primary),
    var(--success),
    var(--accent)
  );
  border-radius: var(--radius) var(--radius) 0 0;
}

.task-list-container h2 {
  text-align: center;
  margin: 0 0 0.5rem 0;
  background: linear-gradient(135deg, var(--primary), var(--success));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 800;
  font-size: 2.25rem;
  letter-spacing: -0.025em;
}

.task-list-container p {
  text-align: center;
  color: var(--text-muted);
  margin: 0 0 2rem 0;
  font-size: 1.1rem;
  line-height: 1.6;
}

.task-list-container form {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  position: relative;
}

.task-list-container input[type="text"] {
  flex: 1;
  padding: 1rem 1.25rem;
  border: 2px solid transparent;
  border-radius: 12px;
  font-size: 1.1rem;
  background: var(--input-bg);
  color: var(--text);
  transition: var(--transition);
  outline: none;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.task-list-container input[type="text"]:focus {
  border-color: var(--primary);
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1), 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}

.task-list-container button[type="submit"] {
  padding: 1rem 2rem;
  background: linear-gradient(135deg, var(--primary), var(--primary-hover));
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 4px 14px 0 rgba(99, 102, 241, 0.39);
  transition: var(--transition);
  position: relative;
  overflow: hidden;
  white-space: nowrap;
}

.task-list-container button[type="submit"]:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px 0 rgba(99, 102, 241, 0.5);
}

.task-list-container button[type="submit"]:active {
  transform: translateY(-1px);
}

.task-list-container ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.task-list-container li {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.25rem;
  border-radius: 12px;
  background: var(--input-bg);
  border: 1px solid rgba(255, 255, 255, 0.3);
  transition: var(--transition);
  position: relative;
  overflow: hidden;
}

.task-list-container li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  background: var(--primary);
  transform: scaleY(0);
  transition: var(--transition);
}

.task-list-container li:hover {
  transform: translateX(8px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

.task-list-container li:hover::before {
  transform: scaleY(1);
}

.task-list-container input[type="checkbox"] {
  width: 1.5em;
  height: 1.5em;
  accent-color: var(--success);
  cursor: pointer;
  transition: var(--transition);
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
}

.task-list-container input[type="checkbox"]:checked {
  transform: scale(1.1);
}

.task-list-container span {
  flex: 1;
  font-size: 1.1rem;
  font-weight: 500;
  transition: var(--transition);
}

.completed {
  text-decoration: line-through;
  color: var(--text-muted);
  font-style: italic;
  opacity: 0.7;
}

.task-list-container .delete-btn {
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, var(--accent), var(--accent-hover));
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 4px 14px 0 rgba(239, 68, 68, 0.39);
  transition: var(--transition);
  opacity: 0.8;
}

.task-list-container .delete-btn:hover {
  opacity: 1;
  transform: translateY(-2px);
  box-shadow: 0 8px 25px 0 rgba(239, 68, 68, 0.5);
}

.error {
  color: var(--accent);
  font-size: 0.9rem;
  margin-top: 0.5rem;
  padding: 0.75rem;
  background: rgba(239, 68, 68, 0.1);
  border-radius: 8px;
  border-left: 4px solid var(--accent);
}

footer {
  margin-top: 3rem;
  text-align: center;
  color: var(--text-muted);
  font-size: 0.95rem;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 12px;
  backdrop-filter: blur(5px);
}

@media (max-width: 640px) {
  body {
    padding: 10px;
  }

  .task-list-container {
    margin: 1rem auto;
    padding: 1.5rem;
    border-radius: 12px;
  }

  .task-list-container h2 {
    font-size: 1.75rem;
  }

  .task-list-container form {
    flex-direction: column;
    gap: 1rem;
  }

  .task-list-container button[type="submit"] {
    width: 100%;
  }

  .task-list-container li {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.75rem;
  }

  .task-list-container .delete-btn {
    align-self: flex-end;
  }
}
```

### 2. Saving tasks in localStorage

Want your to-do list to persist after refreshing the page? Use localStorage instead of a backend!

#### Service for localStorage

```typescript
// src/app/services/task.service.ts
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

export interface Task {
  id: number;
  title: string;
  isCompleted: boolean;
}

@Injectable({ providedIn: "root" })
export class TaskService {
  private storageKey = "tasks";

  constructor() {}

  getTasks(): Observable<Task[]> {
    const tasks = JSON.parse(localStorage.getItem(this.storageKey) || "[]");
    return of(tasks);
  }

  addTask(task: Partial<Task>): Observable<Task> {
    const tasks = JSON.parse(localStorage.getItem(this.storageKey) || "[]");

    const newTask: Task = {
      ...task,
      id: Date.now(),
      title: task.title || "",
      isCompleted: false,
    };
    tasks.push(newTask);
    localStorage.setItem(this.storageKey, JSON.stringify(tasks));
    return of(newTask);
  }

  updateTask(task: Task): Observable<void> {
    let tasks = JSON.parse(localStorage.getItem(this.storageKey) || "[]");
    tasks = tasks.map((t: Task) => (t.id === task.id ? task : t));
    localStorage.setItem(this.storageKey, JSON.stringify(tasks));
    return of();
  }

  deleteTask(id: number): Observable<void> {
    let tasks = JSON.parse(localStorage.getItem(this.storageKey) || "[]");
    tasks = tasks.filter((t: Task) => t.id !== id);
    localStorage.setItem(this.storageKey, JSON.stringify(tasks));
    return of();
  }
}
```

**Explanation:**

- Tasks are now stored in the browser, so you don't need a backend.
- Perfect for demos, prototypes, or small personal tools.
- You can extend this approach with extra fields, like deadlines or priority.

### 3. Themes and dark mode

Make your app more personal with a light/dark theme!

```css
/* styles.css */
body.dark {
  background: #222;
  color: #eee;
}
body.dark input,
body.dark button {
  background: #333;
  color: #eee;
  border: 1px solid #444;
}
```

```typescript
// In your main component (e.g., app.component.ts)
toggleTheme() {
  document.body.classList.toggle('dark');
}
```

```html
<!-- In app.component.html -->
<button (click)="toggleTheme()">Toggle theme</button>
```

**Explanation:**

- With one line of code, you can switch between light and dark.
- You can store the theme in localStorage so the preference is saved.

### 4. Simple animations with Angular

Use Angular's animation library for smooth transitions:

```typescript
// In your component
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  // ...
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [style({ opacity: 0 }), animate('300ms', style({ opacity: 1 }))]),
      transition(':leave', [animate('300ms', style({ opacity: 0 }))]),
    ]),
  ],
})
```

```html
<ul>
  <li *ngFor="let task of tasks" [@fadeInOut]>
    <!-- ... -->
  </li>
</ul>
```

**Explanation:**

- Angular animations are powerful and declarative.
- You can combine animations with Angular's *ngIf and *ngFor for dynamic lists.

---

## Best practices

A good codebase is not only functional, but also maintainable, readable, and extensible. Below are best practices you can apply, even in small projects without a backend or database.

### 1. Structure and organization

- **Split your code into components**: Create a separate Angular component for each logical unit. This keeps your code organized and reusable.
- **Use services for logic**: Place logic for data storage, filtering, or API calls in separate services. This keeps your components clean.
- **Clear folder structure**: Use folders like `components/`, `services/`, and `assets/` for components, services, and images respectively.
- **Document your code**: Add JSDoc or TypeDoc comments to important functions and classes.

### 2. Write clear and consistent code

- **Use TypeScript types**: Define interfaces for your data (like `Task`). This prevents errors and makes your code predictable.
- **Consistent naming**: Use clear, descriptive names for variables, functions, and components.
- **Format your code**: Use a formatter like Prettier or the built-in VS Code formatter.
- **Use linters**: Tools like ESLint and TSLint help you catch errors and inconsistencies early.

### 3. UX and accessibility

- **Accessible HTML**: Use semantic HTML and make sure your app is usable with keyboard and screen reader.
- **User feedback**: Show error messages, loading indicators, and confirmations for actions.
- **Responsive design**: Make sure your app works on mobile, tablet, and desktop.
- **Contrast and readability**: Ensure sufficient contrast between text and background, especially in dark mode.

### 4. Use version control

- **Git**: Always use version control, even for small projects. Make regular commits with clear messages.
- **.gitignore**: Add a `.gitignore` to keep build files, node_modules, and sensitive data out of your repo.
- **Branches**: Work with feature branches for larger additions or experiments.

### 5. Keep it fun!

- Experiment with animations, colors, and small interactions.
- Add easter eggs or small surprises for the user.
- Share your project with others and ask for feedback.
- Organize a code review with a friend or colleague.

---

## Future versions / updates

Web development never stands still! Both Angular and ASP.NET Core are constantly evolving. Here's a look at what to expect and how to stay up to date.

### Angular

- **Standalone Components**: Since Angular 14, you can create components without NgModules, making development easier.
- **Signals**: New in Angular for reactive state management, similar to React signals.
- **Improved tooling**: Angular CLI and DevTools are becoming more powerful and user-friendly.
- **More focus on performance**: Faster builds, smaller bundles, and better lazy loading.
- **Hydration and SSR**: Server Side Rendering and client hydration are increasingly important for performance and SEO.

### ASP.NET Core

- **.NET 8 and beyond**: Every November, a new LTS version is released with improvements in speed, minimal APIs, and cloud integration.
- **Blazor**: C# in the browser is maturing, with more possibilities for full-stack development without JavaScript.
- **AI integration**: More and more .NET APIs offer integration with AI and machine learning.
- **Minimal APIs**: Even easier and faster to set up small APIs.

**Tip:** Follow the official blogs, release notes, and community channels to stay up to date with the latest developments. Join (online) meetups, hackathons, and open source projects to deepen your knowledge.

---

## References & further learning

Below is an overview of all used and recommended resources, so you can continue learning and experimenting yourself:

### Official documentation

- [Angular Docs](https://angular.io/docs)
- [.NET Docs](https://learn.microsoft.com/en-us/dotnet/)
- [VitePress Docs](https://vitepress.dev/)
- [Markdown Guide](https://www.markdownguide.org/)

### Tutorials & inspiration

- [Angular Getting Started](https://angular.io/start)
- [Tour of Heroes Tutorial (Angular)](https://angular.io/tutorial)
- [Microsoft Learn: Build web APIs with ASP.NET Core](https://learn.microsoft.com/en-us/training/paths/build-web-apis-aspnet-core/)
- [Blazor University](https://blazor-university.com/)
- [Web.dev: Progressive Web Apps](https://web.dev/progressive-web-apps/)

### Tools

- [StackBlitz (online Angular IDE)](https://stackblitz.com/)
- [Visual Studio Code](https://code.visualstudio.com/)
- [GitHub Classroom](https://classroom.github.com/a/AZUUOYo3)

### Community & updates

- [Angular Blog](https://blog.angular.io/)
- [.NET Blog](https://devblogs.microsoft.com/dotnet/)
- [Reddit: r/angular](https://www.reddit.com/r/angular/)
- [Reddit: r/dotnet](https://www.reddit.com/r/dotnet/)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/angular)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/dotnet)

---

## Deep Dive: Component-based development in Angular

One of Angular's greatest strengths is its component-based development model. Instead of one big HTML page, you build your app from small, reusable building blocks: components. Each component has its own template, logic, and styling. This makes it easy to maintain, extend, and test your app.

### What is a component?

A component is a TypeScript class with an HTML template and optionally a CSS stylesheet. For example:

```typescript
import { Component } from "@angular/core";

@Component({
  selector: "app-greeting",
  template: `<h1>Hello, {{ name }}!</h1>`,
  styles: [
    `
      h1 {
        color: #007bff;
      }
    `,
  ],
})
export class GreetingComponent {
  name = "developer";
}
```

You use this component in another template with `<app-greeting></app-greeting>`.

### Benefits

- **Reusability**: Build a button, card, or form once and use it everywhere.
- **Testability**: Small components are easier to test.
- **Scalability**: Large apps remain manageable.

### Practical tips

- Keep components small and focused on one task.
- Use input/output properties to exchange data between components.
- Use services for shared logic or data.

---

## TypeScript: Angular's superpower

Angular uses TypeScript, a superset of JavaScript with types. This helps you catch errors early, better document your code, and improve tooling.

### Why TypeScript?

- **Type safety**: Fewer bugs due to type checks while coding.
- **Better autocompletion**: Your editor knows exactly which properties and methods are available.
- **Modern JavaScript**: TypeScript supports the latest JS features, even if browsers don't yet.

### Example

```typescript
interface Task {
  id: number;
  title: string;
  isCompleted: boolean;
}

function completeTask(task: Task): Task {
  return { ...task, isCompleted: true };
}
```

---

## REST API design and alternatives

Most web apps communicate with a backend via a REST API. But there are alternatives!

### REST

- **Resources**: Everything is a resource (e.g., /tasks, /users).
- **HTTP methods**: GET, POST, PUT, DELETE.
- **Stateless**: Each request contains all the info needed.

### GraphQL

- One endpoint, flexible queries.
- You only request the data you need.
- Popular in large apps with many different data types.

### gRPC

- Uses protocol buffers (faster, more compact).
- Ideal for microservices and real-time communication.

### When to choose what?

- **REST**: Simple, widely supported, easy to debug.
- **GraphQL**: Complex data, many clients, need for flexible queries.
- **gRPC**: High performance, internal communication between services.

---

## Security basics for web apps

Security is essential, even for small projects!

### Key points

- **XSS (Cross-Site Scripting)**: Use Angular's data binding, avoid `innerHTML`.
- **CSRF (Cross-Site Request Forgery)**: Use tokens for sensitive actions.
- **CORS**: Only allow trusted origins.
- **Sensitive data**: Never store passwords or tokens in localStorage without encryption.

### Extra tips

- Use Angular's built-in sanitization.
- Update dependencies regularly.
- Use environment variables for secrets.

---

## Testing in Angular and ASP.NET Core

Testing ensures reliability and confidence in your code.

### Angular

- **Unit tests**: Test individual functions and components with Jasmine/Karma.
- **End-to-end tests**: Test the entire app with Cypress or Protractor.

### ASP.NET Core

- **Unit tests**: Use xUnit or NUnit for C#.
- **Integration tests**: Test API endpoints with an in-memory server.

### Example Angular unit test

```typescript
describe("TaskService", () => {
  it("should add a task", () => {
    const service = new TaskService();
    service.addTask({ title: "Test", isCompleted: false }).subscribe((task) => {
      expect(task.title).toBe("Test");
    });
  });
});
```

---

## CI/CD and deployment options

Automate building, testing, and deploying your app!

### CI/CD

- **GitHub Actions**: Free for open source, easy to configure.
- **Azure DevOps**: Powerful for .NET and enterprise.
- **GitLab CI**: All-in-one platform.

### Deployment

- **Vercel/Netlify**: For Angular static sites.
- **Azure App Service**: For .NET backends.

### Tips

- Automate tests on every push.
- Use staging to test new features.
- Monitor your app after deployment (e.g., with Sentry or Application Insights).

---

## UX micro-interactions

Small animations and feedback make your app more fun and clearer.

### Examples

- **Button ripple effect**: Use Angular Material for beautiful buttons.
- **Snackbar/toast**: Show a message after an action.
- **Loading spinners**: Show that something is happening.
- **Transitions**: Use fade-in/fade-out when switching content.

### Tools

- [Angular Material](https://material.angular.io/)
- [ngx-toastr](https://www.npmjs.com/package/ngx-toastr)

---

## Accessibility (a11y)

Make your app usable for everyone!

### Tips

- Use semantic HTML (buttons, labels, headings).
- Add ARIA labels where needed.
- Ensure sufficient contrast.
- Test with keyboard (tab through your app).

---

## Community & open source contributions

The strength of Angular and ASP.NET Core lies in the community.

### How to contribute?

- Open an issue or pull request on GitHub.
- Write a blog or tutorial.
- Help others on Stack Overflow or Reddit.
- Organize or attend a meetup.

### Benefits

- You learn faster by collaborating.
- You build a network.
- You stay up to date with the latest developments.

---

## Common pitfalls and tips to avoid them

- **Too large components**: Split into smaller parts.
- **No version control**: Always use Git, even for small projects.
- **No tests**: Start with simple unit tests.
- **Too much logic in the template**: Move to the TypeScript class or a service.
- **Unsafe data storage**: Don't store sensitive data in localStorage.
- **No error handling**: Use try/catch and show clear error messages.
- **No documentation**: Write a short README and document your code.

---

## Extra inspiration: Build your own features!

- Create a calendar view for your tasks.
- Add notifications (browser notifications API).
- Make a widget for your desktop or mobile.
- Add a timer or pomodoro feature.
- Create a leaderboard if you track tasks with multiple people.
- Add an API for weather data, quotes, or GIFs.
- Integrate with Slack, Discord, or Teams.

---

## The History and Evolution of Angular and ASP.NET Core

Understanding the background of the tools you use can help you appreciate their strengths and design decisions. Both Angular and ASP.NET Core have rich histories and have evolved significantly over time.

### Angular

Angular was first released by Google in 2010 as "AngularJS" (version 1.x). It was a revolutionary framework for building dynamic web applications using two-way data binding and dependency injection. However, as web standards and developer needs evolved, the Angular team decided to rewrite the framework from scratch. In 2016, "Angular" (sometimes called Angular 2+) was released, offering a component-based architecture, TypeScript support, improved performance, and a more modern development experience. Since then, Angular has seen regular updates, introducing features like Ivy (a new rendering engine), standalone components, and improved tooling.

### ASP.NET Core

ASP.NET Core was introduced in 2016 as a modern, cross-platform version of ASP.NET. It was open source, runs on Windows, Linux, and macOS, and is much faster and more modular. Today, ASP.NET Core is the primary way to build web APIs and web apps with .NET.

---

## Comparing Stacks: Angular + ASP.NET Core vs. Others

When choosing a tech stack, it's helpful to compare your options. Here's how Angular + ASP.NET Core stacks up against other popular combinations:

| Stack                  | Frontend | Backend      | Language(s)    | Strengths                                     |
| ---------------------- | -------- | ------------ | -------------- | --------------------------------------------- |
| Angular + ASP.NET Core | Angular  | ASP.NET Core | TypeScript, C# | Enterprise-ready, scalable, strong typing     |
| React + Node.js        | React    | Node.js      | JavaScript     | Huge ecosystem, flexibility, fast prototyping |
| Vue + Firebase         | Vue      | Firebase     | JavaScript     | Rapid deployment, real-time, serverless       |
| Svelte + Go            | Svelte   | Go           | JavaScript, Go | Simplicity, performance, modern tooling       |
| Blazor + .NET          | Blazor   | .NET         | C#             | Full-stack C#, WebAssembly, .NET ecosystem    |

**Why choose Angular + ASP.NET Core?**

- Excellent for large, complex, or enterprise projects
- Strong typing and tooling
- Great for teams with C# and TypeScript experience
- Mature, stable, and well-supported

---

## Real-World Use Cases and Project Ideas

Angular + ASP.NET Core is used by companies and organizations worldwide. Here are some real-world scenarios and project ideas:

- **Enterprise dashboards**: Visualize business data, KPIs, and analytics with interactive charts and tables.
- **E-commerce platforms**: Build scalable online stores with secure payment integration and inventory management.
- **Internal tools**: Create custom admin panels, HR systems, or workflow automation tools.
- **Educational platforms**: Develop learning management systems, online quizzes, and course management apps.
- **Healthcare apps**: Secure patient portals, appointment scheduling, and telemedicine solutions.
- **IoT dashboards**: Monitor and control smart devices, sensors, and real-time data streams.
- **Personal productivity tools**: To-do lists, habit trackers, or budgeting apps.

**Project idea:** Build a collaborative to-do app where multiple users can share and assign tasks, with real-time updates using SignalR.

---

## Debugging and Troubleshooting

No project is complete without a few bugs! Here's how to debug and troubleshoot effectively in Angular and ASP.NET Core.

### Angular

- **Browser DevTools**: Use Chrome or Edge DevTools to inspect elements, debug JavaScript, and monitor network requests.
- **Angular DevTools**: An official browser extension for inspecting Angular component trees and state.
- **Console logging**: Use `console.log()` for quick checks, but remove or replace with proper logging in production.
- **Error messages**: Read stack traces carefully; they often point directly to the problem.
- **Hot Module Replacement (HMR)**: Speeds up development by updating modules without a full reload.

### ASP.NET Core

- **Visual Studio Debugger**: Set breakpoints, inspect variables, and step through code.
- **dotnet watch**: Automatically rebuilds and restarts your app on code changes.
- **Logging**: Use built-in logging providers to capture errors and warnings.
- **Unit tests**: Write tests to catch regressions early.

**General tips:**

- Reproduce the bug with the smallest possible steps.
- Check for typos, missing imports, or incorrect paths.
- Search error messages online—chances are, someone else has had the same issue!

---

## Performance Optimization

Performance is key for a great user experience. Here's how to make your Angular + ASP.NET Core app fast and efficient.

### Angular

- **Lazy loading**: Load modules only when needed to reduce initial load time.
- **Change detection strategy**: Use `OnPush` for components that don't change often.
- **AOT compilation**: Use Ahead-of-Time compilation for faster startup.
- **Tree shaking**: Remove unused code during build.
- **Optimize images**: Use modern formats (WebP), compress images, and use responsive sizes.

### ASP.NET Core

- **Caching**: Cache frequent API responses.
- **Asynchronous code**: Use async/await for non-blocking operations.
- **Minimize allocations**: Reuse objects and avoid unnecessary memory usage.
- **Database optimization**: Use indexes, avoid N+1 queries, and paginate results.

**Tools:**

- [Lighthouse](https://developers.google.com/web/tools/lighthouse) for frontend audits
- [dotnet-counters](https://learn.microsoft.com/en-us/dotnet/core/diagnostics/dotnet-counters) for backend performance

---

## Even More Project Ideas

- **Recipe manager**: Store, search, and share your favorite recipes.
- **Fitness tracker**: Log workouts, set goals, and visualize progress.
- **Event planner**: Organize events, send invites, and manage RSVPs.
- **Portfolio website**: Showcase your projects, skills, and resume.
- **Blog platform**: Write, edit, and publish articles with comments and tags.
- **Chat application**: Real-time messaging with groups and notifications.
- **Expense tracker**: Manage budgets, track spending, and generate reports.

---

## Conclusion

You now have a solid foundation in building modern web applications with Angular and ASP.NET Core. Whether you choose a simple to-do list with localStorage or a more extensive app with a backend, you have the tools and knowledge to keep building. Keep experimenting, learn from the community, and most importantly: have fun while developing!
Remember, every expert was once a beginner. The best way to learn is by doing—experiment, break things, and build projects that excite you. The web is your playground. Good luck, and enjoy your journey as a developer!
