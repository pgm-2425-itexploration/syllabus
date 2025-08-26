---
title: "Blazor"
synopsis: "This project walks through building a modern Blazor webshop, using Docker for containerization and a NoSQL database for data storage. The article explains the full system architecture and setup step by step."
date: 2025-08-26
author:
  name: "Joran Coen"
  avatarUrl: "/assets/avatars/joran-coen.png"
  socials: # Add social media links -> If you don't have any, place an empty string ''
    website: ""
    linkedin: ""
    github: "https://github.com/JoranCoen"
thumbnailUrl: "/assets/tutorials/blazor/blazor.jpg"
head:
  - - meta
    - name: description
      content: "This project walks through building a modern Blazor webshop, using Docker for containerization and a NoSQL database for data storage. The article explains the full system architecture and setup step by step."
  - - meta
    - name: keywords
      content: "Blazor Fullstack C# MongoDB Docker Repositories Interfaces Tailwind Node Services Seeder" # Add keywords related to the article
sources:
  - title: ".NET SDK Download"
    url: "https://dotnet.microsoft.com/download"
  - title: "Code Oss"
    url: "https://github.com/microsoft/vscode"
  - title: "Docker"
    url: "https://www.docker.com/"
  - title: "MongoDB"
    url: "https://www.mongodb.com/"
---

# Blazor Webshop

## Introduction

Building modern web applications often requires combining multiple technologies to create a seamless, scalable, and maintainable programs. In this project, we explore how to develop a fullstack webshop using Blazor, using Docker for containerization and MongoDB as the database. This tutorial will guide you through the structure, setup, and key implementation details, showing how these technologies work together to deliver a robust and responsive online store. Whether you’re a beginner or an experienced developer, this walkthrough provides practical insights into building a full-featured web application from scratch.

## 1. Table of contents

[Blazor Webshop](#blazor)

- [1. Table of Contents](#1-table-of-contents)
- [2. Installation & Setup](#2-installation--setup)
  - [2.1 Setting Up Development Tools](#21-setting-up-development-tools)
  - [2.2 Creating a New Blazor Project](#22-creating-a-new-blazor-project)
  - [2.3 Installing .NET Dependencies](#23-installing-net-dependencies)
  - [2.4 Setting Up Docker](#24-setting-up-docker)
- [3. Configuration](#3-configuration)
  - [3.1 Deleting Unnecessary Files](#31-deleting-unnecessary-files)
  - [3.2 Getting Started](#32-getting-started)
  - [3.3 Overview of Structure](#33-overview-of-structure)
- [4. Build the Webshop](#4-build-the-webshop)
  - [4.1 Backend](#41-backend)
    - [4.1.1 Models](#411-models)
    - [4.1.2 Repository Interfaces](#412-repository-interfaces)
    - [4.1.3 Repositories](#413-repositories)
    - [4.1.4 Data](#414-data)
    - [4.1.5 Services](#415-services)
    - [4.1.6 Program.cs and Seeder](#416-programcs-and-seeder)
  - [4.2 Frontend](#42-frontend)
    - [4.2.1 _Imports.razor](#421-_importsrazor)
    - [4.2.2 Ui Components](#422-ui-components)
    - [4.2.3 Layout Components](#423-layout-components)
    - [4.2.4 Pages](#424-pages)
- [5. Conclusion](#5-conclusion)
- [6. GitHub Repository](#6-github-repository)

---

## 2. Installation & Setup

In this step we’ll cover all the installation steps in detail, including the required tools, project initialization, and configuration. Each step comes with clear code snippets and explanations to make the setup process straightforward and easy to follow.

### 2.1 Setting up development tools

The .NET SDK includes everything you need to **build and run** Blazor applications.

1. **.NET SDK**

   Download and install from the [official website](https://dotnet.microsoft.com/en-us/download/dotnet) and choose the latest SDK for your operating system.

   After installation, verify the .NET SDK is installed by running in your terminal:

   ```sh
   dotnet --version
   ```

   This should print the installed .NET SDK version.

2. **Node.js**

   Download and install Node.js from the [official website](https://nodejs.org/en/download). Choose the version recommended for most users to ensure compatibility with common development tools and packages.

   After installation, check Node.js and npm are installed by running:

   ```sh
   node --version
   npm --version
   ```

   Both commands should print their respective version numbers.

3. **Code OSS**

   Download and install [Code OSS](https://github.com/microsoft/vscode), a lightweight and open-source code editor.

   After installation, enhance your development environment by adding the following extension:

   - **C# Dev Kit Extension**: Offers IntelliSense, SDK support, and advanced debugging features for .NET projects.

4. **Docker**

   Download and install [Docker Desktop](https://www.docker.com/products/docker-desktop/) for your operating system. Docker enables you to containerize your applications and manage services easily.

   After installation, verify Docker is working by opening a termin# Blazor Tutorial Setup

   ```sh
   docker --version
   ```

   This command should display the installed Docker version, confirming that the Docker CLI is available.

### 2.2 Creating a New Blazor Project

You can create a Blazor project using the .NET CLI directly from the terminal in Visual Studio Code. This approach is straightforward and works across all platforms.

1. **Open the integrated terminal in Visual Studio Code**
2. **Execute the following command to scaffold a new Blazor Server project:**

   ```sh
   dotnet new blazor -o blazor-tutorial
   ```

   This will generate a new Blazor Server application inside a directory named `blazor-tutorial`.

3. **Once the project is created, navigate into the project folder:**

   ```sh
   cd blazor-tutorial
   ```

Your Blazor project is now ready for further configuration and development.

### 2.3 Installing .NET Dependencies

To add the required dependencies to your Blazor project, run the following commands in your project directory:

```sh
dotnet add package Blazored.LocalStorage --version 4.5.0
dotnet add package MongoDB.Driver --version 3.4.3
dotnet add package System.ComponentModel.Annotations --version 5.0.0
```

These packages enable local storage support, MongoDB connectivity, and data annotation features in your application.

### 2.4 Setting Up Docker

To containerize your Blazor application and MongoDB database, you'll use Docker Compose. This setup ensures both services run together seamlessly in isolated containers.

1. **Verify Docker is Running**

   Open your terminal and check Docker is active:

   ```sh
   docker --version
   ```

   If you see the Docker version, you're ready to proceed.

2. **Create a Docker Compose File**

   In the root directory of your Blazor project, create a file named `docker-compose.yml`.

3. **Add the Docker Compose Configuration**

   Paste the following configuration into your `docker-compose.yml` file:

   ```yaml
   services:
     mongo:
       image: mongo:latest
       container_name: blazor-mongo
       ports:
         - "27017:27017"
       volumes:
         - mongo_data:/data/db
       restart: unless-stopped

     blazorapp:
       build: .
       ports:
         - "5000:8080"
       depends_on:
         - mongo
       environment:
         - MONGO_CONNECTION_STRING=mongodb://mongo:27017
         - MONGO_DB_NAME=BlazorTutorial
         - DOTNET_Logging__LogLevel__Default=Information
         - DOTNET_Logging__LogLevel__Microsoft_AspNetCore=Warning
         - DOTNET_AllowedHosts=*
         - ASPNETCORE_ENVIRONMENT=Development
       restart: unless-stopped

   volumes:
     mongo_data:
   ```

This configuration defines two services:

- **mongo**: Runs the latest MongoDB image, exposes port 27017, and persists data using a Docker volume.
- **blazorapp**: Builds your Blazor application, exposes port 5000, and sets environment variables for MongoDB connectivity and .NET logging.

3. **Create a `Dockerfile` in your project root:**

   ```Dockerfile
   # Stage 0: Tailwind build
   FROM node:20 AS tailwind-build
   WORKDIR /app

   COPY package.json yarn.lock ./
   RUN yarn install

   COPY . .
   RUN yarn build

   # Stage 1: Blazor build
   FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build
   WORKDIR /app

   COPY *.csproj ./
   RUN dotnet restore

   COPY . ./
   COPY --from=tailwind-build /app/wwwroot/app.css ./wwwroot/app.css

   RUN dotnet publish -c Release -o /app/out

   # Stage 2: Runtime
   FROM mcr.microsoft.com/dotnet/aspnet:9.0
   WORKDIR /app
   COPY --from=build /app/out .
   EXPOSE 8080
   ENTRYPOINT ["dotnet", "blazor-tutorial.dll"]
   ```

4. **Start the services:**
   ```sh
   docker compose up --build
   ```

This setup runs MongoDB and your Blazor app in isolated containers, with persistent data and environment variables configured for development.

### 2.5 Setting Up Tailwind CSS

To add Tailwind CSS to your Blazor project, follow these steps:

1.  **Install Tailwind CSS and CLI**

    In your project root, run:

    ```sh
    npm install tailwindcss @tailwindcss/cli

2.  **Initialize Tailwind CSS**

    Create a `tailwind.config.js` file manually in your project root with the following content:

    ```js
    /** @type {import('tailwindcss').Config} */
    module.exports = {
        content: [
        "./**/*.razor",
        "./**/*.html",
        "./**/*.cshtml",
        "./wwwroot/**/*.js"
        ],
        theme: {
        extend: {},
        },
        plugins: [],
    }
    ```

    This configuration ensures Tailwind scans your Blazor and static files for class usage.

3. **app.css**

    In the `wwwroot` directory (where static assets like JS and CSS are stored), open the file named `app.css`, delete all its contents, and replace it with the following:

    ```css
    @import "tailwindcss";
    ```

4.  **Build Tailwind CSS**

    Add a build script to your `package.json`:

    ```json
    "scripts": {
      "build": "npx @tailwindcss/cli -i ./wwwroot/app.css -o ./wwwroot/dist.css --minify",
      "watch": "npx @tailwindcss/cli -i ./wwwroot/app.css -o ./wwwroot/dist.css --watch"
    }
    ```

    Then run:

    ```sh
    npm run build
    ```

    or

    ```sh
    npm run watch
    ```

    This processes your Tailwind CSS and outputs the final CSS to `wwwroot/dist.css`.

5.  **Reference the CSS in Your Blazor App**

    In your `Components/App.razor` add:

    ```razor
    <link rel="stylesheet" href="@Assets["dist.css"]" />
    ```

    your App.razor should look like this
    ```razor
    <html lang="en">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <base href="/" />
        <link rel="stylesheet" href="@Assets["dist.css"]" />
        <ImportMap />
        <link rel="icon" type="image/png" href="@Assets["favicon.png"]" />
        <HeadOutlet />
    </head>
    <body>
        <Routes />
        <script src="_framework/blazor.web.js"></script>
    </body>
    </html>
    ```

Now Tailwind CSS is set up and ready to use in your Blazor project.

## 3. Configuration 

In this section, you'll learn how to configure your project and remove unnecessary files to keep your codebase clean. We'll also cover creating essential configuration files. Each step includes clear instructions to ensure your setup is organized and ready for development.

### 3.1 Deleting Unnecessary Files

- **Delete configuration files you don't need:**
    - `appsettings.Development.json`
    - `appsettings.Local.json`

- **Clean up the `wwwroot` folder:**
    - Delete the `lib/` directory if present.

- **Tidy up the `Layout` folder:**
    - Remove all CSS files.
    - Update layout files to remove references to deleted CSS classes.

- **Remove default pages:**
    - Delete `Weather.razor` and `Counter.razor` from the `Pages` folder.

By cleaning up default files and adding the required configuration, your project will be streamlined and ready for further development.

### 3.2 Getting Started

1. **Build Frontend Assets**  
    Still in your project directory, run:

    ```bash
    yarn build
    ```

2. **Build and Run with Docker Compose**  
    After building the frontend assets, run:

    ```bash
    docker compose up --build
    ```

    Docker Compose will handle

### 3.3 Overview of Structure

A typical Blazor project contains several important files and folders, each serving a specific purpose:

- **`Program.cs`**  
    The entry point of the application. Configures services, middleware, and starts the Blazor app.

- **`Services/`**  
    Contains business logic and service classes that handle operations such as data processing, communication with external APIs, or implementing application-specific functionality. Services are typically injected into components or other classes using dependency injection.

- **`Models/`**  
    Holds the data models or entity classes that define the structure of the data used throughout your application. These classes represent objects such as products, users, or orders, and are often used for data transfer between layers.

- **`Repositories/`**  
    Encapsulates data access logic, providing a clean interface for interacting with databases or other storage mechanisms. Repositories abstract away the details of data persistence, making it easier to manage and test data operations.

- **`Data/`**  
    Contains data access classes (e.g., for interacting with databases).

- **`wwwroot/`**  
    The web root for static assets like images, CSS, JavaScript, and fonts. Files here are publicly accessible.

- **`_Imports.razor`**  
    Centralizes common `@using` directives and namespaces for Razor components.

- **`Components/`**  
    Used for organizing custom, reusable UI components.

- **`Components/Layout/`**  
    Contains shared layout components (such as navigation bars, headers, footers, or sidebars) that define the common structure and appearance used across multiple pages in your application.

- **`Components/Pages/`**  
    Contains Razor components that represent the pages of your application (e.g., `Index.razor`, `Error.razor`). Each `.razor` file here is a routable page.

- **`Dockerfile` & `docker-compose.yml`**  
    Define how the application and its dependencies (like databases) are containerized and run with Docker.

This structure helps keep your Blazor project organized, maintainable, and scalable as it grows.

## 4. Build the Webshop

In this section, we will go through building the webshop step by step. We'll cover both the backend and frontend implementation, explain the folder structure, and show code examples for models, pages, and components.

### 4.1 Backend

#### 4.1.1 Models

When working with MongoDB in .NET, it's important to understand a few concepts:

- **Namespace**: In C#, namespaces (e.g., `namespace Models`) organize your code and prevent naming conflicts. They don’t affect MongoDB directly but help structure your application.
- **Collection**: In MongoDB, a collection is like a table in relational databases. Each model (like `Product`) typically maps to a collection (e.g., `Products`). By default, MongoDB uses the plural form of the model class, but you can customize the collection name if needed.
- **ID Generation**: MongoDB uses an `_id` field as the primary key for each document. Using `[BsonId]` and `[BsonRepresentation(BsonType.ObjectId)]` ensures that MongoDB will generate a unique ObjectId for each new document if you don’t provide one. In the example below, the `Id` property is initialized with a new ObjectId, but you can also leave it unset and let MongoDB handle it automatically.

These concepts are applied in the following models:

- **Product** – represents a product in the webshop.
- **Order** – represents a customer order with multiple items.
- **Basket** – represents a shopping basket for a user.

Each model should be added to the `Models` folder in your project. Below are the full implementations:

---

##### Product.cs

```csharp
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Models
{
    public class Product
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; } = ObjectId.GenerateNewId().ToString();
        public required string Name { get; set; }
        public decimal Price { get; set; }
        public required string ImageUrl { get; set; }
        public ICollection<ProductDetail> ProductDetails { get; set; } = new List<ProductDetail>();
    }

    public class ProductDetail
    {
        public required string Label { get; set; }
        public required string Value { get; set; }
    }
}
```

##### Basket.cs

```csharp
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Models
{
    public class Basket
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }
        public ICollection<BasketItem> Items { get; set; } = new List<BasketItem>();
    }

    public class BasketItem
    {
        [BsonRepresentation(BsonType.ObjectId)]
        public required string ProductId { get; set; }
        public int Quantity { get; set; } = 1;
        public Product? Product { get; set; }
    }
}
```

##### Order.cs

```csharp
using Models.Shared;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Models
{
    public class Order
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; } = ObjectId.GenerateNewId().ToString();
        public required string FullName { get; set; }
        public required string Address { get; set; }
        public required string City { get; set; }
        public required string PostalCode { get; set; }
        public PaymentMethod PaymentMethod { get; set; }
        public OrderStatus Status { get; set; } = OrderStatus.Pending;
        public ICollection<OrderItem> Items { get; set; } = new List<OrderItem>();
        public DateTime OrderDate { get; set; } = DateTime.UtcNow;
    }

    public class OrderItem
    {
        [BsonRepresentation(BsonType.ObjectId)]
        public required string ProductId { get; set; }
        public int Quantity { get; set; }
        public Product? Product { get; set; }
    }
}
```

##### Shared Enums

Some models use shared enums, for example `PaymentMethod` or `OrderStatus`. To organize these, create a new folder inside the `Models` folder called `Shared`.  

- Path: `Models/Shared/`  
- Add a file named `Enum.cs` inside the `Shared/` folder.  

Here’s is what `Enum.cs` must contain:

```csharp
namespace Models.Shared
{
    public enum PaymentMethod
    {
        CreditCard = 0,
        PayPal = 1,
        BankTransfer = 2,
    }

    public enum OrderStatus
    {
        Pending = 0,
        Processing = 1,
        Shipped = 2,
        Delivered = 4,
        Cancelled = 8,
    }

    public enum PopupType
    {
        Success = 0,
        Danger = 1,
    }
}
```

#### 4.1.2 Repository Interfaces

In a well-structured backend, **repositories** are used to encapsulate all database access logic. Instead of querying MongoDB directly from your services or controllers, a repository provides a clean and consistent way to interact with your data. This pattern makes your code easier to maintain, test, and extend.

A **repository interface** defines the contract—what operations are available—without specifying how they are implemented. The implementation class then performs the actual database operations using MongoDB or any other data source.

Create a new folder in your project: `Repositories/IRepositories/`.

Inside that folder, Each repository interface should be added to the `Repositories/IRepositories/` folder in your project. Below are the full implementations:

---

##### IOrderRepository.cs

```csharp
using Models;

namespace Repositories.IRepositories
{
    public interface IOrderRepository
    {
        Task<IEnumerable<Order>> GetAllAsync();
        Task<Order?> GetByIdAsync(string id);
        Task AddAsync(Order order);
        Task UpdateAsync(string id, Order order);
        Task DeleteAsync(string id);
    }
}
```

##### IProductRepository.cs

```csharp
using Models;

namespace Repositories.IRepositories
{
    public interface IProductRepository
    {
        Task<IEnumerable<Product>> GetAllAsync();
        Task<Product?> GetByIdAsync(string id);
        Task AddAsync(Product product);
        Task UpdateAsync(string id, Product product);
        Task DeleteAsync(string id);
    }
}
```

#### 4.1.3 Repositories

Repositories implement the interfaces defined in `Repositories/IRepositories/` and handle all interactions with MongoDB. Each repository performs CRUD operations for its corresponding model.

Create a folder in your project: `Repositories/`. Inside this folder, add your repository implementation files.

---

##### OrderRepository.cs
```csharp
using Data;
using Models;
using MongoDB.Driver;
using Repositories.IRepositories;

namespace Repositories
{
    public class OrderRepository : IOrderRepository
    {
        private readonly IMongoCollection<Order> _collection;

        public OrderRepository(MongoDbContext context)
        {
            _collection = context.Orders;
        }

        public async Task<IEnumerable<Order>> GetAllAsync() =>
            await _collection.Find(_ => true).ToListAsync();

        public async Task<Order?> GetByIdAsync(string id) =>
            await _collection.Find(p => p.Id == id).FirstOrDefaultAsync();

        public async Task AddAsync(Order order) => await _collection.InsertOneAsync(order);

        public async Task UpdateAsync(string id, Order order) =>
            await _collection.ReplaceOneAsync(p => p.Id == id, order);

        public async Task DeleteAsync(string id) =>
            await _collection.DeleteOneAsync(p => p.Id == id);
    }
}
```

##### ProductRepository.cs
```csharp 
using Data;
using Models;
using MongoDB.Driver;
using Repositories.IRepositories;

namespace Repositories
{
    public class ProductRepository : IProductRepository
    {
        private readonly IMongoCollection<Product> _collection;

        public ProductRepository(MongoDbContext context)
        {
            _collection = context.Products;
        }

        public async Task<IEnumerable<Product>> GetAllAsync() =>
            await _collection.Find(_ => true).ToListAsync();

        public async Task<Product?> GetByIdAsync(string id) =>
            await _collection.Find(p => p.Id == id).FirstOrDefaultAsync();

        public async Task AddAsync(Product product) => await _collection.InsertOneAsync(product);

        public async Task UpdateAsync(string id, Product product) =>
            await _collection.ReplaceOneAsync(p => p.Id == id, product);

        public async Task DeleteAsync(string id) =>
            await _collection.DeleteOneAsync(p => p.Id == id);
    }
}
```

#### 4.1.4 Data

You might have noticed that there are some errors in the repositories. This happens because the repositories rely on a `MongoDbContext` to access the corresponding MongoDB collections. Without this context, the repository cannot find the tables (collections) for your models.

A `DbContext` (in MongoDB, `MongoDbContext`) is a class that acts as a bridge between your application and the database. It centralizes the configuration and access to your MongoDB collections. Using a context provides several benefits:

- **Centralized database access**: All collections are defined in one place, making it easy to manage and maintain.
- **CRUD operations**: Repositories use the context to perform Create, Read, Update, and Delete operations.
- **Dependency Injection friendly**: You can inject the `MongoDbContext` into repositories or services, keeping your code clean and testable.
- **Environment flexibility**: You can configure the database name or connection string via environment variables, making it easy to switch between development, staging, and production environments.

In short, the `MongoDbContext` organizes your collections and provides a single entry point for all database interactions in your application.

Create a folder in your project: `Data/`. Inside this folder, add `MongoDbContext.cs`.

---

##### MongoDbContext.cs

```csharp
using Models;
using MongoDB.Driver;

namespace Data
{
    public class MongoDbContext
    {
        public IMongoDatabase Database { get; }

        // Collections for your models
        public IMongoCollection<Product> Products => Database.GetCollection<Product>("Products");
        public IMongoCollection<Order> Orders => Database.GetCollection<Order>("Orders");

        public MongoDbContext(IConfiguration config, IMongoClient client)
        {
            // You can configure the database name via an environment variable
            var databaseName = Environment.GetEnvironmentVariable("MONGO_DB_NAME") ?? "BlazorTutorial";

            // Initialize the database
            Database = client.GetDatabase(databaseName);
        }
    }
}
```

#### 4.1.5 Services

In a well-structured backend, **services** act as a layer between your controllers (or API endpoints) and the repositories. While repositories handle direct database access, services contain the **business logic** of your application. This separation makes your code easier to maintain, test, and extend.

Some key points about services:

- **Business logic**: Services can perform calculations, validation, or any extra processing before or after accessing the repository.
- **Reusability**: Multiple controllers or parts of the application can use the same service methods.
- **Dependency Injection**: Services typically depend on repositories and are injected into controllers or other services.

Each service should be added to the `Services/` folder in your project.

##### BasketService.cs

The BasketService manages the shopping basket for the user. While this tutorial keeps the basket in memory, in a real-world application, you can persist the basket using local storage in the frontend. This way, the user's basket items are retained even after refreshing the page or closing the browser. The service can be extended to synchronize with a backend database when the user logs in or checks out.

```csharp
using Models;

namespace Services
{
    public class BasketService
    {
        private readonly Basket _basket;

        public BasketService()
        {
            _basket = new Basket();
        }

        public void AddItem(string productId, int quantity = 1)
        {
            BasketItem? item = _basket.Items.FirstOrDefault(i => i.ProductId == productId);
            if (item != null)
            {
                item.Quantity += quantity;
            }
            else
            {
                _basket.Items.Add(new BasketItem { ProductId = productId, Quantity = quantity });
            }
        }

        public void RemoveItem(string productId)
        {
            BasketItem? item = _basket.Items.FirstOrDefault(i => i.ProductId == productId);
            if (item != null)
            {
                _basket.Items.Remove(item);
            }
        }

        public void Clear() => _basket.Items.Clear();

        public Basket GetBasket() => _basket;
    }
}
```

##### OrderService.cs
```csharp
using Models;
using Repositories.IRepositories;

namespace Services
{
    public class OrderService
    {
        private readonly IOrderRepository _orderRepository;

        public OrderService(IOrderRepository orderRepository)
        {
            _orderRepository = orderRepository;
        }

        public async Task<IEnumerable<Order>> GetOrdersAsync()
        {
            return await _orderRepository.GetAllAsync();
        }

        public async Task<Order?> GetOrderAsync(string id)
        {
            return await _orderRepository.GetByIdAsync(id);
        }

        public async Task CreateOrderAsync(Order order)
        {
            await _orderRepository.AddAsync(order);
        }

        public async Task UpdateOrderAsync(string id, Order order)
        {
            await _orderRepository.UpdateAsync(id, order);
        }

        public async Task DeleteOrderAsync(string id)
        {
            await _orderRepository.DeleteAsync(id);
        }
    }
}
```

##### ProductService.cs
```csharp
using Models;
using Repositories.IRepositories;

namespace Services
{
    public class ProductService
    {
        private readonly IProductRepository _productRepository;

        public ProductService(IProductRepository productRepository)
        {
            _productRepository = productRepository;
        }

        public async Task<IEnumerable<Product>> GetProductsAsync()
        {
            return await _productRepository.GetAllAsync();
        }

        public async Task<Product?> GetProductAsync(string id)
        {
            return await _productRepository.GetByIdAsync(id);
        }

        public async Task CreateProductAsync(Product product)
        {
            await _productRepository.AddAsync(product);
        }

        public async Task UpdateProductAsync(string id, Product product)
        {
            await _productRepository.UpdateAsync(id, product);
        }

        public async Task DeleteProductAsync(string id)
        {
            await _productRepository.DeleteAsync(id);
        }
    }
}
```

#### 4.1.6 Program.cs and Seeder

The `Program.cs` file is the entry point of your Blazor application. It sets up the **dependency injection (DI) container**, configures services, and defines the HTTP request pipeline. One of the important tasks it performs is **registering services and repositories**, which allows your components and services to access your data without manually instantiating objects. Additionally, it seeds initial data to the database using the `SeedData` class, so you have some default products available when running the app.

##### Program.cs

**Path:** `/`  
**File:** `Program.cs`

Add a file named `Program.cs` inside the `Root/` of the project.

```csharp
using blazor_tutorial.Components;
using Blazored.LocalStorage;
using Data;
using MongoDB.Driver;
using Repositories;
using Repositories.IRepositories;
using Services;

var builder = WebApplication.CreateBuilder(args);

// Register Blazor components
builder.Services.AddRazorComponents().AddInteractiveServerComponents();

// Register Blazored Local Storage to persist basket data
builder.Services.AddBlazoredLocalStorage();

// Register MongoDB context and client
builder.Services.AddSingleton<MongoDbContext>();
builder.Services.AddSingleton<IMongoClient>(sp =>
{
    var config = sp.GetRequiredService<IConfiguration>();
    var connectionString =
        Environment.GetEnvironmentVariable("MONGO_CONNECTION_STRING")
        ?? "mongodb://localhost:27017";
    return new MongoClient(connectionString);
});

// Register repositories and services
builder.Services.AddScoped<IProductRepository, ProductRepository>();
builder.Services.AddScoped<IOrderRepository, OrderRepository>();
builder.Services.AddScoped<BasketService>();
builder.Services.AddScoped<ProductService>();
builder.Services.AddScoped<OrderService>();

var app = builder.Build();

// Seed the database with initial data
using (var scope = app.Services.CreateScope())
{
    var services = scope.ServiceProvider;

    try
    {
        await Data.SeedData.InitializeAsync(services);
    }
    catch (Exception ex)
    {
        var logger = services.GetRequiredService<ILogger<Program>>();
        logger.LogError(ex, "An error occurred seeding the DB.");
    }
}

// Configure the HTTP request pipeline
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Error", createScopeForErrors: true);
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseAntiforgery();

app.MapStaticAssets();
app.MapRazorComponents<App>().AddInteractiveServerRenderMode();

app.Run();
```

##### SeedData.cs

In a real-world application, product and data management would typically be handled through an admin dashboard, allowing sellers or administrators to add and update products directly from the site interface. However, for development and demonstration purposes, it's common to use a **seeder** to populate the database with initial data automatically.

**Path:** `Data/`  
**File:** `SeedData.cs`

Add a file named `SeedData.cs` inside the `Data/` folder to handle database seeding.

```csharp
using Models;
using Services;

namespace Data
{
    public static class SeedData
    {
        public static async Task InitializeAsync(IServiceProvider services)
        {
            ProductService productService = services.GetRequiredService<ProductService>();
            IEnumerable<Product> existingProducts = await productService.GetProductsAsync();
            if (existingProducts.Any())
                return;

            List<Product> Products = new List<Product>
            {
                new Product
                {
                    Name = "Blazor",
                    Price = 5.50m,
                    ImageUrl = "images/blazor-card.png",
                    ProductDetails = new List<ProductDetail>
                    {
                        new ProductDetail
                        {
                            Label = "Blazor pros",
                            Value = "Reusable Components, Fast Rendering, .NET Integration",
                        },
                        new ProductDetail { Label = "Platform", Value = "WebAssembly, Server" },
                        new ProductDetail { Label = "Language", Value = "C#, HTML, CSS" },
                    },
                },
                new Product
                {
                    Name = "ASP.NET Core",
                    Price = 7.99m,
                    ImageUrl = "images/blazor-card.png",
                    ProductDetails = new List<ProductDetail>
                    {
                        new ProductDetail
                        {
                            Label = "ASP.NET Core pros",
                            Value = "Cross-platform, High Performance, Cloud Ready",
                        },
                        new ProductDetail { Label = "Platform", Value = ".NET" },
                        new ProductDetail { Label = "Language", Value = "C#, F#, VB.NET" },
                    },
                },
                new Product
                {
                    Name = "Entity Framework",
                    Price = 4.25m,
                    ImageUrl = "images/blazor-card.png",
                    ProductDetails = new List<ProductDetail>
                    {
                        new ProductDetail
                        {
                            Label = "EF Core pros",
                            Value = "ORM, LINQ Support, Migrations",
                        },
                        new ProductDetail { Label = "Platform", Value = ".NET" },
                        new ProductDetail { Label = "Language", Value = "C#" },
                    },
                },
                new Product
                {
                    Name = "SignalR",
                    Price = 3.75m,
                    ImageUrl = "images/blazor-card.png",
                    ProductDetails = new List<ProductDetail>
                    {
                        new ProductDetail
                        {
                            Label = "SignalR pros",
                            Value = "Real-time, WebSockets, Scalable",
                        },
                        new ProductDetail { Label = "Platform", Value = ".NET" },
                        new ProductDetail { Label = "Language", Value = "C#" },
                    },
                },
                new Product
                {
                    Name = "MAUI",
                    Price = 9.99m,
                    ImageUrl = "images/blazor-card.png",
                    ProductDetails = new List<ProductDetail>
                    {
                        new ProductDetail
                        {
                            Label = "MAUI pros",
                            Value = "Cross-platform UI, Native Controls, .NET Integration",
                        },
                        new ProductDetail
                        {
                            Label = "Platform",
                            Value = "Windows, Android, iOS, macOS",
                        },
                        new ProductDetail { Label = "Language", Value = "C#, XAML" },
                    },
                },
            };

            foreach (Product product in Products)
            {
                await productService.CreateProductAsync(product);
            }
        }
    }
}
```

### 4.2 Frontend

The frontend in a Blazor application handles rendering the UI, managing user interactions, and communicating with the backend API. In a webshop scenario, the frontend is responsible for displaying products, managing shopping carts, handling user authentication, and providing a seamless shopping experience.

#### 4.2.1 _Imports.razor

Blazor uses global imports in Components folder

```razor
@using System.Net.Http
@using System.Net.Http.Json
@using System.ComponentModel.DataAnnotations;
@using Microsoft.AspNetCore.Components.Forms
@using Microsoft.AspNetCore.Components.Routing
@using Microsoft.AspNetCore.Components.Web
@using static Microsoft.AspNetCore.Components.Web.RenderMode
@using Microsoft.AspNetCore.Components.Web.Virtualization
@using Microsoft.JSInterop
@using blazor_tutorial
@using blazor_tutorial.Components
@using blazor_tutorial.Components.Ui
@using blazor_tutorial.Components.Ui.Card
@using Microsoft.AspNetCore.Components
@using Blazored.LocalStorage;
@using Models
@using Services
@using Models.Shared
```

#### 4.2.2 Ui Components

Blazor uses Razor Components as reusable UI building blocks. Each component can encapsulate HTML, C#, and CSS, making the UI modular and maintainable.
@code {
    you can write csharp here and define paramaters etc 
}

##### Hero.razor

**Path:** `Components/Ui/`  
**File:** `Hero.razor`

Add a file named `Hero.razor` inside the `Ui/` folder.

```razor
@namespace blazor_tutorial.Components.Ui

<div class="px-4 sm:px-6 lg:px-8">
    <div class="h-120 md:h-[80dvh] flex flex-col bg-cover bg-center bg-no-repeat rounded-2xl"
         style="background-image: url('@ImageUrl');">
        <div class="mt-auto w-1/4 md:max-w-lg ps-5 pb-5 md:ps-10 md:pb-10">
            <h1 class="text-xl md:text-3xl lg:text-5xl text-white">
                @Title
            </h1>
        </div>
    </div>
</div>

@code {
    [Parameter] public required string Title { get; set; }
    [Parameter] public required string ImageUrl { get; set; }
}
```

##### Header.razor

**Path:** `Components/Ui/`  
**File:** `Header.razor`

Add a file named `Header.razor` inside the `Ui/` folder.

```razor
@namespace blazor_tutorial.Components.Ui

<div class="mb-6 sm:mb-10 max-w-2xl text-center mx-auto">
    <h1 class="font-medium text-black text-3xl sm:text-4xl">
        @Title
    </h1>
</div>

@code {
    [Parameter] public required string Title { get; set; }
}
```

##### Popup.razor

**Path:** `Components/Ui/`  
**File:** `Popup.razor`

Add a file named `Popup.razor` inside the `Ui/` folder.

```razor
@if (IsVisible)
{
    <div class="fixed inset-0 z-50 flex items-center justify-center">
        <div class="absolute inset-0 bg-gray-900 opacity-30"></div>
        <div class="relative rounded-lg shadow-lg p-8 max-w-md w-full border border-blue-300 bg-white">
            <div class="flex items-center mb-4">
                @if (Type == PopupType.Success)
                {
                    <svg class="h-6 w-6 text-green-500 mr-2" fill="none" stroke="currentColor" stroke-width="2"
                         viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                }
                else if (Type == PopupType.Danger)
                {
                    <svg class="h-6 w-6 text-red-500 mr-2" fill="none" stroke="currentColor" stroke-width="2"
                         viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                }

                <h2 class="text-xl font-semibold text-gray-800">@Title</h2>
            </div>
            <p class="text-gray-700 mb-4">
                @Message
            </p>
            <button class="mt-2 px-4 py-2 rounded text-white 
                          @(Type == PopupType.Success ? "bg-green-500 hover:bg-green-600" : "bg-red-500 hover:bg-red-600")"
                    @onclick="() => OnClose.InvokeAsync(null)">
                Close
            </button>
        </div>
    </div>
}

@code {
    [Parameter] public bool IsVisible { get; set; }
    [Parameter] public string Title { get; set; } = string.Empty;
    [Parameter] public PopupType Type { get; set; } = PopupType.Success;
    [Parameter] public RenderFragment? Message { get; set; }
    [Parameter] public EventCallback OnClose { get; set; }
}
```

##### FooterMenu.razor

**Path:** `Components/Ui/`  
**File:** `FooterMenu.razor`

Add a file named `FooterMenu.razor` inside the `Ui/` folder.

```razor
@namespace blazor_tutorial.Components.Ui

<footer class="mt-auto border-t md:border-t-0 border-gray-200">
    <div class="w-full max-w-7xl py-10 md:pt-0 px-4 sm:px-6 lg:px-8 mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-3 items-center gap-5">
        <div class="text-center md:text-start">
            <span class="text-sm text-black">© 2025 Blazor Shop. All rights reserved.</span>
        </div>
        <ul class="text-center">
          <li class="inline-block relative pe-8 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-3 before:-translate-y-1/2 before:content-['/'] before:text-black">
            <NavLink class="inline-flex gap-x-2 text-sm text-black hover:text-gray-600" href="#">
              About
            </NavLink>
          </li>
          <li class="inline-block relative pe-8 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-3 before:-translate-y-1/2 before:content-['/'] before:text-black">
            <NavLink class="inline-flex gap-x-2 text-sm text-black hover:text-gray-600" href="#">
              Services
            </NavLink>
          </li>
          <li class="inline-block relative pe-8 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-3 before:-translate-y-1/2 before:content-['/'] before:text-black">
            <NavLink class="inline-flex gap-x-2 text-sm text-black hover:text-gray-600" href="#">
              Blog
            </NavLink>
          </li>
        </ul>
        <div class="text-center md:text-end space-x-2">
          <NavLink class="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-black hover:text-gray-600 disabled:opacity-50 disabled:pointer-events-none" href="#">
            <svg class="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
          </NavLink>
        </div>
      </div>
    </div>
  </footer>
```

##### Card Component Suite

For a modular and maintainable UI, it's best to split card-related components into their own folder. This approach keeps your codebase organized and makes each UI element reusable.

**Path:** `Components/Ui/Card/`

###### Card.razor

Acts as the container for the card, applying consistent styling and layout.

```razor
@namespace blazor_tutorial.Components.Ui.Card

<div class="group flex flex-col rounded-2xl overflow-hidden border border-gray-200">
    @ChildContent
</div>

@code {
    [Parameter] public RenderFragment? ChildContent { get; set; }
}
```

###### CardImage.razor

Displays the product image with proper aspect ratio and styling.

```razor
@namespace blazor_tutorial.Components.Ui.Card

<div class="relative">
    <div class="aspect-4/4 overflow-hidden rounded-2xl">
        <img class="size-full object-cover rounded-2xl" src="@Src" alt="@Alt">
    </div>
</div>

@code {
    [Parameter] public required string Src { get; set; }
    [Parameter] public string Alt { get; set; } = "";
}
```

###### CardTitle.razor

Renders the card's title or heading.

```razor
@namespace blazor_tutorial.Components.Ui.Card

<div class="pt-4 px-4">
    @ChildContent
</div>

@code {
    [Parameter] public RenderFragment? ChildContent { get; set; }
}
```

###### CardContent.razor

Holds the main content or description of the card.

```razor
@namespace blazor_tutorial.Components.Ui.Card

<div class="mb-2 mt-4 text-sm px-4">
    @ChildContent
</div>

@code {
    [Parameter] public RenderFragment? ChildContent { get; set; }
}
```

###### CardAction.razor

Handles user actions, such as adding an item to the basket, and provides feedback via a popup.

```razor
@namespace blazor_tutorial.Components.Ui.Card
@rendermode InteractiveServer
@inject BasketService BasketService

<Popup IsVisible="@isSubmitted" Title="Item Added!" Type="PopupType.Success" OnClose="() => isSubmitted = false">
    <Message>
        Thank you,
        Your item has been added to your basket.
    </Message>
</Popup>

<div class="mt-auto px-4 pb-4">
    <button
        class="py-2 px-3 w-full inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-xl border border-transparent bg-blue-400 text-white hover:bg-blue-500 transition"
        type="button" @onclick="AddToBasket">
        Buy now
    </button>
</div>

@code {
    private bool isSubmitted = false;
    [Parameter] public required string ProductId { get; set; }

    private void AddToBasket()
    {
        BasketService.AddItem(ProductId);
        isSubmitted = true;
    }
}
```

> **Tip:**  
> Use these components together to build flexible, visually consistent product cards throughout your webshop. Keeping them in a dedicated folder (`Ui/Card/`) makes your project easier to scale and maintain.

#### 4.2.3 Layout Components

##### MainLayout.razor

Defines the main structure of your application, wrapping all pages with a consistent layout. It includes the header navigation and a main content area.

```razor
@inherits LayoutComponentBase

<div class="relative flex flex-col">
  <HeaderMenu />

  <main>
    @Body
  </main>
</div>
```

##### HeaderMenu.razor

Implements a responsive navigation bar with links to key pages and a basket icon. The menu adapts for mobile and desktop, with a toggle button for smaller screens.

```razor
@rendermode InteractiveServer

<header class="flex flex-wrap lg:justify-start lg:flex-nowrap z-50 w-full py-7">
  <nav
    class="relative max-w-7xl w-full flex flex-wrap lg:grid lg:grid-cols-12 basis-full items-center px-4 md:px-6 lg:px-8 mx-auto">
    <div class="lg:col-span-3 flex items-center">
      <NavLink class="flex-none rounded-xl text-xl inline-block font-semibold focus:outline-hidden focus:opacity-80"
        href="/" aria-label="Preline">
        Blazor Shop
      </NavLink>
    </div>
    <div class="flex items-center gap-x-1 lg:gap-x-2 ms-auto py-1 lg:ps-6 lg:order-3 lg:col-span-3">
      <NavLink type="button" href="/basket"
        class="size-9.5 relative flex justify-center items-center rounded-xl bg-white border border-gray-200 text-black hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none">
        <span class="sr-only">Basket</span>
        <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24"
          height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
          stroke-linejoin="round">
          <circle cx="8" cy="21" r="1" />
          <circle cx="19" cy="21" r="1" />
          <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
        </svg>
      </NavLink>
      <div class="lg:hidden">
        <button type="button" @onclick="ToggleMenu"
          class="size-9.5 flex justify-center items-center text-sm font-semibold rounded-xl border border-gray-200 text-black hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none">
          <svg class="@(isMenuOpen ? "block" : "hidden") shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24"
            height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
            stroke-linejoin="round">
            <line x1="3" x2="21" y1="6" y2="6" />
            <line x1="3" x2="21" y1="12" y2="12" />
            <line x1="3" x2="21" y1="18" y2="18" />
          </svg>
          <svg class="@(isMenuOpen ? "hidden" : "block") shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24"
            height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
            stroke-linejoin="round">
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>
      </div>
    </div>
    <div
      class="@(isMenuOpen ? "hidden" : "block") overflow-hidden transition-all duration-300 basis-full grow lg:block lg:w-auto lg:basis-auto lg:order-2 lg:col-span-6">
      <div
        class="flex flex-col gap-y-4 gap-x-0 mt-5 lg:flex-row lg:justify-center lg:items-center lg:gap-y-0 lg:gap-x-7 lg:mt-0">
        <div>
          <NavLink
            class="inline-block text-black hover:text-gray-600 focus:outline-hidden focus:text-gray-600
                    relative before:absolute before:bottom-0.5 before:start-0 before:-z-1 before:w-full before:h-1 before:bg-blue-400 before:opacity-0"
            ActiveClass="before:opacity-100" href="/" Match="NavLinkMatch.All">
            Home
          </NavLink>
        </div>
        <div>
          <NavLink
            class="inline-block text-black hover:text-gray-600 focus:outline-hidden focus:text-gray-600
                    relative before:absolute before:bottom-0.5 before:start-0 before:-z-1 before:w-full before:h-1 before:bg-blue-400 before:opacity-0"
            ActiveClass="before:opacity-100" href="/products">
            Products
          </NavLink>
        </div>
        <div>
          <NavLink
            class="inline-block text-black hover:text-gray-600 focus:outline-hidden focus:text-gray-600
                    relative before:absolute before:bottom-0.5 before:start-0 before:-z-1 before:w-full before:h-1 before:bg-blue-400 before:opacity-0"
            ActiveClass="before:opacity-100" href="/checkout">
            Checkout
          </NavLink>
        </div>
      </div>
    </div>
  </nav>
</header>

@code {
  private bool isMenuOpen = true;
  private void ToggleMenu()
  {
    isMenuOpen = !isMenuOpen;
  }
}
```

These layout components provide a clean, responsive, and accessible foundation for your Blazor webshop UI.


#### 4.2.4 Pages

##### Home.razor

The Home page serves as the landing page for the webshop. It highlights key products, showcases testimonials, and provides quick access to product categories. It demonstrates how to use reusable components such as Card, CardImage, CardTitle, CardContent, and CardAction to display product information efficiently.

Key features:

-**Hero section with a welcoming message and visual image.**

-**Grid layout for showcasing a selection of products.**

-**Testimonials section to highlight customer feedback.**

-**Contact information section with address, email, and phone details.**

-**Navigation link to view all products.**

```razor
@namespace BlazorTutorial.Components.Pages
@page "/"
@inject ProductService ProductService
@inject BasketService BasketService

<PageTitle>Home</PageTitle>

<Hero Title="Welcome to Blazor!" ImageUrl="images/blazor.jpg" />

<div class="max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-24 mx-auto">
    <Header Title="Explore the Features of Blazor" />
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
        @if (productsList == null)
        {
            <p>Loading products...</p>
        }
        else
        {
            @foreach (Product product in productsList.Take(9))
            {
                <Card>
                    <CardImage Src="@product.ImageUrl" Alt="@product.Name" />
                    <CardTitle>
                        <h3 class="font-medium md:text-lg text-black">@product.Name</h3>
                        <p class="mt-2 font-semibold text-black">$@product.Price</p>
                    </CardTitle>
                    <CardContent>
                        <div class="flex flex-col">
                            @foreach (ProductDetail detail in product.ProductDetails)
                            {
                                <div class="py-3 border-t border-gray-200">
                                    <div class="grid grid-cols-2 gap-2">
                                        <span class="font-medium text-black">@detail.Label:</span>
                                        <span class="text-end text-black">@detail.Value</span>
                                    </div>
                                </div>
                            }
                        </div>
                    </CardContent>
                    <CardAction ProductId="@product.Id" />
                </Card>
            }
        }
    </div>
    <div class="mt-10 lg:mt-20 text-center">
        <NavLink
            class="relative inline-block font-medium md:text-lg text-black before:absolute before:bottom-0.5 before:start-0 before:-z-1 before:w-full before:h-1 before:bg-blue-400 hover:before:bg-black focus:outline-hidden focus:before:bg-black "
            href="/products">
            View all Products
        </NavLink>
    </div>
</div>

<div class="py-10 md:py-16 lg:py-20 bg-blue-100">
    <div class="px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 md:items-center">
            <div class="relative h-80 md:h-150 bg-gray-100 rounded-2xl">
                <img class="absolute inset-0 size-full object-cover rounded-2xl" src="images/blazor-testimonial.jpg"
                    alt="blazor testimonial">
            </div>
            <div class="pt-10 md:p-10">
                <blockquote class="max-w-4xl mx-auto">
                    <p class="mb-6 md:text-lg font-semibold text-purple-700">
                        "Blazor made it so easy to build interactive web apps with C#!"
                    </p>
                    <p class="text-xl sm:text-2xl lg:text-3xl lg:leading-normal text-gray-800">
                        "Switching to Blazor has transformed our development process. We can now share code between
                        client and server, and our productivity has skyrocketed. Highly recommended for any .NET
                        developer!"
                    </p>
                </blockquote>
            </div>
        </div>
    </div>
</div>

<div class="max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-24 mx-auto">
    <div class="mb-6 sm:mb-10 max-w-2xl text-center mx-auto">
        <h2 class="font-medium text-black text-2xl sm:text-4xl">
            Contacts
        </h2>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-2 lg:items-center gap-6 md:gap-8 lg:gap-12">
        <div class="aspect-w-16 aspect-h-6 lg:aspect-h-14 overflow-hidden bg-gray-100 rounded-2xl">
            <img class="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out object-cover rounded-2xl"
                src="https://images.unsplash.com/photo-1572021335469-31706a17aaef?q=80&w=560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Contacts Image">
        </div>
        <div class="space-y-8 lg:space-y-16">
            <div>
                <h3 class="mb-5 font-semibold text-black">
                    Our address
                </h3>
                <div class="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
                    <div class="flex gap-4">
                        <svg class="shrink-0 size-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24"
                            height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"
                            stroke-linecap="round" stroke-linejoin="round">
                            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        <div class="grow">
                            <p class="text-sm text-gray-600">
                                Blegium, Gent
                            </p>
                            <address class="mt-1 text-black not-italic">
                                Artevelde University of Applied Sciences<br />
                                Campus Kantienberg
                            </address>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h3 class="mb-5 font-semibold text-black">
                    Our contacts
                </h3>
                <div class="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
                    <div class="flex gap-4">
                        <svg class="shrink-0 size-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24"
                            height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"
                            stroke-linecap="round" stroke-linejoin="round">
                            <path
                                d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z">
                            </path>
                            <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10"></path>
                        </svg>
                        <div class="grow">
                            <p class="text-sm text-gray-600">
                                Email us
                            </p>
                            <p>
                                <a class="relative inline-block font-medium text-black before:absolute before:bottom-0.5 before:start-0 before:-z-1 before:w-full before:h-1 before:bg-blue-400 hover:before:bg-black focus:outline-hidden focus:before:bg-black"
                                    href="mailto:example@site.so">
                                    blazor@example.so
                                </a>
                            </p>
                        </div>
                    </div>
                    <div class="flex gap-4">
                        <svg class="shrink-0 size-5 text-gray-500 " xmlns="http://www.w3.org/2000/svg" width="24"
                            height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round">
                            <path
                                d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                        <div class="grow">
                            <p class="text-sm text-gray-600">
                                Call us
                            </p>
                            <p>
                                <a class="relative inline-block font-medium text-black before:absolute before:bottom-0.5 before:start-0 before:-z-1 before:w-full before:h-1 before:bg-blue-400 hover:before:bg-black focus:outline-hidden focus:before:bg-black"
                                    href="mailto:example@site.so">
                                    +44 222 777-000
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<FooterMenu />

@code {
    private IEnumerable<Product> productsList = new List<Product>();

    protected override async Task OnInitializedAsync()
    {
        productsList = await ProductService.GetProductsAsync();
    }
}
```

##### Products.razor

The Products page displays all available products in a grid format. It is ideal for browsing and discovering products in the webshop. The page demonstrates dynamic rendering of product data fetched via ProductService and shows how to loop through collections with Blazor’s @foreach syntax.

Key features:

-**Full product catalog display using reusable Card components.**

-**Structured product details including name, price, and additional attributes.**

-**Responsive layout for different screen sizes.**

-**Integration with CardAction to interact with the basket.**

```razor
@namespace BlazorTutorial.Components.Pages
@inject ProductService ProductService
@page "/products"

<PageTitle>Products</PageTitle>

<div class="max-w-7xl px-4 sm:px-6 lg:px-8 py-12 mx-auto">
    <Header Title="Explore All the products" />
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
       @if (productsList == null)
        {
            <p>Loading products...</p>
        }
        else
        {
            @foreach (Product product in productsList)
            {
                <Card>
                    <CardImage Src="@product.ImageUrl" Alt="@product.Name" />
                    <CardTitle>
                        <h3 class="font-medium md:text-lg text-black">@product.Name</h3>
                        <p class="mt-2 font-semibold text-black">$@product.Price</p>
                    </CardTitle>
                    <CardContent>
                        <div class="flex flex-col">
                            @foreach (ProductDetail detail in product.ProductDetails)
                            {
                                <div class="py-3 border-t border-gray-200">
                                    <div class="grid grid-cols-2 gap-2">
                                        <span class="font-medium text-black">@detail.Label:</span>
                                        <span class="text-end text-black">@detail.Value</span>
                                    </div>
                                </div>
                            }
                        </div>
                    </CardContent>
                    <CardAction ProductId="@product.Id" />
                </Card>
            }
        }
    </div>
</div>

<FooterMenu />

@code {
    private IEnumerable<Product> productsList = new List<Product>();

    protected override async Task OnInitializedAsync()
    {
        productsList = await ProductService.GetProductsAsync();
    }
}
```

##### Basket.razor

The Basket page allows users to view and manage the items they intend to purchase. It interacts with BasketService to maintain state and demonstrates conditional rendering based on whether the basket is empty.

Key features:

-**List of basket items with product image, name, price, and quantity.**

-**Functionality to remove items or decrement quantities.**

-**Real-time subtotal calculation.**

-**Link to proceed to the checkout page.**

-**Interactive UI for a better shopping experience.**

```razor
@namespace BlazorTutorial.Components.Pages
@rendermode InteractiveServer
@page "/basket"

@inject BasketService BasketService
@inject ProductService ProductService

<div class="max-w-7xl px-4 sm:px-4 mx-auto">
    <h2 class="text-2xl font-semibold mb-4">Shopping Basket</h2>

    @if (BasketItems.Count == 0)
    {
        <p class="text-gray-500">Your basket is empty.</p>
    }
    else
    {
        <ul role="list" class="divide-y divide-gray-200">
            @foreach (BasketItem item in BasketItems)
            {
                if (item.Product == null) continue;

                <li class="flex py-4">
                    <div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <img src="@item.Product.ImageUrl" alt="@item.Product.Name" class="h-full w-full object-cover" />
                    </div>
                    <div class="ml-4 flex flex-1 flex-col">
                        <div class="flex justify-between text-base font-medium text-gray-900">
                            <h3>@item.Product.Name</h3>
                            <p>$@item.Product.Price.ToString("N2")</p>
                        </div>
                        <div class="flex flex-1 items-end justify-between text-sm mt-2">
                            <p class="text-gray-500">Qty @item.Quantity</p>
                            <button class="text-blue-600 hover:text-blue-500" @onclick="() => RemoveItem(item.ProductId)">
                                Remove
                            </button>
                        </div>
                    </div>
                </li>
            }
        </ul>
    }
    <div class="border-t border-gray-200 pt-4 mt-4">
        <div class="flex justify-between text-xl font-bold text-gray-900">
            <span>Subtotal</span>
            <span>$@Subtotal.ToString("N2")</span>
        </div>
        <p class="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
        <div class="flex justify-end mt-4 w-full">
            <NavLink type="button" href="/checkout"
                class="bg-blue-600 text-white px-4 py-3 rounded-md hover:bg-blue-700 ml-auto">
                Proceed to Checkout
            </NavLink>
        </div>
    </div>
</div>

@code {
    private ICollection<BasketItem> BasketItems = new List<BasketItem>();

    protected override async Task OnInitializedAsync()
    {
        await LoadBasketItems();
    }

    private async Task LoadBasketItems()
    {
        BasketItems.Clear();

        foreach (BasketItem? item in BasketService.GetBasket().Items)
        {
            Product? product = await ProductService.GetProductAsync(item.ProductId);
            BasketItems.Add(new BasketItem
            {
                ProductId = item.ProductId,
                Quantity = item.Quantity,
                Product = product
            });
        }
    }

    private decimal Subtotal => BasketItems.Sum(i => (i.Product?.Price ?? 0) * i.Quantity);

    private void RemoveItem(string productId)
    {
        BasketItem? basketItem = BasketService.GetBasket().Items.FirstOrDefault(i => i.ProductId == productId);
        if (basketItem != null)
        {
            basketItem.Quantity--;

            if (basketItem.Quantity <= 0)
            {
                BasketService.RemoveItem(productId);
            }
        }

        BasketItem? item = BasketItems.FirstOrDefault(i => i.ProductId == productId);
        if (item != null)
        {
            item.Quantity--;

            if (item.Quantity <= 0)
            {
                BasketItems.Remove(item);
            }
        }
    }
}
```

##### Checkout.razor

The Checkout page handles the final step of the purchase process. It demonstrates Blazor forms, validation using EditForm and DataAnnotations, and integration with services for order submission.

Key features:

- **Captures shipping and payment details using a strongly-typed form model.**

- **alidation for required fields ensures data integrity.**

- **Shows basket summary with subtotal, taxes, and total amount.**

- **Popup notifications for successful submission or errors.**

- **Integration with OrderService to create orders and BasketService to clear the basket upon completion.**

```razor
@namespace BlazorTutorial.Components.Pages
@rendermode InteractiveServer
@page "/checkout"
@inject BasketService BasketService
@inject ProductService ProductService
@inject OrderService OrderService

<PageTitle>Checkout</PageTitle>

<div class="max-w-7xl px-4 sm:px-4 mx-auto">
    <Popup IsVisible="@isSubmitted" Title="Order Placed!" Type="PopupType.Success" OnClose="() => isSubmitted = false">
        <Message>
            Thank you, <span class="font-bold">@checkoutModel.FullName</span>!
            Your order has been placed successfully.
        </Message>
    </Popup>
    <Popup IsVisible="!string.IsNullOrEmpty(errorMessage)" Title="Error" Type="PopupType.Danger" OnClose="() => errorMessage = null">
        <Message>
            <span class="text-red-600">@errorMessage</span>
        </Message>
    </Popup>
    <div class="flex w-full gap-4 flex-wrap lg:flex-nowrap">
        <div class="w-full lg:w-2/3">
            <h3 class="text-xl font-semibold mb-4">Shipping Details</h3>
            <EditForm Model="@checkoutModel" OnValidSubmit="HandleSubmitAsync" class="space-y-8">
                <div class="space-y-1">
                    <label>Full Name</label>
                    <InputText class="w-full px-3 py-2 border border-gray-200 rounded-lg"
                        @bind-Value="checkoutModel.FullName" />
                    <ValidationMessage For="@(() => checkoutModel.FullName)" class="text-red-500 text-xs" />
                </div>
                <div class="space-y-1">
                    <label>Address</label>
                    <InputText class="w-full px-3 py-2 border border-gray-200 rounded-lg"
                        @bind-Value="checkoutModel.Address" />
                    <ValidationMessage For="@(() => checkoutModel.Address)" class="text-red-500 text-xs" />
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div class="space-y-1">
                        <label>City</label>
                        <InputText class="w-full px-3 py-2 border border-gray-200 rounded-lg"
                            @bind-Value="checkoutModel.City" />
                        <ValidationMessage For="@(() => checkoutModel.City)" class="text-red-500 text-xs" />
                    </div>
                    <div class="space-y-1">
                        <label>Postal Code</label>
                        <InputText class="w-full px-3 py-2 border border-gray-200 rounded-lg"
                            @bind-Value="checkoutModel.PostalCode" />
                        <ValidationMessage For="@(() => checkoutModel.PostalCode)" class="text-red-500 text-xs" />
                    </div>
                </div>
                <div class="space-y-1">
                    <label>Payment Method</label>
                    <InputSelect class="w-full px-3 py-2 border border-gray-200 rounded-lg"
                        @bind-Value="checkoutModel.PaymentMethod">
                        <option value="@PaymentMethod.CreditCard">Credit Card</option>
                        <option value="@PaymentMethod.PayPal">PayPal</option>
                        <option value="@PaymentMethod.BankTransfer">Bank Transfer</option>
                    </InputSelect>
                    <ValidationMessage For="@(() => checkoutModel.PaymentMethod)" class="text-red-500 text-xs" />
                </div>
                <button type="submit"
                    class="w-full bg-blue-400 text-white hover:bg-blue-500 font-semibold py-2 rounded-lg">
                    Place Order
                </button>
            </EditForm>
        </div>
        <div class="w-full lg:w-1/3">
            @if (BasketItems.Count == 0)
            {
                <p class="text-center text-gray-500">Your basket is empty.</p>
            }
            else
            {
                <div class="rounded-lg shadow-sm border border-gray-200 overflow-hidden w-full">
                    <div class="flex flex-col justify-between">
                        <ul role="list" class="flex flex-col divide-y divide-gray-200">
                            @foreach (BasketItem item in BasketItems)
                            {
                                if (item.Product == null) continue;

                                <li key="@item.ProductId" class="flex py-4 px-4 hover:bg-gray-50 transition-colors">
                                    <div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                        <img src="@item.Product.ImageUrl" alt="@item.Product.Name"
                                            class="h-full w-full object-cover" />
                                    </div>
                                    <div class="ml-4 flex flex-1 flex-col justify-between">
                                        <div class="flex-1">
                                            <h3 class="text-base font-medium text-gray-900 mb-1">
                                                @item.Product.Name
                                            </h3>
                                            <p class="text-lg font-semibold text-gray-900">
                                                $@item.Product.Price.ToString("N2")
                                            </p>
                                        </div>

                                        <div class="flex items-center justify-between">
                                            <span class="text-sm font-medium text-gray-700 min-w-[2rem] text-center">
                                                @item.Quantity
                                            </span>
                                            <p class="text-sm font-medium text-gray-900">
                                                Subtotal: $@((item.Product.Price * item.Quantity).ToString("N2"))
                                            </p>
                                        </div>
                                    </div>
                                </li>
                            }
                        </ul>
                        <div class="border-t border-gray-200 bg-gray-50 px-4 py-4">
                            <div class="flex justify-between items-center">
                                <span class="text-xl font-bold text-gray-900">Total</span>
                                <span class="text-xl font-bold text-gray-900">$@Total.ToString("N2")</span>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    </div>
</div>

@code {
    private bool isSubmitted = false;
    private string? errorMessage;
    private CheckoutModel checkoutModel = new CheckoutModel();
    private ICollection<BasketItem> BasketItems = new List<BasketItem>();

    protected override async Task OnInitializedAsync()
    {
        await LoadBasketItems();
    }

    private async Task LoadBasketItems()
    {
        BasketItems.Clear();
        foreach (BasketItem item in BasketService.GetBasket().Items)
        {
            Product? product = await ProductService.GetProductAsync(item.ProductId);
            BasketItems.Add(new BasketItem
            {
                ProductId = item.ProductId,
                Quantity = item.Quantity,
                Product = product
            });
        }
    }

    private decimal Subtotal => BasketItems.Sum(i => (i.Product?.Price ?? 0) * i.Quantity);

    private decimal TaxRate => 0.10m;

    private decimal Taxes => Subtotal * TaxRate;

    private decimal Total => Subtotal + Taxes;

    private async Task HandleSubmitAsync()
    {
        if (!BasketItems.Any())
        {
            errorMessage = "Your basket is empty. Please add items before checking out.";
            return;
        }

        Order order = new Order
        {
            FullName = checkoutModel.FullName,
            Address = checkoutModel.Address,
            City = checkoutModel.City,
            PostalCode = checkoutModel.PostalCode,
            PaymentMethod = checkoutModel.PaymentMethod,
            Items = BasketItems
        .Select(i => new Models.OrderItem
        {
            ProductId = i.ProductId,
            Quantity = i.Quantity
        })
        .ToList()
        };

        await OrderService.CreateOrderAsync(order);

        BasketService.Clear();
        BasketItems.Clear();

        isSubmitted = true;
    }

    public class CheckoutModel
    {
        [Required] public string FullName { get; set; } = string.Empty;
        [Required] public string Address { get; set; } = string.Empty;
        [Required] public string City { get; set; } = string.Empty;
        [Required] public string PostalCode { get; set; } = string.Empty;
        [Required] public PaymentMethod PaymentMethod { get; set; } = PaymentMethod.CreditCard;
    }
}
```

## 5. Conclusion

In this tutorial, you learned how to build a modern full-stack webshop using Blazor, Docker, and MongoDB. We covered the entire development process—from setting up your development environment and project structure, to implementing backend repositories, services, and data models, and finally building a responsive frontend with reusable components and Tailwind CSS. You also saw how to containerize your application and database for easy deployment and scalability.

By following these steps, you now have a solid foundation for developing scalable, maintainable, and interactive web applications with Blazor. You can extend this project further by adding authentication, advanced admin features, or integrating additional services.

## 6. GitHub Repository

[View the source code on GitHub](https://github.com/pgm-2425-itexploration/trends-en-innovaties-1-JoranCoen)