---
title: "Dit is een titel"
description: "Dit is een omschrijving"
---

<script setup lang="ts">
import { withBase } from 'vitepress'
import { data as tutorials } from '../data/tutorials.data.ts'
import Tutorials from '../components/tutorials/Tutorials.vue'
</script>

<h1>Tutorials</h1>

<Tutorials :tutorials="tutorials"></Tutorials>