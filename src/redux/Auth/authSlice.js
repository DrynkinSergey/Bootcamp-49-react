import { createSlice } from '@reduxjs/toolkit'
import { loginThunk, logoutThunk, registrationThunk } from './authOperations'

const initialState = {
	user: { name: '', email: '' },
	token: null,
	online: false,
	loading: false,
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
		[loginThunk.pending]: (state, { payload }) => {
			state.loading = true
		},
		[loginThunk.fulfilled]: (state, { payload }) => {
			state.user = payload.user
			state.token = payload.token
			state.online = true
			state.loading = false
		},
		[logoutThunk.fulfilled]: (state, { payload }) => {
			console.log('Очищаємо нашого юзера')
			state.user = ''
			state.token = ''
			state.online = false
		},
	},
})

export const authReducer = authSlice.reducer
