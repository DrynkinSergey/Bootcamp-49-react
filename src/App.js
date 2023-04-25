import React, { Suspense, lazy } from 'react'
import { Layout } from './components/Layout'
import { Route, Routes, Navigate } from 'react-router-dom'
import NotFound from './pages/NotFound'
import Home from './pages/Home'
import User from './pages/User'
import { Adress } from './pages/Adress'
import Login from './pages/Login'
import PrivateRoute from './hoc/PrivateRoute'
import PublicRoute from './hoc/PublicRoute'

const Users = lazy(() => import('./pages/Users'))
const ImageFinder = lazy(() => import('./pages/ImageFinder'))
const Posts = lazy(() => import('./pages/Posts'))

export const App = () => {
	return (
		<Suspense fallback={null}>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Home />} />
					<Route path='about' element={<h1>Hello, about</h1>} />
					<Route path='posts' element={<Posts />} />
					<Route path='users' element={<Users />} />
					<Route path='users-list' element={<Navigate to='/users' />} />
					<Route path='users/:id' element={<User />}>
						<Route
							index
							element={<h1> Натисни на кнопку подивитись пости</h1>}
						/>
						<Route
							path='posts'
							element={
								<PrivateRoute>
									<Posts />
								</PrivateRoute>
							}
						/>
						<Route path='adress' element={<Adress />} />
					</Route>

					<Route
						path='imageFinder'
						element={
							<PrivateRoute>
								<ImageFinder />
							</PrivateRoute>
						}
					/>
					<Route
						path='login'
						element={
							<PublicRoute>
								<Login />
							</PublicRoute>
						}
					/>

					<Route path='*' element={<NotFound />} />
				</Route>
			</Routes>
		</Suspense>
	)
}
