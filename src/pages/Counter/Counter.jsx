import React, { useContext, useReducer, useState } from 'react'
import { StyledButton, StyledCounter } from './Counter.styled'
import { Flex } from '../../styledComponents/Flex'
import { UsersContext } from '../..'

export const Counter = () => {
	// const [counter, setCounter] = useState(0)
	// const [step, setStep] = useState(1)
	// const [disableBtn] = useState(false)

	// const [state, setState] = useState({
	// 	counter: 1,
	// 	step: 1,
	// 	disableBtn: false,
	// })

	const initialState = {
		counter: 1,
		step: 1,
		disableBtn: false,
	}
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

// export class Counter extends React.Component {
// 	state = {
// 		counter: 1,
// 		step: 1,
// 		disableBtn: false,
// 	}

// 	static propTypes = {
// 		counter: PropTypes.number,
// 	}
// 	increment = () => {
// 		// this.setState({ counter: this.state.counter + this.state.step })
// 		if (this.state.counter !== 10) {
// 			this.setState(prevState => ({
// 				counter: prevState.counter + this.state.step,
// 			}))
// 		}
// 	}
// 	decrement = () => {
// 		if (this.state.counter === -5) {
// 			return
// 		}
// 		this.setState(prevState => ({
// 			counter: prevState.counter - this.state.step,
// 		}))
// 	}

// 	reset = () => {
// 		this.setState({ counter: 1 })
// 	}

// 	render() {
// 		const { counter } = this.state
// 		return (
// 			<Flex center100vh>
// 				<StyledCounter>
// 					<h1>{counter}</h1>
// 					{counter > 5 && <h3>Congratulation!!</h3>}
// 					<Flex gap='20px' justify='center'>
// 						<StyledButton disabled={counter === -5} onClick={this.decrement}>
// 							{this.state.disableBtn ? 'Error' : 'Minus'}
// 						</StyledButton>
// 						{/* <StyledButton onClick={() => console.log('1')}>minus</StyledButton> */}
// 						<StyledButton onClick={this.reset}>reset</StyledButton>
// 						<StyledButton disabled={counter === 10} onClick={this.increment}>
// 							{counter === 10 ? 'Error' : 'Plus'}
// 						</StyledButton>
// 					</Flex>
// 				</StyledCounter>
// 			</Flex>
// 		)
// 	}
// }
