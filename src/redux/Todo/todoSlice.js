import { createSlice } from '@reduxjs/toolkit'

const initialState = { todoItems: [], filterStr: '' }

const todoSlice = createSlice({
	name: '@@todos',

	initialState,

	reducers: {
		addTodo: (state, action) => {
			state.todoItems.push(action.payload)
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
})

export const { addTodo, deleteTodo, toggleTodo, setFilter } = todoSlice.actions

export const todoReducer = todoSlice.reducer
