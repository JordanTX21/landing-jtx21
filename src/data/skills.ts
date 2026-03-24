import { 
  Server as ServerIcon, 
  Layout as LayoutIcon, 
  Smartphone as SmartphoneIcon, 
  Wrench as WrenchIcon
} from 'lucide-vue-next'
import type { SkillCategory } from '@/types'

export const skills: SkillCategory[] = [
  {
    name: 'Backend & APIs',
    icon: ServerIcon,
    items: [
      { name: 'Laravel', desc: 'Modern & 5.8 Legacy, Eloquent ORM' },
      { name: 'REST APIs Secured', desc: 'Tokens, Parameter Masking' },
      { name: 'Architecture', desc: 'Services, Repositories, Clean Code' },
      { name: 'ERPNext / Frappe', desc: 'Custom Business Logic' },
    ]
  },
  {
    name: 'Frontend',
    icon: LayoutIcon,
    items: [
      { name: 'Vue 3 Ecosystem', desc: 'Composition API, Pinia, Vue Router' },
      { name: 'Vue 2 Legacy', desc: 'Options API, Vuex' },
      { name: 'TailwindCSS', desc: 'Atomic & Responsive Design' },
      { name: 'Forms & State', desc: 'Vee Validate, Session/Cookies Sync' },
    ]
  },
  {
    name: 'Mobile',
    icon: SmartphoneIcon,
    items: [
      { name: 'Flutter Dev', desc: 'Hybrid App Development' },
      { name: 'Maintenance', desc: 'Depuration, Dependency Upgrades' },
      { name: 'Native Permissions', desc: 'Camera, Storage Dialogs' },
      { name: 'State Management', desc: 'Bloc, Provider' },
    ]
  },
  {
    name: 'Tools & Integrations',
    icon: WrenchIcon,
    items: [
      { name: 'Mapbox APIs', desc: 'Interactive Maps & Routing' },
      { name: 'Payment Gateways', desc: 'QR Code Payments, Hooks' },
      { name: 'WebSockets', desc: 'Real-time features' },
      { name: 'DevOps & Git', desc: 'Git Flow, Environment Variables' },
    ]
  }
]
