import { createSlice } from '@reduxjs/toolkit'
import { fetchTasksThunk } from './operations'
import { logoutThunk } from '../Auth/authOperations'

const initialState = {
	items: [],
	loading: false,
	error: null,
}

const todoSlice = createSlice({
	name: '@@tasks',
	initialState,
	extraReducers: {
		[fetchTasksThunk.fulfilled]: (state, { payload }) => {
			state.items = payload
			state.error = null
			state.loading = false
		},
		[logoutThunk.fulfilled]: state => {
			console.log('Очищаємо наші туду')
			state.items = []
		},
	},
})

export const todoReducer = todoSlice.reducer
