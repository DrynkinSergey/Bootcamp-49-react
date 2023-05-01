import { createSelector } from '@reduxjs/toolkit'

export const selectTodos = state => state.todoList.todoItems
export const selectLoading = state => state.todoList.loading
export const selectFilter = state => state.filter

export const selectUncompleted = state => {
	// console.log('filter')
	const todos = selectTodos(state)
	return todos.reduce((total, todo) => (todo.completed ? total : total + 1), 0)
}

export const selectUncompletedReselect = createSelector(
	[state => state.todoList.todoItems],
	todos => {
		console.log('Доторкнулися до туду')

		return todos.reduce(
			(total, todo) => (todo.completed ? total : total + 1),
			0
		)
	}
)

export const selectFilteredData = state => {
	const filter = selectFilter(state)
	const todos = selectTodos(state)
	switch (filter) {
		case 'all':
			return todos
		case 'active':
			return todos.filter(todo => !todo.completed)
		case 'completed':
			return todos.filter(todo => todo.completed)
		default:
			return todos
	}
}

export const selectFilteredDataReselect = createSelector(
	// [state => state.todoList.todoItems, state => state.filter],
	[selectTodos, selectFilter],
	(todos, filter) => {
		console.log('Доторкнулися до туду або фільтра')

		switch (filter) {
			case 'all':
				return todos
			case 'active':
				return todos.filter(todo => !todo.completed)
			case 'completed':
				return todos.filter(todo => todo.completed)
			default:
				return todos
		}
	}
)
