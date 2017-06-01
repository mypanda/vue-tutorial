# vue-tutorial

### 介绍

* 使用了vue-router

### 开始使用

* npm install
* npm run dev

### vuex
* state 包含组件的状态
* getters 是简单处理状态，然后分发给组件的mapState
* mutation 是操作状态改变的函数，改变状态只能在这里
* actions 异步操作状态，先要把mutations的函数包含进来
```
const mutations = {
    INCREMENT(state){
        state.count ++ 
    }
}
actions = {
    increment:({commit}) => commit('INCREMENT'),
    incrementIfOdd({commit,state}){
        if( (state.count) % 2 === 0 ){
            commit('INCREMENT)
        }
    }
}
const getters = {
    eventOrOdd:state=>state.count % 2 === 0 ? 'event' : 'odd
}
```

```
//定义状态
const state = {
	count:0
}

//修改状态全部在这里
const mutations = {
	INCREMENT(state){
		state.count ++ 
	}
}

//异步操作在这里，修改状态还是在mutations，action操作状态，先要复制一份mutations
const actions = {
	increment:({commit}) => commit('increment'),
}
```


https://github.com/jeneser/douban/blob/master/src/store/modules/movie.js

https://developers.douban.com/wiki/?title=movie_v2


滚动

http://www.cnblogs.com/zyip/p/5907546.html

http://www.jb51.net/article/102645.htm

https://segmentfault.com/a/1190000005351971

https://segmentfault.com/q/1010000006829076/a-1020000006831911

[滚动](https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&tn=mswin_oem_dg&wd=vue%E6%BB%9A%E5%8A%A8%E5%8A%A0%E8%BD%BD&oq=%25E6%25BB%259A%25E5%258A%25A8%25E5%258A%25A0%25E8%25BD%25BD&rsv_pq=ea8ea8db0009cb0e&rsv_t=6064oow0R%2FSwp4poP57AbhQeFK5Q240NXsXj2LrIWzhRMMJy%2BDLAoc3tRUTTuUjj2JMI&rqlang=cn&rsv_enter=1&inputT=1664&rsv_sug3=24&rsv_sug1=22&rsv_sug7=100&rsv_sug2=0&rsv_sug4=3387)