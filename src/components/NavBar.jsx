import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { selectUser } from '../redux/Auth/authSelectors'
import { logoutThunk } from '../redux/Auth/authOperations'

export const NavBar = () => {
	const { name } = useSelector(selectUser)
	const dispatch = useDispatch()
	return (
		<header className='text-2xl text-white font-bold py-2 px-8 border-b-2 border-white/10 bg-darkMain flex justify-between gap-6'>
			<div className='flex gap-4 '>
				<NavLink className='hover:text-[#3258f0]' to='/'>
					Home
				</NavLink>
				<NavLink className='hover:text-[#3258f0]' to='/tasks'>
					Tasks
				</NavLink>
			</div>

			<div className='flex gap-4'>
				{!name && (
					<>
						<NavLink className='hover:text-[#3258f0]' to='/login'>
							login
						</NavLink>{' '}
						|
						<NavLink className='hover:text-[#3258f0]' to='/registration'>
							signUp
						</NavLink>
					</>
				)}
				{name && (
					<>
						<h1>
							Welcome, <span className='text-[#3258f0]'>{name}</span>
						</h1>

						<button
							onClick={() => dispatch(logoutThunk())}
							className='border text-md px-2 hover:bg-[#e605ff] bg-[#b439c2] rounded-md'
						>
							Exit
						</button>
					</>
				)}
			</div>
		</header>
	)
}
