import React, { Component, PureComponent } from 'react'
import {
	StyledBackgroundTheme,
	StyledColorPalette,
	StyledColor,
	StyledColorsList,
} from './ColorPicker.styled'

export class ColorPicker extends Component {
	state = {
		colors: this.props.colors || [],
		currentColor: 'white',
	}
	componentDidUpdate() {
		console.log('update')
	}

	shouldComponentUpdate(_, nextState) {
		// console.log(_)
		// console.log(nextState)
		return nextState.currentColor !== this.state.currentColor
	}

	render() {
		const { colors, currentColor } = this.state
		return (
			<StyledBackgroundTheme bgColor={currentColor}>
				<StyledColorPalette>
					<h1>Мій колір зараз це: {currentColor}</h1>
					<StyledColorsList>
						{colors.map(item => (
							<StyledColor
								onClick={() => this.setState({ currentColor: item.color })}
								key={item.id}
							>
								{item.color}
							</StyledColor>
						))}
					</StyledColorsList>
				</StyledColorPalette>
			</StyledBackgroundTheme>
		)
	}
}

// export const ColorPicker = ({ colors }) => {
// 	return (
// 		<StyledBackgroundTheme>
// 			<StyledColorPalette>
// 				<StyledColorsList>
// 					{colors.map((item, index) => (
// 						<StyledColor key={item.id}>{item.color}</StyledColor>
// 					))}
// 				</StyledColorsList>
// 			</StyledColorPalette>
// 		</StyledBackgroundTheme>
// 	)
// }
