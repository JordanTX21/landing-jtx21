<template>
  <div class="min-h-screen flex flex-col selection:bg-primary-500/30 selection:text-primary-100">
    <!-- Navbar could go here if we want a global nav -->
    <Header />
    <main class="flex-grow">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue'
</script>
