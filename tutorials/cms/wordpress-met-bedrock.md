---
title: 'WordPress met Bedrock'
synopsis: 'This is an example tutorial. You can use this file as a template to create your own tutorials.'
date: 2024-10-10
author:
  name: 'Tristan De Ridder'
  avatarUrl: '/assets/avatars/tristan-de-ridder.png'
  socials: # Add social media links -> If you don't have any, place an empty string ''
    website: 'https://tristanderidder.be/'
    linkedin: 'https://www.linkedin.com/in/tristan-de-ridder/'
    github: 'https://github.com/TristanDeRidder'
thumbnailUrl: '/assets/tutorials/wordpress-with-bedrock.png'
head:
  - - meta
    - name: description
      content: 'This is an example tutorial. You can use this file as a template to create your own tutorials.' # Add a description of the article
  - - meta
    - name: keywords
      content: 'front-end development static-site-generator ssg javascript' # Add keywords related to the article
---

# Introduction

# Installation of WordPress with Bedrock

## Prerequisites
Before starting, you will need to install the following:
- [Composer](https://getcomposer.org/download/)
- [Local by Flywheel](https://localwp.com/)

## Steps
1. **Set Up Composer**
    - mac users:
      - brew install composer
    - windows users:
      - download using the composer website

2. **Set Up a New Site in Local**
   - Open Local by Flywheel and set up a new site.
   - Once the site is created, open the terminal and navigate to the `app` folder.  
     > **Note:** You will need to create an account in order to use Local  
     > **Note:** Using Local’s built-in terminal may place you inside the `public` folder, so navigate up to the `app` folder if needed.

     ![Bedrock setup environment](/assets/tutorials/bedrock-setup-environment.png)
     ![Bedrock setup wordpress](/assets/tutorials/bedrock-setup-wordpress.png)

3. **Install Bedrock**
   - Inside the `app` folder, run the following command:
     ```terminal
     composer create-project roots/bedrock
     ```
   - List the folders to confirm Bedrock has been created.

4. **Remove the `public` Folder**
   - Delete the `public` folder to avoid conflicts with Bedrock's structure.
   - Move up one directory, and then open Bedrock in Visual Studio Code.
  
    This should be the resulting directory
    ```directory
    Local Sites
    ├── bedrock
      ├── app
      ├── conf  
      ├── logs 
    ```

5. **Configure Bedrock in Local**
   - In VS Code, navigate to `config` and then `nginx`.
   - Open the `config` file and search for the line that sets the `root` directory.
     ```nginx
     # Default root directory example
     root: {{root}}
     ```
   - Change the `root` variable to point to the `web` folder within your Bedrock directory.
    > **Note:** The route need to be the complete route you find in Finder or in File Explorer
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

7. **Run Your Site**
   - Start your site in Local.
   - Open your browser and enter your site’s domain. If prompted, give permission to access the site.

If all steps were followed correctly, you should now see your Bedrock-powered WordPress site up and running in Local.
