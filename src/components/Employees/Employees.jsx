import React, { useContext, useEffect, useMemo, useState } from 'react'
import { EmployeesFilter } from '../EmployeesFilter/EmployeesFilter'
import { EmployeeList } from '../EmployeeList/EmployeeList'
import { UsersContext } from '../../Context'

const USERS_KEY = 'users_key'

export const Employees = () => {
	const [users, setUsers] = useState([])
	const [filterStr, setFilterStr] = useState('')
	const [activeSkill, setActiveSkill] = useState('all')
	const [isOpenToWork, setIsOpenToWork] = useState(false)
	const [count, setCount] = useState(0)
	const [str, setStr] = useState('')
	const { users2 } = useContext(UsersContext)
	useEffect(() => {
		const usersFromLS = localStorage.getItem(USERS_KEY)
		JSON.parse(usersFromLS)?.length
			? setUsers(JSON.parse(usersFromLS))
			: setUsers(users2)
	}, [])

	useEffect(() => {
		localStorage.setItem(USERS_KEY, JSON.stringify(users))
	}, [users])

	const handleDelete = id => {
		setUsers(prev => prev.filter(user => user.id !== id))
	}

	const handleToggleCheckbox = () => {
		setIsOpenToWork(prev => !prev)
	}

	// const sum = useMemo(() => {
	// 	let res = 0
	// 	for (let i = 0; i < 1000000000; i++) {
	// 		res += i
	// 	}
	// 	console.log('Дані підраховано')
	// }, [isOpenToWork])
	const sum = useMemo(() => {
		let res = 0

		for (let i = 0; i < 1000000000; i++) {
			res += i
		}
		console.log('Дані підраховано')
	}, [count])
	// const sum = () => {
	// 	let res = 0
	// 	for (let i = 0; i < 1000000000; i++) {
	// 		res += i
	// 	}
	// 	console.log('Дані підраховано')
	// }
	// sum()
	// const applyFilters = (() => {
	// 	console.log('filter is done')
	// 	return users
	// 		.filter(user => {
	// 			if (isOpenToWork) {
	// 				return user.isOpenToWork === true
	// 			} else return user
	// 		})
	// 		.filter(user => {
	// 			if (activeSkill === 'all') {
	// 				return user
	// 			}
	// 			return user.skills.includes(activeSkill)
	// 		})
	// 		.filter(
	// 			user =>
	// 				user.name.toLowerCase().includes(filterStr.toLowerCase()) ||
	// 				user.email.toLowerCase().includes(filterStr.toLowerCase())
	// 		)
	// })()
	const applyFilters = useMemo(() => {
		return users
			.filter(user => {
				if (isOpenToWork) {
					return user.isOpenToWork === true
				} else return user
			})
			.filter(user => {
				if (activeSkill === 'all') {
					return user
				}
				return user.skills.includes(activeSkill)
			})
			.filter(
				user =>
					user.name.toLowerCase().includes(filterStr.toLowerCase()) ||
					user.email.toLowerCase().includes(filterStr.toLowerCase())
			)
	}, [activeSkill, filterStr, isOpenToWork, users])
	return (
		<div>
			<button style={{ fontSize: '2rem' }} onClick={() => setCount(count + 1)}>
				{count}
			</button>
			<input type='text' value={str} onChange={e => setStr(e.target.value)} />
			<EmployeesFilter
				onInputChange={handleToggleCheckbox}
				activeSkill={activeSkill}
				onChangeFilter={setFilterStr}
				onChangeSkill={setActiveSkill}
				isOpen={isOpenToWork}
				filterStr={filterStr}
			/>
			<EmployeeList users={applyFilters} onDelete={handleDelete} />
		</div>
	)
}
