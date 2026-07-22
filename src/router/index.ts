import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/episodes',
      name: 'episodes',
      component: () => import('../views/EpisodesView.vue'),
    },
    {
      path: '/episodes/:id',
      name: 'episode-detail',
      component: () => import('../views/EpisodeDetail.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
