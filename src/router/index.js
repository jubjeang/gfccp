import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/main',
    name: 'Main',
    component: () => import('../views/Main.vue')
  },
  {
    path: '/listorder',
    name: 'ListOrder',
    component: () => import('../views/ListOrder.vue')
  },
  {
    path: '/ordertracking',
    name: 'OrderTracking',
    component: () => import('../views/OrderTracking.vue')
  },
  {
    path: '/inventorystatus',
    name: 'InventoryStatus',
    component: () => import('../views/InventoryStatus.vue')
  },
  {
    path: '/ordertrackingdet',
    name: 'OrderTrackingDet',
    component: () => import('../views/OrderTrackingDet.vue')
  },    
  {
    path: '/invhistorical',
    name: 'InvHistorical',
    component: () => import('../views/InvHistorical.vue')
  },
  {
    path: '/approvelist',
    name: 'ApproveList',
    component: () => import('../views/ApproveList.vue')
  },    
]

const router = createRouter({
  history: createWebHistory(),
  // history: createWebHistory(process.env.BASE_URL),  
  routes
})

export default router
