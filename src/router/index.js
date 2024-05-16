import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [{
    path: '/',
    name: 'home',
    component: () => import('@/views/homePage.vue'),
    redirect: '/filingLineSearch',
    children: [
      {
        path: '/filingLineSearch',
        name: 'filingLineSearch',
        component: () => import('@/views/filingLineSearch.vue'),
      },
      {
        path: '/filingLineView',
        name: 'filingLineView',
        component: () => import('@/views/filingLineView.vue'),
      },
    ]
  }]
});

export default router
