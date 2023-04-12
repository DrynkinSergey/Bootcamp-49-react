import React from 'react'
import {
	StyledInput,
	StyledLabel,
	StyledLoginForm,
	StyledTitle,
} from './LoginForm.styled'
import { StyledButton } from '../Counter/Counter.styled'

export class LoginForm extends React.Component {
	state = {
		username: '',
		email: '',
		password: '',
	}

	handleUsernameChange = event => {
		this.setState({ username: event.target.value })
	}

	handlePasswordChange = event => {
		this.setState({ password: event.target.value })
	}
	handleChange = event => {
		const { value, name } = event.target
		this.setState({ [name]: value })
	}

	handleSubmit = event => {
		event.preventDefault()
		console.log(this.state)
		this.setState({
			username: '',
			email: '',
			password: '',
		})
	}

	render() {
		return (
			<StyledLoginForm onSubmit={this.handleSubmit}>
				<StyledTitle>Login</StyledTitle>
				<StyledLabel>
					Name:
					<StyledInput
						type='text'
						name='username'
						value={this.state.username}
						onChange={this.handleChange}
					/>
				</StyledLabel>
				<br />
				<StyledLabel>
					Email:
					<StyledInput
						type='text'
						name='email'
						value={this.state.email}
						onChange={this.handleChange}
					/>
				</StyledLabel>
				<StyledLabel>
					Password:
					<StyledInput
						type='password'
						name='password'
						value={this.state.password}
						onChange={this.handleChange}
					/>
				</StyledLabel>
				<br />
				<StyledButton type='submit'>Login</StyledButton>
			</StyledLoginForm>
		)
	}
}
