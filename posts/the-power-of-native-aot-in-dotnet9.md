---
title: 'The Power of Native AOT in .NET9'
synopsis: ''
date: 2024-10-19
author:
  name: 'Nicolas Ghyselincks'
  avatarUrl: ''
  socials:
    website: ''
    linkedin: ''
    github: ''
thumbnailUrl: ''
head:
  - - meta
    - name: description
      content: 'Hi 👋 and welcome to Fronteers BE.
We are a community for people with an interest in front-end development and we host casual meetups in Ghent. Occiasionally also in Antwerp and Kortrijk.'
  - - meta
    - name: keywords
      content: '.NET 9'
sources:
  - title: '.NET 9'
    url: 'https://learn.microsoft.com/en-us/dotnet/core/whats-new/dotnet-9'
  - title: 'Official .NET Github repository'
    url: 'https://learn.microsoft.com/en-us/dotnet/core/whats-new/dotnet-9'
---



# The Power of Native AOT in .NET9

I recently attended an insightful developer meetup focused on the exciting new features of .NET 9. The event was organized by Inetum, a tech company based in Ghent, Belgium. This event was an excellent blend of learning and networking, with Nico Vermeir, an expert in .NET development, leading the session. One of the most talked-about features during the meetup was Native AOT (Ahead-of-Time Compilation), a feature that promises to change how .NET applications are built and deployed. In this article, I’ll dive deeper into what Native AOT is, how it works, and why it has the potential to be a game-changer for .NET developers.



## What is .NET?

Before diving into Native AOT, it's important to understand the .NET ecosystem, as this will provide better context for how Native AOT fits into the overall .NET development landscape.

### Overview of .NET

.NET is a free, open-source, and cross-platform framework developed by Microsoft. It is designed to enable developers to build a wide range of applications, including web applications, desktop software, mobile apps, cloud services, microservices, and even games. .NET is an umbrella term that refers to a collection of technologies and frameworks that allow developers to create high-quality software using modern programming languages like C#, F#, and Visual Basic. The framework's broad range of capabilities makes it a popular choice for developers who need to target different platforms, whether that’s building enterprise-level applications, high-performance websites, or lightweight microservices.

Originally, .NET was a Windows-only platform, but with the release of .NET Core in 2016, Microsoft made the platform cross-platform, which significantly increased its popularity. In 2020, Microsoft consolidated .NET Core and the original .NET Framework into a single unified platform known as .NET 5. This move unified all the different .NET variants into one cohesive ecosystem, enabling developers to build applications that run on Windows, macOS, and Linux with the same codebase. .NET 9, the current version, continues this evolution with new features, optimizations, and improvements.


### Key Features of .NET

1. **Cross-Platform Compatibility**: Write your code once and run it on multiple platforms such as Windows, macOS, and Linux.
2. **Rich Ecosystem**: .NET offers powerful tools like Visual Studio, libraries, and frameworks (e.g., ASP.NET for web apps, Xamarin for mobile apps, WPF, and WinForms for desktop development).
3. **High Performance**: With runtime optimizations and support for Just-in-Time (JIT) and Ahead-of-Time (AOT) compilation, .NET applications are designed to run efficiently.
4. **Language Support**: .NET supports multiple languages, including C#, F#, and Visual Basic, allowing developers to choose the right tool for the job.
5. **Community and Open Source**: .NET is an open-source platform with a vibrant developer community and contributions from developers worldwide.

### Why Developers Choose .NET

Given its powerful features, .NET has become the framework of choice for many developers worldwide. Its cross-platform support means that companies can use the same codebase for applications targeting different operating systems. The rich ecosystem, combined with strong performance, makes it an excellent choice for both small projects and large, enterprise-scale solutions. Moreover, the ability to work with multiple languages (C#, F#, and Visual Basic) allows developers to use the tool that best suits their needs, making .NET an attractive option for a wide range of use cases.

.NET also benefits from strong community support, open-source development, and regular updates from Microsoft, ensuring that the framework stays modern, secure, and capable of handling the latest development trends. With every new version of .NET, including the latest .NET 9, Microsoft continues to refine and expand its capabilities, making it an essential tool for developers looking to build innovative and efficient applications.




## What is Native AOT?

Native AOT, or Ahead-of-Time Compilation, is a feature that was introduced in .NET 9. Traditionally, .NET applications rely on Just-in-Time (JIT) compilation, which means the code is converted into native machine code during the application’s runtime. Native AOT changes this approach by precompiling the application into a fully native executable. This approach removes the need for JIT compilation at runtime, which provides several significant benefits in terms of performance, security, and deployment.

In simple terms, Native AOT allows .NET applications to be compiled into fully native, platform-specific executables, rather than relying on the runtime to compile the code on the fly. This results in faster startup times, lower memory usage, and a more streamlined execution process.


In short, Native AOT converts .NET applications into precompiled, platform-specific executables. This provides faster startup times and reduced memory overhead.


## Why Use Native AOT?

Native AOT offers several advantages:

1. **Faster Startup Time**: Since the code is already compiled into machine code, no JIT compilation is required at application startup. This is especially valuable for serverless applications and CLI tools where quick response times are crucial.
2. **Smaller Distribution**: Native AOT generates only the code that the application actually uses. This means unnecessary parts of the runtime and libraries are stripped away, resulting in smaller executable files.
3. **No Runtime Dependency**: Since everything is bundled into the executable, there is no dependency on a specific .NET runtime on the target machine. This simplifies the distribution of self-contained applications.
4. **Enhanced Security**: The absence of a runtime and JIT compiler reduces the attack surface of applications, contributing to better security.

## Native AOT vs Traditional JIT Compilation

### Startup Time

In traditional JIT compilation, when you run a .NET application, the runtime compiles the Intermediate Language (IL) code into native machine code. This process happens at runtime, which introduces a delay, especially in large applications or serverless environments where speed is crucial.

In contrast, Native AOT eliminates the JIT compiler and precompiles the entire application into machine code before it’s executed. This means that the application is ready to run without any delay, making it ideal for scenarios where fast startup times are essential.


### Memory Usage

JIT-compiled applications require additional memory for the runtime and the JIT compiler. Native AOT reduces memory usage by removing the JIT compiler from the execution pipeline, leading to more predictable and efficient resource consumption.

### Application Size

While Native AOT executables are often smaller than self-contained JIT-based applications, they can be larger than framework-dependent applications due to the inclusion of necessary runtime components. However, this trade-off is justified for use cases prioritizing portability and self-containment.

### Portability

JIT-based applications rely on a compatible runtime environment on the target machine, which can complicate deployment. Native AOT produces a single, standalone binary that runs independently of the .NET runtime, simplifying deployment, especially in environments where runtime installation is not feasible.

### Reflection Support

Native AOT requires developers to explicitly preserve metadata for reflection, as it removes unused code to optimize binary size. In contrast, JIT compilation retains all metadata, providing seamless reflection support. This makes Native AOT more suitable for scenarios where reflection is not heavily used.

## How Does Native AOT Work?

Native AOT builds on technology originally introduced with .NET Core’s Self-Contained Deployment option and experiments with the ILC (IL Compiler) in .NET 5. In .NET 9, this feature has matured and supports a broader range of use cases.

Here’s how it works:
1. The source code is compiled into IL (Intermediate Language), as is standard in .NET.
2. The IL is analyzed, and only the necessary parts of the runtime and libraries are selected.
3. The selected IL is compiled into native machine code, resulting in a standalone executable.

Microsoft has improved tooling, such as the dotnet publish command, to make enabling Native AOT straightforward. By simply adding a publish profile to your project, you can generate a Native AOT build:

``` bash
dotnet publish -c Release -r win-x64 --self-contained true /p:PublishAot=true
```

This generates an optimized, platform-specific executable.

## Example Project: MathTool CLI

To better understand Native AOT, let’s build a simple proof-of-concept project. This will be a CLI tool called MathTool that calculates the square of a number. We’ll enable Native AOT to demonstrate its benefits.

### Step 1: Create the Project

Run the following command to create a new console application:

``` bash
dotnet new console -n MathTool
cd MathTool
```

This creates a new folder MathTool containing a basic console application.

### Step 2: Add the Application Logic

Replace the contents of Program.cs with the following code:

``` c#
using System;

class Program
{
    static void Main(string[] args)
    {
        Console.WriteLine("Welcome to MathTool - Powered by Native AOT!");
        Console.WriteLine("Enter a number to calculate its square:");

        if (double.TryParse(Console.ReadLine(), out double number))
        {
            double result = Math.Pow(number, 2);
            Console.WriteLine($"The square of {number} is {result}.");
        }
        else
        {
            Console.WriteLine("Invalid input. Please enter a valid number.");
        }
    }
}
```

This program reads a number from the user, calculates its square using `Math.Pow`, and displays the result.

### Step 3: Enable Native AOT

Update the project configuration by editing MathTool.csproj to include the following settings:

``` c#
<Project Sdk="Microsoft.NET.Sdk">
  <PropertyGroup>
    <OutputType>Exe</OutputType>
    <TargetFramework>net9.0</TargetFramework>
    <PublishAot>true</PublishAot>
    <SelfContained>true</SelfContained>
    <RuntimeIdentifier>win-x64</RuntimeIdentifier>
  </PropertyGroup>
</Project>
```

Key configurations: 

- `PublishAot`: Enables Native AOT.
- `SelfContained`: Ensures the executable includes all dependencies.
- `RuntimeIdentifier`: Specifies the target platform (e.g., win-x64).

### Step 4: Publish the Application

Run the following command to compile and publish the application:

``` bash
dotnet publish -c Release
```

This command generates a standalone executable in the `bin/Release/net9.0/win-x64/publish/` directory.

### Step 5: Test the Application

Navigate to the publish directory and run the executable:

``` bash
./MathTool.exe
```

Input a number, and the application will instantly calculate and display its square. The fast startup time and self-contained nature of the application demonstrate the benefits of Native AOT.

## Limitations and Considerations

While Native AOT is impressive, there are some caveats:

1. **Reflection**: Because Native AOT compiles only the used code, dynamic features like reflection can cause issues. Developers need to explicitly specify which types and methods should be retained.
2. **Binary Size**: While Native AOT binaries are often smaller than self-contained applications, they can be larger than regular framework-dependent executables.
3. **Limited Framework Support**: Cross-platform compilation is not supported; you must build on the target platform.


## When to Use Native AOT?

Native AOT is ideal for:
- **Serverless Functions**:  Such as AWS Lambda or Azure Functions, where startup time is critical.
- **CLI Tools**: Command-line utilities benefit from faster load times and smaller distributions.
- **Microservices**: Small, self-contained services can be deployed more easily and run more efficiently.

## Conclusion

Native AOT in .NET 9 offers developers a powerful way to optimize their applications, improving performance, security, and deployment simplicity. By precompiling applications into fully native executables, developers can deliver faster startup times, reduced memory usage, and smaller binaries. Whether you're building CLI tools, serverless functions, or microservices, Native AOT can enhance your .NET applications and streamline your development process.

Give Native AOT a try in your next project and experience the difference firsthand!

