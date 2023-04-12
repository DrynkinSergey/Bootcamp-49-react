import React from 'react'
import {
	StyledInput,
	StyledLabel,
	StyledLoginForm,
	StyledTitle,
} from './LoginForm.styled'
import { StyledButton } from '../Counter/Counter.styled'

export class LoginForm extends React.Component {
	render() {
		return (
			<StyledLoginForm onSubmit={this.handleSubmit}>
				<StyledTitle>Login</StyledTitle>
				<StyledLabel>
					Name:
					<StyledInput type='text' name='username' />
				</StyledLabel>
				<br />

				<StyledLabel>
					Password:
					<StyledInput type='password' name='password' />
				</StyledLabel>
				<br />
				<StyledButton type='submit'>Login</StyledButton>
			</StyledLoginForm>
		)
	}
}
