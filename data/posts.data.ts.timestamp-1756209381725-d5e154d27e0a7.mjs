// data/posts.data.ts
import { createContentLoader } from "file:///Users/witzevds/Documents/Programming-school/2024-2025/herexamens/it-exploration/syllabus/node_modules/vitepress/dist/node/index.js";
var posts_data_default = createContentLoader("posts/*.md", {
  excerpt: true,
  render: true,
  transform(raw) {
    return raw.filter((post) => post.frontmatter.published !== false && post.url !== "/posts/" && post.frontmatter?.exclude !== true).map(({ url, excerpt, html, frontmatter }) => {
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
        sourses: frontmatter.sourses
      };
    }).sort((a, b) => b.date.time - a.date.time);
  }
});
function formatDate(raw) {
  const date = new Date(raw);
  date.setUTCHours(12);
  return {
    time: +date,
    string: date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    })
  };
}
export {
  posts_data_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZGF0YS9wb3N0cy5kYXRhLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL3dpdHpldmRzL0RvY3VtZW50cy9Qcm9ncmFtbWluZy1zY2hvb2wvMjAyNC0yMDI1L2hlcmV4YW1lbnMvaXQtZXhwbG9yYXRpb24vc3lsbGFidXMvZGF0YVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL3dpdHpldmRzL0RvY3VtZW50cy9Qcm9ncmFtbWluZy1zY2hvb2wvMjAyNC0yMDI1L2hlcmV4YW1lbnMvaXQtZXhwbG9yYXRpb24vc3lsbGFidXMvZGF0YS9wb3N0cy5kYXRhLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy93aXR6ZXZkcy9Eb2N1bWVudHMvUHJvZ3JhbW1pbmctc2Nob29sLzIwMjQtMjAyNS9oZXJleGFtZW5zL2l0LWV4cGxvcmF0aW9uL3N5bGxhYnVzL2RhdGEvcG9zdHMuZGF0YS50c1wiO2ltcG9ydCB7IGNyZWF0ZUNvbnRlbnRMb2FkZXIgfSBmcm9tICd2aXRlcHJlc3MnXG5pbXBvcnQgeyBQb3N0IH0gZnJvbSAnLi4vdHlwZXMvYWhzJ1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb250ZW50TG9hZGVyKCdwb3N0cy8qLm1kJywge1xuICBleGNlcnB0OiB0cnVlLFxuICByZW5kZXI6IHRydWUsXG4gIHRyYW5zZm9ybShyYXcpOiBQb3N0W10ge1xuICAgIHJldHVybiByYXdcbiAgICAgIC5maWx0ZXIoKHBvc3QpID0+IHBvc3QuZnJvbnRtYXR0ZXIucHVibGlzaGVkICE9PSBmYWxzZSAmJiBwb3N0LnVybCAhPT0gJy9wb3N0cy8nICYmIHBvc3QuZnJvbnRtYXR0ZXI/LmV4Y2x1ZGUgIT09IHRydWUpXG4gICAgICAubWFwKCh7IHVybCwgZXhjZXJwdCwgaHRtbCwgZnJvbnRtYXR0ZXIgfSkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHVybCxcbiAgICAgICAgICBleGNlcnB0LFxuICAgICAgICAgIGh0bWwsXG4gICAgICAgICAgdGl0bGU6IGZyb250bWF0dGVyLnRpdGxlLFxuICAgICAgICAgIHN5bm9wc2lzOiBmcm9udG1hdHRlci5zeW5vcHNpcyxcbiAgICAgICAgICB0aHVtYm5haWxVcmw6IGZyb250bWF0dGVyLnRodW1ibmFpbFVybCxcbiAgICAgICAgICBkYXRlOiBmb3JtYXREYXRlKGZyb250bWF0dGVyLmRhdGUpLFxuICAgICAgICAgIGF1dGhvcjoge1xuICAgICAgICAgICAgbmFtZTogZnJvbnRtYXR0ZXIuYXV0aG9yLm5hbWUsXG4gICAgICAgICAgICBhdmF0YXJVcmw6IGZyb250bWF0dGVyLmF1dGhvci5hdmF0YXJVcmwsXG4gICAgICAgICAgICBzb2NpYWxzOiB7XG4gICAgICAgICAgICAgIHdlYnNpdGU6IGZyb250bWF0dGVyLmF1dGhvci5zb2NpYWxzLndlYnNpdGUsXG4gICAgICAgICAgICAgIGxpbmtlZGluOiBmcm9udG1hdHRlci5hdXRob3Iuc29jaWFscy5saW5rZWRpbixcbiAgICAgICAgICAgICAgZ2l0aHViOiBmcm9udG1hdHRlci5hdXRob3Iuc29jaWFscy5naXRodWJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHNvdXJzZXM6IGZyb250bWF0dGVyLnNvdXJzZXMsXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuc29ydCgoYSwgYikgPT4gYi5kYXRlLnRpbWUgLSBhLmRhdGUudGltZSlcbiAgfVxufSlcblxuZnVuY3Rpb24gZm9ybWF0RGF0ZShyYXc6IHN0cmluZyk6IFBvc3RbJ2RhdGUnXSB7XG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShyYXcpXG4gIGRhdGUuc2V0VVRDSG91cnMoMTIpXG4gIHJldHVybiB7XG4gICAgdGltZTogK2RhdGUsXG4gICAgc3RyaW5nOiBkYXRlLnRvTG9jYWxlRGF0ZVN0cmluZygnZW4tVVMnLCB7XG4gICAgICB5ZWFyOiAnbnVtZXJpYycsXG4gICAgICBtb250aDogJ2xvbmcnLFxuICAgICAgZGF5OiAnbnVtZXJpYydcbiAgICB9KVxuICB9XG59Il0sCiAgIm1hcHBpbmdzIjogIjtBQUEwYyxTQUFTLDJCQUEyQjtBQUc5ZSxJQUFPLHFCQUFRLG9CQUFvQixjQUFjO0FBQUEsRUFDL0MsU0FBUztBQUFBLEVBQ1QsUUFBUTtBQUFBLEVBQ1IsVUFBVSxLQUFhO0FBQ3JCLFdBQU8sSUFDSixPQUFPLENBQUMsU0FBUyxLQUFLLFlBQVksY0FBYyxTQUFTLEtBQUssUUFBUSxhQUFhLEtBQUssYUFBYSxZQUFZLElBQUksRUFDckgsSUFBSSxDQUFDLEVBQUUsS0FBSyxTQUFTLE1BQU0sWUFBWSxNQUFNO0FBQzVDLGFBQU87QUFBQSxRQUNMO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBLE9BQU8sWUFBWTtBQUFBLFFBQ25CLFVBQVUsWUFBWTtBQUFBLFFBQ3RCLGNBQWMsWUFBWTtBQUFBLFFBQzFCLE1BQU0sV0FBVyxZQUFZLElBQUk7QUFBQSxRQUNqQyxRQUFRO0FBQUEsVUFDTixNQUFNLFlBQVksT0FBTztBQUFBLFVBQ3pCLFdBQVcsWUFBWSxPQUFPO0FBQUEsVUFDOUIsU0FBUztBQUFBLFlBQ1AsU0FBUyxZQUFZLE9BQU8sUUFBUTtBQUFBLFlBQ3BDLFVBQVUsWUFBWSxPQUFPLFFBQVE7QUFBQSxZQUNyQyxRQUFRLFlBQVksT0FBTyxRQUFRO0FBQUEsVUFDckM7QUFBQSxRQUNGO0FBQUEsUUFDQSxTQUFTLFlBQVk7QUFBQSxNQUN2QjtBQUFBLElBQ0YsQ0FBQyxFQUNBLEtBQUssQ0FBQyxHQUFHLE1BQU0sRUFBRSxLQUFLLE9BQU8sRUFBRSxLQUFLLElBQUk7QUFBQSxFQUM3QztBQUNGLENBQUM7QUFFRCxTQUFTLFdBQVcsS0FBMkI7QUFDN0MsUUFBTSxPQUFPLElBQUksS0FBSyxHQUFHO0FBQ3pCLE9BQUssWUFBWSxFQUFFO0FBQ25CLFNBQU87QUFBQSxJQUNMLE1BQU0sQ0FBQztBQUFBLElBQ1AsUUFBUSxLQUFLLG1CQUFtQixTQUFTO0FBQUEsTUFDdkMsTUFBTTtBQUFBLE1BQ04sT0FBTztBQUFBLE1BQ1AsS0FBSztBQUFBLElBQ1AsQ0FBQztBQUFBLEVBQ0g7QUFDRjsiLAogICJuYW1lcyI6IFtdCn0K
