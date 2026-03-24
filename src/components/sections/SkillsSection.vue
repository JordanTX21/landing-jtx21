<template>
  <section class="py-24 bg-dark-800/50">
    <div class="container mx-auto px-6 lg:px-12">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
          Technical <span class="text-primary-500">Expertise</span>
        </h2>
        <div class="w-16 h-1 bg-primary-500 rounded mx-auto mb-6"></div>
        <p class="text-slate-400 max-w-2xl mx-auto">
          A balanced skill set bridging scalable backend infrastructure with dynamic frontend and moving into mobile via Flutter.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div v-for="category in skills" :key="category.name" 
             class="glass rounded-2xl p-6 hover:border-primary-500/50 transition-colors group">
          <div class="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center mb-6 text-primary-500 group-hover:bg-primary-500/20 transition-colors shadow-lg shadow-black/20">
            <component :is="category.icon" class="w-6 h-6" />
          </div>
          
          <h3 class="text-xl font-bold text-white mb-4">{{ category.name }}</h3>
          
          <ul class="space-y-3">
            <li v-for="skill in category.items" :key="skill.name" class="flex flex-col gap-1 text-slate-300">
              <div class="flex items-center gap-2">
                <CheckCircleIcon class="w-4 h-4 text-primary-600 shrink-0" />
                <span class="font-medium text-sm">{{ skill.name }}</span>
              </div>
              <span v-if="skill.desc" class="text-xs text-slate-500 ml-6">{{ skill.desc }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { CheckCircle as CheckCircleIcon } from 'lucide-vue-next'
import { skills } from '@/data/skills'
</script>
