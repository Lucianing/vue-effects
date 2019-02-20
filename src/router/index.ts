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
    name: 'layout',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'about',
        component: () => import('@/views/光晕按钮.vue'),
        meta: { title: '光晕按钮' }
      },
      {
        path: 'pulse',
        name: 'pulse',
        component: () => import('@/views/圆形脉冲波.vue'),
        meta: { title: '圆形脉冲波' }
      },
      {
        path: 'hover',
        name: 'hover',
        component: () => import('@/views/菜单悬停动效.vue'),
        meta: { title: '菜单悬停动效' }
      },
      {
        path: 'hover2',
        name: 'hover2',
        component: () => import('@/views/图片塌缩效应.vue'),
        meta: { title: '图片塌缩效应' }
      },
      {
        path: 'hover3',
        name: 'hover3',
        component: () => import('@/views/中间部分翻转.vue'),
        meta: { title: '中间部分翻转' }
      },
      {
        path: 'hover4',
        name: 'hover4',
        component: () => import('@/views/运动光晕效果.vue'),
        meta: { title: '运动光晕效果' }
      },
    ]
  }
]

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});
