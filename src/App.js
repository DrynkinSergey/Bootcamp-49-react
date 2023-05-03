import React, { useEffect } from 'react'
import { CuteTodo } from './pages/Todo/CuteTodo'
import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import Home from './pages/Home'
import { LoginPage } from './pages/LoginPage'
import { RegistrationPage } from './pages/RegistrationPage'
import { PrivateRoute } from './HOC/PrivateRoute'
import { PublicRoute } from './HOC/PublicRoute'
import { useDispatch, useSelector } from 'react-redux'
import { refreshThunk } from './redux/Auth/authOperations'
import { selectUserLoading } from './redux/selectors'

export const App = () => {
	const dispatch = useDispatch()
	const isLoading = useSelector(selectUserLoading)
	useEffect(() => {
		dispatch(refreshThunk())
	}, [dispatch])
	return isLoading ? (
		<div className='flex h-screen justify-center items-center font-josefin text-blue-600 bg-darkMain shadow-mainDark'>
			<h1>Loading...</h1>
		</div>
	) : (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Home />} />
				<Route
					path='about'
					element={
						<PrivateRoute>
							<h1>About</h1>
						</PrivateRoute>
					}
				/>
				<Route
					path='tasks'
					element={
						<PrivateRoute>
							<CuteTodo />
						</PrivateRoute>
					}
				/>
				<Route
					path='login'
					element={
						<PublicRoute>
							<LoginPage />
						</PublicRoute>
					}
				/>
				<Route
					path='registration'
					element={
						<PublicRoute>
							<RegistrationPage />
						</PublicRoute>
					}
				/>
			</Route>
		</Routes>
	)
}
