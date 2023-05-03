import { configureStore } from '@reduxjs/toolkit'
import { todoReducer } from './Todo/todoSlice'
import { filterReducer } from './Filter/filterSlice'
import { themeReducer } from './Theme/themeSlice'
import { authReducer } from './Auth/authSlice'
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
	key: 'token',
	version: 1,
	storage,
	whitelist: ['token'],
}

export const store = configureStore({
	reducer: {
		auth: persistReducer(persistConfig, authReducer),
		tasks: todoReducer,
		filter: filterReducer,
		theme: themeReducer,
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
