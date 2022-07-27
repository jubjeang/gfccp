import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../views/Dashboard.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/',
    name: 'Login',
    component: () => import('../components/Login.vue')
  },
  {
    path: '/main',
    name: 'Main',
    component: () => import('../components/Main.vue')
  },
  {
    path: '/listorder',
    name: 'ListOrder',
    component: () => import('../components/ListOrder.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  // history: createWebHistory(process.env.BASE_URL),  
  routes
})

export default router
