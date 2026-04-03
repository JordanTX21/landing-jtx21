<template>
  <section id="education" class="py-24 bg-surface relative overflow-hidden">
    <!-- Subtle glow background -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

    <div class="container mx-auto px-6 lg:px-12 relative z-10">
      <div class="flex flex-col mb-16" v-motion :initial="{ opacity: 0, x: -30 }" :visible-once="{ opacity: 1, x: 0, transition: { duration: 600 } }">
        <h2 class="text-4xl md:text-6xl font-display font-bold text-white mb-4">
          Academic <span class="text-gradient">Formation</span>
        </h2>
        <div class="w-20 h-1.5 bg-primary rounded-full group-hover:w-32 transition-all duration-500"></div>
      </div>

      <div class="grid grid-cols-1 gap-10 max-w-5xl">
        <div 
          v-for="(item, index) in education" 
          :key="index"
          class="glass rounded-[2rem] p-10 md:p-14 ghost-border group hover:bg-surface-highest/40 transition-all duration-700 relative overflow-hidden"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 600, delay: index * 100 } }"
        >
          <!-- Accent decoration -->
          <div class="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>

          <div class="flex flex-col md:flex-row md:items-start justify-between gap-8 relative z-10">
            <div class="flex-grow">
              <div class="flex items-center gap-4 mb-4">
                <div class="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:scale-110 transition-transform duration-500">
                  <GraduationCapIcon class="w-6 h-6 text-primary" />
                </div>
                <h3 class="text-2xl md:text-3xl font-display font-bold text-white leading-tight">
                  {{ item.title }}
                </h3>
              </div>
              
              <p class="text-xl font-bold text-slate-300 mb-6 flex items-center gap-2">
                <BuildingIcon class="w-5 h-5 text-slate-500" />
                {{ item.institution }}
              </p>
              
              <div class="space-y-4">
                <p class="text-lg text-slate-400 leading-relaxed font-sans">
                  {{ item.description }}
                </p>
              </div>
            </div>

            <div class="flex-shrink-0">
              <div class="glass-light px-6 py-2 rounded-full border border-white/10 text-primary font-bold shadow-xl flex items-center gap-3">
                <CalendarIcon class="w-4 h-4" />
                {{ item.date }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { 
  GraduationCap as GraduationCapIcon, 
  Building as BuildingIcon,
  Calendar as CalendarIcon
} from 'lucide-vue-next'
import { education } from '@/data/education'
</script>
