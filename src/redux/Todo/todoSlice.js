import { createSlice, nanoid } from '@reduxjs/toolkit'
import { addTodoThunk } from './thunks'
const initialState = {
	todoItems: [],
	filterStr: '',
	loading: false,
	error: null,
}

const todoSlice = createSlice({
	name: '@@todos',

	initialState,

	reducers: {
		addTodoPending: (state, action) => {
			state.loading = true
		},
		addTodoFulfilled: (state, action) => {
			state.todoItems.push(action.payload)
		},
		addTodoError: (state, action) => {
			state.error = action.payload
		},
		getTodos: (state, action) => {
			state.todoItems = action.payload
		},
		deleteTodo: (state, { payload }) => {
			const item = state.todoItems.findIndex(item => item.id === payload)
			state.todoItems.splice(item, 1)
		},
		toggleTodo: (state, { payload }) => {
			const item = state.todoItems.find(item => item.id === payload)
			item.completed = !item.completed
		},
		setFilter: (state, { payload }) => {
			state.filterStr = payload
		},
	},
	extraReducers: {
		[addTodoThunk.fulfilled]: (state, { payload }) => {
			state.todoItems.push(payload)
			state.loading = false
		},
		[addTodoThunk.rejected]: (state, { payload }) => {
			state.error = payload
		},
		[addTodoThunk.pending]: (state, { payload }) => {
			state.loading = true
			state.error = null
		},
	},
})

// 5 етап

export const {
	deleteTodo,
	toggleTodo,
	setFilter,
	addTodoPending,
	addTodoError,
	addTodoFulfilled,
	getTodos,
} = todoSlice.actions

// 6 етап

export const todoReducer = todoSlice.reducer
