import { counterReducer } from './Counter/counterSlice'
import { configureStore } from '@reduxjs/toolkit'
import { todoReducer } from './Todo/todoSlice'

export const store = configureStore({
	reducer: {
		counter: counterReducer,
		todoList: todoReducer,
	},
	devTools: process.env.NODE_ENV !== 'production',
})
