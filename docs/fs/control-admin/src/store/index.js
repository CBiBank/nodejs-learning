import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import app from './modules/app'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app
  },
  getters,
  plugins: [createPersistedState()]
})

export default store
