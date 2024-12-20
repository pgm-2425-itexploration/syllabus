---
title: "New features of .NET 9!"
synopsis: "Explore the newest features of .NET 9. I attended an engaging developer meetup focused on the new features in .NET 9. The event was organized by Inetum, a company in Ghent, Belgium."
date: 2024-12-19
author:
  name: "Justin Descan"
  avatarUrl: "/assets/avatars/justin-descan.png"
  socials: # Voeg links naar sociale media toe -> Als je er geen hebt, laat een lege string ''
    linkedin: "https://www.linkedin.com/in/justindescan/"
    github: "https://github.com/pgm-justdesc4"
    website: "https://justindescan.com"
thumbnailUrl: "/assets/posts/new-features-of-dotnet9_thumbnail.png"
head:
  - - meta
    - name: description
      content: "Explore the newest features of .NET 9."
  - - meta
    - name: keywords
      content: ".NET 9"
sources:
  - title: ".NET 9"
    url: "https://learn.microsoft.com/en-us/dotnet/core/whats-new/dotnet-9"
  - title: ".NET GitHub Repository"
    url: "https://github.com/dotnet/"
---

## New features of .NET 9!

I attended an engaging developer meetup focused on the new features in .NET 9. The event was organized by **Inetum**, a company in Ghent, Belgium. It was a perfect blend of learning and networking with **Nico Vermeir**, an expert in .NET, leading the session.

The vibe was relaxed yet stimulating, with pizza, drinks, and great conversations that made it easy to connect with fellow developers. Everyone gathered to discuss the latest trends in the .NET ecosystem and it was exciting to hear about the advancements in .NET 9.

### MapStaticAssets and optimizing performance

One of the highlights for me from the meetup was the deep dive into MapStaticAssets, a feature in .NET 9 that really caught my attention. This feature promises to drastically improve the delivery of static assets like CSS, JavaScript and images in web applications. Static asset management can be a challenge and with this new functionality, we’re able to streamline workflows while enhancing application performance.

---

### **New features of .NET 9**

Nico provided a deep dive into the new capabilities in .NET 9. Beyond **MapStaticAssets**, the session covered a host of new features, optimizations and updates that cater to modern web development needs. Here are some of the key points that he highlighted:

1. **Blazor enhancements**:

   - He talked about how .NET 9 introduces a new .NET MAUI Blazor Hybrid and Web App solution template. This template enables developers to create client apps for mobile and web platforms that share the same UI, maximizing code reuse. It also provides automatic creation of the necessary projects for both Blazor Web Apps and .NET MAUI Blazor Hybrid apps. This is a gamechanger for developers looking to target multiple platforms with minimal code duplication.

2. **Blazor render modes**:

   - A new API allows developers to detect rendering locations, check for interactivity, and retrieve the render mode of components at runtime. These improvements enhance debugging and optimization as developers can now making better component behavior based on the environment.

3. **Server-side blazor reconnection**:
   - Another key update discussed was the improved server-side reconnection experience. He demonstrated how .NET 9 now attempts to reconnect immediately when a user returns to an app with a disconnected circuit. This minimizes delays for users who navigate back to the app, improving overall user experience.

These new features, along with MapStaticAssets are designed to streamline application performance, reduce development time and enhance cross-platform compatibility.

## **Static Assets and Performance Challenges**

In any web application, static assets like CSS, JavaScript and images play a crucial role in delivering a polished user experience. However, managing these assets efficiently comes with challenges:

1. **Redundant Requests**: Browsers often make unnecessary requests for assets that haven't changed.
2. **Increased Network Load**: Large uncompressed files increase bandwidth usage.
3. **Stale Files**: Users might encounter outdated versions of assets if caching headers aren't configured properly.
4. **Manual Configuration Overhead**: Setting up caching and compression typically requires careful server-side configuration.

Optimizing static assets ensures faster page loads, reduced server costs and an improved user experience, especially on mobile devices with limited bandwidth. .NET 9 addresses these challenges with MapStaticAssets, a powerful new feature that automates and enhances static file delivery.

## **Introducing MapStaticAssets**

### **What is MapStaticAssets?**

The `MapStaticAssets` feature in .NET 9 is designed to replace the traditional `UseStaticFiles` middleware in most scenarios. It collects information about all the static resources in an application at build and publish time, enabling the runtime to serve them more efficiently.

Here’s a simple comparison of code changes:

```csharp
var builder = WebApplication.CreateBuilder(args);

builder.Services.AddRazorPages();

var app = builder.Build();

if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Error");
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseRouting();
app.UseAuthorization();

// Old approach
// app.UseStaticFiles();

// New approach
app.MapStaticAssets();

app.MapRazorPages();
app.Run();
```

With just this small change, developers can unlock a range of benefits that make managing static assets easier and more efficient.

---

### **More advanced examples for MapStaticAssets**

#### **1. Handling Static Assets with custom file providers**

You can customize how static files are served by using a custom file provider. Below is an example of how to configure it:

```csharp
var builder = WebApplication.CreateBuilder(args);
builder.Services.AddRazorPages();

var app = builder.Build();

if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Error");
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseRouting();
app.UseAuthorization();

// Custom static file provider example
var provider = new PhysicalFileProvider(Path.Combine(Directory.GetCurrentDirectory(), "MyStaticAssets"));
var options = new StaticFileOptions
{
    FileProvider = provider,
    RequestPath = "/custom"
};

// Map custom static assets
app.MapStaticAssets();
app.UseStaticFiles(options);

app.MapRazorPages();
app.Run();
```

#### **2. Caching strategies for static files**

To ensure that browsers cache assets effectively, you can implement Cache-Control headers for static files. The `MapStaticAssets` automatically sets up efficient cache headers:

```csharp
var app = builder.Build();

// Enable caching of static assets with Cache-Control headers
app.UseStaticFiles(new StaticFileOptions
{
    OnPrepareResponse = ctx =>
    {
        var headers = ctx.Context.Response.Headers;
        headers["Cache-Control"] = "public,max-age=31536000";  // Cache for 1 year
    }
});

app.Run();
```

#### **3. Manually triggering compression**

In certain cases, you might want to control the compression manually. Here's how to apply **gzip** or **Brotli** compression selectively:

```csharp
public static class CompressionExtensions
{
    public static IApplicationBuilder UseGzipCompression(this IApplicationBuilder app)
    {
        app.UseResponseCompression();
        app.UseStaticFiles(new StaticFileOptions
        {
            OnPrepareResponse = ctx =>
            {
                ctx.Context.Response.Headers.Add("Content-Encoding", "gzip");
            }
        });
        return app;
    }
}

// Inside Configure method:
app.UseGzipCompression();
```

## **Key features of MapStaticAssets**

### **1. Build-time compression**

MapStaticAssets compresses static files at build time rather than during runtime, offering better performance. It supports:

- **gzip compression** during development.
- **gzip and Brotli compression** during publishing.

#### **Compression statistics**

Here’s a comparison of original and compressed file sizes for popular libraries:

| File              | Original (KB) | Compressed (KB) | Reduction (%) |
| ----------------- | ------------- | --------------- | ------------- |
| bootstrap.min.css | 163           | 17.5            | 89.26%        |
| jquery.js         | 89.6          | 28              | 68.75%        |
| bootstrap.min.js  | 78.5          | 20              | 74.52%        |

For larger component libraries like **MudBlazor**, the reductions are even more significant:

| File              | Original (KB) | Compressed (KB) | Reduction (%) |
| ----------------- | ------------- | --------------- | ------------- |
| MudBlazor.min.css | 541           | 37.5            | 93.07%        |
| MudBlazor.min.js  | 47.4          | 9.2             | 80.59%        |

These optimizations are especially beneficial for mobile users, who often face bandwidth constraints.

---

### **2. Content-based ETags**

MapStaticAssets uses the SHA-256 hash of a file's content to generate Base64-encoded ETags. This ensures that browsers only download a file if its contents have changed, avoiding unnecessary network requests and improving load times.

---

### **3. Automatic optimization**

When you update libraries or add new assets, MapStaticAssets automatically re-optimizes them as part of the build process. This eliminates the need for manual reconfiguration, saving time and reducing errors.

---

### **4. Simplified configuration**

Unlike server-side dynamic compression tools (e.g., IIS gzip), MapStaticAssets requires no additional configuration. It is faster and more reliable, as assets are already compressed before deployment.

## **When to use MapStaticAssets**

While MapStaticAssets works well for most scenarios, there are some considerations:

- It’s best suited for predefined assets that are available at build and publish time.
- For dynamic or external assets (e.g., files stored on disk or embedded in resources), developers should continue using `UseStaticFiles`.

## **Practical example: optimizing a Razor Pages app**

### **Before optimization**

A sample Razor Pages app with the following assets:

- **bootstrap.min.css** (163 KB)
- **jquery.js** (89.6 KB)
- **bootstrap.min.js** (78.5 KB)

Without compression, the total size is 331.1 KB. Users on slower connections would experience noticeable delays.

### **After optimization**

Using MapStaticAssets, the total compressed size is reduced to 65.5 KB, an 80% reduction. This significant improvement leads to faster load times and lower bandwidth costs.

---

### **Comparison: MapStaticAssets vs. Dynamic Compression**

| Metric            | IIS gzip (KB) | MapStaticAssets (KB) | Reduction (%) |
| ----------------- | ------------- | -------------------- | ------------- |
| MudBlazor.min.css | ≅90           | 37.5                 | 59%           |

MapStaticAssets outperforms IIS gzip by pre-compressing assets during the build process, ensuring optimal performance.

---

### **Benefits for developers**

1. **Improved user experience**: Faster page loads and lower latency.
2. **Ease of use**: Simplifies the setup of static file delivery.
3. **Better performance**: Reduces server load and network usage.
4. **Mobile-friendly**: Optimized for low-bandwidth environments.

## **Conclusion**

The introduction of MapStaticAssets in .NET 9 is a testament to Microsoft’s commitment to enhancing developer productivity and application performance. By automating and optimizing static file delivery, this feature addresses key pain points in modern web development.

Attending the meetup at **Inetum** in Ghent, led by **Nico Vermeir**, gave me valuable insights into this feature and its real-world applications. I’m excited to implement it in future projects, especially for scenarios where performance and scalability are critical.
