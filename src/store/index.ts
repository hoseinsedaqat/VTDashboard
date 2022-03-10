import Vue from 'vue'
import Vuex from 'vuex'
import { RootState } from './type'
import { task } from './module/Task'

Vue.use(Vuex)

export default new Vuex.Store<RootState>({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    task
  }
})
