import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NestedComponentView from '@/views/NestedComponentView.vue'
import CommunicationView from '@/views/CommunicationView.vue'
import CommunicationView2 from '@/views/CommunicationView2.vue'
import CommunicationView3 from '@/views/CommunicationView3.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/nested',
    name: 'nested',
    component: NestedComponentView
  },
  {
    path: '/communication',
    name: 'communication',
    component: CommunicationView
  },
  {
    path: '/communication3',
    name: 'communication3',
    component: CommunicationView3
  },
  {
    path: '/about2',
    name: 'about2',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView2.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
