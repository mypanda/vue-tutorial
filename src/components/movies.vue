<template>
<div class="container" style="width: 960px;margin: 0 auto;">
    <el-row :gutter="20">
        <el-col :span="24" v-if="data.length <= 0">加载数据中。。。。</el-col>
        <el-col :span="6" v-for="(item,index) in data" :key="item" v-else>
            <el-card :body-style="{ padding: '0px' }">
                <a :href="item.alt" target="_blank" >
                    <img :src="item.images.large" class="image">
                </a>
                <div style="padding: 14px;">
                    <span>{{item.title}}</span>
                    <div class="bottom clearfix">
                        <time class="time" v-for="badge in item.genres">{{ badge }}&nbsp;</time>
                    </div>
                </div>
            </el-card>
        </el-col>
    </el-row>
    <button @click="next" >GO NEXT</button>
</div>
</template>

<script>
import Movies from '../api/movies'

export default {
    name: 'movies',
    data () {
        return {
            data:[],
            count:12,
            start:0,
            page:1
        }
    },
    watch:{
        page(val){
            this.start = (val-1) * 12
            this.get()
        }
    },
    created(){
        this.get();
    },
    computed:{

    },
    methods:{
        //page++
        next(event){
            this.page ++;
        },
        //api获取数据
        get(){
            Movies.getMovies({count:this.count,start:this.start},(error,res)=>{
                if (error) console.log(error)
                this.data = this.data.concat(res.body.subjects)
            })
        }
    }
}
</script>

<style scoped>
.el-row {
    margin-bottom: 20px;
&:last-child {
     margin-bottom: 0;
 }
}
.el-col {
    border-radius: 4px;
    margin-bottom:15px;
}
.time {
    font-size: 13px;
    color: #999;
}

.bottom {
    margin-top: 13px;
    line-height: 12px;
}

.button {
    padding: 0;
    float: right;
}

.image {
    width: 100%;
    display: block;
}

.clearfix:before,
.clearfix:after {
    display: table;
    content: "";
}

.clearfix:after {
    clear: both
}
.el-card img{
    transition: all ease 0.5s;
}
.el-card:hover img{
    transform: scale(1.5);
}
.el-card a{
    height:331.5px;
    display: block;
    overflow: hidden
}
.el-card a img{
    height:100%;
}
</style>