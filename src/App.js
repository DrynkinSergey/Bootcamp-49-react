import React from 'react'
import { Layout } from './components/Layout'
import { Route, Routes, Navigate } from 'react-router-dom'
import NotFound from './pages/NotFound'
import { ImageFinder } from './pages/ImageFinder'
import Home from './pages/Home'
import Users from './pages/Users'
import User from './pages/User'
import Posts from './pages/Posts'
import Adress from './pages/Adress'
import Login from './pages/Login'

export const App = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Home />} />
					<Route path='about' element={<h1>Hello, about</h1>} />
					<Route path='users' element={<Users />} />
					<Route path='users-list' element={<Navigate to='/users' />} />
					<Route path='users/:id' element={<User />}>
						<Route
							index
							element={<h1> Натисни на кнопку подивитись пости</h1>}
						/>
						<Route path='posts' element={<Posts />} />
						<Route path='adress' element={<Adress />} />
					</Route>

					<Route path='imageFinder' element={<ImageFinder />} />
					<Route path='login' element={<Login />} />

					<Route path='*' element={<NotFound />} />
				</Route>
			</Routes>
		</>
	)
}
