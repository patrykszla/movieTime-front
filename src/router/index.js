import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import SearchFilm from '../views/SearchFilm.vue';
import LoginPage from '../views/LoginPage.vue';
import Registration from '../views/Registration.vue';
import SettingsPage from '../views/SettingsPage.vue';
import FilmDetails from '../views/FilmDetails.vue';
import FavoriteTitles from '../views/FavoriteTitles.vue';
import AddedByYou from '../views/AddedByYou.vue';
import RatedTitles from '../views/RatedTitles.vue';
import AddNewFilm from "../views/AddNewFilm.vue";
import YourAccount from "../views/YourAccount.vue";
import StartingPage from "../views/StartingPage.vue";
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'StartingPage',
    component: StartingPage
  },

  {
    path: '/search',
    name: 'SearchFilm',
    component: SearchFilm
  },
  {
    path: '/login',
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
  },
  {
    path: '/favoritetitles',
    name: 'FavoriteTitles',
    component: FavoriteTitles
  },
  {
    path: '/added',
    name: 'AddedByYou',
    component: AddedByYou
  },
  {
    path: '/rated',
    name: 'RatedTitles',
    component: RatedTitles
  },
  {
    path: '/addnewfilm',
    name: 'AddNewFilm',
    component: AddNewFilm
  },
  {
    path: '/youraccount',
    name: 'YourAccount',
    component: YourAccount
  }, 
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  
  //if not found redirect to home
  {
    path: '*',
    redirect: '/'
  }
]

export const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {

  const publicPages = ['/login', '/registration', '/'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');

  if (authRequired && !loggedIn) {
    return next('/login');
  }
  if(loggedIn){
    if(publicPages.includes(to.path) && to.path != '/'){
      return next('/');
    }
  }

  next();
});

// export default router
