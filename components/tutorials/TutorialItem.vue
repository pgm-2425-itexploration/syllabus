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
  <a :href="withBase(tutorial.url)" class="tutorial-item-container">
    <article class="tutorial-item" :class="[size]">
      <img :src="withBase(tutorial.thumbnailUrl)" alt="tutorial image" />

      <div class="info">
        <h2 class="title">{{ tutorial.title }}</h2>
        <p v-if="tutorial.synopsis" class="synopsis">{{ tutorial.synopsis }}</p>
        <div class="meta">
          <p v-if="tutorial.author.name" class="author">{{ tutorial.author.name }}</p>
          <p class="date">{{ tutorial.date.string }}</p>
        </div>
      </div>
    </article>
  </a>

</template>

<!-- <div v-html="tutorial.html"></div> -->