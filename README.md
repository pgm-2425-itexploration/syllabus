# IT Exploration
Syllabus IT Exploration | Associate Degree in Computer Programming | Artevelde University of Applied Sciences

## Table of Contents
- [IT Exploration](#it-exploration)
  - [Table of Contents](#table-of-contents)
  - [Development](#development)
  - [Getting Started with writing articles](#getting-started-with-writing-articles)
    - [Front Matter](#front-matter)
    - [Optional Front Matter](#optional-front-matter)

## Development
To start the development server, run the following command:

```bash
npm run docs:dev
```

If you want to customize the theme using Tailwind CSS, run the following command in a separate terminal while the development server is running:

```bash
npm run tailwind:watch
```

This will watch for changes and update the CSS accordingly.

<br>

## Getting Started with writing articles
The articles are written in Markdown and are located in the `tutorials` or the `posts` directory. The articles are automatically added to the sidebar and the overview page. 

For each article, you need to add the YAML front matter at the beginning of the file. This so that the article can be displayed correctly on the website.


### Front Matter

Add the YAML front matter to the top of your markdown file with `---` at the beginning and end of the front matter. The front matter contains metadata about the tutorial, such as the `title`, `synopsis`, `date`, `author`, `thumbnail`, and `head`.

```yaml
title: 'Tutorial Example'
synopsis: 'This is an example tutorial. You can use this file as a template to create your own tutorials.'
date: 2024-10-10
author:
  name: 'John Doe'
  avatarUrl: '/assets/avatars/john-doe.png' # Add the path to the author's avatar
  socials: # Add social media links -> If you don't have any, place an empty string ''
    website: 'https://johndoe.eu'
    linkedin: 'https://www.linkedin.com/in/john-doe/'
    github: 'https://www.github.com/johndoe/'
thumbnailUrl: '/assets/1728555601054.jpg'
head:
  - - meta
    - name: description
      content: 'This is an example tutorial. You can use this file as a template to create your own tutorials.' # Add a description of the article
  - - meta
    - name: keywords
      content: 'front-end development static-site-generator ssg javascript' # Add keywords related to the article
```

<br>

### Optional Front Matter 
Optionally, you can add the `exclude` field to the front matter to exclude the tutorial from the sidebar and overview page.

```yaml
exclude: true
```