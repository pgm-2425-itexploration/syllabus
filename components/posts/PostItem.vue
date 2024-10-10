<script setup lang="ts">
import { Post } from '../../types/ahs';
import { withBase } from 'vitepress'

interface Props {
  size?: 'small' | 'medium'
  post: Post
}

withDefaults(defineProps<Props>(), {
  size: 'medium'
})
</script>

<template>
  <article class="PostItem" :class="[size]">
    <h2>{{ post.title }}</h2>
    <div v-html="post.html"></div>
    <a :href="withBase(post.url)">Read more</a>
    <img :src="withBase(post.thumbnailUrl)" alt="post image" />
  </article>
</template>