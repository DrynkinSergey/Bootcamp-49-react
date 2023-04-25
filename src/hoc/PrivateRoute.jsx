import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

const PrivateRoute = ({ children }) => {
	const location = useLocation()
	// Імпортуємо нашого юзера з контексту за допомогою хука useAuth
	const { user } = useAuth()

	if (!user) {
		return <Navigate to='/login' state={{ from: location }} />
	}

	return children
}

export default PrivateRoute
