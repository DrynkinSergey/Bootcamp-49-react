import { Navigate, useLocation } from 'react-router-dom'

export const PrivateRoute = ({ children }) => {
	const location = useLocation()

	const user = false

	if (!user) {
		return <Navigate to='/login' state={{ from: location }} />
	}

	return children
}
