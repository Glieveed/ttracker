import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const apiProtocol = 'http'
const apiDomen = 'localhost'
const apiPort = 8081
const apiUrl = `${apiProtocol}://${apiDomen}:${apiPort}`


export default new Vuex.Store({
  state: {
    oldColumnIndex: null,
    oldCardIndex: null,
    newColumnIndex: null,
    gridColumns: [],
    // gridColumns: [
    //   {
    //     id: 1,
    //     name: 'Планы/Идеи',
    //     cards: [
    //       {
    //         id: 1,
    //         title: 'Title 1',
    //         description: 'Description 1'
    //       },
    //       {
    //         id: 2,
    //         title: 'Title 2',
    //         description: 'Description 2'
    //       },
    //       {
    //         id: 3,
    //         title: 'Title 3',
    //         description: 'Description 3'
    //       }
    //     ]
    //   },
    //   {
    //     name: 'Очередь в работу',
    //     id: 2,
    //     cards: [
    //       {
    //         id: 4,
    //         title: 'Title 1',
    //         description: 'Description 1'
    //       }
    //     ]
    //   },
    //   {
    //     name: 'В работе',
    //     id: 3,
    //     cards: [
    //       {
    //         id: 5,
    //         title: 'Title 1',
    //         description: 'Description 1'
    //       }
    //     ]
    //   }
    // ],
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
    },
    dragOverHandler(state, payload) {
      console.log('OVER: ' + payload.indexColumn)
    },
    dragLeaveHandler(state, payload) {
      console.log('LEAVE: ' + payload.indexColumn)
    },
    dragEndHandler(state, payload) {
      let targetCard = payload.currentCard
      let targetOldCardIndex = state.oldCardIndex
      console.log(targetOldCardIndex)
      state.gridColumns[state.oldColumnIndex].cards.splice(targetOldCardIndex, 1)
      state.gridColumns[state.newColumnIndex].cards.push(targetCard)
    },
    dropedHandler(state, payload) {
      state.newColumnIndex = payload.indexColumn
      console.log('DROPED: ' + payload.indexColumn)
    },
  },
  actions: {
    getColumns(context, payload) {
      axios.get(apiUrl + '/board').then((response) => {
        console.log(response.data)
        if (response.data.success) {
          context.state.gridColumns = response.data.boardData
        } else {
          context.state.gridColumns = []
        }

        return context.state.gridColumns
      })
    },
    addNewCardHandler(context, payload) {
      let allColumns = context.state.gridColumns
      let allCardsIds = []
      let maxCardId
      allColumns.forEach((item) => {
       item.cards.forEach((item) => {
         allCardsIds.push(item.id)
        })
      })

      maxCardId = Math.max.apply(null, allCardsIds) + 1
      payload.newCard.id = maxCardId

      axios.post(apiUrl + '/board/addCard', {newCard: payload.newCard, toColumn: payload.column, toColumnIndex: payload.indexColumn}).then((response) => {
        context.state.gridColumns = response.data.boardData
      })
      //context.state.gridColumns[payload.indexColumn].cards.push(payload.newCard)
    },
    addNewColumnHandler(context, payload) {
      let currentColumns = context.state.gridColumns
      let currentColumnsLastIndex = currentColumns[currentColumns.length - 1] ? parseInt(currentColumns[currentColumns.length - 1].id) + 1 : 0 
      axios.post(apiUrl + '/board/addColumn', {
        column: {
          name: payload.columnName, 
          id: currentColumnsLastIndex, 
          cards: []
        }
      }).then((response) => {
        if (response.data.success) {
          context.state.gridColumns = response.data.boardData
          currentColumnsLastIndex++
        }
      })
      //context.state.gridColumns.push({ name: payload.columnName, cards: []})
    }
  }
})
