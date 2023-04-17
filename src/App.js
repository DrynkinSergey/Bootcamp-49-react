import React, { Component } from 'react'
import { Employees } from './components/Employees/Employees'
import users from './assets/employee.json'
import Modal from './components/Modal'

const USERS_KEY = 'users_key'

export class App extends Component {
	state = {
		users,
		filterStr: '',
		activeSkill: 'all',
		isOpen: false,
		showModal: false,
	}

	componentDidMount() {
		const usersFromLS = localStorage.getItem(USERS_KEY)
		if (JSON.parse(usersFromLS)?.length) {
			this.setState({ users: JSON.parse(usersFromLS) })
		}
	}
	componentDidUpdate(prevProps, prevState) {
		if (prevState.users.length !== this.state.users.length) {
			// console.log('PrevState =>>>> ', prevState.users.length)
			// console.log('state =>>>> ', this.state.users.length)
			console.log('Дані записані')
			localStorage.setItem(USERS_KEY, JSON.stringify(this.state.users))
		}
	}

	////////////////////////     Видалення користувача по ід      //////////////////////////
	handleDelete = id => {
		this.setState({ users: this.state.users.filter(user => user.id !== id) })
	}

	////////////////////////     Зміна фільтру і запис до стейту     //////////////////////////

	handleSetFilter = filterStr => {
		this.setState({ filterStr })
	}

	////////////////////////     Зміна радіо баттону     //////////////////////////

	handleChangeSkill = activeSkill => {
		this.setState({ activeSkill })
	}
	////////////////////////    Функція, котра робить фільтр від умов     //////////////////////////

	handleToggleCheckbox = () => {
		this.setState({ isOpen: !this.state.isOpen })
	}

	applyFilters = () => {
		////////////////////////   Якщо по дефолту олл, тоді не виконуй пошук по скіллам а покажи всіх     //////////////////////////

		return this.state.users
			.filter(user => {
				if (this.state.isOpen) {
					return user.isOpenToWork === true
				} else return user
			})
			.filter(user => {
				if (this.state.activeSkill === 'all') {
					return user
				}
				return user.skills.includes(this.state.activeSkill)
			})
			.filter(
				////////////////////////   Перевірка і фільтр по емейлу та імені    //////////////////////////
				user =>
					user.name
						.toLowerCase()
						.includes(this.state.filterStr.toLowerCase()) ||
					user.email.toLowerCase().includes(this.state.filterStr.toLowerCase())
			)
	}
	render() {
		const { isOpen, filterStr, activeSkill, showModal } = this.state
		return (
			<>
				<button>Open/close modal</button>
				{/* <Employees
					////////////////////////   Прокидаємо юзерів відфільтрованих, викликом функції    //////////////////////////

					users={this.applyFilters()}
					////////////////////////   Прокидаємо всі  функції   //////////////////////////
					isOpen={isOpen}
					filterStr={filterStr}
					activeSkill={activeSkill}
					onInputChange={this.handleToggleCheckbox}
					onChangeFilter={this.handleSetFilter}
					onDelete={this.handleDelete}
					onChangeSkill={this.handleChangeSkill}
				/> */}
			</>
		)
	}
}
