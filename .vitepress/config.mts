import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/syllabus/',
  markdown: {
    lineNumbers: true,
  },
  title: "IT Exploration | Syllabus",
  description: "Syllabus | IT Exploration",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Workshops', link: '/workshops' },
    ],
    sidebar: [
      {
        text: 'Web fundamentals',
        link: '/workshops/web-fundamentals',
        collapsed: false,
        items: [
          { text: 'Open UI', link: '/workshops/web-fundamentals/open-ui' },
          { text: 'CSS', 
            items: [
              { text: 'Nesting', link: '/workshops/web-fundamentals/css/nesting' },
              { text: 'Houdini', link: '/workshops/web-fundamentals/css/houdini' },
            ]
           },
        ]
      },
      {
        text: 'Front-end Frameworks',
        link: '/workshops/front-end-frameworks',
        collapsed: false,
        items: []
      },
      {
        text: 'Front-end UI Frameworks',
        link: '/workshops/front-end-ui-frameworks',
        collapsed: false,
        items: []
      },
      {
        text: 'Back-end Frameworks',
        link: '/workshops/back-end-frameworks',
        collapsed: false,
        items: []
      },
      {
        text: 'CMS',
        link: '/workshops/cms',
        collapsed: false,
        items: []
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/pgm-2425-itexploration/syllabus' }
    ]
  }
})
