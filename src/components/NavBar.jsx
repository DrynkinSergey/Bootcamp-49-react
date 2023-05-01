import React from 'react'
import { NavLink } from 'react-router-dom'

export const NavBar = () => {
	return (
		<header className='text-2xl text-white font-bold py-2 px-8 border-b-2 border-white/10 bg-darkMain flex justify-between gap-6'>
			<div className='flex gap-4 '>
				<NavLink className='hover:text-[#3258f0]' to='/'>
					Home
				</NavLink>
				<NavLink className='hover:text-[#3258f0]' to='/tasks'>
					Tasks
				</NavLink>
				<NavLink className='hover:text-[#3258f0]' to='/login'>
					login
				</NavLink>{' '}
				|
				<NavLink className='hover:text-[#3258f0]' to='/registration'>
					signUp
				</NavLink>
			</div>
			<div className='flex gap-4'>
				<h1>
					Welcome, <span className='text-[#3258f0]'>name</span>
				</h1>
				<button className='border text-md px-2 hover:bg-[#e605ff] bg-[#b439c2] rounded-md'>
					Exit
				</button>
			</div>
		</header>
	)
}
