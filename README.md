# IT Exploration
Syllabus IT Exploration | Associate Degree in Computer Programming | Artevelde University of Applied Sciences

## Table of Contents
- [IT Exploration](#it-exploration)
  - [Table of Contents](#table-of-contents)
  - [Development](#development)
  - [Writing articles](#writing-articles)
    - [Front Matter](#front-matter)
    - [Optional Front Matter](#optional-front-matter)
  - [Assets](#assets)
    - [Thumbnail Image](#thumbnail-image)
    - [Avatar Image](#avatar-image)
    - [Adding (Thumbnail) Image(s)](#adding-thumbnail-images)

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

## Writing articles
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
thumbnailUrl: '/assets/example-image.jpg'
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

<br>

## Assets

### Thumbnail Image

For each article, you can add a thumbnail image. This image will be displayed on the overview page. This image has specific dimensions and design guidelines. 

- Dymensions: **800x500 pixels**
- Design Guidelines: The thumbnail consists of 3 depth layers. 
    1. **The background layer**: An image that represents the article. Can be a screenshot, a photo, or an illustration.
    2. **The color layer**: A color that represents the article or the topic of the article (Example: Blue for a tutorial about CSS). With a transparency so that the background layer is still visible.
    3. **The title layer**: The title of the article or logo of the framework/library that is discussed in the article.

<br>

When the image ready, place it in the correct folder. See [Adding (Thumbnail) Image(s)](#adding-thumbnail-images) for more information.

![Thumbnail Image Example](public/assets/posts/astro-the-new-player-on-the-block_img-1.png)

**Tip**! You can use *Figma* to create a frame with the dimensions of the thumbnail image. This way you can easily create the thumbnail image.


<br>


### Avatar Image

For each article, you can add an avatar image of the author. This image will be displayed on the article page. This image has specific dimensions and design guidelines.

- **Dymensions**: 64x64 pixels

- **Design Guidelines**: The avatar image should be a photo of the author.

Place your character image in the `public/assets/avatars` directory. With the name format `{authorfirstname-authorlastname}.png`.

**Tip**! You can use *Figma* to create a frame with the dimensions of the avatar image. This way you can easily create the avatar image.

<br>


### Adding (Thumbnail) Image(s)

To add images to your article, you can place them in the `assets` directory. For each type there is a separate directory.

Example: You have the thumbnail image for your tutorial. Place the image in the `public/assets/tutorials` directory with the name `{name-of-your-tutorial}_img-{number}.png`.

So if your tutorial is called `Displaying Images in Markdown`, the thumbnail image should be named `displaying-images-in-markdown_img-1.png`. Available via the following path:

```yaml
thumbnailUrl: '/assets/tutorials/displaying-images-in-markdown_img-1.png'
```

If you also have images in your article, place them in the `public/assets/tutorials/{name-of-your-tutorial}_img-{number}.png` directory. Just like the thumbnail image, and **keep the numbering consistent**.

The images can be added to the article using the following syntax:

```markdown
![Alt text](/assets/tutorials/displaying-images-in-markdown_img-2.png)
```
