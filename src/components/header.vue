<template>
  <header>
    <div class="nav">
      <ul>
        <li><router-link to="/">首页</router-link></li>
        <li><router-link to="/movies">豆瓣电影</router-link></li>
        <li><router-link to="/movies">豆瓣</router-link></li>
        <li><router-link to="/movies">电影</router-link></li>
        <li><router-link to="/movies">豆电影</router-link></li>
      </ul>
    </div>
  </header>
</template>
<style scoped>
  header{
    background-color: purple;
    height:55px;
    line-height: 55px;
    padding:0 15px;
    color: #fff;
    margin-bottom: 15px;
    font-size:20px;
    font-family:'Source Sans Pro', 'Helvetica Neue', Arial, sans-serif;
  }
  header .nav{
    width:960px;
    margin: 0 auto;
  }
  header ul{
    list-style: none;
    margin:0;
    padding:0;
  }
  header li{
    float: left;
    padding-right:20px;
  }
  header a{
    color: #fff;
    text-decoration: none;
  }
</style>