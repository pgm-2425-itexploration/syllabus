---
title: 'Umbraco: Features, .NET, and What’s Next'
synopsis: 'Discover Umbraco’s core features, hidden gems in v14, a sneak peek at v15, and why .NET matters.'
date: 2024-12-08
author:
  name: 'Bénoît Biraguma'
  avatarUrl: '/assets/avatars/benoit-biraguma.png'
  socials:
    website: 'https://benoitbiraguma.be/'
    linkedin: 'https://www.linkedin.com/in/beno%C3%AEt-biraguma-48422a194/'
    github: 'https://github.com/pgm-benobira'
thumbnailUrl: '/assets/posts/umbraco-features-net-and-whats-next_img.png'
head:
  - - meta
    - name: description
      content: 'Learn how to transform a static site into a dynamic portfolio using Statamic CMS. This tutorial walks you through setting up Statamic, managing content, and adding flexibility, perfect for developers transitioning from static-site generators to CMS-driven websites.'
  - - meta
    - name: keywords
      content: 'front-end development, CMS, static site to dynamic site, Statamic, Laravel, content management, portfolio website, flat-file CMS, web development'
sources: # Add sources that are used in the article. Per source, add a title and a URL. It is an array of objects, so make sure to use the correct syntax.
  - title: 'Umbraco 15 meetup livestream' 
    url: 'https://www.youtube.com/watch?v=FezwtmEfNBo'
  - title: 'Umbraco Releases' 
    url: 'https://our.umbraco.com/download/releases'
  - title: 'Umbraco CMS Docs' 
    url: 'https://docs.umbraco.com/umbraco-cms'
  - title: 'Numble'
    url: 'https://numble.be/'
  - title: 'Umbraco images'
    url: 'https://umbraco.com/'
  - title: '.NET images'
    url: 'https://existek.com/blog/what-is-net-used-for/'
---

# Umbraco: Features, .NET, and What’s Next

On October 17th, the **Belgian Umbraco User Group** hosted a meetup in Ghent, bringing together developers and enthusiasts passionate about Umbraco and open-source technology. The evening featured insightful talks, networking opportunities, and a look into the future of Umbraco.

The event was made possible by **Numble**, a software company based in Ghent. Specializing in crafting innovative, efficient, and scalable solutions, Numble tailors its work to meet unique business needs. Their team of experts leverages the latest technologies to deliver exceptional results, making them a key player in the local tech scene.

In this article, we’ll explore Umbraco’s core features, uncover hidden gems in version 14, and provide a sneak peek into what’s coming in version 15. For JavaScript developers, we’ll also introduce **.NET**, the powerful framework that drives Umbraco’s backend. Whether you're a frontend or full-stack developer, this guide will show you why Umbraco is worth adding in your interest.

## Umbraco Overview

**Umbraco** is a powerful, open-source Content Management System (CMS) built on the **.NET framework**. Known for its flexibility, scalability, and user-friendliness, Umbraco is trusted by developers and organizations worldwide to create websites, applications, and digital experiences.

Unlike many other CMS platforms, Umbraco provides developers with full control over the code and architecture, allowing for highly customized solutions. Whether you’re building a simple website, an enterprise-level application, or a headless CMS, Umbraco adapts to your needs.

### Key Features of Umbraco:
- **Open-Source**: A free, community-driven platform with an active developer community.  
- **Flexibility**: Fully customizable backend and frontend, suitable for small projects to large-scale solutions.  
- **Headless Capabilities**: Use Umbraco as a headless CMS to deliver content through APIs to any frontend, from React apps to IoT devices.  
- **User-Friendly Backoffice**: A clean, intuitive interface for content editors, making content management straightforward.  
- **Extendable**: Add plugins, packages, and custom code to tailor functionality to your needs.  
- **Performance**: Built on .NET, ensuring speed, reliability, and scalability for modern applications.

With its combination of developer freedom and editorial simplicity, Umbraco bridges the gap between technical power and content management efficiency. This makes it a strong choice for both developers and businesses looking for scalable and future-proof digital solutions.

## Umbraco Compared to Other .NET CMS Platforms  

![](/assets/posts/umbraco-features-net-and-whats-next_img-1.jpg)

Umbraco is not the only CMS built on the **.NET framework**. Other notable platforms include **Kentico** and **Orchard CMS**. Below is a comparison highlighting their strengths and differences:

| Feature/Aspect         | **Umbraco**                          | **Kentico**                                | **Orchard CMS**                       |
|------------------------|--------------------------------------|-------------------------------------------|--------------------------------------|
| **License**            | Open-source (free)                  | Paid plans (Kentico Xperience)            | Open-source (free)                   |
| **Flexibility**        | Highly customizable, developer-friendly | Customizable but more enterprise-focused  | Developer-friendly, modular design   |
| **Community Support**  | Large, active open-source community | Smaller, enterprise-focused user base     | Smaller, niche developer community   |
| **Ease of Use**        | Intuitive content editor interface  | Feature-rich but steeper learning curve   | Moderate, aimed at technical users   |
| **Headless CMS**       | Supported via Umbraco Heartcore     | Supported                                 | Limited support                      |
| **Performance**        | High performance with .NET Core     | Optimized for enterprise-level solutions  | Moderate performance                 |
| **Target Audience**    | SMBs, enterprises, developers       | Enterprises, mid-to-large organizations   | Developers, small to mid-sized apps  |
| **Extensibility**      | Highly extendable with packages     | Extendable, less modular than Umbraco     | Modular with a focus on customization |

### Summary  
- **Umbraco** stands out for its flexibility, open-source nature, and strong community support. It’s a great fit for both developers and content editors, offering a balance between power and usability.  
- **Kentico** is geared toward enterprises, with robust features but at a higher cost. It’s ideal for organizations needing out-of-the-box functionality and scalability.  
- **Orchard CMS** appeals to developers looking for a modular, open-source solution, though it has a smaller ecosystem compared to Umbraco.  

For developers, especially those working with modern .NET applications, **Umbraco** provides the best mix of flexibility, performance, and community support.  

## What is .NET?  

![](/assets/posts/umbraco-features-net-and-whats-next_img-2.jpg)

**.NET** is a free, open-source developer platform created by Microsoft for building a wide variety of applications, including web, desktop, mobile, cloud, and IoT. It provides a unified ecosystem with tools, libraries, and languages to streamline the development process across different platforms.

### Key Components of .NET  
- **.NET Runtime**: Handles program execution, memory management, and garbage collection.  
- **Languages**: Supports multiple languages, including **C#**, **F#**, and **Visual Basic**, giving developers flexibility in their preferred coding language.  
- **.NET Libraries**: A rich set of pre-built libraries and APIs that simplify coding for tasks like file handling, web requests, and database interaction.  
- **ASP.NET**: A core component for building dynamic web applications and APIs with high performance.  

### Cross-Platform Development  
With **.NET Core** and **.NET 5+**, applications can now run on **Windows**, **macOS**, and **Linux**. This cross-platform capability makes .NET a powerful choice for modern development needs.

### Why Developers Use .NET  

![](/assets/posts/umbraco-features-net-and-whats-next_img-3.jpg)

- **Performance**: .NET is optimized for speed, ensuring fast execution of applications.  
- **Scalability**: Suitable for small projects and enterprise-grade applications.  
- **Modern Development**: Supports modern paradigms like **cloud-native**, **containerization** (e.g., Docker), and microservices.  
- **Strong Community**: Backed by Microsoft and an active global developer community, ensuring continued innovation and support.

### .NET and Umbraco  
Umbraco is built on top of the **.NET framework** and leverages its capabilities to provide a fast, reliable, and scalable Content Management System (CMS). For JavaScript developers, this means you can:  
- Use **Umbraco’s REST APIs** to integrate content into your JavaScript applications (React, Vue, etc.).  
- Combine **frontend frameworks** with Umbraco’s .NET-powered backend for a headless CMS approach.  

By understanding .NET, JavaScript developers can unlock the full potential of Umbraco, bridging the gap between frontend development and a robust backend system.

## Hidden Gems in Umbraco v14  

![](/assets/posts/umbraco-features-net-and-whats-next_img-4.jpg)

In Umbraco v14, significant efforts were made to **rebuild and improve the backend**, leading to the introduction of the **Management API**. This REST API provides a cleaner, more efficient way to manage everything in Umbraco. The focus was on creating a better, more sustainable backend architecture with cleaner code, predictability, and security at its core.

### Dreaming of a Better Backend  
The improvements in Umbraco v14 can be grouped into four key areas:

#### 1. Cleaner Code  
The goal was to reduce complexity and improve maintainability:  
- **No more monster controllers**: Controllers were broken down into smaller, more manageable components.  
- **Smaller services**: Services were refactored where possible to become smaller and more focused.  
- **Less leaking of domain information**: Domain models and internal data are better encapsulated, reducing unnecessary exposure.  

#### 2. Predictable Behavior  
The new backend is designed to be more discoverable and consistent:  
- **Swagger for discovery**: A clear and documented API using Swagger for easy exploration.  
- **Paged results everywhere**: Consistency in how results are paged across all API endpoints.  
- **Attempt pattern and operationStatus**: More predictable handling of operations and outcomes.  

#### 3. Future-Safe Design  
Umbraco v14 embraces modern development practices to ensure long-term sustainability:  
- **Using the latest .NET**: Leveraging the newest .NET features for better performance and compatibility.  
- **Versioned endpoints and models**: Ensuring backward compatibility and smooth transitions in future updates.  
- **Move to GUIDs**: Replacing legacy IDs with globally unique identifiers (GUIDs) for better scalability.  
- **Modern .NET features**: Integrating features like asynchronous programming and dependency injection.  

#### 4. Enhanced Security  
Security improvements are at the heart of v14:  
- **OAuth 2 tokens**: Enhanced authentication and authorization mechanisms.  
- **More and better test coverage**: Increased testing ensures a more reliable and secure backend.

---

### Notable Hidden Gems  
During the session, some advanced features of v14 were discussed. While these may require deeper exploration to fully understand, they highlight Umbraco's growing flexibility and power:  

- **IContentEditingService**: Allows you to validate and check data models **before they hit the database**, ensuring data integrity.  
- **IContentPublishingService**: A streamlined way to **save content, retrieve its ID, and publish it**, avoiding unnecessary re-saving steps.  
- **Authorization Improvements**: Previously, overriding authorization checks (e.g., verifying if a user can perform a certain action) was challenging. New improvements make this process more flexible and developer-friendly.

---

These hidden gems showcase Umbraco v14's focus on providing a **modern, secure, and developer-friendly backend**. While some features may require a deeper dive, they reflect Umbraco's commitment to evolving alongside the latest technologies.

## Interesting features in Umbraco v15  

![](/assets/posts/umbraco-features-net-and-whats-next_img-5.jpg)

Umbraco v15 builds upon the foundation of v14 with some exciting new features and improvements, focusing on **performance**, **flexibility**, and **developer control**. Here are the key highlights:  

### 1. Lazy Loaded Content  
In previous versions, all published content was kept **in memory** at all times, which could result in high **RAM usage** for large sites. Umbraco v15 introduces:  
- **Hybrid Cache**: Leveraging a feature from **.NET 9**, content is now loaded lazily when needed, significantly reducing memory overhead.  
- **Navigation and Routing**: These functionalities seamlessly adapt to lazy-loaded content, ensuring no impact on performance or UX.  

### 2. Block Level Variants  
Variants in Umbraco allow you to create different versions of content for languages, regions, or other contexts. In v15:  
- **Block Level Variants**: Variant elements are now explicitly created **per variant**, providing more granular control and flexibility when managing multilingual or multi-context content.  

### 3. Client Credentials  
Managing API access becomes easier and more secure:  
- **API Users**: You can define a dedicated **API user** with controlled permissions.  
- **Limited Access**: API users cannot log in to the back office, ensuring security.  
- **API Keys**: You can generate an API key that external applications can use to securely communicate with the **Management API**.  

### 4. New Rich Text Editor  
With **TinyMCE v6** reaching end-of-life (EOL) and licensing changes in **TinyMCE v7**, Umbraco is preparing to fully transition to a new editor:  
- **TipTap Editor**: Introduced as the replacement starting in **Umbraco 16**, TipTap is a modern, flexible, and open-source rich text editor.  
- **TinyMCE Removal**: TinyMCE will be completely removed in Umbraco 16, ensuring the platform stays up-to-date and license-compliant.  

---

These features in Umbraco v15 showcase a commitment to improving **performance**, simplifying workflows, and offering developers more control. With innovations like **lazy loaded content**, granular **block variants**, and enhanced API security, Umbraco continues to evolve as a modern and scalable CMS.

## Why JavaScript Developers Should Care About Umbraco  

At first glance, Umbraco, being a **.NET-based CMS**, might seem outside the typical JavaScript developer's toolkit. However, it offers several compelling reasons for JS developers to pay attention:  

- **Headless CMS Capabilities**: With Umbraco Heartcore, content can be delivered through RESTful APIs, making it easy to integrate with modern JavaScript frameworks like **React**, **Vue**, and **Angular**.  
- **API-First Approach**: Umbraco's Management API and Content Delivery API provide clean, predictable endpoints for building dynamic, data-driven frontends.  
- **Flexibility for Frontend**: Use Umbraco as a headless backend while maintaining full control over the frontend with your favorite JavaScript stack.  
- **Scalable and Modern**: Built on **.NET Core**, Umbraco is optimized for performance and scalability, making it a reliable backend for large-scale JS applications.  

By combining Umbraco's powerful backend capabilities with JavaScript frameworks, developers can create fast, flexible, and scalable web solutions that meet modern application requirements.

## Networking and Community  

![](/assets/posts/umbraco-features-net-and-whats-next_img-6.jpg)

Attending this meetup was a first for me, and it turned out to be quite the experience. As a **JavaScript full-stack developer student**, I hadn't had any exposure to **.NET** before. It was refreshing to step into a different developer ecosystem, speak with developers from another sphere, and hear about their experiences.  

One thing I quickly realized is that, regardless of the programming language, **a CMS fundamentally serves the same purpose**. Having worked with **CraftCMS**, **Hygraph**, and **Statamic**, I noticed that all these systems share a similar core idea: managing and delivering content effectively. However, each CMS provides tailored solutions that align with the preferences and needs of different developers.  

This insight not only broadened my perspective but also highlighted the value of stepping outside my comfort zone and connecting with professionals from diverse technical backgrounds.

## Conclusion  

The Umbraco meetup offered a unique glimpse into the power and flexibility of **Umbraco v14** and the upcoming innovations in v15. From the introduction of the **Management API** to the hidden gems that make the backend cleaner, more secure, and future-proof, it’s clear that Umbraco is evolving alongside modern technologies like **.NET**.  

For JavaScript developers, Umbraco’s **headless capabilities** and API-first approach open doors to combining a robust backend with familiar frontend frameworks like **React**, **Vue**, and **Angular**. This makes it a strong choice for scalable and dynamic web applications.  

Beyond the technical insights, the meetup highlighted the importance of **community and networking**. Exploring new ecosystems and connecting with developers from different backgrounds not only broadens knowledge but also inspires creative solutions to shared challenges.  

Whether you’re a seasoned .NET developer or a JavaScript enthusiast exploring new tools, Umbraco proves to be a valuable CMS that bridges the gap between flexibility, performance, and usability.  