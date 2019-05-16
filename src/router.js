import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Tableau from './views/Tableau.vue'
import MyAddresses from './components/MyAddresses.vue'
import Liste from './components/Liste.vue'
import Glisser from './components/Glisser.vue'
import Sweeny from './components/Sweeny.vue'
import Vfor from './components/Vfor.vue'
import API from './components/API.vue'



Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/tableau',
      name: 'Tableau',
      component: Tableau
    },
    {
      path: '/myaddresses',
      name: 'MyAddresses',
      component: MyAddresses
    },
    {
      path: '/liste',
      name: 'Liste',
      component: Liste
    },
    {
      path: '/glisser',
      name: 'Glisser',
      component: Glisser
    },
    {
      path:'/sweeny',
      name: 'Sweeny',
      component: Sweeny
    },
    {
      path:'/vfor',
      name: 'Vfor',
      component: Vfor
    },
    {
      path:'/api',
      name: 'API',
      component: API
    },
  ]
})
