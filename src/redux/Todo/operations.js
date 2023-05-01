import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { toggleTodo } from './todoSlice'
axios.defaults.baseURL = 'http://localhost:3002'

export const fetchTodosThunk = createAsyncThunk(
	'@@todos/fetchTodos',
	async (_, thunkAPI) => {
		try {
			const response = await axios.get('/todos')
			return response.data
		} catch (error) {
			thunkAPI.rejectWithValue(error)
		}
	}
)

export const addTodoThunk = createAsyncThunk(
	'@@todos/addTodo',
	async (title, thunkAPI) => {
		try {
			const response = await axios.post('/todos', { title, completed: false })
			return response.data
		} catch (error) {
			thunkAPI.rejectWithValue(error)
		}
	}
)

export const removeTodoThunk = createAsyncThunk(
	'@@todos/removeTodo',
	async (id, thunkAPI) => {
		try {
			await axios.delete(`/todos/${id}`)
			thunkAPI.dispatch(fetchTodosThunk())
			// return id
		} catch (error) {
			thunkAPI.rejectWithValue(error)
		}
	},
	{
		condition: (_, thunkAPI) => {
			const store = thunkAPI.getState()
			const loading = store.todoList.loading
			if (loading) {
				return false
			}
		},
	}
)

export const removeCompletedTodosThunk = createAsyncThunk(
	'@@todos/removeCompleted',
	async (_, thunkAPI) => {
		try {
			const todoCompleted = thunkAPI
				.getState()
				.todoList.todoItems.filter(todo => todo.completed)
				.map(todo => todo.id)
			console.log(todoCompleted)
			const request = todoCompleted.map(id => {
				return axios.delete(`/todos/${id}`)
			})
			Promise.all(request)
				.then(() => thunkAPI.dispatch(fetchTodosThunk()))
				.catch(e => console.log(e))
		} catch (error) {
			thunkAPI.rejectWithValue(error)
		}
	}
)

export const toggleTodoThunk = createAsyncThunk(
	'@@todos/toggle',
	async (todo, thunkAPI) => {
		try {
			await axios.patch(`/todos/${todo.id}`, {
				completed: !todo.completed,
			})
			thunkAPI.dispatch(toggleTodo(todo.id))
		} catch (error) {
			thunkAPI.rejectWithValue(error)
		}
	}
)
