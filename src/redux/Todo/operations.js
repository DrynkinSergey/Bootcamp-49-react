import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchTasksThunk = createAsyncThunk(
	'@@tasks/fetchTasks',
	async (_, { rejectWithValue }) => {
		try {
			const res = await axios.get('/tasks')
			return res.data
		} catch (error) {
			return rejectWithValue(error.message)
		}
	}
)

export const addTaskThunk = createAsyncThunk(
	'@@tasks/addTask',
	async (text, { rejectWithValue, dispatch }) => {
		try {
			await axios.post('/tasks', { text })
			dispatch(fetchTasksThunk())
		} catch (error) {
			return rejectWithValue(error.message)
		}
	}
)

export const deleteTaskThunk = createAsyncThunk(
	'@@tasks/deleteTask',
	async (id, { rejectWithValue, dispatch }) => {
		try {
			await axios.delete(`/tasks/${id}`)
			dispatch(fetchTasksThunk())
		} catch (error) {
			rejectWithValue(error)
		}
	}
)
