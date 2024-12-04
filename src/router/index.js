import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
     {
      path:'/',
      name: 'default',
      component: ()=> import('@/layout/AppLayout.vue'),
      children:[
        {
          path:'/home',
          name: 'home',
          component: () => import('@/views/Fruits/Home.vue')
        },
        {
          path:'sidebar',
          name: 'items',
          component: () => import('@/layout/Sidebar.vue')
        }
      ]
    }
  ]
})

export default router
