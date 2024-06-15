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
        redirect: `/${constant.tabBar.NEWS}/${constant.newsNavBar.QUERY_SYSTEM}`,
        children: [
          // 查询系统
          {
            path: `/${constant.tabBar.NEWS}/${constant.newsNavBar.QUERY_SYSTEM}`,
            name: 'querySystem',
            component: () => import('@/views/news/querySystem.vue'),
          },
          // 填报辅导
          {
            path: `/${constant.tabBar.NEWS}/${constant.newsNavBar.GUIDANCE}`,
            name: 'applicationGuidance',
            component: () => import('@/views/news/guidance.vue'),
          },
          // 讯息消息
          {
            path: `/${constant.tabBar.NEWS}/${constant.newsNavBar.MESSAGE}`,
            name: 'applicationMessage',
            component: () => import('@/views/news/message.vue'),
          }
        ],
      },
      {
        path: `/${constant.tabBar.MATERIAL}`,
        name: constant.tabBar.MATERIAL,
        component: () => import('@/views/coachingMaterial.vue'),
        redirect: `/${constant.tabBar.MATERIAL}/${constant.materialNavBar.PROFILE}`,
        children: [
          // 辅导资料
          {
            path: `/${constant.tabBar.MATERIAL}/${constant.materialNavBar.PROFILE}`,
            children: [
              {
                path: `/${constant.tabBar.MATERIAL}/${constant.materialNavBar.PROFILE}`,
                name: 'profileMaterial',
                component: () => import('@/views/material/profile/profile.vue'),
              },
              {
                path: `/${constant.tabBar.MATERIAL}/${constant.materialNavBar.PROFILE}/${constant.profile.book}`,
                name: 'profileBook',
                component: () => import('@/views/material/profile/book.vue'),
              },
              {
                path: `/${constant.tabBar.MATERIAL}/${constant.materialNavBar.PROFILE}/${constant.profile.flow}`,
                name: 'admissionFlow',
                component: () => import('@/views/material/profile/flow.vue'),
              },
            ],
          },
          // 推荐视频
          {
            path: `/${constant.tabBar.MATERIAL}/${constant.materialNavBar.VIDEO}`,
            name: 'videoMaterial',
            component: () => import('@/views/material/video.vue'),
          },
          // 推荐网站
          {
            path: `/${constant.tabBar.MATERIAL}/${constant.materialNavBar.WEBSITE}`,
            name: 'websiteMaterial',
            component: () => import('@/views/material/website.vue'),
          },
        ]
      },
    ]
  }]
});

export default router
