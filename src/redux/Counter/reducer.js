import { MINUS, PLUS, RESET, SET_STEP } from './actions'

const init = { count: 0, step: 1, secretStep: 17 }
export const countReducer = (state = init, action) => {
	switch (action.type) {
		case PLUS:
			return {
				...state,
				count: state.count + state.step,
			}
		case MINUS:
			return {
				...state,
				count: state.count - state.step,
			}
		case SET_STEP:
			return {
				...state,
				step: action.payload,
			}
		case RESET:
			return init
		default:
			return state
	}
}
