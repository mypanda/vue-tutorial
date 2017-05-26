import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource';

import Console from './components/console.vue';
import Error from './components/error.vue';

import VueRouter from 'vue-router';

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'


Vue.use(VueRouter);
Vue.use(ElementUI);
Vue.use(VueResource);



const about = { template:'<p>about page</p>' };
const news = { template:'<p>news page</p>' };
const index = { template:'<p>index page</p>' };




const routes = [{
  path:'/',component:index
},{
  path:'/about',component:about
},{
  path:'/news',component:news
},{
  path:'/error',component:Error
},{
  path:'/*',redirect:'/error'
}]




const router = new VueRouter({
    routes
})





const app = new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
