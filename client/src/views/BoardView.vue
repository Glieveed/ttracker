<template>
  <v-layout row nowrap class='columns-container'>
    <v-flex px-3 v-for='(column, indexColumn) in columns' class='board-column' :key='`column-${indexColumn}`'>
      <v-card color='#f0f0f0'>
        <v-card-title>
          <h3>{{ column.name }}</h3>
        </v-card-title>
      </v-card>
      <create-card-component :column='column' :indexColumn='indexColumn'></create-card-component>
      <v-flex column class='cards-list'>
        <drop class='drop' @drop.self='droped(column, indexColumn, ...arguments)' :class='{over: isOver}' @dragover.self='dragOver(column, indexColumn, ...arguments)'  @dragleave.self='dragLeave(column, indexColumn, ...arguments)'>
          <drag class='drag' v-for='(card, indexCard) in column.cards' drop-effect='move' :effect-allowed='["move"]' :key='`card-${indexCard}`'  @dragstart='dragStart(column, indexColumn, indexCard, ...arguments)'  @dragend='dragEnd(column, indexColumn, indexCard, ...arguments)' :transfer-data='{column, indexColumn, card}'>
            <card-component  :column='column' :card='card'></card-component>
          </drag>
        </drop>
      </v-flex>
    </v-flex>
    <v-flex fill-height>
      <create-column-component></create-column-component>
    </v-flex>
    <br>
    <v-flex>
    <pre style='height: 500px; overflow-y: auto;'>{{ columns }}</pre>
    </v-flex>
  </v-layout>
</template>
<script>

import CreateCardComponent from '../components/elements/CreateCardComponent.vue'
import CreateColumnComponent from '../components/elements/CreateColumnComponent.vue'
import CardComponent from '../components/elements/CardComponent.vue'

export default {
  name: 'ProjectsView',
  data: () => ({
    cardList: [],
    isOver: false
  }),
  created() {
    this.$store.dispatch('getColumns')
  },
  components: {
    'create-card-component': CreateCardComponent,
    'create-column-component': CreateColumnComponent,
    'card-component': CardComponent
  },
  methods: {
    droped(column, indexColumn, data) {
      this.$store.commit('dropedHandler', {currentCard: data.card, fromColumn: data.column, toColumn: column, indexColumn})
      this.isOver = false
    },
    dragStart(toColumn, indexColumn, indexCard, data) {
      const fromColumn = data.column
      this.$store.commit('dragStartHandler', {currentCard: data.card, fromColumn,  toColumn, indexColumn, indexCard})
    },
    dragOver(toColumn, indexColumn, data) {
      const fromColumn = data.column
      //console.log(fromColumn.id + ' -> ' + toColumn.id)
      this.$store.commit('dragOverHandler', {currentCard: data.card, fromColumn,  toColumn, indexColumn})
      this.isOver = true
    },
    dragLeave(toColumn, indexColumn, data){
      const fromColumn = data.column
      //console.log(fromColumnId + ' -> ' + toColumnId)
      this.$store.commit('dragLeaveHandler', {currentCard: data.card, fromColumn,  toColumn, indexColumn})
      this.isOver = false
    },
    dragEnd(toColumn, indexColumn, indexCard, data) {
      const fromColumn = data.column
      this.$store.commit('dragEndHandler', {currentCard: data.card, fromColumn,  toColumn, indexColumn, indexCard})
    }
  },
  computed: {
    columns() {
      return this.$store.state.gridColumns
    },
  }
}

</script>
<style lang='scss'>

.columns-container {
  overflow-x: auto;
  
}

.cards-list {
  height: 100%;
  background-color: darken(#fafafa, 3%)
}

.cards-list .drop {
  height: 100%;
}

.board-column {
  min-width: 330px;
}

</style>