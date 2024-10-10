<script setup lang="ts">
import type { DefaultTheme } from 'vitepress/theme'
import { computed } from 'vue'
import PostItem from './PostItem.vue'
import { Post } from '../../types/ahs';

interface Props {
  size?: 'small' | 'medium'
  posts: Post[]
}

const props = withDefaults(defineProps<Props>(), {
  size: 'medium'
})

const classes = computed(() => [props.size, `count-${props.posts.length}`])
</script>

<template>
  <div class="Posts" :class="classes">
    <div class="container">
      <div v-for="post in posts" :key="post.title" class="item">
        <PostItem :size="size" :post="post" />
      </div>
    </div>
  </div>
</template>