import React, { useState } from 'react'
import { StyledButton, StyledCounter } from './Counter.styled'
import { Flex } from '../../styledComponents/Flex'
import { useSelector, useDispatch } from 'react-redux'
import {
	minusAC,
	plusAC,
	resetAC,
	setStepAC,
} from './../../redux/Counter/actions'
export const Counter = () => {
	const { count, secretStep, step } = useSelector(state => state.counter) // отримує данні з редаксу
	const dispatch = useDispatch() // вказує що змінити в редаксі (action)
	// action - завжди об'єкт =>>>>  {type:'INCREMENT', payload}
	const [value, setValue] = useState(1)
	return (
		<Flex center100vh>
			<StyledCounter>
				<h2>Step: {step}</h2>

				<input type='text' onChange={e => setValue(e.target.value)} />
				<h1>{count}</h1>
				<Flex gap='10px' justify='space-between'>
					<StyledButton onClick={() => dispatch(minusAC())}>minus</StyledButton>
					<StyledButton onClick={() => dispatch(resetAC())}>
						{' '}
						reset{' '}
					</StyledButton>
					<StyledButton onClick={() => dispatch(plusAC())}>plus</StyledButton>
					<StyledButton onClick={() => dispatch(setStepAC(count))}>
						SET STEP
					</StyledButton>
				</Flex>
			</StyledCounter>
		</Flex>
	)
}
