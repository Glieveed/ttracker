<template>
  <v-app>
    <main-navigation></main-navigation>
    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
    <v-footer app></v-footer>
  </v-app>
</template>
<script>

import MainNavigation from './components/elements/MainNavigation.vue'

export default {
  name: 'App',
  data: () => ({

  }),
  components: {
    'main-navigation': MainNavigation
  }
}
</script>
<style lang="scss">

</style>
