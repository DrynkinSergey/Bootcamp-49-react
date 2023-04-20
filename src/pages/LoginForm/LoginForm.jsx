import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import {
	StyledInput,
	StyledLabel,
	StyledLoginForm,
	StyledTitle,
} from './LoginForm.styled'
import { StyledButton } from '../Counter/Counter.styled'
import { Flex } from '../../styledComponents/Flex'
import { useToggle } from '../../hooks/useToggle'

//////////////   Відбувається створення початкового значення /////////////

const INITIAL_STATE = {
	username: '',
	email: '',
	password: '',
	age: '',
	gender: '',
}

export const LoginForm = () => {
	// state = INITIAL_STATE
	const [username, setUsername] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [age, setAge] = useState('')
	const [gender, setGender] = useState('')
	const [body, setBody] = useState({})

	useEffect(() => {
		console.log(`Username => ${username}, age =>${age}`)
	}, [username, age])

	useEffect(() => {
		if (age < 18 && age !== '') {
			console.log('Ти дуже малий ще')
		}
	}, [age])
	useEffect(() => {
		console.log('Hello')
	}, [])
	useEffect(() => {}, [])

	const mapState = {
		username: setUsername,
		email: setEmail,
		password: setPassword,
		age: setAge,
		gender: setGender,
	}
	// mapState.username(value)

	const handleSubmit = e => {
		e.preventDefault()
		setBody({ username, password, email, age, gender })
		setUsername('')
		setAge('')
		setEmail('')
		setGender('')
		setPassword('')

		// this.props.login(this.state)
		// this.setState(INITIAL_STATE)
	}

	const handleChange = e => {
		const { value, name } = e.target
		// console.log(e.target)
		// this.setState({ [name]: value })
		// mapState[name](value)

		switch (name) {
			case 'username':
				setUsername(value)
				break
			case 'email':
				setEmail(value)
				break
			case 'gender':
				setGender(value)
				break
			case 'age':
				setAge(value)
				break
			case 'password':
				setPassword(value)
				break
			default:
				break
		}
		// if (name === 'username') {
		// 	setUsername(value)
		// }

		// if (name === 'email') {
		// 	setEmail(value)
		// }

		// mapState[name](value)
	}

	// const { username, email, password, age, gender } = this.state
	return (
		<Flex center100vh>
			<StyledLoginForm onSubmit={handleSubmit}>
				<StyledTitle>Login</StyledTitle>
				<StyledLabel>
					Name:
					<StyledInput
						type='text'
						name='username'
						value={username}
						onChange={handleChange}
						// onChange={handleChangeName}
					/>
				</StyledLabel>
				<br />
				<StyledLabel>
					Email:
					<StyledInput
						type='text'
						name='email'
						value={email}
						onChange={handleChange}
						// onChange={handleChangeEmail}
					/>
				</StyledLabel>
				<br />

				<StyledLabel>
					Password:
					<StyledInput
						type='password'
						name='password'
						value={password}
						onChange={handleChange}
					/>
				</StyledLabel>

				<br />
				<StyledLabel>
					age:
					<StyledInput
						type='text'
						name='age'
						value={age}
						onChange={handleChange}
					/>
				</StyledLabel>

				<br />
				<StyledLabel>
					gender:
					<StyledInput
						type='text'
						name='gender'
						value={gender}
						onChange={handleChange}
					/>
				</StyledLabel>

				<br />
				<StyledButton type='submit'>Login</StyledButton>
			</StyledLoginForm>
		</Flex>
	)
}

// export class LoginForm extends React.Component {
// 	state = INITIAL_STATE

// 	handleSubmit = e => {
// 		e.preventDefault()

// 		this.props.login(this.state)

// 		this.setState(INITIAL_STATE)
// 	}

// 	handleChange = e => {
// 		const { value, name } = e.target
// 		console.log(e.target)
// 		this.setState({ [name]: value })
// 	}

// 	render() {
// 		const { username, email, password, age, gender } = this.state
// 		return (
// 			<Flex center100vh>
// 				<StyledLoginForm onSubmit={this.handleSubmit}>
// 					<StyledTitle>Login</StyledTitle>
// 					<StyledLabel>
// 						Name:
// 						<StyledInput
// 							type='text'
// 							name='username'
// 							value={username}
// 							onChange={this.handleChange}
// 							// onChange={this.handleChangeName}
// 						/>
// 					</StyledLabel>
// 					<br />
// 					<StyledLabel>
// 						Email:
// 						<StyledInput
// 							type='text'
// 							name='email'
// 							value={email}
// 							onChange={this.handleChange}
// 							// onChange={this.handleChangeEmail}
// 						/>
// 					</StyledLabel>
// 					<br />

// 					<StyledLabel>
// 						Password:
// 						<StyledInput
// 							type='password'
// 							name='password'
// 							value={password}
// 							onChange={this.handleChange}
// 						/>
// 					</StyledLabel>

// 					<br />
// 					<StyledLabel>
// 						age:
// 						<StyledInput
// 							type='text'
// 							name='age'
// 							value={age}
// 							onChange={this.handleChange}
// 						/>
// 					</StyledLabel>

// 					<br />
// 					<StyledLabel>
// 						gender:
// 						<StyledInput
// 							type='text'
// 							name='gender'
// 							value={gender}
// 							onChange={this.handleChange}
// 						/>
// 					</StyledLabel>

// 					<br />
// 					<StyledButton type='submit'>Login</StyledButton>
// 				</StyledLoginForm>
// 			</Flex>
// 		)
// 	}
// }
