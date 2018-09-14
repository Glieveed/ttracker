import Vue from 'vue'
import Router from 'vue-router'

// Components 

const HomeView = () => import('./views/HomeView.vue')
const ProjectsView = () => import('./views/ProjectsView.vue')
const ProfileView = () => import('./views/ProfileView.vue')

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      name: 'Главная',
      path: '/',
      component: HomeView,
      icon: 'home',
      group: 'main'
    },
    {
      name: 'Проекты',
      path: '/projects',
      component: ProjectsView,
      icon: 'folder_open',
      group: 'main'
    },
    {
      name: 'Профиль',
      path: '/profile',
      component: ProfileView,
      icon: 'face',
      group: 'info'
    }
  ]
})
