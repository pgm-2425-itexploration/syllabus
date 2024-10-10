<script setup lang="ts">
import { withBase } from 'vitepress'
import { data as tutorials } from '../data/tutorials.data.ts'
import Tutorials from '../components/tutorials/Tutorials.vue'
</script>

<Tutorials :tutorials="tutorials"></Tutorials>