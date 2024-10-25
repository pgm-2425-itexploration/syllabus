<script setup>
import { useData, withBase } from 'vitepress'
const { page, frontmatter } = useData()
</script>

<template>
  <div class="flex flex-wrap gap-y-4 gap-x-8 justify-between rounded-[8px] py-3 px-4 items-center"
    v-if="frontmatter.author" style="border: 1px solid var(--vp-c-divider);">

    <div class="max-sm:w-full flex flex-col gap-1">
      <p class="leading-5 text-xs font-medium" style="color: var(--vp-c-text-2)">Written by</p>
      <div class="flex gap-2 items-center">
        <img v-if="frontmatter.author.avatarUrl && frontmatter.author.name" :src="withBase(frontmatter.author?.avatarUrl)" :alt="frontmatter.author.name" class="rounded-full w-6 h-6" />
        <p v-if="frontmatter.author.name" class="text-s font-normal" style="color: var(--vp-c-brand-1);">{{frontmatter.author.name }}</p>
      </div>
    </div>

    <div class="flex flex-col gap-1 items-end max-sm:w-full" v-if="frontmatter.author.socials.linkedin || frontmatter.author.socials.website || frontmatter.author.socials.github">
      <p class="leading-5 text-xs font-medium" style="color: var(--vp-c-text-2)">Socials</p>
      <div class="flex space-x-4">
        <a target="_blank" :href="frontmatter.author.socials.linkedin" v-if="frontmatter.author.socials.linkedin"
          class="hover:underline" style="color: var(--vp-c-brand-1);">LinkedIn</a>
        <a target="_blank" :href="frontmatter.author.socials.website" v-if="frontmatter.author.socials.website"
          class="hover:underline" style="color: var(--vp-c-brand-1);">Website</a>
        <a target="_blank" :href="frontmatter.author.socials.github" v-if="frontmatter.author.socials.github"
          class="hover:underline" style="color: var(--vp-c-brand-1);">GitHub</a>
      </div>
    </div>

  </div>
</template>