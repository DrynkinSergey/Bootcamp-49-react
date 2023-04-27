import { createSlice } from '@reduxjs/toolkit'

const initialState = { count: 0, step: 1, secretStep: 17 }

const counterSlice = createSlice({
	name: '@@counter',
	initialState,
	reducers: {
		increment: state => {
			state.count += state.step
		},
		decrement: state => {
			state.count -= state.step
		},
		reset: state => {
			state.count = 0
			state.step = 1
		},
		setStep: (state, { payload }) => {
			state.step = payload
		},
	},
})

export const { increment, decrement, reset, setStep } = counterSlice.actions
export const counterReducer = counterSlice.reducer

//createAsyncThunk
