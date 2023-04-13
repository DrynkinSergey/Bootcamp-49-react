import React, { Component } from 'react'
import { Employees } from './components/Employees/Employees'
import usersJson from './assets/employee.json'

export class App extends Component {
	state = {
		users: usersJson,
	}
	handleDelete = id => {
		console.log(id)
	}
	render() {
		const { users } = this.state
		return (
			<>
				<Employees users={users} onDelete={this.handleDelete} />
			</>
		)
	}
}
