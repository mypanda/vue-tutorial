<template>
    <div>
        <p>{{msg}}</p>
        <p>{{count}}</p>
        <button @click="increment">increment</button>
        <button @click="decrement">decrement</button>
    </div>
</template>
<script>
import { mapState,mapActions } from 'vuex'
export default{
    data(){
        return {
            msg:'dasdjalsjdls'
        }
    },
    computed:mapState({
    	count:state => state.count
    }),
    methods:mapActions([
    	'increment',
    	'decrement'
    ])
}
</script>