import React, { useContext, useEffect, useState } from 'react'
import { EmployeesFilter } from '../EmployeesFilter/EmployeesFilter'
import { EmployeeList } from '../EmployeeList/EmployeeList'
import { UsersContext } from '../../Context'

const USERS_KEY = 'users_key'

export const Employees = () => {
	const [users2, setUsers] = useState([])
	const [filterStr, setFilterStr] = useState('')
	const [activeSkill, setActiveSkill] = useState('all')
	const [isOpenToWork, setIsOpenToWork] = useState(false)
	const { users } = useContext(UsersContext)
	useEffect(() => {
		const usersFromLS = localStorage.getItem(USERS_KEY)
		JSON.parse(usersFromLS)?.length
			? setUsers(JSON.parse(usersFromLS))
			: setUsers(users)
	}, [])

	useEffect(() => {
		localStorage.setItem(USERS_KEY, JSON.stringify(users))
	}, [users])

	//null?.length
	//[213,12,1]?.length
	// componentDidMount() {
	// 	const usersFromLS = localStorage.getItem(USERS_KEY)
	// 	if (JSON.parse(usersFromLS)?.length) {
	// 		this.setState({ users: JSON.parse(usersFromLS) })
	// 	} else {
	// 		this.setState({ users })
	// 	}
	// }
	// componentDidUpdate(prevProps, prevState) {
	// 	if (prevState.users.length !== this.state.users.length) {
	// 		// console.log('PrevState =>>>> ', prevState.users.length)
	// 		// console.log('state =>>>> ', this.state.users.length)
	// 		console.log('Дані записані')
	// 		localStorage.setItem(USERS_KEY, JSON.stringify(this.state.users))
	// 	}
	// }

	const handleDelete = id => {
		setUsers(prev => prev.filter(user => user.id !== id))
	}

	const handleToggleCheckbox = () => {
		setIsOpenToWork(prev => !prev)
	}

	const applyFilters = () => {
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
	}
	return (
		<div>
			<EmployeesFilter
				onInputChange={handleToggleCheckbox}
				activeSkill={activeSkill}
				onChangeFilter={setFilterStr}
				onChangeSkill={setActiveSkill}
				isOpen={isOpenToWork}
				filterStr={filterStr}
			/>
			<EmployeeList users={applyFilters()} onDelete={handleDelete} />
		</div>
	)
}
