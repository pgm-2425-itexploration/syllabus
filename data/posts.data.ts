import { createContentLoader } from 'vitepress'
import { Post } from '../types/ahs'

export default createContentLoader('posts/*.md', {
  excerpt: true,
  render: true,
  transform(raw): Post[] {
    return raw
      .filter((post) => post.frontmatter.published !== false && post.url !== '/posts/' && post.frontmatter?.exclude !== true)
      .map(({ url, excerpt, html, frontmatter }) => {
        return {
          url,
          excerpt,
          html,
          title: frontmatter.title,
          synopsis: frontmatter.synopsis,
          thumbnailUrl: frontmatter.thumbnailUrl,
          date: formatDate(frontmatter.date),
          author: {
            name: frontmatter.author.name,
            avatarUrl: frontmatter.author.avatarUrl,
            socials: {
              website: frontmatter.author.socials.website,
              linkedin: frontmatter.author.socials.linkedin,
              github: frontmatter.author.socials.github
            }
          },
          sourses: frontmatter.sourses,
        }
      })
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