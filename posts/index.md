---
title: "Dit is een titel"
description: "Dit is een omschrijving"
---

<script setup lang="ts">
import { withBase } from 'vitepress'
import { data as posts } from '../data/posts.data.ts'
import Posts from '../components/posts/Posts.vue'
</script>

<h1>Posts</h1>

<Posts :posts="posts"></Posts>

