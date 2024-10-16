import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Tags.vue'),
    },
    {
      path: '/tags',
      name: 'tags',
      component: () => import('../views/Tags.vue'),
    },
  ],
});

export default router;
