<script setup lang="ts">
import type { DefaultTheme } from 'vitepress/theme'
import { computed } from 'vue'
import TutorialItem from './TutorialItem.vue'
import { Tutorial } from '../../types/ahs';

interface Props {
  size?: 'small' | 'medium'
  tutorials: Tutorial[]
}

const props = withDefaults(defineProps<Props>(), {
  size: 'medium'
})

const classes = computed(() => [props.size, `count-${props.tutorials.length}`])
</script>

<template>
  <div class="Tutorials" :class="classes">
    <div class="container">
      <div v-for="tutorial in tutorials" :key="tutorial.title" class="tutorials-container">
        <TutorialItem :size="size" :tutorial="tutorial" />
      </div>
    </div>
  </div>
</template>