import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
	const navigate = useNavigate()

	const login = () => {
		console.log('User is loggedIn')
		navigate('/users')
		// <Navigate to='/users'/> не можна
	}
	return (
		<div>
			<button onClick={login}>Login</button>
		</div>
	)
}

export default Login
