<template>
  <v-scale-transition>
    <v-card class='simple-card' >
      <v-flex>
        <v-card-title>
          <v-flex column>
            <v-menu bottom offset-y right>
              <v-list>
                <v-list-tile>
                  <v-list-tile-title>123</v-list-tile-title>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-title>123</v-list-tile-title>
                </v-list-tile>
              </v-list>
              <v-btn icon slot='activator' ripple>
                <v-icon>more_vert</v-icon>
              </v-btn>
            </v-menu>
          </v-flex>
          <v-flex column>
            <h4>{{ card.title }}</h4>
            <p>{{ card.description }}</p>
          </v-flex>
        </v-card-title>
      </v-flex>
    </v-card>
  </v-scale-transition>
</template>
<script>
export default {
  props: ['column','card'],
  name: 'CardComponent',
  data: () => ({

  }),
  methods: {

  }
}
</script>
<style lang='scss' scoped>
  .simple-card {
    margin: 15px 0px;
  }
</style>
