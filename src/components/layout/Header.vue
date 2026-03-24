<template>
  <header class="fixed top-0 w-full z-50 transition-all duration-300 glass" :class="{ 'py-4': !scrolled, 'py-2': scrolled }">
    <div class="container mx-auto px-6 lg:px-12 flex justify-between items-center">
      <router-link to="/" class="text-xl font-bold tracking-tighter text-white">
        J<span class="text-primary-500">TX</span>21
      </router-link>

      <!-- Desktop Nav -->
      <nav class="hidden md:flex gap-8 items-center text-sm font-medium">
        <a v-for="link in links" :key="link.href" :href="link.href" 
           class="text-slate-300 hover:text-primary-400 transition-colors">
          {{ link.label }}
        </a>
        <a href="#contact" class="px-5 py-2 rounded-full border border-primary-500/50 text-primary-400 hover:bg-primary-500/10 transition-all">
          Let's Talk
        </a>
      </nav>

      <!-- Mobile Nav Toggle -->
      <button @click="isOpen = !isOpen" class="md:hidden text-slate-300 hover:text-white">
        <MenuIcon v-if="!isOpen" class="w-6 h-6" />
        <XIcon v-else class="w-6 h-6" />
      </button>
    </div>

    <!-- Mobile Menu -->
    <div v-if="isOpen" class="md:hidden absolute top-full left-0 w-full glass border-t border-slate-800 flex flex-col items-center py-6 gap-6 shadow-xl">
      <a v-for="link in links" :key="link.href" :href="link.href" @click="isOpen = false"
         class="text-slate-300 hover:text-primary-400 font-medium text-lg">
        {{ link.label }}
      </a>
      <a href="#contact" @click="isOpen = false" class="px-6 py-2 rounded-full bg-primary-600 text-white font-medium hover:bg-primary-500 transition-colors mt-2">
        Let's Talk
      </a>
    </div>
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
  { label: 'Architecture', href: '#architecture' },
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
