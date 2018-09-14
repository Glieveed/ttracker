<template>
  <v-app>
    <main-navigation></main-navigation>
    <main-content></main-content>
    <v-footer app></v-footer>
  </v-app>
</template>
<script>

import MainNavigation from './components/elements/MainNavigation.vue'
import MainContent from './components/elements/MainContent.vue'

export default {
  name: 'App',
  data: () => ({

  }),
  components: {
    'main-content': MainContent,
    'main-navigation': MainNavigation
  }
}
</script>
<style lang="scss">

</style>
