import * as types from './mutation-types'
export default{
	[types.INCREMENT](state){
		state.count++
	},
	[types.DECREMENT](state){
		state.count--
	}
}

//anthor function