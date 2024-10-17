---
title: "Tutorials"
---

<script setup lang="ts">
import { data as tutorials } from '../data/tutorials.data.ts'
import Cards from '../components/card/Cards.vue'
</script>

<h1>Tutorials</h1>

<Cards :articles="tutorials"></Cards>