---
title: 'NestJS'
synopsis: 'This tutorial will guide you through the fundamentals of building scalable, efficient server-side applications using NestJS, a progressive Node.js framework.'
date: 2024-10-17
author:
  name: 'Eliaz Bello Medrano'  # Updated with your name
  avatarUrl: '/assets/avatars/john-doe.png'
  socials: 
    website: https://www.eliazbm.com/'  # Update with your website or leave empty if not applicable
    linkedin: 'https://www.linkedin.com/in/eliaz-medrano-935a9a292/'  # Update with your LinkedIn profile or leave empty
    github: 'https://github.com/pgm-eliabell'  # Update with your GitHub profile or leave empty
thumbnailUrl: '/assets/example-image.jpg'  # Add a path to the thumbnail for this tutorial
head:
  - - meta
    - name: description
      content: 'This tutorial introduces NestJS and demonstrates how to create modular, scalable server-side applications using this powerful framework.'  # Updated description
  - - meta
    - name: keywords
      content: 'nestjs, server-side development, Node.js, TypeScript, backend development'  # Updated keywords
---

# Step-by-Step Guide to Create a NestJS Project

NestJS is a powerful, progressive Node.js framework for building scalable and maintainable server-side applications. Here's a quick guide to get you started:

this tutorial is more focused on using our own files for data, if you want to use ORM there will be a extra part of to the readme where you can do it, but its a very extensive one, so for the tutorial we want to look at we'll use local data in our files purely for time reason. 
---
q
## 1. **Install NestJS CLI**
The CLI simplifies project creation and development tasks.
```bash
npm i @nestjs/cli
```

This command installs the NestJS CLI globally on your system, allowing you to create and manage NestJS projects from any directory.

Verify the installation by checking the version:
```bash
npm nest --version
```

---

## 2. **Create a New Project**
Create a new NestJS project using the CLI. Most of the documentation just says that you need to do "nest new ..." but it will probabily say that you dont have it installed, thats why we use npx. 

once it asks you to choose what package manager, choose npm
```bash
npx nest new project-name
```

Navigate into the project directory:
```bash
cd project-name
```

---

## 3. **Run the Application**
Start the development server.
```bash
npm run start:dev
```

Open your browser and navigate to `http://localhost:3000` to see your application running. Since it wont give you the link inside of the terminal. 

---

## 4. **Create a Module**
Generate a new module.
```bash
npx nest generate module users
```

---

## 5. **Create a Controller**
Generate a new controller.
```bash
npx nest generate controller users
```

---

## 6. **Create a Service**
Generate a new service.
```bash
npx nest generate service users
```

---

## 7. **Define a Route**
Open the `users.controller.ts` file and define a route.
```typescript
import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll() {
    return this.usersService.findAll();
  }
}
```

---

## 8. **Implement the Service**
Open the `users.service.ts` file and implement the service.
```typescript
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private readonly users = [{ id: 1, name: 'John Doe' }];

  findAll() {
    return this.users;
  }
}
```

---

## 9. **Test the Application**
Run the application again. Inside your project
```bash
npm run start:dev
```

Navigate to `http://localhost:3000/users` to see the list of users.

---


if you would like to display your users or any other made data, lots of places do it with handlebars. if you would like to use it install the next package

```sh
npm install @nestjs/platform-express hbs
```

then configure Handlebars in the main module 
Update your app.module.ts to configure Handlebars as the templating engine.

```ts
import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';

@Module({
  imports: [UsersModule],
})
export class AppModule {}

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('hbs');
  await app.listen(3000);
}
bootstrap();
```

then create a views directory in the root of your project and add `users.hbs`file. 

```ts
<!DOCTYPE html>
<html>
<head>
  <title>Users</title>
</head>
<body>
  <h1>Users List</h1>
  <ul>
    {{#each users}}
      <li>{{this.name}}</li>
    {{/each}}
  </ul>
</body>
</html>
```

then updatae the controller to render the view
update the `users.controller.ts` to render the view with the list of users. 

```ts
import { Controller, Get, Render } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @Render('users')
  findAll() {
    const users = this.usersService.findAll();
    return { users };
  }
}
```

then run the project again with 

```sh
npm run start:dev
```

regarding making the pages actually work, this is not the focus of Nest.js, since its a backend framework. you can use other frameworks for this, from the documentation i found react would be a easy one to use, you can do this with moving your nestjs to a backend folder and the other frontend technology to the frontend folder, both in your root.  


for images the best way to work would be making a json formatted file or variable and put the path to the image in that json such as my example: 

```ts
export const USERS = [
  {
    id: 1,
    username: 'john_doe',
    email: 'john.doe@example.com',
    password: 'hashedpassword123',
    role: 'user', // or 'admin'
    imagePath: '/images/users/john_doe.jpg', // Path to the user's profile image
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 2,
    username: 'jane_doe',
    email: 'jane.doe@example.com',
    password: 'hashedpassword456',
    role: 'admin',
    imagePath: '/images/users/jane_doe.jpg', // Path to the user's profile image
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];
```






===========================================ORM========================================================

do note that all these examples are local files, you could also use ORM (Object-relational-mappers) 


