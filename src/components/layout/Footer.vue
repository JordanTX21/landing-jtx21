<template>
  <footer class="bg-surface-lowest border-t border-white/5 py-16 relative overflow-hidden">
    <div class="container mx-auto px-6 lg:px-12 relative z-10 flex flex-col md:flex-row items-center justify-between gap-10 text-center md:text-left">
      <div class="flex flex-col md:flex-row items-center gap-6">
        <router-link to="/" class="text-2xl font-display font-bold tracking-tighter text-white">
          J<span class="text-primary">TX</span><span class="text-white/50">21</span>
        </router-link>
        <div class="h-px w-8 bg-white/10 hidden md:block"></div>
        <span class="text-sm font-medium text-slate-500 tracking-wide font-sans">
          &copy; {{ new Date().getFullYear() }} Jordan Noblejas. Built with Resilience.
        </span>
      </div>

      <div class="flex gap-8 items-center">
        <a 
          v-for="social in socials" 
          :key="social.label"
          :href="social.href" 
          target="_blank" 
          rel="noopener noreferrer" 
          class="text-slate-500 hover:text-primary transition-all duration-300 hover:scale-110"
        >
          <component :is="social.icon" class="w-6 h-6" />
          <span class="sr-only">{{ social.label }}</span>
        </a>
      </div>
    </div>
    
    <!-- Subtle glow -->
    <div class="absolute -bottom-20 -left-20 w-40 h-40 bg-primary/5 rounded-full blur-[80px] pointer-events-none"></div>
  </footer>
</template>

<script setup lang="ts">
import { Github as GithubIcon, Linkedin as LinkedinIcon, Mail as MailIcon } from 'lucide-vue-next'
import { profileData } from '@/data/profile'

const socials = [
  { label: 'GitHub', href: profileData.github, icon: GithubIcon },
  { label: 'LinkedIn', href: profileData.linkedin, icon: LinkedinIcon },
  { label: 'Email', href: `mailto:${profileData.email}`, icon: MailIcon },
]
</script>
