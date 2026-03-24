<template>
  <section class="py-24 relative overflow-hidden bg-dark-900 border-t border-slate-800/50">
    <div class="container mx-auto px-6 lg:px-12 max-w-4xl text-center">
      <h2 class="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
        Let's <span class="text-primary-500">Connect</span>
      </h2>
      <p class="text-lg text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
        Looking for a backend architect to scale your next API, or an experienced full stack developer comfortable with Vue and Flutter to handle end-to-end functionality?
      </p>

      <div class="flex flex-col sm:flex-row items-center justify-center gap-6">
        <a :href="`mailto:${profileData.email}`" class="px-8 py-4 rounded-xl font-semibold bg-primary-600 hover:bg-primary-500 text-white transition-all shadow-lg shadow-primary-500/20 hover:shadow-primary-500/40 flex items-center justify-center w-full sm:w-auto text-lg gap-3 group">
          <MailIcon class="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
          Send me an email
        </a>
        <a :href="profileData.github" target="_blank" rel="noopener noreferrer" class="px-8 py-4 rounded-xl font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 hover:border-slate-600 transition-all flex items-center justify-center w-full sm:w-auto text-lg gap-3">
          <GithubIcon class="w-5 h-5" />
          View GitHub
        </a>
      </div>
      
      <div class="mt-16 pt-16 border-t border-slate-800 flex justify-center items-center">
        <div class="glass px-6 py-3 rounded-full border-primary-500/20 text-sm font-medium text-primary-400 flex items-center gap-2">
          <span class="relative flex h-3 w-3">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-3 w-3 bg-primary-500"></span>
          </span>
          Actively building systems in {{ new Date().getFullYear() }}
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Mail as MailIcon, Github as GithubIcon } from 'lucide-vue-next'
import { profileData } from '@/data/profile'
</script>
