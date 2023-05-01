import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	user: { name: null, email: null },
	token: null,
	online: false,
}

const authSlice = createSlice({
	name: '@@auth',
	initialState,
})

export const authReducer = authSlice.reducer
