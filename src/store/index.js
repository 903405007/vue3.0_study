import {
	createStore
} from 'vuex'

export default createStore({
	state: {
		curIdx: 0
	},
	mutations: {
		changeCity(state, index) {
			state.curIdx = index
		}
	},
	actions: {},
	modules: {}
})
