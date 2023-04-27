import { createSlice, nanoid } from '@reduxjs/toolkit'
import axios from 'axios'
const initialState = { todoItems: [], filterStr: '' }
export const fetchUsersThunk = () => dispatch => {
	axios
		.get('http://localhost:3002/todos')
		.then(res => dispatch(addTodo(res.data)))
}
export const fetchDeleteUserThunk = id => dispatch => {
	axios
		.delete(`http://localhost:3002/todos/${id}`)
		.then(res => dispatch(deleteTodo(id)))
}
const todoSlice = createSlice({
	name: '@@todos',

	initialState,

	reducers: {
		addTodo: (state, action) => {
			state.todoItems.push(...action.payload)
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

// 5 етап

export const { addTodo, deleteTodo, toggleTodo, setFilter } = todoSlice.actions

// 6 етап

export const todoReducer = todoSlice.reducer
