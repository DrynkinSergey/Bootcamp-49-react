import { createAction } from '@reduxjs/toolkit'

export const plusAC = createAction('counter/increment')
export const minusAC = createAction('counter/decrement')
export const resetAC = createAction('counter/reset')
export const setStepAC = createAction('counter/setStep')

const init = { count: 0, step: 1, secretStep: 17 }
export const countReducer = (state = init, action) => {
	switch (action.type) {
		case plusAC.type:
			return {
				...state,
				count: state.count + state.step,
			}
		case minusAC.type:
			return {
				...state,
				count: state.count - state.step,
			}
		case setStepAC.type:
			return {
				...state,
				step: action.payload,
			}
		case resetAC.toString():
			return init
		default:
			return state
	}
}
