import 'material-design-icons-iconfont/dist/material-design-icons.css' // Ensure you are using css-loader

import Vue from 'vue'
import './plugins/axios'
import './plugins/vuetify'
import './plugins/loading';
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import './helpers/index';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
