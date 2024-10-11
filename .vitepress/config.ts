import path from 'path'
import { defineConfig, createContentLoader, type SiteConfig, type HeadConfig } from 'vitepress'
import tutorialsJSON from './dist/api/tutorials.json'
import posts from './dist/api/posts.json'
import writeJSONToFile from './functions/writeJSONToFile'

const getTutorialsPages = () => {

  const categories = tutorialsJSON.map(tutorial => tutorial.frontmatter.category)
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
  return tutorialsJSON.filter(tutorial => tutorial.frontmatter.category === category)
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
    // Load posts and tutorials
    const posts = await createContentLoader('posts/*.md', {
      excerpt: true,
      render: true
    }).load()

    const tutorials = await createContentLoader('tutorials/*.md', {
      excerpt: true,
      render: true
    }).load()

    // Filter published posts and tutorials
    const filteredPosts = posts.filter(post => post.frontmatter.published !== false && post.url !== '/posts/')
    const filteredTutorials = tutorials.filter(tutorial => tutorial.frontmatter.published !== false && tutorial.url !== '/tutorials/')

    // Write JSON files
    writeJSONToFile(path.join(config.outDir, 'api', 'posts.json'), filteredPosts)
    writeJSONToFile(path.join(config.outDir, 'api', 'tutorials.json'), filteredTutorials)
  }
})
