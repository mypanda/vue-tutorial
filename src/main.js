import Vue from 'vue';
import App from './App.vue';

import router from './routes'

import store from './store'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'


Vue.use(ElementUI);

const app = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
