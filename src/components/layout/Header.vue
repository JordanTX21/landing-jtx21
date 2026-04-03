<template>
  <header 
    class="fixed top-0 w-full z-50 transition-all duration-500 border-b border-white/[0.05]" 
    :class="{ 
      'py-6 bg-transparent border-transparent': !scrolled, 
      'py-4 glass backdrop-blur-3xl shadow-2xl': scrolled 
    }"
    v-motion
    :initial="{ opacity: 0, y: -20 }"
    :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }"
  >
    <div class="container mx-auto px-6 lg:px-12 flex justify-between items-center">
      <router-link to="/" class="text-3xl font-display font-bold tracking-tighter text-white group flex items-center gap-1">
        J<span class="text-primary group-hover:text-secondary transition-colors duration-500">TX</span><span class="text-white/50">21</span>
      </router-link>

      <!-- Desktop Nav -->
      <nav class="hidden lg:flex gap-10 items-center">
        <a 
          v-for="link in links" 
          :key="link.href" 
          :href="link.href" 
          class="text-sm font-bold text-slate-400 hover:text-white transition-colors tracking-widest uppercase relative group"
        >
          {{ link.label }}
          <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
        </a>
        <a 
          href="#contact" 
          class="px-8 py-3 rounded-full bg-white/5 border border-white/10 text-primary font-bold hover:bg-primary hover:text-surface transition-all duration-300 ghost-border glow-on-hover uppercase tracking-widest text-xs"
        >
          Let's Talk
        </a>
      </nav>

      <!-- Mobile Nav Toggle -->
      <button 
        @click="isOpen = !isOpen" 
        class="lg:hidden w-12 h-12 flex items-center justify-center rounded-2xl glass ghost-border text-white hover:text-primary transition-colors"
      >
        <MenuIcon v-if="!isOpen" class="w-6 h-6" />
        <XIcon v-else class="w-6 h-6" />
      </button>
    </div>

    <!-- Mobile Menu -->
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="transform -translate-y-4 opacity-0"
      enter-to-class="transform translate-y-0 opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="transform translate-y-0 opacity-100"
      leave-to-class="transform -translate-y-4 opacity-0"
    >
      <div v-if="isOpen" class="lg:hidden absolute top-full left-0 w-full glass border-b border-white/5 flex flex-col items-center py-12 gap-8 shadow-2xl overflow-hidden">
        <!-- Decoration inside mobile menu -->
        <div class="absolute -top-10 -right-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
        
        <a 
          v-for="link in links" 
          :key="link.href" 
          :href="link.href" 
          @click="isOpen = false"
          class="text-2xl font-display font-bold text-slate-300 hover:text-primary transition-colors"
        >
          {{ link.label }}
        </a>
        <a 
          href="#contact" 
          @click="isOpen = false" 
          class="px-12 py-4 rounded-full bg-primary text-surface font-bold hover:scale-105 active:scale-95 transition-all shadow-glow-primary"
        >
          Let's Talk
        </a>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { Menu as MenuIcon, X as XIcon } from 'lucide-vue-next'

const isOpen = ref(false)
const scrolled = ref(false)

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
]

const handleScroll = () => {
  scrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
