<script setup lang="ts">
import Card from './Card.vue'
import { Tutorial, Post } from '../../types/ahs';

interface Props {
  size?: 'small' | 'medium'
  articles: Tutorial[] | Post[]
}

const props = withDefaults(defineProps<Props>(), {
  size: 'medium'
})
</script>

<template>
    <div class="container">
      <div v-for="article in articles" :key="article.title" class="flex flex-wrap gap-4 mt-4">
        <Card :size="size" :data="article" />
      </div>
    </div>
</template>