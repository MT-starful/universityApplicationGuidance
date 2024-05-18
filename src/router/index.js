import { createRouter, createWebHashHistory } from 'vue-router'
import constant from "@/constant/constant.js";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [{
    path: '/',
    redirect: `/${constant.tabBar.DATA}`,
    children: [
      {
        path: `/${constant.tabBar.DESCRIPTION}`,
        name: constant.tabBar.DESCRIPTION,
        component: () => import('@/views/productionDescription.vue'),
      },
      {
        path: `/${constant.tabBar.DATA}`,
        name: constant.tabBar.DATA,
        component: () => import('@/views/coreData.vue'),
        redirect: `/${constant.tabBar.DATA}/filingLineSearch`,
        children: [
          {
            path: `/${constant.tabBar.DATA}/filingLineSearch`,
            name: 'filingLineSearch',
            component: () => import('@/views/data/filingLineSearch.vue')
          },
          {
            path: `/${constant.tabBar.DATA}/filingLineView`,
            name: 'filingLineView',
            component: () => import('@/views/data/filingLineView.vue')
          },
        ],
      },
      {
        path: `/${constant.tabBar.NEWS}`,
        name: constant.tabBar.NEWS,
        component: () => import('@/views/officialNews.vue'),
      },
      {
        path: `/${constant.tabBar.MATERIAL}`,
        name: constant.tabBar.MATERIAL,
        component: () => import('@/views/coachingMaterial.vue'),
      },
    ]
  }]
});

export default router
