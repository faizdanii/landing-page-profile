import { createRouter, createWebHistory } from 'vue-router'
import MainLandingProfile from '@/landing-profile/MainLandingProfile.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'portofolio',
      component: MainLandingProfile,
    },
  ],
})

export default router
