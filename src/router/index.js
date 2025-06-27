import { createMemoryHistory, createRouter,createWebHistory } from 'vue-router'
import Dev from '../pages/Dev.vue'

const routes = [
    {
        path: '/',
        name: 'Index',
        component: Dev
    },
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})

export default router