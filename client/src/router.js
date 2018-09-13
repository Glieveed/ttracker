import Vue from 'vue'
import Router from 'vue-router'

// Components 

const HomeView = () => import('./views/HomeView.vue')
const ProjectsView = () => import('./views/ProjectsView.vue')

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      name: 'Home',
      path: '/',
      component: HomeView
    },
    {
      name: 'Projects',
      path: '/projects',
      component: ProjectsView
    }
  ]
})
