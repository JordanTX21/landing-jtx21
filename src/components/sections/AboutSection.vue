<template>
  <section class="py-32 bg-surface relative overflow-hidden">
    <!-- Decorative background elements -->
    <div class="absolute top-1/2 left-0 w-64 h-64 bg-primary/10 rounded-full blur-[120px] -translate-x-1/2"></div>

    <div class="container mx-auto px-6 lg:px-12 relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

        <!-- Left: Image/Highlight -->
        <div class="relative group" v-motion :initial="{ opacity: 0, x: -50 }"
          :visible-once="{ opacity: 1, x: 0, transition: { duration: 800 } }">
          <div class="relative rounded-3xl overflow-hidden glass ghost-border p-2">
            <div class="aspect-[4/5] rounded-2xl bg-surface-lowest relative overflow-hidden">
              <!-- Placeholder for a real photo or a high-end abstract graphic -->
              <div
                class="absolute inset-0 bg-gradient-to-br from-primary/20 via-surface-highest to-surface-lowest flex items-center justify-center p-12 text-center">
                <div>
                  <div
                    class="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-8 border border-primary/30">
                    <UserIcon class="w-12 h-12 text-primary" />
                    <img src="/profile.png" alt="profile" class="rounded-full">
                  </div>
                  <h3 class="text-3xl font-display font-bold text-white mb-4">{{ profileData.name }}</h3>
                  <p class="text-secondary font-semibold uppercase tracking-widest text-sm mb-6">Tech Lead • Backend
                    Engineer</p>
                  <p class="text-slate-400 text-sm leading-relaxed max-w-xs mx-auto">
                    "{{ profileData.tagline }}"
                  </p>
                </div>
              </div>

              <!-- Floating Achievement Badges -->
              <div
                class="absolute top-6 right-6 glass px-4 py-2 rounded-xl border border-white/5 shadow-xl animate-float">
                <span class="text-xs font-bold text-white tracking-wider">5+ YRS EXP</span>
              </div>
            </div>
          </div>

          <!-- Decorative shapes -->
          <div
            class="absolute -bottom-10 -right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors duration-700">
          </div>
        </div>

        <!-- Right: Content -->
        <div class="flex flex-col">
          <h2 class="text-4xl md:text-7xl font-display font-bold text-white mb-10 leading-tight" v-motion
            :initial="{ opacity: 0, y: 30 }" :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }">
            Personal <br />
            <span class="text-gradient">Narrative</span>
          </h2>

          <div class="space-y-8 text-xl text-slate-400 font-sans leading-relaxed" v-motion
            :initial="{ opacity: 0, y: 20 }"
            :visible-once="{ opacity: 1, y: 0, transition: { duration: 600, delay: 200 } }">
            <p>
              {{ profileData.description }}
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
              <div class="glass p-8 rounded-3xl ghost-border hover:bg-surface-highest/40 transition-colors">
                <div
                  class="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 border border-primary/20">
                  <ShieldCheckIcon class="w-6 h-6 text-primary" />
                </div>
                <h4 class="text-white font-display font-bold text-xl mb-4">API & Backend Design</h4>
                <p class="text-sm leading-relaxed text-slate-400">
                  Design and implementation of scalable REST APIs with focus on performance, security, and
                  maintainability across distributed systems.
                </p>
              </div>

              <div class="glass p-8 rounded-3xl ghost-border hover:bg-surface-highest/40 transition-colors">
                <div
                  class="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center mb-6 border border-secondary/20">
                  <BoxesIcon class="w-6 h-6 text-secondary" />
                </div>
                <h4 class="text-white font-display font-bold text-xl mb-4">System Architecture</h4>
                <p class="text-sm leading-relaxed text-slate-400">
                  Experience designing and scaling backend systems, handling complex business logic, and evolving legacy
                  ERP platforms into maintainable and modular architectures.
                </p>
              </div>
            </div>

            <p class="text-lg">
              I focus on making <span class="text-white font-semibold">systems understandable</span>, maintainable, and
              resilient—so teams can build faster without introducing chaos or technical debt.
            </p>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {
  User as UserIcon,
  ShieldCheck as ShieldCheckIcon,
  Boxes as BoxesIcon
} from 'lucide-vue-next'
import { profileData } from '@/data/profile'
</script>
