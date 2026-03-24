import { ref, onMounted, onUnmounted } from 'vue'

export function useScroll() {
  const scrolled = ref(false)
  const isVisible = ref(false)

  const handleScroll = () => {
    scrolled.value = window.scrollY > 50
    // Optionally check visibility offsets here
    isVisible.value = window.scrollY > window.innerHeight / 2
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })

  return {
    scrolled,
    isVisible
  }
}
