export const PLUS = 'plus'
export const MINUS = 'minus'
export const RESET = 'reset'
export const SET_STEP = 'set_step'
// const a = value => console.log(value)
export const plusAC = () => ({ type: PLUS })
export const minusAC = () => ({ type: MINUS })
export const resetAC = () => ({ type: RESET })
export const setStepAC = value => ({ type: SET_STEP, payload: value })
