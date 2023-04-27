import { createReducer } from '@reduxjs/toolkit'
import { addTodoAC, deleteTodoAC, toggleTodoAC } from './actions'

const initialState = { todos: [] }
export const todoReducer = createReducer(initialState, {
	[addTodoAC]: (state, action) => {
		state.todos.push(action.payload)
	},
	[deleteTodoAC]: (state, { payload }) => {
		//1 варіант в іммутабельному вигляді обов'язково з ретерн!!!
		// return {
		// 	...state,
		// 	todos: state.todos.filter(item => item.id !== payload),
		// }
		const item = state.todos.findIndex(item => item.id === payload)
		state.todos.splice(item, 1)
	},
	[toggleTodoAC]: (state, { payload }) => {
		const item = state.todos.find(item => item.id === payload)
		item.completed = !item.completed
	},
})
// export const todoReducer = (state = init, action) => {
// 	switch (action.type) {
// 		case addTodoAC.type: {
// 			return {
// 				...state,
// 				todos: [...state.todos, action.payload],
// 			}
// 		}
// 		case deleteTodoAC.type: {
// 			console.log(action)
// 			return {
// 				...state,
// 				todos: state.todos.filter(todo => todo.id !== action.payload),
// 			}
// 		}
// 		case toggleTodoAC.type: {
// 			return {
// 				...state,
// 				todos: state.todos.map(todo =>
// 					todo.id === action.payload
// 						? { ...todo, completed: !todo.completed }
// 						: todo
// 				),
// 			}
// 		}
// 		default:
// 			return state
// 	}
// }
