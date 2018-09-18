<template>
  <div>
    <v-navigation-drawer temporary app v-model='drawer'>
      <v-layout column>
        <v-flex>
          <v-list>
            <v-list-tile>
              <v-list-tile-title>Навигация</v-list-tile-title>
            </v-list-tile>
            <v-list>
              <v-list-group v-for='(navigationGroupItem, index) in groupsList' :key='`navigation-group-item-${index}`'>
                <v-list-tile slot='activator'>
                  <v-layout >
                    <v-list-tile-content class='group-title'>
                      <v-flex d-flex row>
                        <v-list-tile-action>
                          <v-icon>{{ navigationGroupItem.icon }}</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-title>{{ navigationGroupItem.name }}</v-list-tile-title>
                      </v-flex>
                    </v-list-tile-content>
                  </v-layout>
                </v-list-tile>
                <v-list-tile :to='navigationItem.path' d-inline-flex v-for='(navigationItem, index) in navigationGroupItem.items' :key='`navigation-item-${index}`'  class='white--text'>
                  <v-flex d-flex row pl-3>
                    <v-list-tile-action>
                      <v-icon class='router-link-icon'> {{ navigationItem.icon }}</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-sub-title>{{ navigationItem.name }}</v-list-tile-sub-title>
                  </v-flex>
                </v-list-tile>
              </v-list-group>
            </v-list>
          </v-list>
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
    routesList: [],
    groupsList: [],
    navigationList: []
  }),
  created() {
    this.groupsList = this.$store.state.mainNavigationGroups
    this.routesList = this.$router.options.routes
    
    this.navigationList = this.getNavigationList
  },
  computed: {
    getNavigationList() {
      this.routesList.forEach((item) => {
        if (item.group && item.group.length > 0) {
          if (!this.groupsList[item.group].items.includes(item)) {
            this.groupsList[item.group].items.push(item) 
          }
        }

      })
      return this.groupsList
    }
  },
  methods: {
    drawerHandler() {
      this.drawer = true
    }
  }
}

</script>
<style lang='scss' scoped>

</style> 