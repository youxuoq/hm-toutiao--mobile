import Vue from 'vue'
import Vuex from 'vuex'
import { setToken, getToken } from '@/utils/auth.js'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userToken: getToken()
  },
  mutations: {
    setUserToken (state, data) {
      setToken(data)
      state.userToken = data
    }
  },
  actions: {},
  modules: {}
})
