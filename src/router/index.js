import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', name: 'login', component: () => import('../authencation/LoginView.vue') },
    {
      path: '/admin-dashboard',
      name: 'admin-dashboard',
      component: () => import('../pages/AdminDashboard.vue'),
    },
    { path: '/records', name: 'records', component: () => import('../pages/RecordsView.vue') },
    { path: '/officers', name: 'officers', component: () => import('../pages/OfficersView.vue') },
    {
      path: '/activities',
      name: 'activities',
      component: () => import('../pages/AdminActivityManagement.vue'),
    },
    {
      path: '/user-dashboard',
      name: 'user-dashboard',
      component: () => import('../pages/UserDashboard.vue'),
    },
  ],
})

export default router
