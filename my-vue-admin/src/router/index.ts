import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/login', component: () => import('@/views/login.vue') },
    { 
      path: '/', component: () => import('@/layout/index.vue'),
      children: [
        { path: '', component: () => import('@/views/home.vue') }
      ]
    }
  ]
})

export default router