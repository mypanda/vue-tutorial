import Vue from 'vue';
import VueResource from 'vue-resource';
Vue.use(VueResource);

const domain = 'https://api.douban.com/v2/movie/top250';

export default {
    getMovies(data,callback){
        Vue.http.jsonp(domain,{params:data,jsonp:'callback'})
            .then(response => callback(null,response))
            .catch(error => console.log(error));
    }
}

/*
* 主体:
* 封装movies api接口
*
* 注意:
* 1.获取数据可以用其他lib(reqwest)代替
* 2.或者一个请求地址一个模块
*
* 使用:
* import Movies from './api/movies'
* movies.getMovies({count:12,start:0},(error,res)=>{
*   if(error) console.log(error)
*
*   //res.body是响应的对象
*   //res.bodyText是字符串
* })
*
*
* 参考:
* https://segmentfault.com/a/1190000005351971
* */
