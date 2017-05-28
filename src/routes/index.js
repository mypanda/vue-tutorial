import Vue from 'vue';
import VueRouter from 'vue-router';

import Console from '../components/console.vue';
import Error from '../components/error.vue';
import Movies from '../components/movies.vue';
import Header from '../components/header.vue';


Vue.use(VueRouter);

//自定义测试模板
const about = { template:'<p>about page</p>' };
const news = { template:'<p>news page</p>' };
const index = { template:'<p>index.js page</p>' };
const Footer = { template:'<p>Footer page</p>' };


const routes = [{
    path:'/',
    redirect:'/pages'
},{
    path:'/pages',
    components:{
        header:Header,
        body:Movies,
        footer:Footer
    }
},{
    path:'/movies',components:Movies
},{
    path:'/about',component:about
},{
    path:'/news',component:news
},{
    path:'/error',component:Error
},{
    path:'/*',redirect:'/error'
}]

export default new VueRouter({
    routes
})