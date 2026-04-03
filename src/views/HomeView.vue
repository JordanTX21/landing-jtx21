<template>
  <div class="flex flex-col gap-32 pb-32">
    <HeroSection id="home" />
    <AboutSection id="about" />
    <SkillsSection id="skills" />
    <ExperienceSection id="experience" />
    <EducationSection id="education" />
    <ArchitectureSection id="architecture" />
    <ContactSection id="contact" />
  </div>
</template>

<script setup lang="ts">
import HeroSection from '@/components/sections/HeroSection.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
import SkillsSection from '@/components/sections/SkillsSection.vue'
import ExperienceSection from '@/components/sections/ExperienceSection.vue'
import EducationSection from '@/components/sections/EducationSection.vue'
import ArchitectureSection from '@/components/sections/ArchitectureSection.vue'
import ContactSection from '@/components/sections/ContactSection.vue'
</script>
