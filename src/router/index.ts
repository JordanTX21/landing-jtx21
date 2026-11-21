import type { RouteRecordRaw, RouterScrollBehavior } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

export const routes: RouteRecordRaw[] = [
  { path: '/', name: 'home', component: HomeView, meta: { locale: 'en' } },
  { path: '/es/', name: 'home-es', component: HomeView, meta: { locale: 'es' } },
]

export const scrollBehavior: RouterScrollBehavior = (to, _, savedPosition) => {
  if (to.hash) {
    return { el: to.hash, behavior: 'smooth' }
  }
  return savedPosition || { top: 0 }
}
