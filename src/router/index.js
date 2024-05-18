import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [{
    path: '/',
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
