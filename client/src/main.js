import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import VueDragDrop from 'vue-drag-drop'

Vue.config.productionTip = false

Vue.use(VueDragDrop)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
