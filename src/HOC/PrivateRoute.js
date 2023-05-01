import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'
import { selectUser } from '../redux/Auth/authSelectors'

export const PrivateRoute = ({ children }) => {
	const location = useLocation()

	const { name } = useSelector(selectUser)

	if (!name) {
		return <Navigate to='/login' state={{ from: location }} />
	}

	return children
}
