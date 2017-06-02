<template>
    <div>
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
            msg:'vuex messages'
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