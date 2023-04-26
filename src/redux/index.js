import { combineReducers, createStore } from 'redux'
import { countReducer } from './Counter/reducer'
import { todoReducer } from './Todo/reducer'

// 1 rootReducer - створюємо один редьюсер

const rootReducer = combineReducers({
	counter: countReducer,
	todoList: todoReducer,
})
export const store = createStore(
	// 2 передаємо рутРедьюсер до нашого стору
	rootReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
