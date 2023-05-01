import { configureStore } from '@reduxjs/toolkit'
import { todoReducer } from './Todo/todoSlice'
import { filterReducer } from './Filter/filterSlice'
import { themeReducer } from './Theme/themeSlice'
import { authReducer } from './Auth/authSlice'

export const store = configureStore({
	reducer: {
		auth: authReducer,
		tasks: todoReducer,
		filter: filterReducer,
		theme: themeReducer,
	},

	devTools: process.env.NODE_ENV !== 'production',
})
