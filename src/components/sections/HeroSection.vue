<template>
  <section
    class="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 overflow-hidden bg-surface isolation-auto">
    <!-- Atmospheric Background Elements -->
    <div class="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <!-- Cosmic Glows -->
      <div
        class="absolute w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px] top-[-100px] right-[-100px] opacity-40 mix-blend-screen animate-pulse-slow">
      </div>
      <div
        class="absolute w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[120px] bottom-[-100px] left-[-100px] opacity-30 mix-blend-screen">
      </div>

      <!-- Radial Mesh Gradient -->
      <div
        class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(14,19,33,0)_0%,rgba(14,19,33,1)_100%)] z-10">
      </div>
    </div>

    <div class="container mx-auto px-6 lg:px-12 relative z-20">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

        <!-- Text Content -->
        <div class="lg:col-span-7 text-left" v-motion :initial="{ opacity: 0, x: -50 }"
          :enter="{ opacity: 1, x: 0, transition: { duration: 800, ease: 'easeOut' } }">
          <div
            class="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-primary text-sm font-medium tracking-wide ghost-border">
            <span class="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_rgba(71,214,255,1)]"></span>
            {{ profileData.availability || 'Available for new opportunities' }}
          </div>

          <h1 class="text-5xl md:text-8xl font-display font-bold leading-[1.1] mb-8">
            <span class="block text-white">Building Resilient</span>
            <span class="text-gradient drop-shadow-[0_0_30px_rgba(71,214,255,0.3)]">Backend Systems</span>
            <span class="block text-white/90">& APIs</span>
          </h1>

          <p class="text-lg md:text-xl text-slate-400 mb-12 max-w-xl leading-relaxed font-sans">
            {{ profileData.role }} specializing in creating clean, scalable architectures with <span
              class="text-secondary font-medium">Laravel</span> and modern <span
              class="text-secondary font-medium">Vue.js</span> interfaces.
          </p>

          <div class="flex flex-col sm:flex-row gap-6">
            <a href="#contact"
              class="px-10 py-5 rounded-full font-bold bg-primary text-surface hover:scale-105 active:scale-95 transition-all shadow-glow-primary-lg flex items-center justify-center gap-3 group overflow-hidden relative">
              <span class="relative z-10">Get in touch</span>
              <ArrowRightIcon class="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
              <!-- Button Glow Effect -->
              <div
                class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000">
              </div>
            </a>

            <a href="#experience"
              class="px-10 py-5 rounded-full font-bold bg-surface-highest/50 text-white border border-white/10 hover:bg-surface-highest hover:border-white/20 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3 backdrop-blur-md">
              View Projects
              <CodeIcon class="w-5 h-5 text-primary" />
            </a>
          </div>

          <!-- Quick Stats / Labels -->
          <div class="mt-16 grid grid-cols-3 gap-8 pt-8 border-t border-white/5 max-w-md">
            <div v-for="stat in stats" :key="stat.label" class="flex flex-col">
              <span class="text-2xl font-display font-bold text-white">{{ stat.value }}</span>
              <span class="text-xs uppercase tracking-widest text-slate-500 font-semibold">{{ stat.label }}</span>
            </div>
          </div>
        </div>

        <!-- 3D Character Protagonist -->
        <div class="lg:col-span-5 relative" v-motion :initial="{ opacity: 0, scale: 0.8, rotateY: 20 }"
          :enter="{ opacity: 1, scale: 1, rotateY: 0, transition: { duration: 1000, delay: 200 } }">
          <!-- Stylized Image Container -->
          <div class="relative z-10 group">
            <!-- Glow behind character -->
            <div
              class="absolute inset-x-0 bottom-0 top-1/2 bg-gradient-to-t from-primary/20 to-transparent blur-3xl opacity-50 group-hover:opacity-80 transition-opacity duration-700">
            </div>

            <!-- Float animation on image -->
            <img src="/3d_developer_character.png" alt="Developer Character"
              class="w-full max-w-[500px] mx-auto animate-float drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-20 relative pointer-events-none" />

            <!-- Floating Tech Badges -->
            <div v-for="(tech, index) in techBadges" :key="tech.name"
              class="absolute glass px-4 py-2 rounded-2xl flex items-center gap-2 ghost-border z-30 animate-pulse"
              :style="{
                top: tech.pos.top,
                left: tech.pos.left,
                right: tech.pos.right,
                bottom: tech.pos.bottom,
                animationDelay: `${index * 1.5}s`
              }">
              <component :is="tech.icon" class="w-5 h-5 text-primary" />
              <span class="text-xs font-bold text-white tracking-wide uppercase">{{ tech.name }}</span>
            </div>
          </div>

          <!-- Decorative Code Symbols -->
          <div
            class="absolute -top-10 -right-10 text-primary/20 font-mono text-8xl pointer-events-none select-none opacity-50">
            { }
          </div>
          <div
            class="absolute -bottom-10 -left-10 text-secondary/20 font-mono text-8xl pointer-events-none select-none opacity-50">
            &lt;/&gt;
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
  Server as ServerIcon,
  Layout as LayoutIcon,
  Cpu as CpuIcon,
  Smartphone,
  DatabaseIcon,
  LayersIcon
} from 'lucide-vue-next'
import { profileData } from '@/data/profile'

const stats = [
  { label: 'Experience', value: '5+ Yrs' },
  { label: 'Projects', value: '25+' },
  { label: 'Systems Built', value: '10+' },
]

const techBadges = [
  { name: 'Laravel', icon: ServerIcon, pos: { top: '10%', left: '-5%' } },
  { name: 'Vue 3', icon: LayoutIcon, pos: { top: '60%', right: '-10%' } },
  { name: 'API Design', icon: CpuIcon, pos: { bottom: '0%', left: '10%' } },
  { name: 'System Design', icon: LayersIcon, pos: { top: '-5%', right: '10%' } },
  { name: 'MySQL', icon: DatabaseIcon, pos: { top: '30%', right: '0%' } },
  { name: 'Flutter', icon: Smartphone, pos: { top: '50%', left: '-10%' } },
]
</script>

<style scoped>
.animate-float {
  animation: float 6s ease-in-out infinite;
}

@keyframes float {

  0%,
  100% {
    transform: translateY(0) rotate(0deg);
  }

  50% {
    transform: translateY(-20px) rotate(1deg);
  }
}
</style>
