---
title: 'OctoberCMS'
synopsis: 'Een tutorial voor het October CMS voor Laravel (php framework)'
date: 1943-10-12
author:
  name: 'Mardoek Thienpondt'
  avatarUrl: '/assets/avatars/john-doe.png'
  socials: # Add social media links -> If you don't have any, place an empty string ''
    website: ''
    linkedin: ''
    github: ''
thumbnailUrl: '/assets/example-image.jpg'
head:
  - - meta
    - name: description
      content: 'This is a tutorial for October CMS. This will show you the basics of October CMS.' # Add a description of the article
  - - meta
    - name: keywords
      content: 'OctoberCMS cms Laravel PHP relational databases' # Add keywords related to the article
---

1. Prerequisites:
   - install php [here](https://www.php.net/downloads.php)
   - install composer [here](https://getcomposer.org/download/)
   - any experience with laravel is helpful
2. Installing OctoberCMS
   - go to the OctoberCMS website [here](https://octobercms.com/)
   - register an account and make a project (warning: you only get one free license!)
   - create a directory where you want to save your project
   - open your terminal and navigate to the directy and enter `composer create-project october/october octobercms-demo`
   - navigate to the made project and enter `php artisan october:install`
   - then to initialize the database enter `php artisan october:migrate`
   - finally we need to launch the server with `php artisan serve`