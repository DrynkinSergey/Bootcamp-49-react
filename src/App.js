import React, { Component } from 'react'
import { LoginForm } from './components/LoginForm/LoginForm'
import { Flex } from './styledComponents/Flex'
import { Employees } from './components/Employees/Employees'

export class App extends Component {
	login = data => {
		console.log(`Congratulation!!! ${data.username}`)
	}
	render() {
		return (
			<>
				<Flex center100vh>
					<LoginForm login={this.login} />
				</Flex>
			</>
		)
	}
}
