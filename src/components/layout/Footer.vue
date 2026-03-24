<template>
  <footer class="bg-dark-900 border-t border-slate-800 text-slate-400 py-12">
    <div class="container mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
      <div class="flex items-center gap-4">
        <span class="text-xl font-bold tracking-tighter text-white">J<span class="text-primary-500">TX</span>21</span>
        <span class="text-xs mt-1">&copy; {{ new Date().getFullYear() }} All rights reserved.</span>
      </div>

      <div class="flex gap-6 items-center">
        <a :href="profileData.github" target="_blank" rel="noopener noreferrer" class="hover:text-primary-400 transition-colors">
          <GithubIcon class="w-5 h-5" />
          <span class="sr-only">GitHub</span>
        </a>
        <a :href="profileData.linkedin" target="_blank" rel="noopener noreferrer" class="hover:text-primary-400 transition-colors">
          <LinkedinIcon class="w-5 h-5" />
          <span class="sr-only">LinkedIn</span>
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { Github as GithubIcon, Linkedin as LinkedinIcon } from 'lucide-vue-next'
import { profileData } from '@/data/profile'
</script>
