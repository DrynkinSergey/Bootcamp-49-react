import React, { useEffect, useReducer, useRef } from 'react'
import { StyledButton, StyledCounter } from './Counter.styled'
import { Flex } from '../../styledComponents/Flex'
import axios from 'axios'

export const Counter = () => {
	const initialState = {
		counter: 1,
		step: 1,
		disableBtn: false,
	}

	const arr = [0, 1, 2]
	// console.log(1 && 0 && 2) // 0
	// console.log(1 && '' && true)
	// console.log(1 ?? 0)
	// console.log(arr[0] || 'default')

	//Оператор нульового злиття
	//Nullish Coalescing Operator
	console.log('' ?? 'default')
	console.log(null ?? 'default')
	console.log(0 ?? 'default')
	console.log(undefined ?? 'default')
	console.log(false || 'default')
	console.log(+'1')
	console.log(!!'')
	console.log(1 + Number('2'))

	// console.log('' || 'default')
	// console.log(arr[0] || 'default')
	// console.log(0 || 'default')
	// console.log(1 || 'default')
	// console.log(arr[0] ?? 'default')

	const counterReducer = (state, action) => {
		switch (action.type) {
			case 'increment':
				return {
					...state,
					counter: state.counter + state.step,
				}
			case 'decrement':
				return {
					...state,
					counter: state.counter - state.step,
				}
			case 'reset':
				return {
					...state,
					counter: 0,
				}
			case 'changeStep':
				return {
					...state,
					step: 4,
				}
			case 'resetStep':
				return {
					...state,
					step: 1,
				}
			case 'setStep10':
				return {
					...state,
					step: 10,
				}
			case 'setStep5':
				return {
					...state,
					step: 5,
				}

			default:
				break
		}
	}
	const [state, dispatch] = useReducer(counterReducer, initialState)
	// const [isFirstRender, setIsFirstRender] = useState(true)
	// const x = 10
	// let isFirstRender = true
	useEffect(() => {
		// if (isFirstRender.current) {
		// 	console.log('Відбувся перший рендер')
		// 	// setIsFirstRender(false)
		// 	isFirstRender.current = false
		// 	return
		// }
		// console.log('Відбувся другий і надалі рендер')
		// axios
		// 	.get('https://jsonplaceholder.typicode.com/todos')
		// 	.then(res => (res.data))
	}, [state.counter])

	const increment = () => {
		if (state.counter !== 10) {
			dispatch({ type: 'increment' })
		}
	}
	const decrement = () => {
		if (state.counter < -10) {
			dispatch({ type: 'setStep10' })
		}
		if (state.counter > 3) {
			dispatch({ type: 'setStep5' })
		}
		dispatch({ type: 'decrement' })
	}

	const reset = () => {
		dispatch({ type: 'reset' })
	}
	const { counter, disableBtn, step } = state
	return (
		<Flex center100vh>
			<StyledCounter>
				<h1>{counter}</h1>
				<h2>step: {step}</h2>
				<button onClick={() => dispatch({ type: 'changeStep' })}>
					step = 4
				</button>
				<button onClick={() => dispatch({ type: 'resetStep' })}>
					reset my step
				</button>
				{counter > 5 && <h3>Congratulation!!</h3>}
				<Flex gap='20px' justify='center'>
					<StyledButton onClick={decrement}>
						{disableBtn ? 'Error' : 'Minus'}
					</StyledButton>

					<StyledButton onClick={reset}>reset</StyledButton>
					<StyledButton disabled={counter === 10} onClick={increment}>
						{counter === 10 ? 'Error' : 'Plus'}
					</StyledButton>
				</Flex>
			</StyledCounter>
		</Flex>
	)
}
