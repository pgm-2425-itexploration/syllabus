// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './styles/style.css'
import './styles/vars.css'
import './styles/output.css' // Tailwind CSS output

import Banner from './theme-components/Banner.vue'
import AuthorSection from './theme-components/AuthorSection.vue'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
      'doc-top': () => h(Banner),
      'doc-footer-before': () => h(AuthorSection),
    })
  },
  enhanceApp({ app, router, siteData }) {
    // ...
  }
} satisfies Theme
