import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from './actions'

const init = { todos: [] }
export const todoReducer = (state = init, action) => {
	switch (action.type) {
		case ADD_TODO: {
			return {
				...state,
				todos: [...state.todos, action.payload],
			}
		}
		case DELETE_TODO: {
			console.log(action)
			return {
				...state,
				todos: state.todos.filter(todo => todo.id !== action.payload),
			}
		}
		case TOGGLE_TODO: {
			return {
				...state,
				todos: state.todos.map(todo =>
					todo.id === action.payload
						? { ...todo, completed: !todo.completed }
						: todo
				),
			}
		}
		default:
			return state
	}
}
