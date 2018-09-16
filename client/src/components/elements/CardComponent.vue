<template>
  <v-card ripple>
    <v-flex>
      <v-card-title>
        <v-flex>
          <v-menu bottom offset-y right>
            <v-btn icon slot='activator'>
              <v-icon>more_vert</v-icon>  
            </v-btn>
            <v-list>
              <v-list-tile>
                <v-list-tile-title>123</v-list-tile-title>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-title>123</v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-menu>
        </v-flex>
        <v-flex column>
          <h3>{{ card.title }}</h3>
          <p>{{ card.description }}</p>
        </v-flex>
      </v-card-title>
    </v-flex>
  </v-card>
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
<style>

</style>
