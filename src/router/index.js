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
    path: '/dayliactivity',
    name: 'DayliActivity',
    component: () => import('../views/DayliActivity.vue')
  },
  {
    path: '/approvelist',
    name: 'ApproveList',
    component: () => import('../views/ApproveList.vue')
  },
  {
    path: '/reportinv',
    name: 'ReportInv',
    component: () => import('../views/ReportInv.vue')
  },  
  {
    path: '/approvenlist',
    name: 'ApproveNList',
    component: () => import('../views/ApproveNList.vue')
  },    
  {
    path: '/approveprocess',
    name: 'ApproveProcess',
    component: () => import('../views/ApproveProcess.vue')
  },     
]

const router = createRouter({
  history: createWebHistory(),
  // history: createWebHistory(process.env.BASE_URL),  
  routes
})

export default router
