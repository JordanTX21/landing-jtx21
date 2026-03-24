import type { Experience } from '@/types'

export const experiences: Experience[] = [
  {
    title: 'Senior Backend Engineer & Full Stack',
    company: 'Logistics & Mapping System',
    date: '2023 - Present',
    description: 'Developed critical backend infrastructure with an API-first mindset. Integrated dynamic mapping and routing for an enterprise application while refactoring monolithic legacy code.',
    highlights: [
      'Engineered Mapbox integrations for real-time order tracking and warehouse routing logic.',
      'Secured REST endpoints via decoupled authentication and strict input parameter masking.',
      'Migrated complex legacy Vue 2 UI into manageable Vue 3 Composition API components.'
    ],
    tags: ['Laravel 10', 'Vue 3', 'Pinia', 'Mapbox', 'REST']
  },
  {
    title: 'Full Stack & Mobile Developer',
    company: 'Fintech / ERP Implementations',
    date: '2021 - 2023',
    description: 'Architected robust custom flows inside ERPNext and built hybrid apps with Flutter to handle field operations, ensuring total syncing and accurate payment generation.',
    highlights: [
      'Extended Frappe/ERPNext endpoints for custom business logic, bypassing standard monolithic views.',
      'Created a Flutter Hybrid app that handled hardware permissions safely and generated QR payment codes.',
      'Implemented robust form handling on frontend using Vee Validate with complex async rules.'
    ],
    tags: ['ERPNext', 'Python/Frappe', 'Flutter', 'WebSockets', 'Vue 2']
  },
  {
    title: 'Backend Developer',
    company: 'Legacy System Modernization',
    date: '2019 - 2021',
    description: 'Maintained and scaled high-traffic systems running on older frameworks while establishing clean pathways to modern standards.',
    highlights: [
      'Mastered Laravel 5.8 Query Builder and Eloquent to optimize complex aggregations by 40%.',
      'Configured secure cross-platform session sharing using encrypted cookies.',
      'Established foundational email templates and mailing services via queues.'
    ],
    tags: ['Laravel 5.8', 'MySQL', 'Queues', 'Session Mgmt']
  }
]
