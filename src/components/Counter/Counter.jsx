import React from 'react'
import { StyledButton, StyledCounter } from './Counter.styled'
import { Flex } from '../../styledComponents/Flex'

export const Counter = ({ counter }) => {
	return (
		<StyledCounter>
			<h1>{counter}</h1>
			<Flex gap='10px'>
				<StyledButton>minus</StyledButton>
				<StyledButton>reset</StyledButton>
				<StyledButton>plus</StyledButton>
			</Flex>
		</StyledCounter>
	)
}
