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
                  <v-list-tile-content class='group-title'>
                    <v-list-tile-action>
                      <v-icon>{{ navigationGroupItem.icon }}</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-title>{{ navigationGroupItem.name }}</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile v-for='(navigationItem, index) in navigationGroupItem.items' :key='`navigation-item-${index}`'>
                  <router-link class='router-link' :to='navigationItem.path'>
                    <v-list-tile-action>
                      <v-icon class='router-link-icon'> {{ navigationItem.icon }}</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-sub-title>{{ navigationItem.name }}</v-list-tile-sub-title>
                  </router-link>
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
      if (!this.groupsList[item.group].items.includes(item)) {
        this.groupsList[item.group].items.push(item) 
      }

      })
      console.log(this.groupsList)
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
  .v-list__group__header {
    padding: 0 16px;
    width:100%;
  }

  .group-title {
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
  }

  .router-link {
    width: 100%;
    color: #333;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: flex-start;
    text-decoration: none;

    .v-list__tile__action {
      display: flex;
      flex-flow: row nowrap;
      justify-content: center;
      align-items: center;
    }

    .router-link-icon {

    }
  }

  .router-link:hover .v-list__tile__sub-title, .router-link:hover .router-link-icon{
    color: #1976d2;
  }
</style>