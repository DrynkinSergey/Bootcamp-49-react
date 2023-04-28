import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
axios.defaults.baseURL = 'https://644abd9da8370fb32156e841.mockapi.io/'

export const fetchTodosThunk = createAsyncThunk(
	'@@todos/fetchTodos',
	async (_, thunkAPI) => {
		try {
			const response = await axios.get('/todos')
			console.log('server is done =>>>>>', response.data)
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
			return id
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
