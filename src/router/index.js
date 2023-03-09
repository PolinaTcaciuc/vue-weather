import { createRouter, createWebHistory } from 'vue-router'

const routes = [

  {
    path: '/',
    component: () => import('@/pages/WeatherStartPage.vue')
  },
  {
    path: '/weather',
    component: () => import('@/pages/WeatherFetchPage.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
