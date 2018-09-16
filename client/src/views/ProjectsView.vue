<template>
  <v-layout row wrap>
    <v-flex fill-height px-3 v-for='(column, indexColumn) in columns' :key='`column-${indexColumn}`'>
      <create-card-component></create-card-component>
      <v-flex column> {{ indexColumn }}
        <drop class='drop' @drop='droped(column, ...arguments)' :class='{over: isOver}' @dragover='dropOver' @dragleave='dropLeave'>
            <drag class='drag' v-for='(card, indexCard) in column.cards' drop-effect='move' :effect-allowed='["move"]' :key='`card-${indexCard}`' :transfer-data='{column, card}'>
            <card-component  :column='column' :card='card'></card-component>
          </drag>
        </drop>
      </v-flex>
    </v-flex>
  </v-layout>
</template>
<script>

import CreateCardComponent from '../components/elements/CreateCardComponent.vue'
import CardComponent from '../components/elements/CardComponent.vue'

export default {
  name: 'ProjectsView',
  data: () => ({
    cardList: [],
    isOver: false
  }),
  created() {

  },
  components: {
    'create-card-component': CreateCardComponent,
    'card-component': CardComponent
  },
  methods: {
    droped(column, data) {
      this.$store.commit('changeColumn', {currentCard: data.card, fromColumn: data.column, toColumn: column})
      this.isOver = false
    },
    dropOver() {
      this.isOver = true
    },
    dropLeave(){
       this.isOver = false
    }
  },
  computed: {
    columns() {
      return this.$store.state.gridColumns
    }
  }
}

</script>