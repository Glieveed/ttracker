<template>
    <v-scale-transition>
      <v-flex>
        <v-flex column>
          <v-layout column wrap align-center justify-space-start>
            <v-menu bottom right offset-y :close-on-content-click="false" v-model='showCreate'>
              <v-btn style='margin-top: 0px;' slot='activator' color='transparent' @click='showCreateNewColumn' depressed>
                <v-icon>add_circle</v-icon>
              </v-btn>
              <v-list>
                <v-card-title>Добавление новой колонки</v-card-title>
                <v-layout px-3>
                  <v-form @submit.prevent='addNewColumn'>
                    <v-text-field label='Название:' :error='errorTitle && !this.newColumnTitle' v-model='newColumnTitle'></v-text-field>
                    <v-btn type='submit'>Создать</v-btn>
                  </v-form>
                </v-layout>
              </v-list>
            </v-menu>

          </v-layout>
      </v-flex>
    </v-flex>
    </v-scale-transition>
</template>

<script>
export default {
  name: 'CreateColumnComponent',
  data: () => ({
    showCreate: false,
    newColumnTitle: null,
    errorTitle: false
  }),
  computed: {
    validationTitle() {
      if (this.newColumnTitle && this.newColumnTitle.length > 0) {
        return false
      }

      return true
    }
  },
  methods: {
    showCreateNewColumn() {
      this.showCreate = !this.showCreate
    },
    addNewColumn() {
      if (this.validationTitle) {
        this.errorTitle = true
      } else {
        this.$store.dispatch('addNewColumnHandler', {columnName: this.newColumnTitle})
        this.newColumnTitle = ''
        this.errorTitle = false
        this.showCreateNewColumn()
      }
    }

  }
}
</script>

<style>

</style>

