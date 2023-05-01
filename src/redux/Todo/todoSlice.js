import { createSlice } from '@reduxjs/toolkit'
import {
	addTodoThunk,
	fetchTodosThunk,
	removeTodoThunk,
	toggleTodoThunk,
} from './operations'

const initialState = {
	todoItems: [],
	loading: false,
	searchValue: '',
	error: null,
}

const todoSlice = createSlice({
	name: '@@todos',
	initialState,
	reducers: {
		changeSearch: (state, { payload }) => {
			state.changeSearch = payload
		},

		toggleTodo: (state, { payload }) => {
			const item = state.todoItems.find(item => item.id === payload)
			item.completed = !item.completed
		},
	},
	extraReducers: builder => {
		builder
			.addCase(fetchTodosThunk.fulfilled, (state, action) => {
				state.todoItems = action.payload
			})
			// .addCase(toggleTodoThunk.fulfilled, (state, action) => {
			// 	const item = state.todoItems.find(item => item.id === action.payload)
			// 	item.completed = !item.completed
			// })
			.addCase(addTodoThunk.fulfilled, (state, action) => {
				state.todoItems.push(action.payload)
			})

			// .addCase(removeTodoThunk.fulfilled, (state, action) => {
			// 	const item = state.todoItems.findIndex(
			// 		item => item.id === action.payload
			// 	)
			// 	state.todoItems.splice(item, 1)
			// })
			
			.addMatcher(
				action => action.type.endsWith('/fulfilled'),
				(state, action) => {
					state.loading = false
				}
			)
			.addMatcher(
				action => action.type.endsWith('/pending'),
				(state, action) => {
					state.loading = true
					state.error = null
				}
			)
			.addMatcher(
				action => action.type.endsWith('/rejected'),
				(state, action) => {
					state.loading = false
					state.error = action.payload
				}
			)
	},
})

export const { deleteTodo, toggleTodo, changeSearch } = todoSlice.actions

export const todoReducer = todoSlice.reducer
