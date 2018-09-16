import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    gridColumns: [
      {
        id: 1,
        cards: [
          {
            id: 1,
            title: 'Title 1',
            description: 'Description 1'
          },
          {
            id: 2,
            title: 'Title 2',
            description: 'Description 2'
          },
          {
            id: 3,
            title: 'Title 3',
            description: 'Description 3'
          }
        ]
      },
      {
        id: 2,
        cards: [
          {
            id: 4,
            title: 'Title 1',
            description: 'Description 1'
          }
        ]
      },
      {
        id: 3,
        cards: [
          {
            id: 5,
            title: 'Title 1',
            description: 'Description 1'
          }
        ]
      }
    ],
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
    changeColumn(state, payload) {
      const card = payload.card
      const from = payload.fromColumn
      const to = payload.toColumn
    }
  },
  actions: {

  }
})
