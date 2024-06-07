import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'
import Shows from '@/views/Shows.vue'
import Seats from '@/views/Seats.vue'
import BillingView from '@/views/billingView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about/',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path:'/login/',
      name:'login',
      component:LoginView
    },
    {
      path:'/register/',
      name:'register',
      component:RegisterView
    },
    {
      path:'/shows/:id/',
      name:'shows',
      component:Shows
    },
    {
      path:'/shows/:id/seats/',
      name:'seats',
      component:Seats
    },
    {
      path:'/billing/:id',
      name:'billing',
      component:BillingView,
      meta: { requiresAuth: true } //protected route
    }
  ]
});
router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('accessToken'); // Check if JWT token exists in local storage
  if (to.matched.some(record => record.meta.requiresAuth) && !isAuthenticated) {
    next({
      path: '/login',
      query: { redirect: to.fullPath } // Save the original route in query params
    });
  } else {
    next(); // Proceed to route
  }
});

export default router
