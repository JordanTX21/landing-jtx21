import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useProfileStore = defineStore('profile', () => {
  const isAvailableForWork = ref(true)
  const yearsOfExperience = ref(5) // Just a placeholder, adjust based on your real number

  function toggleAvailability() {
    isAvailableForWork.value = !isAvailableForWork.value
  }

  return { isAvailableForWork, yearsOfExperience, toggleAvailability }
})
