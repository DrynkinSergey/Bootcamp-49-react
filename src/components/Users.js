import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setFilter, setUsers } from '../redux/userSlice'
import { selectFilterdData } from '../redux/userSelectors'

const Users = () => {
	const dispatch = useDispatch()

	const filteredData = useSelector(selectFilterdData)

	useEffect(() => {
		axios
			.get('https://jsonplaceholder.typicode.com/users')
			.then(res => dispatch(setUsers(res.data)))
	}, [dispatch])
	return (
		<div className='min-h-screen flex-col flex justify-center p-5'>
			<div className='border-2 shadow-lg  w-1/2 mx-auto  items-center py-10'>
				<form className='bg-orange-300 p-5 '>
					<input
						onChange={e => dispatch(setFilter(e.target.value))}
						className='mx-auto block '
						type='text'
					/>
				</form>
				<ul>
					{filteredData.map((user, index) => (
						<li
							className='hover:text-indigo-700 hover:cursor-pointer'
							key={user.id}
						>
							<span>
								{index + 1}. {user.name}
							</span>
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}

export default Users
