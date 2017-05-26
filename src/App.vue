<template>
  <div id="app">
    <!--<p>-->
      <!--<router-link to="/about">go to about</router-link>-->
      <!--<router-link to="/news">go to news</router-link>-->
    <!--</p>-->
    <!--<router-view></router-view>-->
    <div class="container" style="width: 960px;margin: 0 auto;">
      <el-row :gutter="20">
        <el-col :span="6" v-for="(item,index) in data" :key="item">
          <el-card :body-style="{ padding: '0px' }">
            <img :src="item.images.large" class="image">
            <div style="padding: 14px;">
              <span>好吃的汉堡</span>
              <div class="bottom clearfix">
                <time class="time">{{ item.alt }}</time>
                <el-button type="text" class="button">操作按钮</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      currentDate: '2017-05-01 10:10',
      data:[]
    }
  },
  created(){
    const url = 'https://api.douban.com/v2/movie/top250';
    var _self = this;
    this.$http.jsonp(url,{params:{count:1,start:1},jsonp:'callback'})
      .then(function (response) {
          _self.data = JSON.parse(response.bodyText).subjects;
      })
      .catch(function (error) {
        console.log(error);
      });
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
</style>
