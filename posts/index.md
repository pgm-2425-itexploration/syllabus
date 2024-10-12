---
title: "Dit is een titel"
description: "Dit is een omschrijving"
---

<script setup lang="ts">
import { data as posts } from './../data/posts.data.ts'
import Cards from './../components/card/Cards.vue'
</script>

<h1>Posts</h1>

<Cards :articles="posts"></Cards>