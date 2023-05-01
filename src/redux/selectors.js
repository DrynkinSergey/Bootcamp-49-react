import { createSelector } from '@reduxjs/toolkit'

export const selectTodos = state => state.tasks.items
export const selectLoading = state => state.tasks.loading
export const selectFilter = state => state.filter

export const selectTheme = createSelector([state => state.theme], theme => {
	return theme
})

export const selectUncompletedReselect = createSelector(
	[state => state.tasks.items],
	todos => {
		return todos.reduce(
			(total, todo) => (todo.completed ? total : total + 1),
			0
		)
	}
)

export const selectFilteredDataReselect = createSelector(
	[selectTodos, selectFilter],
	(todos, filter) => {
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
