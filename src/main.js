import Vue from 'vue'
import App from './App.vue'

/* global process */
if (process.env.NODE_ENV !== 'production') {
  Vue.config.devtools = true
}

import VueComplexify from './VueComplexify.js'
Vue.use(VueComplexify, {})


new Vue({
  el: '#app',
  template: '<App/>',
  components: {App}
})
