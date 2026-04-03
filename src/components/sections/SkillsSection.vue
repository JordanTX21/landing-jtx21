<template>
  <section class="py-32 bg-surface overflow-hidden relative">
    <!-- Subtle Background Glow -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

    <div class="container mx-auto px-6 lg:px-12 relative z-10">
      <div class="text-center mb-24">
        <h2 
          class="text-4xl md:text-6xl font-display font-bold text-white mb-6"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
        >
          Technical <span class="text-gradient">Expertise</span>
        </h2>
        <p 
          class="text-slate-400 max-w-2xl mx-auto text-lg font-sans leading-relaxed"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 600, delay: 200 } }"
        >
          A balanced skill set bridging scalable backend infrastructure with dynamic frontend and moving into mobile via Flutter.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
        <div 
          v-for="(category, idx) in skills" 
          :key="category.name" 
          class="glass rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 group relative overflow-hidden ghost-border"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :visible-once="{ 
            opacity: 1, 
            y: 0, 
            transition: { duration: 600, delay: idx * 100 } 
          }"
        >
          <!-- Category Icon -->
          <div class="relative z-10 mb-8 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-surface-highest/50 border border-white/5 text-primary shadow-lg shadow-black/20 group-hover:scale-110 transition-transform duration-500">
            <component :is="category.icon" class="w-8 h-8" />
            
            <!-- Glow Effect on Icon -->
            <div class="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
          
          <h3 class="text-2xl font-display font-bold text-white mb-6 relative z-10">{{ category.name }}</h3>
          
          <ul class="space-y-4 relative z-10 overflow-hidden">
            <li v-for="skill in category.items" :key="skill.name" class="flex flex-col gap-1.5 group/item">
              <div class="flex items-center gap-3">
                <div class="w-1.5 h-1.5 rounded-full bg-primary/60 group-hover/item:bg-primary group-hover/item:scale-150 transition-all duration-300"></div>
                <span class="font-semibold text-sm text-slate-200 group-hover/item:text-white transition-colors">{{ skill.name }}</span>
              </div>
              <span v-if="skill.desc" class="text-xs text-slate-500 ml-4.5 leading-relaxed pl-4">{{ skill.desc }}</span>
            </li>
          </ul>

          <!-- Decorative Gradient Background -->
          <div class="absolute -bottom-12 -right-12 w-32 h-32 bg-primary/5 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { skills } from '@/data/skills'
</script>
