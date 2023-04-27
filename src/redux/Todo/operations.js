import axios from 'axios'
import {
	addTodoError,
	addTodoFulfilled,
	addTodoPending,
	deleteTodo,
	getTodos,
	toggleTodo,
} from './todoSlice'

export const addTodoThunk = title => dispatch => {
	dispatch(addTodoPending())
	const todo = {
		title,
		completed: false,
	}
	axios
		.post('http://localhost:3002/todos', todo)
		.then(res => dispatch(addTodoFulfilled(res.data)))
		.catch(e => dispatch(addTodoError(e)))
}
export const deleteTodoThunk = id => dispatch => {
	dispatch(addTodoPending())

	axios
		.delete(`http://localhost:3002/todos/${id}`)
		.then(res => dispatch(deleteTodo(id)))
		.catch(e => dispatch(addTodoError(e)))
}

export const toggleTodoThunk = todo => dispatch => {
	dispatch(addTodoPending())

	axios
		.put(`http://localhost:3002/todos/${todo.id}`, {
			...todo,
			completed: !todo.completed,
		})
		.then(res => dispatch(toggleTodo(todo.id)))
		.catch(e => dispatch(addTodoError(e)))
}

export const fetchTodosThunk = () => dispatch => {
	axios
		.get('http://localhost:3002/todos')
		.then(res => dispatch(getTodos(res.data)))
		.catch(e => dispatch(addTodoError(e)))
}
