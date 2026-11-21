<template>
  <div class="min-h-screen flex flex-col selection:bg-primary/30 selection:text-primary">
    <Header />
    <main class="flex-grow">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useHead } from '@unhead/vue'
import Header from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue'
import { useContent } from '@/composables/useContent'
import { profileData } from '@/data/profile'

const { locale, t } = useContent()

const enUrl = profileData.siteUrl
const esUrl = `${profileData.siteUrl}es/`
const canonical = computed(() => (locale.value === 'es' ? esUrl : enUrl))
const image = `${profileData.siteUrl}profile.png`

useHead({
  htmlAttrs: { lang: computed(() => locale.value) },
  title: computed(() => t.value.meta.title),
  meta: [
    { name: 'description', content: computed(() => t.value.meta.description) },
    { property: 'og:type', content: 'profile' },
    { property: 'og:title', content: computed(() => t.value.meta.title) },
    { property: 'og:description', content: computed(() => t.value.meta.description) },
    { property: 'og:url', content: canonical },
    { property: 'og:image', content: image },
    { property: 'og:locale', content: computed(() => t.value.meta.ogLocale) },
    { name: 'twitter:card', content: 'summary' },
  ],
  link: [
    { rel: 'canonical', href: canonical },
    { rel: 'alternate', hreflang: 'en', href: enUrl },
    { rel: 'alternate', hreflang: 'es', href: esUrl },
    { rel: 'alternate', hreflang: 'x-default', href: enUrl },
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: profileData.name,
        jobTitle: 'Tech Lead · Backend Engineer',
        url: profileData.siteUrl,
        sameAs: [profileData.github, profileData.linkedin],
        alumniOf: 'Universidad Nacional Tecnológica de Lima Sur',
        knowsAbout: ['Laravel', 'PHP', 'Vue.js', 'Software architecture', 'DevOps', 'Flutter', 'AI'],
      }),
    },
  ],
})
</script>
