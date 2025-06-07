import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/store/auth'

import Home from '@/views/Home.vue'
// import Admin from '@/views/Admin.vue'
// import Unauthorized from '@/views/Unauthorized.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  // {
  //   path: '/admin',
  //   name: 'Admin',
  //   component: Admin,
  //   meta: { requiresAuth: true, role: 'admin' }
  // },
  // { path: '/unauthorized', name: 'Unauthorized', component: Unauthorized },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from) => {
  const auth = useAuthStore()
  if (to.meta.requiresAuth && !auth.isAuthenticated) {
    return { name: 'Home' }
  }
  // if (to.meta.role && auth.user?.role !== to.meta.role) {
  //   return { name: 'Unauthorized' }
  // }
})

export default router
