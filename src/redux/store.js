import { counterReducer } from './Counter/counterSlice'
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { todoReducer } from './Todo/todoSlice'
import logger from 'redux-logger'
// redux-persist
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { userReducer } from './userSlice'

const persistConfig = {
	key: 'root',
	version: 1,
	storage,
	whitelist: ['todos'],
}
const persistedReducer = persistReducer(persistConfig, todoReducer)

const myLoggerMiddleware = store => next => action => {
	console.log('Hello from middleware', action)
	next(action)
}

const middleware = [
	...getDefaultMiddleware({
		serializableCheck: {
			ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
		},
	}),
	myLoggerMiddleware,
	logger,
]

export const store = configureStore({
	reducer: {
		users: userReducer,
		counter: counterReducer,
		todoList: persistedReducer,
	},

	middleware,
	devTools: process.env.NODE_ENV !== 'production',
})
export const persistor = persistStore(store)
