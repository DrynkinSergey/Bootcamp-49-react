import React from 'react'
import { LoginForm } from './components/LoginForm/LoginForm'
import { Flex } from './styledComponents/Flex'

export const App = () => {
	return (
		<Flex center100vh>
			<LoginForm />
		</Flex>
	)
}
