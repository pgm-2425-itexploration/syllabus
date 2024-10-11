import path from 'path'
import { defineConfig, createContentLoader, type SiteConfig, type HeadConfig } from 'vitepress'
import writeJSONToFile from './functions/writeJSONToFile'
import { generateSidebar } from 'vitepress-sidebar';


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
    sidebar: generateSidebar([
      {
        documentRootPath: '/tutorials/',
        useTitleFromFrontmatter: true,
        resolvePath: '/tutorials/',
        sortMenusByFrontmatterDate: true,
        capitalizeEachWords: true,
      },
      {
        documentRootPath: '/posts/',
        useTitleFromFrontmatter: true,
        resolvePath: '/posts/',
        sortMenusByFrontmatterDate: true,
        capitalizeFirst: true,
      },
    ]),
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
