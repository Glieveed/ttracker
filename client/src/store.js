import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    mainNavigationGroups: {
      main: {
        name: 'Основное',
        icon: 'label',
        items: []
      },
      info: {
        name: 'Информация',
        icon: 'settings',
        items: []
      }
    }
  },
  mutations: {

  },
  actions: {

  }
})
