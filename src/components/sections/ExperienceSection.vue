<template>
  <section class="py-24 relative overflow-hidden">
    <div class="container mx-auto px-6 lg:px-12">
      <div class="flex flex-col md:flex-row gap-12 max-w-6xl mx-auto">
        
        <div class="md:w-1/3">
          <div class="sticky top-24">
            <h2 class="text-3xl md:text-5xl font-bold tracking-tight text-white mb-2">
              Recent <span class="text-primary-500">Deliveries</span>
            </h2>
            <div class="w-16 h-1 bg-primary-500 rounded mb-6"></div>
            <p class="text-slate-400">
              A highlight of key business solutions where I solved complex logic, migrated legacy data, and orchestrated third-party integrations seamlessly.
            </p>
          </div>
        </div>

        <div class="md:w-2/3 border-l border-slate-700/50 pl-0 md:pl-8 space-y-12">
          
          <div v-for="(job, index) in experiences" :key="index" class="relative group">
            <div class="absolute -left-3 md:-left-11 top-2 w-6 h-6 rounded-full border-4 border-dark-900 bg-primary-500 group-hover:scale-125 transition-transform z-10 hidden md:block"></div>
            
            <div class="glass p-8 rounded-2xl">
              <span class="text-sm font-semibold text-primary-400 tracking-wider mb-2 block uppercase">{{ job.date }}</span>
              <h3 class="text-2xl font-bold text-white mb-1">{{ job.title }}</h3>
              <p class="text-slate-500 font-medium mb-4">{{ job.company }}</p>

              <p class="text-slate-300 leading-relaxed mb-6">
                {{ job.description }}
              </p>
              
              <ul class="space-y-2 mb-6 text-sm text-slate-400">
                <li v-for="metric in job.highlights" :key="metric" class="flex gap-2">
                  <ArrowRightIcon class="w-4 h-4 text-primary-500 shrink-0 mt-0.5" />
                  {{ metric }}
                </li>
              </ul>

              <div class="flex flex-wrap gap-2">
                <span v-for="tag in job.tags" :key="tag" class="px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-xs font-medium border border-slate-700">
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ArrowRight as ArrowRightIcon } from 'lucide-vue-next'
import { experiences } from '@/data/experience'
</script>
