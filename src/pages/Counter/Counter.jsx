import React from 'react'
import { StyledButton, StyledCounter } from './Counter.styled'
import { Flex } from '../../styledComponents/Flex'
import PropTypes from 'prop-types'
export class Counter extends React.Component {
	state = {
		counter: 1,
		step: 1,
		disableBtn: false,
	}

	static propTypes = {
		counter: PropTypes.number,
	}
	increment = () => {
		// this.setState({ counter: this.state.counter + this.state.step })
		if (this.state.counter !== 10) {
			this.setState(prevState => ({
				counter: prevState.counter + this.state.step,
			}))
		}
	}
	decrement = () => {
		if (this.state.counter === -5) {
			return
		}
		this.setState(prevState => ({
			counter: prevState.counter - this.state.step,
		}))
	}

	reset = () => {
		this.setState({ counter: 1 })
	}

	render() {
		const { counter } = this.state
		return (
			<Flex center100vh>
				<StyledCounter>
					<h1>{counter}</h1>
					{counter > 5 && <h3>Congratulation!!</h3>}
					<Flex gap='20px' justify='center'>
						<StyledButton disabled={counter === -5} onClick={this.decrement}>
							{this.state.disableBtn ? 'Error' : 'Minus'}
						</StyledButton>
						{/* <StyledButton onClick={() => console.log('1')}>minus</StyledButton> */}
						<StyledButton onClick={this.reset}>reset</StyledButton>
						<StyledButton disabled={counter === 10} onClick={this.increment}>
							{counter === 10 ? 'Error' : 'Plus'}
						</StyledButton>
					</Flex>
				</StyledCounter>
			</Flex>
		)
	}
}
// export const Counter = ({ counter }) => {
// 	return (
// 		<StyledCounter>
// 			<h1>{counter}</h1>
// 			<Flex gap='10px' justify='center'>
// 				<StyledButton>minus</StyledButton>
// 				<StyledButton>reset</StyledButton>
// 				<StyledButton>plus</StyledButton>
// 			</Flex>
// 		</StyledCounter>
// 	)
// }
