---
title: 'Django'
synopsis: 'Django is een hoogwaardig, open-source webframework dat is geschreven in Python.'
date: 2024-10-10
author:
  name: 'Jordan Bergmans'
  avatarUrl: '/assets/avatars/john-doe.png'
  socials: # Add social media links -> If you don't have any, place an empty string ''
    website: 'https://github.com/pgm-2425-itexploration/trends-en-innovaties-1-Bergmansjordan/tree/main'
    linkedin: 'https://www.linkedin.com/in/jordan-bergmans-991a51292/'
    github: 'https://github.com/Bergmansjordan'
thumbnailUrl: '/assets/tutorials/Django.png'
head:
  - - meta
    - name: description
      content: 'Django is een hoogwaardig, open-source webframework dat is geschreven in Python.' # Add a description of the article
  - - meta
    - name: keywords
      content: 'back-end development static-site-generator ssg javascript' # Add keywords related to the article
---
# Django Tutorial for Beginners

Django is a powerful and popular web framework for Python that is widely used for building robust and scalable web applications. In this tutorial you will learn the basics of Django and build a simple web application.

## Step 1: Installing Django

### Preparation
To work with Django, Python must be installed on your system. You can check this by typing the following command in your terminal or command prompt:

```bash
python --version
```
Make sure you have Python 3.6 or higher.

### Install Django
You can easily install Django with pip (the Python package manager). Run the following command:

```bash
pip install django
```

Once Django is installed, you can verify the installation by checking the version number:

```bash
django-admin --version
```

## Step 2: Create a Django Project

### Create a new project
In Django everything starts with a project. This project is a collection of settings for your website. Create a new directory where you want to save your project and run the following command:

```bash
django-admin startproject mijnproject
```

This creates a new directory called
`mijnproject` with the following structure:

```
mijnproject/
    manage.py
    mijnproject/
        __init__.py
        settings.py
        urls.py
        asgi.py
        wsgi.py
```

### Explanation of the files:
- **manage.py**: A command-line utility that allows you to perform various Django management tasks.
- **settings.py**: This contains all the settings for your Django project.
- **urls.py**: Here you define the URLs and routes of your project.
- **wsgi.py/asgi.py**: These files help deploy your project.

## Step 3: Starting the Django Development Server

Go to your project's directory and start the development server:

```bash
cd mijnproject
python manage.py runserver
```

You should now see a message stating that the server is running at `http://127.0.0.1:8000/`. Open your web browser and go to that address to see the standard Django welcome page.

## Step 4: Create a Django App

In Django, a project consists of multiple apps. An app is a web component that provides specific functionality (such as a blog or a shopping cart).

Create a new app within your project by running the following command:

```bash
python manage.py startapp mijnapp
```

This creates a new folder `mijnapp` in your project with the following structure:

```
mijnapp/
    __init__.py
    admin.py
    apps.py
    models.py
    views.py
    tests.py
```

### Explanation of the files:
- **models.py**: Here you define the data models (database schemas).
- **views.py**: Here you define the logic for what the user sees.
- **admin.py**: Here you manage how your models are visible in the Django admin panel.
- **tests.py**: Here you can write tests to test your app.

## Step 5: Create a Simple View

Now let's create a simple view that says "Hello, world!" displays when we visit a specific URL.

1. Open `views.py` in your `mijnapp` folder and add the following code:

    ```python
    from django.http import HttpResponse

    def hallo_wereld(request):
        return HttpResponse("Hallo, wereld!")
    ```

2. Now add a URL pointing to this view. Create a file `urls.py` in the `mijnapp` folder (this does not exist yet) with the following contents:

    ```python
    from django.urls import path
    from . import views

    urlpatterns = [
        path('', views.hallo_wereld, name='hallo_wereld'),
    ]
    ```

3. To make sure this URL is accessible, we need to link the app URLs to the project URL file. Open the `urls.py` file in the `mijnproject` root folder and add this code:

    ```python
    from django.contrib import admin
    from django.urls import include, path

    urlpatterns = [
        path('admin/', admin.site.urls),
        path('', include('mijnapp.urls')),  # Verbindt mijnapp.urls
    ]
    ```

## Step 6: Database Setup and Model Creation

Django uses SQLite as its database by default. To initialize your database, run this command:

```bash
python manage.py migrate
```

### Add a model
Now let's create a simple data model. Open `models.py` in the `myapp` folder and add the following:

```python
from django.db import models

class Berichten(models.Model):
    titel = models.CharField(max_length=100)
    inhoud = models.TextField()

    def __str__(self):
        return self.titel
```

Then run the following command to make the changes to the database:
```bash
python manage.py makemigrations
python manage.py migrate
```

## Step 7: Working with the Django Admin

To access Django's admin dashboard, we need to register the model in `admin.py`. Open `admin.py` and add the following:

```python
from django.contrib import admin
from .models import Berichten

admin.site.register(Berichten)
```

Now create a superuser account for the admin interface:

```bash
python manage.py createsuperuser
```

Enter your username, email address and password.

Restart the server:

```bash
python manage.py runserver
```

Go to 'http://127.0.0.1:8000/admin' and log in with your superuser details. You can now manage the 'Messages' model via the admin interface.

## Step 8: Using Templates

Django uses templates to display HTML. Let's add a simple template for our "Hello, World!" page.

1. Create a directory called 'templates' in the 'mijnapp' folder.
2. In this directory, create a file called `index.html` and add the following content:

    ```html
    <!DOCTYPE html>
    <html>
    <head>
        <title>Hallo Wereld</title>
    </head>
    <body>
        <h1>{{ bericht }}</h1>
    </body>
    </html>
    ```

3. Adjust your view in `views.py` to use a template:

    ```python
    from django.shortcuts import render

    def hallo_wereld(request):
        context = {
            'bericht': 'Hallo, wereld!'
        }
        return render(request, 'index.html', context)
    ```

Now the "Hello, world!" message displayed via a template.

## Step 9: Refine and Expand the Django App

Now that you've mastered the basics of Django, you can:

- Create more complex data models in `models.py`.
- Creating forms and processing user data.
- Create more templates for a dynamic and attractive interface.
- Working with external libraries and APIs.

---