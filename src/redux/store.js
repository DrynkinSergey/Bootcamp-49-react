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

const persistConfig = {
	key: 'root',
	version: 1,
	storage,
	// blacklist: ['filter'],
	whitelist: ['todos'],
}
const persistedReducer = persistReducer(persistConfig, todoReducer)

const middleware = [
	...getDefaultMiddleware({
		serializableCheck: {
			ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
		},
	}),
	logger,
]

export const store = configureStore({
	reducer: {
		todoList: persistedReducer,
	},

	middleware,
	devTools: process.env.NODE_ENV !== 'production',
})
export const persistor = persistStore(store)
