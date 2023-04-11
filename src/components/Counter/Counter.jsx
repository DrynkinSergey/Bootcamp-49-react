import React from 'react'
import { StyledButton, StyledCounter } from './Counter.styled'
import { Flex } from '../../styledComponents/Flex'

export class Counter extends React.Component {
	state = {
		counter: this.props.counter,
		step: 1,
	}
	inc = () => {
		// this.setState({ counter: this.state.counter + 1 })
		this.setState(prevState => ({
			counter: prevState.counter + this.state.step,
		}))
	}
	dec = () => {
		this.setState({ counter: this.state.counter - 1 })
	}
	reset = () => {
		this.setState({ counter: 0 })
	}
	render() {
		return (
			<StyledCounter>
				<h1>{this.state.counter}</h1>
				<Flex gap='10px' justify='center'>
					<StyledButton onClick={this.dec}>minus</StyledButton>
					<StyledButton onClick={this.reset}>reset</StyledButton>
					<StyledButton onClick={this.inc}>plus</StyledButton>
				</Flex>
			</StyledCounter>
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
