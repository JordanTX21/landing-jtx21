<template>
  <section class="py-24 bg-surface relative overflow-hidden">
    <div class="absolute top-1/3 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none"></div>

    <div class="container mx-auto px-6 lg:px-12 relative z-10">
      <div class="flex flex-col mb-16" v-motion :initial="{ opacity: 0, x: -30 }" :visible-once="{ opacity: 1, x: 0, transition: { duration: 600 } }">
        <h2 class="text-4xl md:text-6xl font-display font-bold text-white mb-4">
          {{ t.projects.titleTop }} <span class="text-gradient">{{ t.projects.titleHighlight }}</span>
        </h2>
        <div class="w-20 h-1.5 bg-primary rounded-full mb-6"></div>
        <p class="text-slate-400 text-lg max-w-2xl font-sans leading-relaxed">{{ t.projects.subtitle }}</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <article
          v-for="(project, index) in t.projects.items"
          :key="project.name"
          class="glass rounded-3xl p-8 md:p-10 ghost-border flex flex-col hover:bg-surface-highest/40 transition-colors duration-500"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 600, delay: index * 100 } }"
        >
          <div class="flex items-center gap-4 mb-4">
            <div class="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20">
              <FolderGitIcon class="w-6 h-6 text-primary" />
            </div>
            <h3 class="text-2xl font-display font-bold text-white">{{ project.name }}</h3>
          </div>

          <p class="text-slate-400 leading-relaxed mb-6 font-sans">{{ project.description }}</p>

          <ul class="space-y-3 mb-8">
            <li v-for="item in project.highlights" :key="item" class="flex gap-3 items-start">
              <span class="w-2 h-2 rounded-full bg-primary mt-2 shrink-0 opacity-60"></span>
              <span class="text-sm text-slate-400 leading-relaxed">{{ item }}</span>
            </li>
          </ul>

          <div class="flex flex-wrap gap-3 mb-8">
            <span
              v-for="tag in project.tags"
              :key="tag"
              class="px-4 py-1.5 rounded-xl bg-surface-highest/40 text-slate-300 text-xs font-bold border border-white/5"
            >
              {{ tag }}
            </span>
          </div>

          <a
            :href="project.url"
            target="_blank"
            rel="noopener noreferrer"
            class="mt-auto inline-flex items-center gap-2 text-primary font-bold hover:text-secondary transition-colors"
          >
            <GithubIcon class="w-5 h-5" />
            {{ t.projects.repoLabel }}
          </a>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { FolderGit2 as FolderGitIcon, Github as GithubIcon } from 'lucide-vue-next'
import { useContent } from '@/composables/useContent'

const { t } = useContent()
</script>
