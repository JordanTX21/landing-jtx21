<template>
  <section class="py-24 bg-dark-800/50">
    <div class="container mx-auto px-6 lg:px-12 max-w-5xl">
      <div class="mb-16 text-center">
        <h2 class="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
          Software <span class="text-primary-500">Architecture</span>
        </h2>
        <div class="w-16 h-1 bg-primary-500 rounded mx-auto mb-6"></div>
        <p class="text-slate-400 text-lg max-w-2xl mx-auto">
          Differentiating from junior approaches by establishing clean, decoupled, and highly performant standards across the stack.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        <div v-for="practice in practices" :key="practice.title" 
             class="glass rounded-2xl p-8 hover:bg-slate-800/80 transition-all border-l-4"
             :class="practice.color">
          
          <div class="flex items-center gap-4 mb-4">
            <div class="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-slate-300">
              <component :is="practice.icon" class="w-5 h-5" />
            </div>
            <h3 class="text-xl font-bold text-white">{{ practice.title }}</h3>
          </div>
          
          <p class="text-slate-400 mb-6 leading-relaxed">
            {{ practice.description }}
          </p>

          <div class="bg-dark-900 rounded-lg p-4 font-mono text-sm text-slate-300 overflow-x-auto border border-slate-800">
            <span class="text-primary-500 mr-2">#</span>{{ practice.snippet }}
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { practices } from '@/data/architecture'
</script>
