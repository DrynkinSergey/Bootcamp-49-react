import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'
export const PublicRoute = ({ children }) => {
	const { online } = useSelector(state => state.auth)
	const location = useLocation()
	const fromPage = location.state?.from.pathname || '/'
	if (online) {
		return <Navigate to={fromPage} />
	}
	return children
}
