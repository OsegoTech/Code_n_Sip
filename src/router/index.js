import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RegisteredView from '../views/RegisteredView.vue'
import SelectedAttendees from '../views/SelectedAttendees.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/members',
      name: 'members',
      component: RegisteredView
    },
    {
      path: '/selected',
      name: 'selected',
      component: SelectedAttendees
    }
  ]
})

export default router
