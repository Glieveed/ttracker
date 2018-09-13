<template>
  <div>
    <v-navigation-drawer temporary app v-model='drawer'>
      <v-layout column>
        <v-list>
          <v-list-tile></v-list-tile>
        </v-list>
        <v-flex v-for='(routesListItem, index) in routesList' :key='`main-navigation-item-${index}`'>
          <router-link :to='routesListItem.path'>{{ routesListItem.name }}</router-link>
        </v-flex>
      </v-layout>
    </v-navigation-drawer>
    <v-toolbar app>
      <v-toolbar-side-icon @click='drawerHandler'></v-toolbar-side-icon>
      <v-toolbar-title>Ttracker</v-toolbar-title>
    </v-toolbar>
  </div>
</template>
<script>

export default {
  name: 'MainNavigation',
  data: () => ({
    drawer: false,
    routesList: []
  }),
  created() {
    this.routesList = this.$router.options.routes
    console.log(this.routesList)
  },
  methods: {
    drawerHandler() {
      this.drawer = true
    }
  }
}

</script>