import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SearchFilm from '../views/SearchFilm.vue';
import LoginPage from '../views/LoginPage.vue';
import Registration from '../views/Registration.vue';
import SettingsPage from '../views/SettingsPage.vue'
import FilmDetails from '../views/FilmDetails.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/searchfilm',
    name: 'SearchFilm',
    component: SearchFilm
  },
  {
    path: '/loginpage',
    name: 'LoginPage',
    component: LoginPage
  },
  {
    path: '/registration',
    name: 'Registration',
    component: Registration
  },
  { 
  path: '/settings',
  name: 'SettingsPage',
  component: SettingsPage
  },
  {
    path: '/filmdetails',
    name: 'FilmDetails',
    component: FilmDetails
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
