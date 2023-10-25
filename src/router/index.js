import { createRouter, createWebHistory } from 'vue-router'
import DetailsView from '../views/DetailsView.vue'
import HomeView from '../views/HomeView.vue'
import ResultsView from '../views/ResultsView.vue'
import AboutUs from '../views/AboutUs.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/AboutUs',
            name: 'about',
            component: AboutUs
        },
        {
            path: '/recipes/:id',
            name: 'recipes',
            component: DetailsView
        },
        {
            path: '/results',
            name: 'results',
            component: ResultsView,
            props: true
        }
    ]
})

export default router
