<script setup lang="ts">
import { Tutorial } from '../../types/ahs';
import { withBase } from 'vitepress'

interface Props {
  size?: 'small' | 'medium'
  tutorial: Tutorial
}

withDefaults(defineProps<Props>(), {
  size: 'medium'
})
</script>

<template>
  <article class="TutorialItem" :class="[size]">
    <h2>{{ tutorial.title }}</h2>
    <div v-html="tutorial.html"></div>
    <a :href="withBase(tutorial.url)">Read more</a>
    <img :src="withBase(tutorial.thumbnailUrl)" alt="tutorial image" />
  </article>
</template>