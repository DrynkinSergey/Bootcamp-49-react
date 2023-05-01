import { createSlice } from '@reduxjs/toolkit'
import { loginThunk, logoutThunk, registrationThunk } from './authOperations'

const initialState = {
	user: { name: null, email: null },
	token: null,
	online: false,
}

const authSlice = createSlice({
	name: '@@auth',
	initialState,
	extraReducers: {
		[registrationThunk.fulfilled](state, { payload }) {
			state.user = payload.user
			state.token = payload.token
			state.online = true
		},
		[loginThunk.fulfilled](state, action) {
			state.user = action.payload.user
			state.token = action.payload.token
			state.online = true
		},
		[logoutThunk.fulfilled](state) {
			state.user = { name: null, email: null }
			state.token = null
			state.online = false
		},
	},
})

export const authReducer = authSlice.reducer
