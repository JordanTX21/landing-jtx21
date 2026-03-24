<template>
  <section class="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-dark-900 isolation-auto">
    <!-- Decorator blobs -->
    <div class="absolute inset-0 z-0 overflow-hidden pointer-events-none flex justify-center items-center">
      <div class="absolute w-[600px] h-[600px] bg-primary-600/10 rounded-full blur-[120px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-60 mix-blend-screen animate-pulse animation-delay-2000"></div>
      <div class="absolute w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] top-[40%] left-[30%] opacity-50 mix-blend-screen"></div>
    </div>

    <div class="container mx-auto px-6 lg:px-12 relative z-10 flex flex-col items-center text-center max-w-4xl">
      <div class="mb-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary-500/30 bg-primary-500/10 text-primary-400 text-sm font-medium tracking-wide">
        <span class="w-2 h-2 rounded-full bg-primary-500 animate-pulse"></span>
        Available for new opportunities
      </div>

      <h1 class="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6">
        Building Resilient <br class="hidden md:block" />
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-blue-300">Backend Systems</span> & APIs
      </h1>
      
      <p class="text-lg md:text-2xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
        {{ profileData.role }} specialized in creating clean, scalable architectures with Laravel and modern Vue.js interfaces.
      </p>

      <div class="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center w-full sm:w-auto">
        <a href="#contact" class="px-8 py-4 rounded-xl font-semibold bg-primary-600 hover:bg-primary-500 text-white transition-all shadow-lg shadow-primary-500/30 hover:shadow-xl hover:shadow-primary-500/50 flex items-center justify-center gap-2 group">
          Get in touch
          <ArrowRightIcon class="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </a>
        <a href="#architecture" class="px-8 py-4 rounded-xl font-semibold bg-slate-800 text-slate-200 border border-slate-700 hover:bg-slate-700 hover:text-white transition-colors flex items-center justify-center gap-2">
          View Architecture Patterns
          <CodeIcon class="w-5 h-5 text-primary-500" />
        </a>
      </div>

      <div class="mt-20 pt-10 border-t border-slate-800/60 w-full">
        <p class="text-sm font-semibold text-slate-500 uppercase tracking-widest mb-6 text-center">Tech Stack Highlights</p>
        <div class="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
          <div v-for="tech in coreTech" :key="tech.name" class="flex flex-col items-center gap-2 group cursor-default">
            <component :is="tech.icon" class="w-8 h-8 text-slate-400 group-hover:text-primary-400 transition-colors" />
            <span class="text-xs font-medium text-slate-500 group-hover:text-slate-300">{{ tech.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { 
  ArrowRight as ArrowRightIcon, 
  Code as CodeIcon,
  Database as DatabaseIcon,
  Server as ServerIcon,
  Layout as LayoutIcon,
  Smartphone as SmartphoneIcon
} from 'lucide-vue-next'
import { profileData } from '@/data/profile'

const coreTech = [
  { name: 'Laravel', icon: ServerIcon },
  { name: 'Vue 3', icon: LayoutIcon },
  { name: 'REST APIs', icon: DatabaseIcon },
  { name: 'Flutter', icon: SmartphoneIcon },
]
</script>
