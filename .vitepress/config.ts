import path from 'path'
import { defineConfig, createContentLoader, type SiteConfig } from 'vitepress'
import writeJSONToFile from './functions/writeJSONToFile'
import { generateSidebar } from 'vitepress-sidebar';

const base = '/syllabus'
const url = 'https://pgm-2425-itexploration.github.io'

const title = 'PGM IT Exploration'
const description = 'IT Exploration'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/syllabus/',
  markdown: {
    lineNumbers: true,
  },
  title: title,
  description: description,
  lang: 'en-US',
  head: [
    ['link', { rel: "apple-touch-icon", sizes: "180x180", href: `${base}/assets/favicons/apple-touch-icon.png` }],
    ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: `${base}/assets/favicons/favicon-32x32.png` }],
    ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: `${base}/assets/favicons/favicon-16x16.png` }],
    ['link', { rel: "manifest", href: `${base}/assets/favicons/site.webmanifest` }],
    ['link', { rel: "mask-icon", href: `${base}/assets/favicons/safari-pinned-tab.svg`, color: "#ff1f4f" }],
    ['meta', { name: "msapplication-TileColor", content: "#ffffff" }],
    ['meta', { name: "theme-color", content: "#ffffff" }],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: {
      src: '/assets/pgm-logo.svg',
      alt: 'PGM Logo',
    },
    search: {
      provider: 'local',
      options: {
        _render(src, env, md) {
          let html = md.render(src, env)
          if (env.frontmatter?.search === false) return ''
          return html
        }
      }
    },
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
        excludeFilesByFrontmatterFieldName: 'exclude',
      },
      {
        documentRootPath: '/posts/',
        useTitleFromFrontmatter: true,
        resolvePath: '/posts/',
        sortMenusByFrontmatterDate: true,
        capitalizeFirst: true,
        excludeFilesByFrontmatterFieldName: 'exclude',
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
  },
  transformPageData(pageData) {
    pageData.frontmatter.head ??= []

    // Open Graph
    pageData.frontmatter.head.push([
      'meta', { name: 'og:title', content: pageData.frontmatter.layout === 'home' ? title : `${pageData.title} | ${title}`},
    ])
    pageData.frontmatter.head.push([
      'meta', { name: 'og:description', content: pageData.frontmatter.head[0][1].content || '' },
    ])
    pageData.frontmatter.head.push([
      'meta', { name: 'og:url', content: `${url}${base}/${pageData.filePath.replace(/\.md$/, '')}` },
    ])
    pageData.frontmatter.head.push([
      'meta', { name: 'og:type', content: "website" },
    ])
    pageData.frontmatter.head.push([
      'meta', { name: 'og:image', content: `${url}${base}${pageData.frontmatter.thumbnailUrl}` },
    ])

    // Twitter
    pageData.frontmatter.head.push([
      'meta', { name: 'twitter:card', content: "website" },
    ])
    pageData.frontmatter.head.push([
      'meta', { name: 'twitter:title', content: pageData.frontmatter.layout === 'home' ? title : `${pageData.title} | ${title}` },
    ])
    pageData.frontmatter.head.push([
      'meta', { name: 'twitter:description', content: pageData.frontmatter.head[0][1].content || '' },
    ])
    pageData.frontmatter.head.push([
      'meta', { name: 'twitter:image', content: `${url}${base}${pageData.frontmatter.thumbnailUrl}` },
    ])

    return pageData
  }
})
