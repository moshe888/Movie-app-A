import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue' 
import MovieDetailsView from '../views/MovieDetailsView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/movie/:id',
    name: 'movie-details',
    component: MovieDetailsView,
    props: true
  },
  {
  path: '/favorites',
  name: 'Favorites',
  component: () => import('../views/FavoritesView.vue')
}

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
