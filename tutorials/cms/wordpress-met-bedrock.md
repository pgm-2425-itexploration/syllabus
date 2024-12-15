---
title: "WordPress with Bedrock"
synopsis: "This tutorial provides a comprehensive guide to using WordPress with Bedrock, a modern development boilerplate by Roots. From installation to project structure and plugin management, you’ll learn how Bedrock enhances security, organization, and efficiency for WordPress projects."
date: 2024-12-14
author:
  name: "Tristan De Ridder"
  avatarUrl: "/assets/avatars/tristan-de-ridder.png"
  socials: # Add social media links -> If you don't have any, place an empty string ''
    website: "https://tristanderidder.be/"
    linkedin: "https://www.linkedin.com/in/tristan-de-ridder/"
    github: "https://github.com/TristanDeRidder"
thumbnailUrl: "/assets/tutorials/wordpress-with-bedrock/wordpress-with-bedrock.png"
head:
  - - meta
    - name: description
      content: "Learn how to set up a WordPress website with the Bedrock boilerplate, a modern tool that enhances your project’s organization by providing a cleaner and more structured folder layout."
  - - meta
    - name: keywords
      content: "CMS, Tutorial, WordPress, Bedrock, Boilerplate, folder structure, composer"
sources:
  - title: "Bedrock Docs"
    url: "https://roots.io/bedrock/docs/installation/"
  - title: "Bedrock tutorial"
    url: "https://youtu.be/wNSaP-O5wrk?si=gG7Qsi5KgWoe_wbv"
  - title: "Flywheel"
    url: "https://localwp.com/"
  - title: 'Composer Docs' 
    url: 'https://getcomposer.org/doc/00-intro.md'
---

# WordPress with Bedrock

In this tutorial, we’ll explore Bedrock, a powerful boilerplate designed to enhance WordPress development by introducing modern tools and best practices. Bedrock reimagines how WordPress projects are structured, offering developers a cleaner, more professional environment for building websites.

## Table of contents

- [WordPress with Bedrock](#wordpress-with-bedrock)
  - [Table of contents](#table-of-contents)
  - [Introduction to WordPress with Bedrock](#introduction-to-wordpress-with-bedrock)
  - [Prerequisites](#prerequisites)
  - [Steps](#steps)
  - [Project Structure Overview](#project-structure-overview)
    - [Folder Structure](#folder-structure)
    - [Folder Details](#folder-details)
    - [Benefits of This Structure](#benefits-of-this-structure)
  - [Wordpress](#wordpress)
  - [Creating and Managing Themes and Plugins](#creating-and-managing-themes-and-plugins)
    - [Installing Themes](#installing-themes)
    - [Installing Plugins](#installing-plugins)
    - [Managing Dependencies with Composer](#managing-dependencies-with-composer)
      - [Updating Themes and Plugins](#updating-themes-and-plugins)
    - [4. File Permissions Issues](#4-file-permissions-issues)
    - [5. Plugins Not Appearing or Loading](#5-plugins-not-appearing-or-loading)
    - [6. Permalink Issues](#6-permalink-issues)
    - [7. HTTPS or SSL Issues](#7-https-or-ssl-issues)
  - [Conclusion](#conclusion)


## Introduction to WordPress with Bedrock

Bedrock is a WordPress boilerplate developed by Roots that provides a modern approach to structuring Wordpress projects. Using Bedrock allows developers to create a WordPress website with a more organized structure, leveraging tools that improve development efficiency and security.

**Why should you use Bedrock**
Some key advantages include:

- Improved Folder Structure: Bedrock organizes WordPress files and dependencies more cleanly, separating application and public files.
- Dependency Management with Composer: Easily manage WordPress and plugin dependencies through Composer, ensuring consistent and versioned installations.
- Environment-Specific Configurations: Use environment-specific configuration files, allowing smooth transitions between development, staging, and production.
- Environment Variables with Dotenv: Store sensitive information (like database credentials) securely with Dotenv, protecting your project and enhancing configuration flexibility.
- Autoloader for mu-plugins: Enable regular plugins as mu-plugins, simplifying development while improving site performance.
- Enhanced Security: By separating the web root, using secure password hashing (wp-password-bcrypt), and minimizing publicly accessible files, Bedrock enhances the security of WordPress applications.


However a few requirements are present in order to use Bedrock:
- PHP -> 8.0 or higher
- [Composer](https://getcomposer.org/download/)
  
But these will be brought up when going through the installation later on

## Prerequisites
Before starting, you will have to install the following apps or dependency or your device:

- [Composer](https://getcomposer.org/download/)
- [Local by Flywheel](https://localwp.com/)

## Steps

1. **Set Up Composer**

   - mac users:
     - brew install composer
   - windows users:
     - download using the composer website

2. **Set Up a New Site in Local**

   - Open Local by Flywheel and set up a new site by following the on screen steps:
     - Choose the **create a new site** option. The blueprint option allows you to start a site by utilizing pre-saved site settings such as themes and plugins.
     - Next choose your site name
     - Then you can choose your environment. Make sure you at least have the **PHP: 8.2.23**, **Web server: nginx 1.26.1** and **Database: MySQL 8.0.16** versions. These are the ones used in this tutorial. If you any other versions that selected by the preferred, choose the custom option and insert select the right versions
     - Lastly set you WordPress panel login and email. Make sure you remember these, otherwise you will not be able to enter the WordPress dashboard 
   - Once the site is created, open the terminal and navigate to the `app` folder.

     > **Note:** You will need to create an account in order to use Local  
     > **Note:** Using Local’s built-in terminal may place you inside the `public` folder, so navigate up to the `app` folder if needed.

     ![Bedrock setup wordpress](/assets/tutorials/wordpress-with-bedrock/wordpress-with-bedrock-setup-name.png)
     ![Bedrock setup wordpress](/assets/tutorials/wordpress-with-bedrock/wordpress-with-bedrock-setup-create.png)
     ![Bedrock setup environment](/assets/tutorials/wordpress-with-bedrock/wordpress-with-bedrock-setup-environment.png)

3. **Install Bedrock**

   - Inside the `app` folder, run the following composer command to create a new Bedrock project:
     ```terminal
     composer create-project roots/bedrock
     ```
   - List the folders to confirm Bedrock has been created.

4. **Remove the `public` Folder**

   - Delete the `public` folder to avoid conflicts with Bedrock's structure.  
   This should be the resulting directory .
   Before the deletion:
   ```directory
   Local Sites
   ├── bedrock
     ├── app
        ├── bedrock
        ├── public
     ├── conf
     ├── logs
   ```

   After the deletion:
   ```directory
   Local Sites
   ├── bedrock
     ├── app
        ├── bedrock
     ├── conf
     ├── logs
   ```
   - Move up one directory, and then open Bedrock in Visual Studio Code.


5. **Configure Bedrock in Local**

   - In VS Code, navigate to `config`, in the bedrock folder **not** on the app folder and then `nginx`.
   - Open the `site.config.hbs` file and search for the line that sets the `root` directory.
     > **Note:** This should be at the beginning of the server object
     ```nginx
     # Default root directory example
     root: {{root}}
     ```
   - Change the `root` variable to point to the `web` folder within your Bedrock directory.
     > **Note:** The route need to be the complete route you find in Finder or in File Explorer
     This change should result in somthing like this:
     ```nginx
     # Default root directory example
    root   "/Users/{{name}}/Local Sites/bedrock/app/bedrock/web";
     ```
   - Before proceeding, stop the site in Local.

6. **Update the `.env` File**

   - Inside the `web` folder, locate the `.env.example` file, copy and rename it to `.env`.
   - Open `.env` and update the following values:
     ```env
     DB_NAME=local
     DB_USER=root
     DB_PASSWORD=root
     DB_HOST=localhost
     ```
     > **Note:** DB_HOST is located below the optipnal database variables in comments
     > **Note:** Optionally, you can define DATABASE_URL for using a DSN instead of using the variables above

   - Set the WP_ENV to development if this is not the case
   - Change `WP_HOME='http://example.com'` to the variable site domain which was given when you named your project. For example: `WP_HOME='http://bedrock.local'`
   > **Note:** Keep the `/wp` in the url
   - Change `WP_SITEURL="${WP_HOME}/wp"` to `http://yoursitedomain/wp`


7. **Run Your Site**
   - Start your site again in Local.
   - Open your browser and enter your site’s domain or click the open site button in Local. If prompted, give permission to access the site.


8. **Optional: Multisite**  
     
   Bedrock is multisite network compatible. So if you plan to build a website with bedrock that has subdomains you will need the roots/multisite-url-fixer mu-plugin to make sure admin URLs function properly. This plugin is not needed on subdirectory installs but will work well with them. From your Bedrock directory use this command:
   `composer require roots/multisite-url-fixer`

If all steps were followed correctly, you should now see your Bedrock-powered WordPress site up and running in your browser.

## Project Structure Overview

Understanding Bedrock’s folder structure is essential for navigating and organizing your WordPress project. Bedrock differs from the traditional WordPress setup, which makes it easier to separate core WordPress files from application-specific code and assets.

### Folder Structure

Below is a breakdown of the main folders inside of a Bedrock project:  
```directory
   Local Sites
   ├── Bedrock
   app
    ├── bedrock
        └── config
        └── vendor
        └── web
    ├── conf
    ├── logs
   ```


### Folder Details

- **app**: This directory is where you place application-specific code. It contains the `mu-plugins` folder (for must-use plugins) and may also hold custom libraries, helper functions, or services you want to add to your project.
  - `mu-plugins`: These are must-use plugins, meaning they automatically load without needing activation in the dashboard. Bedrock uses an autoloader here, making it possible to treat regular plugins as must-use plugins.

- **config**: Contains configuration files that allow environment-specific settings. This folder includes `application.php` and `environments` subdirectory, which help you set environment-specific configurations (e.g., for development, staging, or production). This structure enhances security and flexibility, enabling smooth transitions between environments.
  - `application.php`: Contains main application configuration and settings.
  - `environments`: Holds separate config files (e.g., `development.php`, `production.php`) that override `application.php` based on the environment.

- **vendor**: This is where Composer stores all installed dependencies, including WordPress core files. Since Bedrock relies on Composer for dependency management, it places WordPress itself in `vendor` rather than the root directory.

- **web**: Acts as the document root and contains public files accessible to web users.
  - `wp`: This subfolder houses the core WordPress files.
  - `app/uploads`: Stores all media and uploads.
  - `index.php`: Entry point for WordPress, configured to load from the `wp` directory.
  - `.htaccess`: Configured for permalinks and security settings.

### Benefits of This Structure

By structuring WordPress in this way, Bedrock provides:
- **Separation of Concerns**: Distinguishes application files, configurations, and public assets, creating a more organized environment.
- **Improved Security**: By keeping core WordPress files outside of the document root, Bedrock minimizes the risk of unauthorized access.
- **Scalability and Maintenance**: Clear separation and configuration make scaling and updating easier, especially in multi-environment setups.

This structure might feel different at first, but it allows for more control and modularity, giving developers the flexibility needed for advanced WordPress development.


## Wordpress

In Local by Flywheel, locate your site in the list and click the WP Admin button on the right. This will open the login page for your WordPress site in your default browser. To access your WordPress dashboard, you’ll need to enter the username and password you chose during the initial site setup in Local. 

![Bedrock setup environment](/assets/tutorials/wordpress-with-bedrock/wordpress-with-bedrock-setup-wordpress.png)

Once logged in, you’ll be taken directly to the WordPress dashboard, where you can begin managing and customizing your site.


## Creating and Managing Themes and Plugins

With Bedrock, managing themes and plugins is different from the traditional WordPress approach. Bedrock uses Composer to manage WordPress core files, plugins, and even themes, providing a version-controlled and organized way to handle dependencies.

### Installing Themes
Installing a theme with bedrock can be done in three different ways:

1. **Adding a Theme with Composer**:
   - To install a theme via Composer, run the following command from your project root:
     ```bash
     composer require wpackagist-theme/<theme-name>
     ```
     For example, to install the popular "Astra" theme:
     ```bash
     composer require wpackagist-theme/astra
     ```

   - Composer will download the theme to `web/app/themes`, the designated themes folder in Bedrock.

2. **Custom Themes**:
   - You can also add custom themes directly to the `web/app/themes` folder by manually creating a theme folder. This folder needs to be named after your theme.
   - Activate the theme from the WordPress dashboard under **Appearance > Themes**.

In custom theme folders, you should start with a:  
- `style.css`: main stylesheet, where you define your theme metadata
- `index.php`: main template file
- `functions.php`: theme functions
- **optional**: other template files such as `header.php`, `footer.php`, ...

1. **Installing a Theme from the WordPress library**
   Navigate to **Appearance > Themes**. Here you will see the default Twenty Twenty-Five theme. To install a new theme click the Add New Theme button. From here you can select any theme from the library
   

### Installing Plugins

1. **Using Composer for Plugins**:
   - Just like themes, plugins can be installed using Composer. Bedrock works well with [WPackagist](https://wpackagist.org/), a Composer repository that mirrors the official WordPress Plugin Directory.
   - Run the following command to install a plugin:
     ```bash
     composer require wpackagist-plugin/<plugin-name>
     ```
     For example, to install "Yoast SEO":
     ```bash
     composer require wpackagist-plugin/wordpress-seo
     ```

2. **Must-Use Plugins (mu-plugins)**:
   - Bedrock allows for must-use plugins by placing them in the `app/mu-plugins` folder. These plugins automatically load and don’t require activation in the WordPress dashboard.
   - **Autoloader**: Bedrock includes an autoloader for `mu-plugins`, allowing you to use regular plugins as must-use plugins.
     - To add a plugin as an mu-plugin, first install it via Composer in the `mu-plugins` folder:
       ```bash
       composer require wpackagist-plugin/<plugin-name>
       ```
     - Alternatively, add custom code or libraries as autoloaded mu-plugins by placing them in `app/mu-plugins`.

### Managing Dependencies with Composer

Composer simplifies managing plugin and theme dependencies, ensuring you have a record of each package’s version. This approach keeps your site stable and makes it easier to update themes and plugins.

#### Updating Themes and Plugins

- To update all packages (themes, plugins, and WordPress core), run:
  ```bash
  composer update


- To update a specific package, you need to specify the package name:
  ```bash
  composer update wpackagist-plugin/<plugin-name>


#### Summary
With Composer and Bedrock:

- Themes and plugins are easily installed, updated, and version-controlled.
- mu-plugins allow for must-use plugins, which can improve performance and load without user activation.
- Managing all dependencies from composer.json ensures consistency across environments, giving you a streamlined and professional setup.

Using Composer to manage themes and plugins may take some getting used to, but it ultimately makes maintaining and updating your WordPress site more efficient and reliable.

## Building a Simple WordPress Site

When you first open your site in a browser, you will see a default theme.

### 1. Setting Up the Theme

1. **Choose a Theme**:
   - Navigate to **Appearance > Themes** to customize your chosen theme or add a new one.
   > **Note**: Adding a new theme through the admin panel will automatically update your code editor.
   - For a quick start, you can use a popular theme like Astra or GeneratePress, or create your own custom theme.
   - To install a theme with Composer, run:
     ```bash
     composer require wpackagist-theme/astra
     ```
   - Alternatively, for a custom theme, create a new folder in `web/app/themes` with your theme name (e.g., `my-theme`), then add the required files like `style.css` and `index.php`.

   For this tutorial, we will be using **Oigny Lite**.
   ![theme](/assets/tutorials/wordpress-with-bedrock/wordpress-with-bedrock-setup-theme.png)

2. **Activate the Theme**:
   - Go to **Appearance > Themes** in the WordPress dashboard.
   - Locate and activate your chosen theme.

3. **Customizing the Theme**:
   - To customize the appearance, go to **Appearance > Customize**.
   - Modify settings like the site title, tagline, colors, and layout to give your site a unique look.

### 2. Adding Essential Plugins

1. **Install Plugins**:
   - Install essential plugins like contact forms, SEO tools, and caching plugins.
   - Use WPackagist to install plugins with Composer:
     ```bash
     composer require wpackagist-plugin/wordpress-seo
     composer require wpackagist-plugin/contact-form-7
     ```
   - Manage and activate installed plugins from **Plugins > Installed Plugins**. 
   
   For this tutorial, we will install **WPForms Lite** (a contact form plugin), **Elementor** and **Yoast SEO**.
   > **Note**: All plugins are installed but not activated. Click **Activate** to use them.  
   > **Note**: When activating Elementor, it may prompt you to create an account. You can skip this and the subsequent steps until you can choose between a black canvas and a template.

2. **Activate and Configure Plugins**:
      After you install a plugin, you still need to activate them. This can be done by navigating to the installed plugins page. Once there, search for the plugin you installed and click on activate.
      > **Note:** It is possible that you need to do a configuration. This will be the case for the **Yoast Seo**

### 3. Creating Basic Pages and Content

In this tutorial, we will create a website for Bedrock itself using Elementor and the standard WordPress editor.

1. **Set up WPForms**:
   - Go to the WPForms panel and select **Add New**. Enter your form name and choose a template. 
   - Submissions will go to the default email address set during your WordPress account creation. If you need to change it, do so here.
   - You can also add a subject, name, and sender email. To send a confirmation to the submitter, add a **Reply-To** field and a message.
   ![WPForms setup](/assets/tutorials/wordpress-with-bedrock/wordpress-with-bedrock-setup-wpforms.png)

2. **Set Up Essential Pages**:
   - Go to **Pages > Add New** and create the following pages:
     - **Home**: This will be your main page.
       > **Note**: The homepage you see when visiting your domain is not an existing page from the Pages menu; it is a default homepage that comes with every theme. You can edit it by going to **Appearance > Customize**.
     - **Contact**: A page where visitors can reach you (add a contact form using WPForms).
       - In Elementor, click **Add Element** on the top left, find WPForms under **Basic**, drag it onto the page, and adjust as needed.
     - **About**: A page with some general about info.
       - Using Elementor is almost the same as using standard WordPress elements. The main difference is that you can drag and drop your elements, style them and if used with an pro account even use AI to create content and style it
       - When creating a new page with Elementor, you will see a layout labeled **Elementor #(number)**. Change the layout by clicking the settings button at the top of the page, in between the device icons and the page name. You can select the desired page layout at the bottom.
       ![Elementor layout settings](/assets/tutorials/wordpress-with-bedrock/wordpress-with-bedrock-setup-elementor.png)
       > **Note:** Some of the functionality of Elementor is locked behind a paywal. But you can use the most of the elements, only pro elements such as a search are locked. However these can be bypassed by using other plugins


3. **Optional: Set a Static Homepage**:
   - Go to **Settings > Reading**.
   - Under **Your homepage displays**, select **A static page** and set the homepage to the **Home** page you created.
   > **Note**: This option allows you to select a page other than the default homepage of the theme.
   ![Static page settings](/assets/tutorials/wordpress-with-bedrock/wordpress-with-bedrock-setup-static.png)

4. **Add Menu Navigation**:
   - Go to **Appearance > Themes** page.
   - Click on the customize button of your chosen theme
   - Create a new menu and add your pages (Home, About, Contact).
   - Assign the menu to the primary location to enable site navigation.

### 4. Final Touches

1. **Adjust Permalinks**:
   - Go to **Settings > Permalinks**.
   - Set a custom structure or use **Post name** for clean URLs, then save your changes.

2. **Configure Site Settings**:
   - Review settings under **Settings > General** to confirm your site title, tagline, and timezone.
   - Configure additional settings for comments, media, and privacy.

3. **Test Your Site**:
   - Navigate to your site’s homepage to see how it looks.
   - Test your plugins (e.g., contact form) to ensure everything functions properly.

### Summary

By following these steps, you have set up a simple WordPress site with a functional theme, essential plugins, and key pages. From here, you can further customize your site by modifying theme templates, adding more plugins, and expanding your content.


## Common Issues and Troubleshooting Tips

When working with WordPress and Bedrock, especially during setup or deployment, you may encounter some common issues. This section provides troubleshooting tips for solving frequent problems so you can keep your Bedrock project running smoothly.

### 1. Database Connection Errors
   Database connection errors often appear if the `.env` file is not configured correctly.
   - **Solution**: Open your `.env` file in the `web` directory and verify the database settings:
     ```env
     DB_NAME=local
     DB_USER=root
     DB_PASSWORD=root
     DB_HOST=localhost
     ```
     > **Note** This can be different for each project. Be sure you check your database section in Local for the right info  
     > **Tip**: Ensure that your local database server is running, and verify the database credentials in your `.env` file match those configured in Local by Flywheel or your development environment.

### 2. Composer Dependency Conflicts
   Dependency conflicts or version mismatches can occur when updating themes or plugins.
   - **Solution**: Run `composer diagnose` to check for potential conflicts.
   > **Tip**: If there’s an issue with a specific package, try removing it from `composer.json` and reinstalling it using `composer require <package-name>`. Always run `composer update` after making changes to dependencies.

### 3. Missing `.env` or Configuration Issues
   If the `.env` file is missing or not properly set up, the site might not load correctly.
   - **Solution**: Copy the `.env.example` file, rename it to `.env`, and update it with the correct values for your environment.
   > **Note** If you need to do this, do not forget your database connection  
   > **Tip**: Use the correct URL format for `WP_HOME` and `WP_SITEURL`. For example:
  ```env
  WP_HOME='http://bedrock.local'
  WP_SITEURL="http://bedrock.local/wp"
  ```

### 4. File Permissions Issues
   Bedrock’s folder structure can sometimes cause file permission errors, especially on servers.
   - **Solution**: Set file permissions on your server. For example, use the following:
     ```bash
     find . -type d -exec chmod 755 {} \;
     find . -type f -exec chmod 644 {} \;
     ```
   > **Tip**: Ensure the `web/app/uploads` folder is writable so users can upload files through the WordPress dashboard.

### 5. Plugins Not Appearing or Loading
   Some plugins may not show up in the dashboard if they’re not installed correctly.
   - **Solution**: If you’ve installed plugins using Composer, ensure they’re added in the `composer.json` file and located in the `web/app/plugins` directory.
   > **Tip**: To install a plugin, use the WPackagist repository:  
```bash
composer require wpackagist-plugin/<plugin-name>
```

### 6. Permalink Issues
   Permalinks may not work correctly after the initial setup.
   - **Solution**: In the WordPress dashboard, go to **Settings > Permalinks** and simply re-save the permalinks. This refreshes the `.htaccess` rules.
   > **Tip**: If issues persist, verify that your `.htaccess` file is present in the `web` folder and has the correct rewrite rules for Bedrock.

### 7. HTTPS or SSL Issues
   Secure connections can sometimes cause redirect loops or SSL errors.
   > **Solution**: Update your `.env` file to use `https` in `WP_HOME` and `WP_SITEURL`:
  ```env
  WP_HOME='http://bedrock.local'
  WP_SITEURL="http://bedrock.local/wp"
  ```
   - **Tip**: Make sure your server supports SSL, and set up SSL through Local by Flywheel or your hosting provider.


Most common issues with Bedrock can be resolved by double-checking configuration files, managing dependencies with Composer, and ensuring correct permissions. Bedrock’s structure may take some adjustment, especially for WordPress veterans. But with these troubleshooting tips, you’ll be prepared to address common challenges quickly and keep your development smooth.


## Conclusion
WordPress with Bedrock provides developers with a robust foundation for building modern, secure, and scalable websites. By utilizing Bedrock's organized folder structure, Composer-based dependency management, and enhanced configuration options, you can streamline your development process and maintain better control over your projects. While it may require some adjustments compared to traditional WordPress workflows, the long-term benefits in terms of efficiency, security, and maintainability make it a worthwhile choice for developers aiming to elevate their WordPress development. Whether you are building a small site or a complex, multi-environment project, Bedrock equips you with the tools to succeed.