import { configureStore } from '@reduxjs/toolkit'
import { todoReducer } from './Todo/todoSlice'
import { filterReducer } from './Filter/filterSlice'
import { themeReducer } from './Theme/themeSlice'

export const store = configureStore({
	reducer: {
		todoList: todoReducer,
		filter: filterReducer,
		theme: themeReducer,
	},

	devTools: process.env.NODE_ENV !== 'production',
})
