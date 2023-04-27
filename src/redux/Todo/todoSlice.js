import { createSlice } from '@reduxjs/toolkit'
const initialState = { todos: [] }
//==============================================//

// 1. Створення слайса
// 2. Вказуємо ім'я слайса
// 3. Вказуємо початковий стан
// 4. Створюємо наші редьюсери / єкшени
// 5. Експортую мої екшени в зовнішній світ
// 6. Експортую редьюсер до гори

//==============================================//
// 1 етап

const todoSlice = createSlice({
	// 2 етап

	name: '@@todos',

	// 3 етап

	initialState,

	// 4 етап

	reducers: {
		addTodo: (state, action) => {
			state.todos.push(action.payload)
		},
		deleteTodo: (state, { payload }) => {
			const item = state.todos.findIndex(item => item.id === payload)
			state.todos.splice(item, 1)
		},
		toggleTodo: (state, { payload }) => {
			const item = state.todos.find(item => item.id === payload)
			item.completed = !item.completed
		},
	},
})

// 5 етап

export const { addTodo, deleteTodo, toggleTodo } = todoSlice.actions

// 6 етап

export const todoReducer = todoSlice.reducer
