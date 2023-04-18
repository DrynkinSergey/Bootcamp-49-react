import React, { Component } from 'react'
import { Countries } from './components/Countries/Countries'
import { LoginForm, Posts } from './components'

export class App extends Component {
	render() {
		return (
			<>
				<LoginForm />
				<Posts />
			</>
		)
	}
}
