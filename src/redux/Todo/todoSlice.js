import { createSlice } from '@reduxjs/toolkit'
import { addTodoThunk, fetchTodosThunk, removeTodoThunk } from './operations'

const initialState = {
	todoItems: [],
	filterStr: '',
	loading: false,
	error: null,
}
// axios.defaults.baseURL = 'http://localhost:3002'

// export const getTodosThunk = () => async dispatch => {
// 	try {
// 		dispatch(addTodoLoadingStart())
// 		const res = await axios.get('/todos')
// 		dispatch(setTodo(res.data))
// 	} catch (error) {
// 		dispatch(addTodoError(error))
// 	}
// }
// export const addTodoThunk = title => async dispatch => {
// 	try {
// 		const todo = {
// 			title,
// 			completed: false,
// 		}
// 		dispatch(addTodoLoadingStart())
// 		const res = await axios.post('/todos', todo)
// 		dispatch(addTodoFulfilled(res.data))
// 	} catch (error) {
// 		dispatch(addTodoError(error))
// 	}
// }

// export const deleteTodoThunk = id => async dispatch => {
// 	try {
// 		dispatch(deleteTodoLoading())
// 		await axios.delete(`/todos/${id}`)
// 		dispatch(deleteTodo(id))
// 	} catch (error) {
// 		dispatch(deleteTodoError())
// 	}
// }

const todoSlice = createSlice({
	name: '@@todos',
	initialState,
	reducers: {
		toggleTodo: (state, { payload }) => {
			const item = state.todoItems.find(item => item.id === payload)
			item.completed = !item.completed
		},
		setFilter: (state, { payload }) => {
			state.filterStr = payload
		},
	},
	extraReducers: builder => {
		builder
			.addCase(fetchTodosThunk.fulfilled, (state, action) => {
				console.log('Екшен прилетів після обробки=>>>>>', action.payload)
				state.todoItems = action.payload
			})
			.addCase(addTodoThunk.fulfilled, (state, action) => {
				state.todoItems.push(action.payload)
			})
			
			.addCase(removeTodoThunk.fulfilled, (state, action) => {
				const item = state.todoItems.findIndex(
					item => item.id === action.payload
				)
				state.todoItems.splice(item, 1)
			})

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
	// extraReducers: {
	// 	[fetchTodosThunk.fulfilled]: (state, action) => {
	// 		state.todoItems = action.payload
	// 		state.loading = false
	// 	},
	// 	[fetchTodosThunk.pending]: (state, action) => {
	// 		state.todoItems = action.payload
	// 		state.loading = false
	// 	},
	// 	[fetchTodosThunk.rejected]: (state, action) => {
	// 		state.todoItems = action.payload
	// 		state.loading = false
	// 	},
	// },
})

export const { deleteTodo, toggleTodo, setFilter } = todoSlice.actions

export const todoReducer = todoSlice.reducer
