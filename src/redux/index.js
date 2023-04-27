import { counterReducer } from './Counter/counterSlice'
import { todoReducer } from './Todo/reducer'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
	reducer: {
		counter: counterReducer,
		todoList: todoReducer,
	},
	devTools: process.env.NODE_ENV !== 'production',
})
