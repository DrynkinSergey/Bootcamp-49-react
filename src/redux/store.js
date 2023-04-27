import { counterReducer } from './Counter/counterSlice'
import { configureStore } from '@reduxjs/toolkit'
import { todoReducer } from './Todo/todoSlice'
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
	// blacklist: ['filter'],
	whitelist: ['todos'],
}
const persistedReducer = persistReducer(persistConfig, todoReducer)

export const store = configureStore({
	reducer: {
		users: userReducer,
		counter: counterReducer,
		todoList: persistedReducer,
	},

	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
	devTools: process.env.NODE_ENV !== 'production',
})
export const persistor = persistStore(store)
