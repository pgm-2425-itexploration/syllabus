---
title: "Posts"
---

<script setup lang="ts">
import { data as posts } from './../data/posts.data.ts'
import Cards from './../components/card/Cards.vue'
</script>

<h1>Posts</h1>

<Cards :articles="posts"></Cards>