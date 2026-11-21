import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { content, type Locale } from '@/i18n/content'

export function useContent() {
  const route = useRoute()
  const locale = computed<Locale>(() => (route.meta.locale as Locale) || 'en')
  const t = computed(() => content[locale.value])
  const otherPath = computed(() => (locale.value === 'en' ? '/es/' : '/'))
  return { locale, t, otherPath }
}
