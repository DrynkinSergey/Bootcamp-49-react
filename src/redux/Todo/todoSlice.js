import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	items: [],
	loading: false,
	error: null,
}

const todoSlice = createSlice({
	name: '@@tasks',
	initialState,
	extraReducers: {},
})

export const todoReducer = todoSlice.reducer
