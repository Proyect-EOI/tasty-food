import { createRouter, createWebHistory } from 'vue-router'
import DetailsView from '../views/DetailsView.vue'
import HomeView from '../views/HomeView.vue'
import ResultsView from '../views/ResultsView.vue'
import NotFoundView from '../views/NotFoundView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('../views/HomeView.vue')
        },
        {
            path: '/recipes/:id',
            name: 'recipes',
            component: () => import('../views/DetailsView.vue'),

        },
        {
            path: '/results',
            name: 'results',
            component: () => import('../views/ResultsView.vue'),
            props: true
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: NotFoundView
        }
    ]
})

export default router
