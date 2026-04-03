<template>
  <section class="py-32 bg-surface relative overflow-hidden">
    <!-- Subtle Background Glows -->
    <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none"></div>
    <div class="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

    <div class="container mx-auto px-6 lg:px-12 relative z-10">
      <div class="flex flex-col lg:flex-row gap-20">
        
        <!-- Sidebar Info -->
        <div class="lg:w-[35%]">
          <div class="lg:sticky lg:top-32">
            <h2 
              class="text-4xl md:text-7xl font-display font-bold text-white mb-8 leading-tight"
              v-motion
              :initial="{ opacity: 0, x: -30 }"
              :visible-once="{ opacity: 1, x: 0, transition: { duration: 600 } }"
            >
              Recent <br/>
              <span class="text-gradient">Deliveries</span>
            </h2>
            <p 
              class="text-slate-400 text-lg leading-relaxed mb-12 font-sans"
              v-motion
              :initial="{ opacity: 0, x: -30 }"
              :visible-once="{ opacity: 1, x: 0, transition: { duration: 600, delay: 200 } }"
            >
              A curated selection of high-impact technical solutions where I engineered scalable architectures, modernized legacy stacks, and orchestrated mission-critical integrations.
            </p>
            
            <div 
              class="hidden lg:flex flex-col gap-6"
              v-motion
              :initial="{ opacity: 0, scale: 0.9 }"
              :visible-once="{ opacity: 1, scale: 1, transition: { duration: 600, delay: 400 } }"
            >
              <div class="glass p-6 rounded-2xl ghost-border overflow-hidden">
                <p class="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Core Philosophy</p>
                <p class="text-white font-medium italic">"Architecture is about making the important decisions once, and keeping them resilient."</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Timeline / Experience Cards -->
        <div class="lg:w-[65%] space-y-12 relative">
          <!-- Main Vertical Line (Decorative) -->
          <div class="absolute left-0 lg:-left-10 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-secondary/20 to-transparent hidden lg:block"></div>
          
          <div 
            v-for="(job, index) in experiences" 
            :key="index" 
            class="relative group"
            v-motion
            :initial="{ opacity: 0, y: 50 }"
            :visible-once="{ opacity: 1, y: 0, transition: { duration: 800, delay: index * 150 } }"
          >
            <!-- Timeline Node (Hidden on mobile) -->
            <div class="absolute -left-10 top-10 w-5 h-5 rounded-full border-4 border-surface bg-primary/80 group-hover:bg-primary shadow-[0_0_15px_rgba(71,214,255,0.5)] transition-all duration-300 z-10 scale-0 lg:group-hover:scale-125 lg:scale-100 hidden lg:block"></div>
            
            <div class="glass p-10 rounded-3xl ghost-border group-hover:bg-surface-highest/60 transition-all duration-500 relative overflow-hidden group-hover:-translate-y-1 group-hover:translate-x-2">
              <!-- Radial Gradient Hover Effect -->
              <div class="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%]"></div>

              <div class="relative z-10">
                <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                  <div>
                    <span class="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold text-primary uppercase tracking-widest mb-4">
                      {{ job.date }}
                    </span>
                    <h3 class="text-3xl font-display font-bold text-white mb-2 leading-tight">{{ job.title }}</h3>
                    <p class="text-secondary font-semibold tracking-wide text-sm">{{ job.company }}</p>
                  </div>
                </div>

                <p class="text-slate-400 text-lg leading-relaxed mb-8 font-sans">
                  {{ job.description }}
                </p>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                  <div v-for="metric in job.highlights" :key="metric" class="flex gap-4 items-start group/item">
                    <div class="w-2 h-2 rounded-full bg-primary mt-2 shrink-0 opacity-40 group-hover/item:opacity-100 transition-opacity duration-300"></div>
                    <p class="text-sm text-slate-400 group-hover/item:text-slate-200 transition-colors leading-relaxed">
                      {{ metric }}
                    </p>
                  </div>
                </div>

                <div class="flex flex-wrap gap-3">
                  <span 
                    v-for="tag in job.tags" 
                    :key="tag" 
                    class="px-4 py-1.5 rounded-xl bg-surface-highest/40 text-slate-300 text-xs font-bold border border-white/5 hover:border-primary/30 hover:text-primary transition-all duration-300 cursor-default"
                  >
                    {{ tag }}
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { experiences } from '@/data/experience'
</script>
