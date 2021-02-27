import Vue from 'vue'
import Vuex from 'vuex'

import { alert } from './alert.module';
import { authentication } from './authentication.module';
import { users } from './users.module';
import { rated } from './rated.module';
import { favourite } from './favourite.module';
import { movie } from './movie.module';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    alert,
    authentication,
    users,
    movie,
    rated,
    favourite
  }
})
