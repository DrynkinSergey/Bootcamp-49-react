import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
	todoItems: [],
	filterStr: '',
	loading: false,
	error: null,
}
axios.defaults.baseURL = 'http://localhost:3002'

export const getTodosThunk = () => async dispatch => {
	try {
		dispatch(addTodoLoadingStart())
		const res = await axios.get('/todos')
		dispatch(setTodo(res.data))
	} catch (error) {
		dispatch(addTodoError(error))
	}
}
export const addTodoThunk = title => async dispatch => {
	try {
		const todo = {
			title,
			completed: false,
		}
		dispatch(addTodoLoadingStart())
		const res = await axios.post('/todos', todo)
		dispatch(addTodoFulfilled(res.data))
	} catch (error) {
		dispatch(addTodoError(error))
	}
}

export const deleteTodoThunk = id => async dispatch => {
	try {
		dispatch(deleteTodoLoading())
		await axios.delete(`/todos/${id}`)
		dispatch(deleteTodo(id))
	} catch (error) {
		dispatch(deleteTodoError())
	}
}

const todoSlice = createSlice({
	name: '@@todos',
	initialState,
	reducers: {
		setTodo: (state, action) => {
			state.todoItems = [...action.payload]
			state.loading = false
		},
		addTodoFulfilled: (state, action) => {
			state.todoItems.push(action.payload)
			state.loading = false
		},
		addTodoError: (state, action) => {
			state.error = action.payload
			state.loading = false
		},
		addTodoLoadingStart: (state, action) => {
			state.loading = true
		},

		deleteTodoLoading: (state, { payload }) => {
			state.loading = true
		},
		deleteTodoError: (state, { payload }) => {
			state.error = payload
			state.loading = false
		},

		deleteTodo: (state, { payload }) => {
			const item = state.todoItems.findIndex(item => item.id === payload)
			state.todoItems.splice(item, 1)
			state.loading = false
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

export const {
	addTodoFulfilled,
	deleteTodo,
	toggleTodo,
	setFilter,
	addTodoError,
	setTodo,
	deleteTodoError,
	deleteTodoLoading,
	addTodoLoadingStart,
} = todoSlice.actions

export const todoReducer = todoSlice.reducer
