import React from 'react'
import PropTypes from 'prop-types'
import {
	StyledInput,
	StyledLabel,
	StyledLoginForm,
	StyledTitle,
} from './LoginForm.styled'
import { StyledButton } from '../Counter/Counter.styled'

//////////////   Відбувається створення початкового значення /////////////

const INITIAL_STATE = {
	username: '',
	email: '',
	password: '',
	age: '',
	gender: '',
}

export class LoginForm extends React.Component {
	state = INITIAL_STATE
	static propTypes = {
		login: PropTypes.func.isRequired,
	}
	handleSubmit = e => {
		e.preventDefault()
		////////// не контрольована форма ///////////////////
		// const form = e.target
		// const name = form.elements.username.value
		// const password = form.elements.password.value
		// const email = form.elements.email.value
		// console.log(`Name: ${name}, password: ${password}, email: ${email}`)

		//////////////   Контрольована форма  /////////////
		this.props.login(this.state)

		//////////////   Скидуємо стейт до початкового значення /////////////
		//////////////   Або так /////////////

		// this.setState({
		// 	username: '',
		// 	email: '',
		// 	password: '',
		// 	age: '',
		// 	gender: '',
		// })
		//
		//
		//////////////   Або так /////////////
		this.setState(INITIAL_STATE)
		// =>>>>>>>>>>>>>
		// INITIAL_STATE
		// {
		// 	username: '',
		// 	email: '',
		// 	password: '',
		// 	age: '',
		// 	gender: '',
		// }
	}

	//////////////   Багато однотипних обробників  /////////////
	//
	// handleChangeName = e => {
	// 	this.setState({ username: e.target.value })
	// }
	// handleChangePassword = e => {
	// 	this.setState({ password: e.target.value })
	// }
	// handleChangeEmail = e => {
	// 	this.setState({ email: e.target.value })
	// }
	//
	//////////////   ОДин універсальний  /////////////

	handleChange = e => {
		const { value, name } = e.target
		console.log(e.target)
		this.setState({ [name]: value })

		////////////   Те ж саме, що й написано зверху, але змінюється одне поле /////////////
		// this.setState({ username: e.target.value })
		// this.setState({ password: e.target.value })
		// this.setState({ age: e.target.value })
	}

	render() {
		const { username, email, password, age, gender } = this.state
		return (
			<StyledLoginForm onSubmit={this.handleSubmit}>
				<StyledTitle>Login</StyledTitle>
				<StyledLabel>
					Name:
					<StyledInput
						type='text'
						name='username'
						value={username}
						onChange={this.handleChange}
						// onChange={this.handleChangeName}
					/>
				</StyledLabel>
				<br />
				<StyledLabel>
					Email:
					<StyledInput
						type='text'
						name='email'
						value={email}
						onChange={this.handleChange}
						// onChange={this.handleChangeEmail}
					/>
				</StyledLabel>
				<br />

				<StyledLabel>
					Password:
					<StyledInput
						type='password'
						name='password'
						value={password}
						onChange={this.handleChange}
					/>
				</StyledLabel>

				<br />
				<StyledLabel>
					age:
					<StyledInput
						type='text'
						name='age'
						value={age}
						onChange={this.handleChange}
					/>
				</StyledLabel>

				<br />
				<StyledLabel>
					gender:
					<StyledInput
						type='text'
						name='gender'
						value={gender}
						onChange={this.handleChange}
					/>
				</StyledLabel>

				<br />
				<StyledButton type='submit'>Login</StyledButton>
			</StyledLoginForm>
		)
	}
}
