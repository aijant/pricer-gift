import Vue from 'vue'
import Vuex from 'vuex'

import questions from './modules/questions'
import services from './modules/servises'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    questions,
    services
  }
})
