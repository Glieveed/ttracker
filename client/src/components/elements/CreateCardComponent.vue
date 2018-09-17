<template>
  <v-card>
    <v-flex>
      <v-card-title>
        <v-flex column>
          <v-layout row nowrap align-center justify-space-between>
            <h4>Создание новой карточки</h4>
            <v-btn color='transparent' @click='showFormHandler' depressed v-show='!showForm' :key='`open-btn-${this.indexColumn}`'>
                <v-icon>add</v-icon>
            </v-btn>
            <v-btn color='transparent' @click='showFormHandler' depressed v-show='showForm' :key='`close-btn-${this.indexColumn}`'>
              <v-icon>remove</v-icon>
            </v-btn>
          </v-layout>
          <v-slide-y-transition>
            <v-form  @submit.prevent='addNewCard' v-show='showForm'>
              <v-layout column wrap >
                <v-flex>
                  <v-text-field label='Название:' :error='errorTitle && !newCardTitle' type='text' v-model='newCardTitle'></v-text-field>
                </v-flex>
                <v-flex>
                  <v-textarea label='Описание:' :error='errorDescription && !newCardDescription' v-model='newCardDescription'></v-textarea>
                </v-flex>
                <v-flex>
                  <v-btn type='submit' depressed>Добавить</v-btn>
                </v-flex>
              </v-layout>
            </v-form>
          </v-slide-y-transition>
        </v-flex>
      </v-card-title>
    </v-flex>
  </v-card>
</template>
<script>
export default {
  props: ['column', 'indexColumn'],
  name: 'CreateCardComponent',
  data: () => ({
    newCardTitle: null,
    newCardDescription: null,
    showForm: null,
    errorTitle: false,
    errorDescription: false
  }),
  computed: {
    fieldNotEmpty() {
      if ((this.newCardTitle && this.newCardTitle.length > 0) && (this.newCardDescription && this.newCardDescription.length > 0)) {
        return true
      }
    },
    validationTitle() {
      if (!(this.newCardTitle && this.newCardTitle.length > 0)) {
        return true
      }
    },
    validationDescription() {
      if (!(this.newCardDescription && this.newCardDescription.length > 0)) {
        return true
      }
    }
  },
  methods: {
    addNewCard(state) {
      if (this.validationTitle) {
        this.errorTitle = true
      }

      if (this.validationDescription) {
        this.errorDescription = true
      }

      if (this.fieldNotEmpty) {
        this.$store.dispatch('addNewCardHandler', {column: this.column, indexColumn: this.indexColumn, newCard: { title: this.newCardTitle, description: this.newCardDescription}})
        this.newCardTitle = ''
        this.newCardDescription = ''
        this.showFormHandler()
        this.errorTitle = false
        this.errorDescription = false
      }
    },
    showFormHandler() {
      this.showForm = !this.showForm
    }
  }
}
</script>
<style>

</style>
