import { configureStore } from '@reduxjs/toolkit'
import { todoReducer } from './Todo/todoSlice'
import { filterReducer } from './Filter/filterSlice'

export const store = configureStore({
	reducer: {
		todoList: todoReducer,
		filter: filterReducer,
	},

	devTools: process.env.NODE_ENV !== 'production',
})
