import React from 'react'
import { Outlet } from 'react-router-dom'

export const Layout = () => {
	return (
		<div>
			<h1>
				Welcome, friend! You can click at my links above and go to view pages
			</h1>
			<Outlet fallback={null} />
		</div>
	)
}
