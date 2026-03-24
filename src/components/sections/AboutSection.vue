<template>
  <section class="py-24 relative overflow-hidden">
    <div class="container mx-auto px-6 lg:px-12">
      <div class="max-w-3xl mx-auto">
        <h2 class="text-3xl md:text-5xl font-bold tracking-tight text-white mb-2">
          About <span class="text-slate-500">Me</span>
        </h2>
        <div class="w-16 h-1 bg-primary-500 rounded mb-10"></div>
        
        <div class="space-y-8 text-lg text-slate-400">
          <p class="leading-relaxed">
            {{ profileData.description }}
          </p>
          
          <div class="glass p-8 rounded-2xl border-l-4 border-l-primary-500">
            <h3 class="text-white text-xl font-semibold mb-4 flex items-center gap-3">
              <ShieldAlertIcon class="w-6 h-6 text-primary-500" />
              API-First Mindset
            </h3>
            <p>
              I specialize in secure REST API development, ensuring data protection through token-based decoupled authentication, parameter masking, and strict request validation. I believe in clean code, SOLID principles, and building systems that can safely scale.
            </p>
          </div>

          <p class="leading-relaxed">
            Beyond standard full-stack webs, I have deep experience integrating external services (Mapbox, payment gateways with QR, WebSockets, mailing), managing cross-platform sessions, and orchestrating comprehensive business logic within ERP systems like ERPNext/Frappe.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ShieldAlert as ShieldAlertIcon } from 'lucide-vue-next'
import { profileData } from '@/data/profile'
</script>
