import { createSlice } from '@reduxjs/toolkit'

const themeSlice = createSlice({
	name: '@@theme',
	initialState: 'dark',
	reducers: {
		setTheme: (state, action) => (state = state === 'dark' ? 'light' : 'dark'),
	},
})

export const { setTheme } = themeSlice.actions
export const themeReducer = themeSlice.reducer
