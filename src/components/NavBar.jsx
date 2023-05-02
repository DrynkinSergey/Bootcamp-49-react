import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useLocation } from 'react-router-dom'
import { selectIsOnline, selectUser } from '../redux/selectors'
import { logoutThunk } from '../redux/Auth/authOperations'

export const NavBar = () => {
	const isOnline = useSelector(selectIsOnline)
	const { name, email } = useSelector(selectUser)
	const dispatch = useDispatch()
	const location = useLocation()
	useEffect(() => {
		document.title = `Bootcamp 49 | ${
			location.pathname.slice(1).toUpperCase() || 'home'.toUpperCase()
		}`
	}, [location])
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

			{isOnline ? (
				<div className='flex gap-4'>
					<h1>
						Welcome, <span className='text-[#3258f0]'>{email}</span>
					</h1>
					<button
						onClick={() => dispatch(logoutThunk())}
						className='border text-md px-2 hover:bg-[#e605ff] bg-[#b439c2] rounded-md'
					>
						Exit
					</button>
				</div>
			) : (
				<div>
					<NavLink className='hover:text-[#3258f0]' to='/login'>
						<span>login</span>
					</NavLink>{' '}
					|
					<NavLink className='hover:text-[#3258f0]' to='/registration'>
						<span> signUp</span>
					</NavLink>
				</div>
			)}
		</header>
	)
}
