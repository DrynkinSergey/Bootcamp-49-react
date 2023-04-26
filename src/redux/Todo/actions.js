export const ADD_TODO = 'add_todo'
export const DELETE_TODO = 'delete_todo'
export const TOGGLE_TODO = 'toggle_todo'

export const addTodoAC = todo => ({ type: ADD_TODO, payload: todo })
export const deleteTodoAC = id => ({ type: DELETE_TODO, payload: id })
export const toggleTodoAC = id => ({ type: TOGGLE_TODO, payload: id })
