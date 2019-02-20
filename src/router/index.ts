/**
 * @file   路由
 * @module
 * @author lzc
 * @date:   2019-02-20
 */
import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout/index.vue'
const path = require('path')
Vue.use(Router)

const requireAll = (requireContext: any) => {
  const result = requireContext.keys().map(requireContext)
  console.log('----->', result)
  return result
}
const req = require.context('../views', false, /\.vue$/)
requireAll(req)

const routes = [
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
      {
        path: 'hover5',
        name: 'hover5',
        component: () => import('@/views/呼吸灯效果.vue'),
        meta: { title: '呼吸灯效果' }
      },
      {
        path: 'hover6',
        name: 'hover6',
        component: () => import('@/views/镭射线条.vue'),
        meta: { title: '镭射线条' }
      },
      {
        path: 'hover7',
        name: 'hover7',
        component: () => import('@/views/查看文字效果.vue'),
        meta: { title: '查看文字效果' }
      },
      {
        path: 'hover8',
        name: 'hover8',
        component: () => import('@/views/交错滑动线条.vue'),
        meta: { title: '交错滑动线条' }
      },
      // 加载线条
      {
        path: 'hover8',
        name: 'hover8',
        component: () => import('@/views/加载线条.vue'),
        meta: { title: '加载线条' }
      }
    ]
  }
]

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});
