import { createRouter, createWebHistory } from 'vue-router'
import NotFoundView from '../views/NotFoundView.vue'
import AboutUs from '../views/AboutUs.vue'
import DetailsView from '../views/DetailsView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('../views/HomeView.vue')
        },
        {
            path: '/aboutus',
            name: 'about',
            component: AboutUs
        },
        {
            path: '/recipes/:id',
            name: 'recipes',
            component: DetailsView,
            props: true
        },
        {
            path: '/results',
            name: 'results',
            component: () => import('../views/ResultsView.vue'),
            props: true
        },
        {
            path: '/recommended',
            name: 'recommended',
            component: () => import('../views/RecommendedView.vue'),
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
