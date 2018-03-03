import 'onsenui/css/onsenui.css'
import 'onsenui/css/onsen-css-components.css'

import Vue from 'vue'
import Vuex from 'vuex'
import VueOnsen from 'vue-onsenui'

import storeLike from './store'
import App from './App'
import CustomToolbar from './partials/CustomToolbar.vue'

import ons from 'onsenui'

Vue.use(Vuex)
Vue.use(VueOnsen)

Vue.config.productionTip = false

// onsenui androidでもiosのデザインを適応
ons.platform.select('ios')

Vue.component('custom-toolbar', CustomToolbar) // Common toolbar

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store: new Vuex.Store(storeLike),
  template: '<App/>',
  components: { App },
  beforeCreate () {
    // Shortcut for Material Design
    Vue.prototype.md = this.$ons.platform.isAndroid()

    // Set iPhoneX flag based on URL
    if (window.location.search.match(/iphonex/i)) {
      document.documentElement.setAttribute('onsflag-iphonex-portrait', '')
      document.documentElement.setAttribute('onsflag-iphonex-landscape', '')
    }
  }
})
