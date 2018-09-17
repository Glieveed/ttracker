import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    oldColumnIndex: null,
    oldCardIndex: null,
    newColumnIndex: null,
    gridColumns: [
      {
        id: 1,
        name: 'Планы/Идеи',
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
        name: 'Очередь в работу',
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
        name: 'В работе',
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
    dragStartHandler(state, payload) {
      state.oldColumnIndex = payload.indexColumn
      state.oldCardIndex = payload.indexCard
      console.log('START: ' + payload.indexColumn)
      //console.log(`DROP OVER HANDLER: from-column: ${payload.fromColumn.id} -> to-column: ${payload.toColumn.id}\n -> CURRENT CARD ID ${payload.currentCard.id}`)
    },
    dragOverHandler(state, payload) {
      console.log('OVER: ' + payload.indexColumn)
      //console.log(`DROP OVER HANDLER: from-column: ${payload.fromColumn.id} -> to-column: ${payload.toColumn.id}\n -> CURRENT CARD ID ${payload.currentCard.id}`)
    },
    dragLeaveHandler(state, payload) {
      console.log('LEAVE: ' + payload.indexColumn)
      //console.log(`DROP LEAVE HANDLER: from-column: ${payload.fromColumn.id} -> to-column: ${payload.toColumn.id}\n -> LEAVED CARD ID ${payload.currentCard.id}`)
    },
    dragEndHandler(state, payload) {
      let targetCard = payload.currentCard
      let targetOldCardIndex = state.oldCardIndex
      console.log(targetOldCardIndex)
      state.gridColumns[state.oldColumnIndex].cards.splice(targetOldCardIndex, 1)
      state.gridColumns[state.newColumnIndex].cards.push(targetCard)
      //console.log(targetOldColumn, targetNewColumn, targetCard)
      //targetNewColumn.cards.push(targetCard)
      //console.log(state.oldColumnIndex, state.newColumnIndex)
      //console.log('END: ' +  payload.indexColumn)
      //console.log(`DROP OVER HANDLER: from-column: ${payload.fromColumn.id} -> to-column: ${payload.toColumn.id}\n -> CURRENT CARD ID ${payload.currentCard.id}`)
    },
    dropedHandler(state, payload) {
      state.newColumnIndex = payload.indexColumn
      console.log('DROPED: ' + payload.indexColumn)
      //console.log(`DROPED HANDLER: from-column: ${payload.fromColumn.id} -> to-column: ${payload.toColumn.id}\n -> DROPED CARD ID ${payload.currentCard.id}`)
    },
  },
  actions: {
    addNewCardHandler(context, payload) {
      context.state.gridColumns[payload.indexColumn].cards.push(payload.newCard)
    },
    addNewColumnHandler(context, payload) {
      context.state.gridColumns.push({ name: payload.columnName, cards: []})
    }
  }
})
