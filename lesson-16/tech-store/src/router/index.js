import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/view/HomeView.vue'
import ProductsView from '@/view/ProductsView.vue'
import ContactsView from '@/view/ContactsView.vue'
import LoginView from '@/view/LoginView.vue'
import store from "@/store";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/products',
      name: 'products',
      component: ProductsView,
      meta: {
        requiredAuth: true
      }
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: ContactsView,
    },
  ],
})

// router.beforeEach(async (to) => {
//   if(to.meta?.requiredAuth) {
//     let isAuth = store.state.auth.user
//     if(!isAuth) isAuth = await store.dispatch('auth/loginWithCredential')
//     if(!isAuth) return {name:'login'}
//   }
// })

export default router
