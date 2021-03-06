// Modules
import Vue from 'vue'
import Vuex from 'vuex'
import Config from '@/config'

import Auth from './modules/auth'
import UI from './modules/ui'
import User from './modules/user'
import Todo from './modules/todo'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  state: Config,
  getters: {
    backend_host: state => state.api.scheme + '://' + state.api.host,
    api_url: state => state.api.scheme + '://' + state.api.host + state.api.path
  },
  actions: {},
  mutations: {},
  modules: {
    auth: Auth,
    ui: UI,
    user: User,
    todo: Todo
  },
  strict: debug
})
