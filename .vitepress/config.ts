import path from 'path'
import { writeFileSync, existsSync, mkdirSync } from 'fs'
import { defineConfig, createContentLoader, type SiteConfig, type HeadConfig } from 'vitepress'

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
      { text: 'Blog', link: '/posts' },
      { text: 'Contact', link: '/contact' },
    ],
    sidebar: {
      'tutorials': [
        {
          text: 'Full Stack',
          link: '/tutorials/full-stack',
          collapsed: false,
          items: [
            { text: 'Open UI', link: '/tutorials/full-stack/open-ui' },
            {
              text: 'CSS',
              items: [
                { text: 'Nesting', link: '/tutorials/full-stack/css/nesting' },
                { text: 'Houdini', link: '/tutorials/full-stack/css/houdini' },
              ]
            },
          ]
        },
        {
          text: 'Front-end',
          link: '/tutorials/front-end',
          collapsed: false,
          items: []
        },
        {
          text: 'Back-end',
          link: '/tutorials/back-end',
          collapsed: false,
          items: []
        },
        {
          text: 'JAMstack',
          link: '/tutorials/jamstack',
          collapsed: false,
          items: []
        },
        {
          text: 'CMS',
          link: '/tutorials/cms',
          collapsed: false,
          items: []
        },
        {
          text: 'Mobile',
          link: '/tutorials/mobile',
          collapsed: false,
          items: []
        },
      ],
      'blog': [
        {
          text: '2021',
          link: '/blog/2021',
          collapsed: false,
          items: [
            { text: 'Week 1', link: '/blog/2021/week-1' },
            { text: 'Week 2', link: '/blog/2021/week-2' },
          ]
        },
        {
          text: '2020',
          link: '/blog/2020',
          collapsed: false,
          items: []
        }
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/pgm-2425-itexploration/syllabus' }
    ]
  },
  // buildEnd: async (config: SiteConfig) => {
  //   const posts = await createContentLoader('posts/*.md', {
  //     excerpt: true,
  //     render: true
  //   }).load()

  //   console.log(posts)

  //   writeFileSync(path.join(config.outDir, 'api', 'posts.json'), JSON.stringify(posts))
  // },
  // async transformHead({ pageData }) {
  //   const head: HeadConfig[] = []

  //   head.push(['meta', { property: 'og:title', content: pageData.frontmatter.title }])
  //   head.push(['meta', { property: 'og:description', content: pageData.frontmatter.description }])

  //   return head
  // },
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
