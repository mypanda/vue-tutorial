<template>
  <div id="app">
    <router-view name="header"></router-view>
    <router-view name="body"></router-view>
    <router-view name="footer"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {

    }
  },
  computed:{
      count(){
          //state.count
          return this.$store.state.count;
      }
  }
}
</script>

<style scoped>

</style>
