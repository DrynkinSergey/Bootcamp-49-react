// export const ADD_TODO = 'add_todo'
// export const DELETE_TODO = 'delete_todo'
// export const TOGGLE_TODO = 'toggle_todo'

import { createAction } from '@reduxjs/toolkit'

// export const addTodoAC = todo => ({ type: ADD_TODO, payload: todo })
// export const deleteTodoAC = id => ({ type: DELETE_TODO, payload: id })
// export const toggleTodoAC = id => ({ type: TOGGLE_TODO, payload: id })

export const addTodoAC = createAction('todos/addTodo')
export const deleteTodoAC = createAction('todos/deleteTodo')
export const toggleTodoAC = createAction('todos/toggleTodo')
