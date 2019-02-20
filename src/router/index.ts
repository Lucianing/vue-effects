/**
 * @file   路由
 * @module
 * @author lzc
 * @date:   2019-02-20
 */
import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout/index.vue'

Vue.use(Router)

export const routes = [
  {
    path: '/',
    name: 'home',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'about',
        component: () => import('@/views/About.vue'),
        meta: { title: '光晕按钮' }
      }
    ]
  }
]

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});
