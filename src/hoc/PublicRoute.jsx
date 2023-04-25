import { Navigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

const PublicRoute = ({ children }) => {
	// Імпортуємо нашого юзера з контексту за допомогою хука useAuth
	const { user } = useAuth()
	if (user) {
		return <Navigate to='/' />
	}
	return children
}
export default PublicRoute
