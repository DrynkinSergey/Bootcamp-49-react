import { createSlice } from '@reduxjs/toolkit'
import { fetchTasks } from './operations'

const initialState = {
	items: [],
	loading: false,
	error: null,
}

const todoSlice = createSlice({
	name: '@@tasks',
	initialState,
	extraReducers: {
		[fetchTasks.fulfilled](state, action) {
			state.isLoading = false
			state.error = null
			state.items = action.payload
		},
	},
})

export const todoReducer = todoSlice.reducer
