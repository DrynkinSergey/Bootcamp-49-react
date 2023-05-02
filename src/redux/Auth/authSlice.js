import { createSlice } from '@reduxjs/toolkit'
import { loginThunk, logoutThunk, registrationThunk } from './authOperations'

const initialState = {
	user: { name: '', email: '' },
	token: null,
	online: false,
}
const authSlice = createSlice({
	name: '@@auth',
	initialState,
	extraReducers: {
		[registrationThunk.fulfilled]: (state, { payload }) => {
			state.user = payload.user
			state.token = payload.token
			state.online = true
		},
		[loginThunk.fulfilled]: (state, { payload }) => {
			state.user = payload.user
			state.token = payload.token
			state.online = true
		},
		[logoutThunk.fulfilled]: (state, { payload }) => {
			state.user = ''
			state.token = ''
			state.online = false
		},
	},
})

export const authReducer = authSlice.reducer
