import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
export const fetchTasks = createAsyncThunk(
	'@@tasks/fetchAll',
	async (_, thunkAPI) => {
		try {
			const res = await axios.get('/tasks')
			return res.data
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message)
		}
	}
)
export const addTask = createAsyncThunk(
	'@@tasks/addTask',
	async (text, { dispatch, rejectWithValue }) => {
		try {
			await axios.post('/tasks', { text })
			dispatch(fetchTasks())
		} catch (e) {
			return rejectWithValue(e.message)
		}
	}
)

export const deleteTask = createAsyncThunk(
	'@@tasks/deleteTask',
	async (taskId, thunkAPI) => {
		try {
			await axios.delete(`/tasks/${taskId}`)
			thunkAPI.dispatch(fetchTasks())
		} catch (e) {
			return thunkAPI.rejectWithValue(e.message)
		}
	}
)
