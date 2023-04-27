import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const addTodoThunk = createAsyncThunk(
	'@@todos/addTodoThunk',
	async (title, thunkAPI) => {
		try {
			const todo = {
				title,
				completed: false,
			}
			const res = await axios.post('http://localhost:3002/todos', todo)
			return res.data
		} catch (error) {}
	}
)
