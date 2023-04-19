import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { ImageFinder } from './pages/ImageFinder'
import { Counter } from './pages/Counter/Counter'
import { ColorPicker } from './pages/ColorPicker/ColorPicker'
import { Posts } from './pages/Posts'
import { LoginForm } from './pages/LoginForm'
import { NavBar } from './components/NavBar'
import { Employees } from './components/Employees/Employees'

export const App = () => {
	return (
		<>
			<NavBar />
			<Routes>
				<Route index element={<Layout />} />
				<Route path='/imageFinder' element={<ImageFinder />} />
				<Route path='/counter' element={<Counter />} />
				<Route path='/posts' element={<Posts />} />
				<Route path='/users' element={<Employees />} />
				<Route
					path='/colorPicker'
					element={<ColorPicker title='Color PICKER' />}
				/>
				<Route path='/login' element={<LoginForm />} />
				<Route path='*' element={<h1>Not found</h1>} />
			</Routes>
		</>
	)
}
