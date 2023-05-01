import React from 'react'
import { useDispatch } from 'react-redux'
export const RegistrationPage = () => {
	const dispatch = useDispatch()

	const handleSubmit = e => {
		e.preventDefault()
		const form = e.target
		const name = form.name.value
		const email = form.email.value
		const password = form.password.value
	}
	return (
		<div>
			<h1>Registration</h1>
			<form className='flex gap-2 flex-col w-1/4 p-4' onSubmit={handleSubmit}>
				<input className='border' name='name' type='text' placeholder='name' />
				<input
					className='border'
					name='email'
					type='text'
					placeholder='email'
				/>
				<input
					className='border'
					name='password'
					type='password'
					placeholder='password'
				/>
				<button className='border'>SignUP</button>
			</form>
		</div>
	)
}
