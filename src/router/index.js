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
        redirect: `/${constant.tabBar.DATA}/${constant.dataNavBar.FILLING_LINE}`,
        children: [
          // 投档线
          {
            path: `/${constant.tabBar.DATA}/${constant.dataNavBar.FILLING_LINE}`,
            redirect: `/${constant.tabBar.DATA}/${constant.dataNavBar.FILLING_LINE}/search`,
            children: [
              {
                path: `/${constant.tabBar.DATA}/${constant.dataNavBar.FILLING_LINE}/search`,
                name: 'filingLineSearch',
                component: () => import('@/views/data/fillingLine/search.vue')
              },
              {
                path: `/${constant.tabBar.DATA}/${constant.dataNavBar.FILLING_LINE}/view`,
                name: 'filingLineView',
                component: () => import('@/views/data/fillingLine/view.vue')
              },
            ],
          },
          // 大学专业库
          {
            path: `/${constant.tabBar.DATA}/${constant.dataNavBar.LIBRARY}`,
            redirect: `/${constant.tabBar.DATA}/${constant.dataNavBar.LIBRARY}/search`,
            children: [
              {
                path: `/${constant.tabBar.DATA}/${constant.dataNavBar.LIBRARY}/search`,
                name: 'librarySearch',
                component: () => import('@/views/data/library/search.vue')
              },
              {
                path: `/${constant.tabBar.DATA}/${constant.dataNavBar.LIBRARY}/universityView`,
                name: 'universityView',
                component: () => import('@/views/data/library/universityView.vue')
              },
              {
                path: `/${constant.tabBar.DATA}/${constant.dataNavBar.LIBRARY}/majorView`,
                name: 'majorView',
                component: () => import('@/views/data/library/majorView.vue')
              },
            ],
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
