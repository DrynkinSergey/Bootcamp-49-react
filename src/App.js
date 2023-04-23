import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { NavBar } from './components/NavBar'

export const App = () => {
	return (
		<>
			<Routes>
				<Route index element={<Layout />} />
			</Routes>
		</>
	)
}
