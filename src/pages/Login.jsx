import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import styled from 'styled-components'

const Login = () => {
	const navigate = useNavigate()
	const location = useLocation()
	console.log(location)
	const { signIn } = useAuth()
	const handleSubmit = e => {
		e.preventDefault()
		const form = e.target
		const user = form.userName.value
		if (user) {
			signIn(user, () => navigate(location.state.from.pathname ?? '/'))
		}

		// <Navigate to='/users'/> не можна
	}
	return (
		<LoginWrapper>
			<div>
				<h1>Login page</h1>
				<form onSubmit={handleSubmit}>
					<input type='text' name='userName' />
					<button>Login</button>
				</form>
			</div>
		</LoginWrapper>
	)
}

export default Login

const LoginWrapper = styled.div`
	min-height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
`
