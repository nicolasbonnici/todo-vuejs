// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import oStore from './store'

import TodoList from './components/TodoList'
import TodoItem from './components/TodoItem'
import Editor from './components/Editor'

import {
  Vuetify,
  VApp,
  VNavigationDrawer,
  VFooter,
  VList,
  VBtn,
  VCard,
  VIcon,
  VGrid,
  VToolbar,
  transitions
} from 'vuetify'
import '../node_modules/vuetify/src/stylus/app.styl'

Vue.use(Vuex)
const store = new Vuex.Store(oStore)

Vue.use(Vuetify, {
  components: {
    VApp,
    VNavigationDrawer,
    VFooter,
    VList,
    VBtn,
    VCard,
    VIcon,
    VGrid,
    VToolbar,
    transitions
  },
  theme: {
    primary: '#ee44aa',
    secondary: '#424242',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107'
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App,
    TodoList,
    TodoItem,
    Editor
  },
  store,
  template: '<App/>',
  computed: {
    todos () {
      return this.$store.getters.todos
    }
  },
  mounted: function () {
    this.$store.dispatch('getTodos')
  }
})