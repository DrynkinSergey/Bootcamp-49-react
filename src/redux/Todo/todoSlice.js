import { createSlice, nanoid } from '@reduxjs/toolkit'
const initialState = { todoItems: [], filterStr: '' }
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
		addTodo: {
			reducer: (state, action) => {
				state.todoItems.push(action.payload)
			},
			prepare: title => {
				return {
					payload: {
						title,
						completed: false,
						id: nanoid(),
						time: new Date().toLocaleTimeString(),
					},
				}
			},
		},
		deleteTodo: (state, { payload }) => {
			const item = state.todoItems.findIndex(item => item.id === payload)
			state.todoItems.splice(item, 1)
		},
		toggleTodo: (state, { payload }) => {
			const item = state.todoItems.find(item => item.id === payload)
			item.completed = !item.completed
		},
		setFilter: (state, { payload }) => {
			state.filterStr = payload
		},
	},
})

// 5 етап

export const { addTodo, deleteTodo, toggleTodo, setFilter } = todoSlice.actions

// 6 етап

export const todoReducer = todoSlice.reducer
