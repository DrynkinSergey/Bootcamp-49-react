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
		<div className='flex justify-center items-center h-screen bg-darkMain'>
			<form
				className='flex gap-6 text-white flex-col w-1/3 p-10 border-blue-600 border-2 rounded-lg'
				onSubmit={handleSubmit}
			>
				<h1 className='text-center text-2xl'>Registration form </h1>
				<input
					className='border px-2 text-black'
					name='name'
					type='text'
					placeholder='Name...'
				/>
				<input
					className='border px-2 text-black'
					name='email'
					autoComplete='off'
					type='text'
					placeholder='Email...'
				/>
				<input
					className='border px-2 text-black'
					name='password'
					type='password'
					placeholder='Password...'
				/>
				<button className='border bg-blue-600 rounded-md'>SignUP</button>
			</form>
		</div>
	)
}
