import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

//tutor_49@goit.com

axios.defaults.baseURL = 'https://goit-task-manager.herokuapp.com/'

const setAuthHeader = token => {
	axios.defaults.headers.common.Authorization = `Bearer ${token}`
}

const clearAuthHeader = () => {
	axios.defaults.headers.common.Authorization = ''
}

export const registrationThunk = createAsyncThunk(
	'@@auth/registration',
	async (credentials, thunkAPI) => {
		try {
			const res = await axios.post('/users/signup', credentials)
			setAuthHeader(res.data.token)
			return res.data
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message)
		}
	}
)
export const loginThunk = createAsyncThunk(
	'@@auth/login',
	async (credentials, thunkAPI) => {
		try {
			const res = await axios.post('/users/login', credentials)
			setAuthHeader(res.data.token)
			return res.data
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message)
		}
	}
)

export const logoutThunk = createAsyncThunk(
	'@@auth/logout',
	async (_, thunkAPI) => {
		try {
			await axios.post('/users/logout')
			clearAuthHeader()
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message)
		}
	}
)
