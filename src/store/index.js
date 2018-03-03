import Vue from 'vue'
import Vuex from 'vuex'
// import * as types from './mutation-types'
import navigator from './modules/navigator'
import splitter from './modules/splitter'
import tabbar from './modules/tabbar'

Vue.use(Vuex)

export default {
  modules: {
    navigator,
    splitter,
    tabbar
  }
  // ,
  // strict: process.env.NODE_ENV !== 'production'
}
