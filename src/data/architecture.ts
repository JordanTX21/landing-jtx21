import { 
  Shield as ShieldIcon, 
  Layers as LayersIcon, 
  Activity as ActivityIcon, 
  Code as CodeIcon 
} from 'lucide-vue-next'

export interface ArchitecturePractice {
  title: string
  description: string
  icon: any
  color: string
  snippet: string
}

export const practices: ArchitecturePractice[] = [
  {
    title: 'Clean API First',
    description: 'Decoupling Laravel logic into FormRequests, Service Classes, and Resources. No fat controllers. Data formatting separated from DB logic.',
    icon: CodeIcon,
    color: 'border-l-blue-500',
    snippet: 'public function store(UserRequest $req, UserService $service)'
  },
  {
    title: 'Data Security',
    description: 'Masking sensitive IDs via Hashids, strict OAuth2 token validation, and robust middleware pipelines to sanitize headers and payloads.',
    icon: ShieldIcon,
    color: 'border-l-primary-500',
    snippet: '$app->middleware([MaskPayloads::class]);'
  },
  {
    title: 'Frontend State Management',
    description: 'Using Pinia + Composition API to orchestrate UI reactivity asynchronously. Implementing skeleton loaders and debounced inputs naturally.',
    icon: ActivityIcon,
    color: 'border-l-cyan-400',
    snippet: 'const { execute, isLoading } = useAsyncState(fetchStats, [])'
  },
  {
    title: 'Scalable Vue Architecture',
    description: 'Grouping code by domain/feature rather than generic types. Reusing logic across components with specialized composables.',
    icon: LayersIcon,
    color: 'border-l-emerald-500',
    snippet: 'import { useMapboxRouter } from "@/composables/maps"'
  }
]
