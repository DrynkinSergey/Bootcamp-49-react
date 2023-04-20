import React, { useContext, useState } from 'react'
import { StyledButton, StyledCounter } from './Counter.styled'
import { Flex } from '../../styledComponents/Flex'
import { UsersContext } from '../..'

export const Counter = () => {
	// const [counter, setCounter] = useState(0)
	// const [step, setStep] = useState(1)
	// const [disableBtn] = useState(false)

	const [state, setState] = useState({
		counter: 1,
		step: 1,
		disableBtn: false,
	})

	const increment = () => {
		// if (this.state.counter !== 10) {
		// 	this.setState(prevState => ({
		// 		counter: prevState.counter + this.state.step,
		// 	}))
		// }
		if (state.counter !== 10) {
			// this.setState(prevState => ({counter:prevState.counter + 1}))
			setState(prevState => ({
				...prevState,
				counter: prevState.counter + state.step,
			}))
		}
	}
	const decrement = () => {
		if (state.counter === -5) {
			return
		}

		/////////////////////  before  ///////////////////////
		//
		//
		// this.setState(prevState => ({
		// 	counter: prevState.counter - this.state.step,
		// }))
		//
		// setState(prevState => prevState - state.step)
		//
		//
		/////////////////////  after  ///////////////////////

		setState(prevState => ({
			...prevState, //{	counter: 1,		step: 1,		disableBtn: false,}
			counter: prevState.counter - state.step,
		}))
	}

	const reset = () => {
		setState(prevState => ({
			...prevState,
			counter: 0,
		}))
	}
	const { counter, disableBtn } = state
	return (
		<Flex center100vh>
			<StyledCounter>
				<h1>{counter}</h1>
				<button onClick={() => setState(5)}>step = 5</button>
				{counter > 5 && <h3>Congratulation!!</h3>}
				<Flex gap='20px' justify='center'>
					<StyledButton disabled={counter === -5} onClick={decrement}>
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
