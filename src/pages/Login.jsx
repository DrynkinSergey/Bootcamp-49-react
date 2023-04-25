import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

const Login = () => {
	const navigate = useNavigate()
	const location = useLocation()
	const { signIn } = useAuth()
	console.log(location)
	const handleSubmit = e => {
		e.preventDefault()
		const form = e.target
		const user = form.userName.value
		if (user) {
			signIn(user, () => navigate(location.state.from.pathname))
		}

		// <Navigate to='/users'/> не можна
	}
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input type='text' name='userName' />
				<button>Login</button>
			</form>
		</div>
	)
}

export default Login