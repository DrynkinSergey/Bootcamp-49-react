import React from 'react'
import { Outlet } from 'react-router-dom'

export const Layout = () => {
	return (
		<div>
			<h1>Welcome</h1>
			<Outlet fallback={null} />
		</div>
	)
}
