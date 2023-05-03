import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
//student-goit@mail.com
axios.defaults.baseURL = 'https://goit-task-manager.herokuapp.com/'

const setToken = token => {
	axios.defaults.headers.common.Authorization = `Bearer ${token}`
}
const clearToken = () => {
	axios.defaults.headers.common.Authorization = ``
}

export const registrationThunk = createAsyncThunk(
	'@@auth/registration',
	async (credentials, thunkAPI) => {
		try {
			// console.log(credentials)
			const res = await axios.post('users/signup', credentials)
			setToken(res.data.token)
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
			const res = await axios.post('users/login', credentials)
			setToken(res.data.token)
			console.log(res)
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
			await axios.post('users/logout')
			clearToken()
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message)
		}
	}
)

export const refreshThunk = createAsyncThunk(
	'@@auth/refresh',
	async (_, thunkAPI) => {
		const savedToken = thunkAPI.getState().auth.token
		if (savedToken === null) {
			return thunkAPI.rejectWithValue('Token is not find')
		}
		try {
			setToken(savedToken)
			const res = await axios.get('/users/me')
			return res.data
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message)
		}
	}
)
