<script setup lang="ts">
import { Post, Tutorial } from '../../types/ahs';
import { withBase } from 'vitepress'

interface Props {
  size?: 'small' | 'medium'
  data: Tutorial | Post
}

withDefaults(defineProps<Props>(), {
  size: 'medium'
})
</script>

<template>
  <a 
    :href="withBase(data.url)" 
    class="!no-underline" 
    style="color: var(--vp-c-text-1) !important;"
  >
    <article 
      class="card-item-hover rounded-[12px] h-full transition-all duration-200 p-4 flex flex-col min-[768px]:gap-8 min-[768px]:flex-row min-[768px]:items-center" 
      style="background-color: var(--vp-c-bg-soft);"
      :class="[size]"
    >
      <img 
        :src="withBase(data.thumbnailUrl)" 
        alt="tutorial image" 
        class="max-w-full rounded-[12px] aspect-video w-full object-cover min-[768px]:max-w-[50%]"
      />

      <div class="text-sm">

        <h2 class="!mt-0" style="border-top: none;">{{ data.title }}</h2>
        
        <p v-if="data.synopsis" class="!m-0">{{ data.synopsis }}</p>
        
        <div class="flex flex-wrap gap-y-1 gap-x-4 mt-4 items-center" style="color: var(--vp-c-text-2);">
          <img v-if="data.author?.avatarUrl" :src="withBase(data.author?.avatarUrl)" :alt="data.author.name" class="rounded-full w-8 h-8" />

          <p v-if="data.author?.name" class="!m-0">{{ data.author.name }}</p>
        
          <p class="!m-0">{{ data.date.string }}</p>
        </div>

      </div>

    </article>
  </a>

</template>