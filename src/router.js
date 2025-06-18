import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/store/auth'
import { useConnectionStore } from '@/store/connection'

import Home from '@/views/Home.vue'
import Blockchain from '@/views/Blockchain.vue'
import MyWallet from '@/views/MyWallet.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  {
    path: '/blockchain',
    name: 'Blockchain',
    component: Blockchain,
    meta: { requiresNode: true }
  },
  {
    path: '/mi-wallet',
    name: 'MyWallet',
    component: MyWallet,
    meta: { requiresAuth: true, requiresNode: true }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from) => {
  const auth = useAuthStore()
  const connection = useConnectionStore()
  if (to.meta.requiresAuth && !auth.isAuthenticated) {
    return { name: 'Home' }
  }
  if (to.meta.requiresNode && !connection.isConnected) {
    return { name: 'Home' }
  }
})

export default router
