import React, { Component } from 'react'
import { Employees } from './components/Employees/Employees'
import usersJson from './assets/employee.json'

export class App extends Component {
	state = {
		users: usersJson,
		filterStr: '',
		activeSkill: 'all',
	}
	handleDelete = id => {
		this.setState({ users: this.state.users.filter(user => user.id !== id) })
	}
	handleSetFilter = filterStr => {
		this.setState({ filterStr })
	}
	handleChangeSkill = activeSkill => {
		this.setState({ activeSkill })
	}
	render() {
		const { users, filterStr, activeSkill } = this.state
		const filteredData = users
			.filter(user => user.skills.includes(activeSkill))
			.filter(
				user =>
					user.name.toLowerCase().includes(filterStr.toLowerCase()) ||
					user.email.toLowerCase().includes(filterStr.toLowerCase())
			)

		return (
			<>
				<Employees
					users={filteredData}
					activeSkill={activeSkill}
					onChangeFilter={this.handleSetFilter}
					onDelete={this.handleDelete}
					onChangeSkill={this.handleChangeSkill}
				/>
			</>
		)
	}
}
