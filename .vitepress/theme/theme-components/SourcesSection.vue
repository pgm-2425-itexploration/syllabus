<script setup>
import { useData } from 'vitepress'
import { ref } from 'vue'
const { frontmatter } = useData()

let sourcesOverview = ref(null)

const openSources = (ev) => {
    // Show sources
    sourcesOverview.value.classList.toggle('flex')
    sourcesOverview.value.classList.toggle('hidden')
    // Rotate chevron
    ev.target.children[1].classList.toggle('-rotate-90')
}
</script>

<template>
    <div v-if="frontmatter.sources" class="flex flex-wrap gap-y-4 gap-x-8 justify-between rounded-[8px] py-3 px-4 items-center"
        style="border: 1px solid var(--vp-c-divider);">

        <div class="max-sm:w-full flex flex-col gap-4 w-full">

            <div class="flex items-center justify-between cursor-pointer" @click="openSources">
                <p class="leading-5 text-xs font-medium" style="color: var(--vp-c-text-2)">Sources</p>
                <img src="../../../public/assets/icons/chevron.backward.svg" alt="chevron-left" class="h-3" />
            </div>

            <div class="hidden gap-4 items-center flex-wrap" ref="sourcesOverview">
                <div v-for="source in frontmatter.sources" :key="source.title" class="flex items-center gap-2">
                    <img src="../../../public/assets/icons/link.svg" alt="link" class="h-3" />
                    <a :href="source.url" target="_blank" class="text-xs font-medium hover:underline" style="color: var(--vp-c-text-1)">
                        {{ source.title }}
                    </a>
                </div>
            </div>

        </div>

    </div>
</template>