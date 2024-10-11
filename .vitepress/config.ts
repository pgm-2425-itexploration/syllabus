import path from 'path'
import { writeFileSync, existsSync, mkdirSync } from 'fs'
import { defineConfig, createContentLoader, type SiteConfig, type HeadConfig } from 'vitepress'
import tutorials from './dist/api/tutorials.json'
import posts from './dist/api/posts.json'

const getTutorialsPages = () => {
  const categories = tutorials.map(tutorial => tutorial.frontmatter.category)
  const uniqueCategories = [...new Set(categories)]

 const tutorialsPages = uniqueCategories.map(category => {
    return {
      text: category,
      collapsed: false,
      items: getTutorialsBasedOnCategory(category).map(tutorial => {
        return {
          text: tutorial.frontmatter.title,
          link: tutorial.url
        }
      })
    }
  })

  return tutorialsPages
}

const getTutorialsBasedOnCategory = (category: string) => {
  return tutorials.filter(tutorial => tutorial.frontmatter.category === category)
}

const getPostsPages = () => {
  const years = posts.map(post => post.frontmatter.date.split('-')[0])
  const uniqueYears = [...new Set(years)]

  const postsPages = uniqueYears.map(year => {
    return {
      text: year,
      collapsed: false,
      items: getPostsBasedOnYear(year).map(post => {
        return {
          text: post.frontmatter.title,
          link: post.url
        }
      })
    }
  })

  return postsPages
}

const getPostsBasedOnYear = (year: string) => {
  return posts.filter(post => post.frontmatter.date.split('-')[0] === year)
}


// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/syllabus/',
  markdown: {
    lineNumbers: true,
  },
  title: "IT Exploration",
  description: "IT Exploration",
  lang: 'en-US',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Who are we', link: '/who-are-we' },
      { text: 'Tutorials', link: '/tutorials' },
      { text: 'Posts', link: '/posts' },
      { text: 'Contact', link: '/contact' },
    ],
    sidebar: {
      'tutorials': [
        { text: 'Tutorials', link: '/tutorials/', items: [] },
        ...getTutorialsPages()
      ],
      'posts': [
        { text: 'Posts', link: '/posts/', items: [] },
        ...getPostsPages(),
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/pgm-2425-itexploration/syllabus' }
    ]
  },
  async buildEnd(config: SiteConfig) {
    const posts = await createContentLoader('posts/*.md', {
      excerpt: true,
      render: true
    }).load()

    const filteredPosts = posts.filter(post => post.frontmatter.published !== false && post.url !== '/posts/')
    if (!existsSync(path.join(config.outDir, 'api'))) {
      mkdirSync(path.join(config.outDir, 'api'), { recursive: true });
    }
    writeFileSync(path.join(config.outDir, 'api', 'posts.json'), JSON.stringify(filteredPosts))

    const tutorials = await createContentLoader('tutorials/*.md', {
      excerpt: true,
      render: true
    }).load()

    const filteredTutorials = tutorials.filter(tutorial => tutorial.frontmatter.published !== false && tutorial.url !== '/tutorials/')
    if (!existsSync(path.join(config.outDir, 'api'))) {
      mkdirSync(path.join(config.outDir, 'api'), { recursive: true });
    }
    writeFileSync(path.join(config.outDir, 'api', 'tutorials.json'), JSON.stringify(filteredTutorials))
  }
})