import React from 'react'
import PropTypes from 'prop-types'
import {
	StyledInput,
	StyledLabel,
	StyledLoginForm,
	StyledTitle,
} from './LoginForm.styled'
import { StyledButton } from '../Counter/Counter.styled'
import { Flex } from '../../styledComponents/Flex'

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

	handleSubmit = e => {
		e.preventDefault()

		this.props.login(this.state)

		this.setState(INITIAL_STATE)
	}

	handleChange = e => {
		const { value, name } = e.target
		console.log(e.target)
		this.setState({ [name]: value })
	}

	render() {
		const { username, email, password, age, gender } = this.state
		return (
			<Flex center100vh>
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
			</Flex>
		)
	}
}
