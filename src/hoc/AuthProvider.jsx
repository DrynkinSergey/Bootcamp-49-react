import { createContext, useState } from 'react'

// 1. Створюємо контекст

export const Auth = createContext(null)

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null)
	// 2. Додаємо методи для авторизації та виходу

	const signIn = (newUser, callback) => {
		setUser(newUser)
		callback()
	}
	const signOut = callback => {
		setUser(null)
		callback()
	}

	// 3. Створюємо єдиний об'єкт для передачі в Аuth.Provider

	const value = { signIn, signOut, user }

	// 4. Йдемо до індекс, та огортаємо <App/>

	return <Auth.Provider value={value}>{children}</Auth.Provider>
}
