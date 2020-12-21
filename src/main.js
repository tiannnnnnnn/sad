import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

import { Container, Button, Menu, MenuItem } from "element-ui";
Vue.use(Container);
Vue.use(Button);
Vue.use(Menu);
Vue.use(MenuItem);
