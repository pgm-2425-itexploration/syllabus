import { createContentLoader } from 'vitepress'
import { Post } from '../types/ahs'

export default createContentLoader('posts/*.md', {
  excerpt: true,
  render: true,
  transform(raw): Post[] {
    console.log(raw)
    return raw
      .filter((post) => post.frontmatter.published !== false && post.url !== '/posts/')
      .map(({ url, excerpt, html, frontmatter }) => ({
        url,
        excerpt,
        html,
        title: frontmatter.title,
        description: frontmatter.description,
        thumbnailUrl: frontmatter.thumbnailUrl,
        date: formatDate(frontmatter.date)
      }))
      .sort((a, b) => b.date.time - a.date.time)
  }
})

function formatDate(raw: string): Post['date'] {
  const date = new Date(raw)
  date.setUTCHours(12)
  return {
    time: +date,
    string: date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }
}