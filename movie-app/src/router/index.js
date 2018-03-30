import Vue from 'vue'
import Router from 'vue-router'
import Movies from '../components/Movies.vue'
import Favorites from '../components/Favorites.vue'
import Brochure from '../components/Brochure.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Movies',
      component: Movies,
      props: true,
    },
    {
      path: '/bro',
      name: 'Brochure',
      component: Brochure,
      // props: true,
    },
    {
      path: '/fav',
      name: 'Favorites',
      component: Favorites,
      props: true,
    }
  ]
})
