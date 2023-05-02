import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginThunk } from '../redux/Auth/authOperations'
import { useNavigate } from 'react-router-dom'
import { selectUserLoading } from '../redux/selectors'
export const LoginPage = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const isLoadingUser = useSelector(selectUserLoading)
	const handleSubmit = e => {
		e.preventDefault()
		const form = e.target
		const email = form.email.value
		const password = form.password.value
		dispatch(loginThunk({ email, password }))
			.then(() => navigate('/tasks'))
			.catch(() => alert('Try again'))
		form.reset()
	}
	if (isLoadingUser) {
		return (
			<div className='flex justify-center items-center h-screen bg-darkMain'>
				<h1 className='text-white text-4xl'>Loading...</h1>
			</div>
		)
	}
	return (
		<div className='flex justify-center items-center h-screen bg-darkMain'>
			<form

				className='flex gap-6 text-white flex-col w-1/3 p-10 border-blue-600 border-2 rounded-lg'
				onSubmit={handleSubmit}
			>
				<h1 className='text-center text-2xl'>Login Form</h1>
				<input
					className='border px-2 text-black'
					name='email'
					placeholder='Email...'
					type='text'
				/>
				<input
					className='border px-2 text-black'
					name='password'
					placeholder='Password...'
					type='password'
				/>
				<button className='border bg-blue-600 rounded-md'>Login</button>
			</form>
		</div>
	)
}
