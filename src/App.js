import React from 'react'
import { CuteTodo } from './pages/Todo/CuteTodo'
import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import Home from './pages/Home'
import { LoginPage } from './pages/LoginPage'
import { RegistrationPage } from './pages/RegistrationPage'

export const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Home />} />
				<Route path='tasks' element={<CuteTodo />} />
				<Route path='login' element={<LoginPage />} />
				<Route path='registration' element={<RegistrationPage />} />
			</Route>
		</Routes>
	)
}
