import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [{
    path: '/',
    name: 'home',
    component: () => import('@/views/homePage.vue'),
    redirect: '/collegeApplicationGuidance/filingLineSearch',
    children: [
      {
        path: '/collegeApplicationGuidance/filingLineSearch',
        name: 'filingLineSearch',
        component: () => import('@/views/filingLineSearch.vue'),
      },
    ]
  }]
});

export default router
