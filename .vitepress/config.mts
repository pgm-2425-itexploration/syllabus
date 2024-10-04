import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/syllabus/',
  markdown: {
    lineNumbers: true,
  },
  title: "PGM | IT Exploration",
  description: "IT Exploration",
  head: [
    ['link', { rel: "apple-touch-icon", sizes: "180x180", href: "/assets/favicons/apple-touch-icon.png" }],
    ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/assets/favicons/favicon-32x32.png" }],
    ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "/assets/favicons/favicon-16x16.png" }],
    ['link', { rel: "manifest", href: "/assets/favicons/site.webmanifest" }],
    ['link', { rel: "mask-icon", href: "/assets/favicons/safari-pinned-tab.svg", color: "#ff1f4f" }],
    ['meta', { name: "msapplication-TileColor", content: "#ffffff" }],
    ['meta', { name: "theme-color", content: "#ffffff" }],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: './assets/pgm-logo.svg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Who are we', link: '/who-are-we' },
      { text: 'Tutorials', link: '/tutorials' },
      { text: 'Blog', link: '/blog' },
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
  }
})
