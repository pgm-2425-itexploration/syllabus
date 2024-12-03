---
title: "ASP.NET + Blazor (C#)"
synopsis: "ASP.NET is a powerful framework for building modern web apps, Blazor enables C# to run in the browser via WebAssembly, allowing to create interactive web applications without JavaScript."
date: 2024-10-18
author:
  name: "Justin Descan"
  avatarUrl: "/assets/avatars/justin-descan.png"
  socials: # Add social media links -> If you don't have any, place an empty string ''
    website: "https://justindescan.com/"
    linkedin: "https://www.linkedin.com/in/justindescan/"
    github: "https://www.github.com/pgm-justdesc4/"
thumbnailUrl: "/assets/tutorials/aspnet-blazor_img-1.png"
head:
  - - meta
    - name: description
      content: "ASP.NET is a powerful framework for building modern web apps, Blazor enables C# to run in the browser via WebAssembly, allowing to create interactive web applications without JavaScript."
  - - meta
    - name: keywords
      content: "ASP.NET Blazor C# WebAssembly front-end interactive web applications single-page application .NET Microsoft client-side development component-based UI tutorial" # Add keywords related to the article
---

# ASP.NET + Blazor (C#)

## **1. Introduction**

ASP.NET is a powerful framework for building modern web apps, Blazor enables C# to run in the browser via WebAssembly, allowing to create interactive web applications without JavaScript. This tutorial provides instructions for creating a To-Do app with these tools. This app will showcase the core functionality of a full-stack application in C#, providing an opportunity to explore its features and learn key concepts.

## **2. Installation & Setup**

### **Step 1: Install required tools**

To begin, ensure you have the following tools installed:

1. **.NET SDK**: Download and install the latest .NET SDK (5.0 or higher).
   - [Download .NET SDK here](https://dotnet.microsoft.com/download).
2. **Node.js**: Install Node.js for managing JavaScript dependencies.

   - [Download Node.js here](https://nodejs.org/).

3. **Visual Studio Code**: Install [Visual Studio Code](https://code.visualstudio.com/) as your development environment.

### **Step 2: Create a New Blazor Project Using the Command Line**

1. Open Visual Studio Code and use the terminal to create a new Blazor project:

   ```bash
   dotnet new blazor -o todo-app
   ```

   This command creates a new Blazor project in a folder named `todo-app`.

2. Navigate into the project folder:
   ```bash
   cd todo-app
   ```

## **3. Configuration**

### **Overview of project structure**

The main folders to know are:

- **Components**: Contains components like layout and navigation.
- **Pages**: Contains Blazor components (pages) for your app.
- **App.razor** and **MainLayout.razor**: Define the structure and layout of your Blazor application.

You can delete any default sample pages or files you won’t use (like `Counter.razor` , `Weather.razor` etc.) but you can let them stay there for the start till you grow more comfortable and your app evolves, you can clean up the project by removing unnecessary files. For now, we will add a To-Do list page in the **Pages** folder and link it in the navigation.

## **4. Building the application**

### **Step 1: Create a new Razor component**

1. In the **Pages** folder, create a new file named `Todo.razor`.

### **Step 2: Add To-Do list functionality**

Open `Todo.razor` and add the following code to set up the To-Do list UI and functionality:

```razor
@page "/todo"
@rendermode InteractiveServer

<h3>To-Do Application</h3>

<input @bind="newTaskDescription" placeholder="Enter a new task" />
<button @onclick="AddTask">Add task</button>

<ul>
    @foreach (var task in tasks)
    {
        <li>
            <input type="checkbox" @bind="task.IsCompleted" />
            @task.Description
            <button @onclick="() => RemoveTask(task)">Delete</button>
        </li>
    }
</ul>

@code {
    private string newTaskDescription;
    private List<TaskItem> tasks = new();

    private void AddTask()
    {
        if (!string.IsNullOrWhiteSpace(newTaskDescription))
        {
            tasks.Add(new TaskItem { Description = newTaskDescription });
            newTaskDescription = string.Empty;
        }
    }

    private void RemoveTask(TaskItem task)
    {
        tasks.Remove(task);
    }

    public class TaskItem
    {
        public string Description { get; set; }
        public bool IsCompleted { get; set; }
    }
}
```

#### **Explanation**

1. **Binding**: The @bind directive binds the input field to the newTaskDescription variable, allowing users to input a task description.
2. **Adding tasks**: When the **Add task** button is clicked, the AddTask method creates a new TaskItem and adds it to the tasks list.
3. **Display and Control tasks**: A checkbox binds to task.IsCompleted, and a delete button calls the RemoveTask method to delete the task.

### **Step 3: Adding navigation**

To make the To-Do page accessible, we need to add a link in the navigation menu:

1. Open `NavMenu.razor` in the **Components/Layouts** folder.
2. Add the following link:

```razor
<div class="nav-item px-3">
    <NavLink class="nav-link" href="todo">
        <span class="bi bi-list-nested-nav-menu" aria-hidden="true"></span> To-Do app
    </NavLink>
</div>
```

This code snippet adds a link to the sidebar that allows navigation to the `Todo.razor` page.

### **Step 4: Running and Testing**

#### **Run the application using the Command Line**

1. In the terminal in Visual Studio Code, execute the following command to start the application:

   ```bash
   dotnet watch run
   ```

2. Open your browser and navigate to `https://localhost:{YourServerCode}/todo` (or use the link in the navigation menu).

### **Testing the To-Do functionality**

Try the following actions to ensure everything works as intended:

- **Add task**: Enter a task description and click **Add task**. The task should appear in the list below.
- **Complete task**: Click the checkbox next to a task to mark it as done.
- **Delete task**: Click the delete button next to a task to remove it from the list.

![Current app - Blazor](/assets/tutorials/aspnet-blazor_img-2.png)

---

Further on, we will implement a database to showcase CRUD functionalities. This will allow to persist tasks across sessions and enhance the apps usability. We may also look into user authentication and additional features to learn more about .NET and Blazor functionality.

## **5. References**

- [ASP.NET - Documentation](https://docs.microsoft.com/en-us/aspnet/core/?view=aspnetcore-7.0)
- [Blazor - Documentation](https://docs.microsoft.com/en-us/aspnet/core/blazor/?view=aspnetcore-7.0)
- [.NET SDK Download](https://dotnet.microsoft.com/download)
