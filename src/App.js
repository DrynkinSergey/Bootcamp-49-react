import React, { Component } from 'react'
import { Employees } from './components/Employees/Employees'
import users from './assets/employee.json'
import Modal from './components/Modal'
import Banner from './components/Banner'

const USERS_KEY = 'users_key'

export class App extends Component {
	state = {
		users,
		filterStr: '',
		activeSkill: 'all',
		isOpen: false,
		showModal: false,
	}

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

	toggleModal = () => {
		this.setState(prevState => ({ showModal: !prevState.showModal }))
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
				<button onClick={this.toggleModal}>Open/close modal</button>
				<Banner />

				{showModal && (
					<Modal onClose={this.toggleModal} title='My modal'>
						<img
							style={{ width: '100%' }}
							src='https://d585tldpucybw.cloudfront.net/sfimages/default-source/blogs/templates/social/reactt-light_1200x628.png?sfvrsn=43eb5f2a_2'
							alt=''
						/>
					</Modal>
				)}

				<Employees
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
				/>
			</>
		)
	}
}
