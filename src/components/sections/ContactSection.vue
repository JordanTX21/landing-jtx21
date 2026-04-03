<template>
  <section class="py-40 bg-surface relative overflow-hidden">
    <!-- Sophisticated glow -->
    <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[400px] bg-primary/10 rounded-full blur-[150px] pointer-events-none opacity-40"></div>

    <div class="container mx-auto px-6 lg:px-12 relative z-10 max-w-5xl">
      <div 
        class="glass rounded-[3rem] p-12 md:p-24 ghost-border relative overflow-hidden"
        v-motion
        :initial="{ opacity: 0, scale: 0.95 }"
        :visible-once="{ opacity: 1, scale: 1, transition: { duration: 800 } }"
      >
        <!-- Inner Glow -->
        <div class="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none"></div>

        <div class="relative z-10 text-center">
          <h2 class="text-5xl md:text-8xl font-display font-bold text-white mb-8 leading-tight">
            Let's <span class="text-gradient">Connect</span>
          </h2>
          <p class="text-xl text-slate-400 mb-16 max-w-3xl mx-auto leading-relaxed font-sans">
            Ready to architect your next high-performance backend or bridge the gap with a modern Vue-powered interface? I'm always open to discussing technical challenges and complex business solutions.
          </p>

          <div class="flex flex-col sm:flex-row items-center justify-center gap-8">
            <a 
              :href="`mailto:${profileData.email}`" 
              class="px-12 py-6 rounded-full font-bold bg-primary text-surface hover:scale-105 active:scale-95 transition-all shadow-glow-primary flex items-center justify-center w-full sm:w-auto text-xl gap-4 group relative overflow-hidden"
            >
              <span class="relative z-10">Send me an email</span>
              <MailIcon class="w-6 h-6 group-hover:-translate-y-1 transition-transform relative z-10" />
              <!-- Shine Effect -->
              <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </a>
            
            <a 
              :href="profileData.github" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="px-12 py-6 rounded-full font-bold bg-surface-highest/50 text-white border border-white/10 hover:bg-surface-highest hover:border-white/20 hover:scale-105 active:scale-95 transition-all flex items-center justify-center w-full sm:w-auto text-xl gap-4 backdrop-blur-md"
            >
              <GithubIcon class="w-6 h-6" />
              View GitHub
            </a>
          </div>
          
          <div class="mt-24 flex justify-center items-center">
            <div 
              class="glass px-8 py-4 rounded-full border border-primary/20 text-sm font-bold text-primary flex items-center gap-4 shadow-xl"
              v-motion-pulse
            >
              <span class="relative flex h-3 w-3">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span class="relative inline-flex rounded-full h-3 w-3 bg-primary shadow-[0_0_8px_rgba(71,214,255,1)]"></span>
              </span>
              <span class="tracking-widest uppercase">Actively building systems in {{ new Date().getFullYear() }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Mail as MailIcon, Github as GithubIcon } from 'lucide-vue-next'
import { profileData } from '@/data/profile'
</script>
