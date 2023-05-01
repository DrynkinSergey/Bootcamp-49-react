import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { NavBar } from './NavBar'

export const Layout = () => {
	return (
		<>
			<NavBar />
			<main className='text-xl font-normal '>
				<Outlet />
			</main>
		</>
	)
}
