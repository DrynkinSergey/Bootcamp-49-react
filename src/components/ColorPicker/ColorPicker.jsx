import React, { Component } from 'react'
import {
	StyledBackgroundTheme,
	StyledColorPalette,
	StyledColor,
	StyledColorsList,
} from './ColorPicker.styled'
export class ColorPicker extends Component {
	state = {
		colors: this.props.colors,
		selectedColor: 'white',
	}
	handleChangeColor = selectedColor => {
		this.setState({ selectedColor })
	}

	render() {
		return (
			<StyledBackgroundTheme selectedColor={this.state.selectedColor}>
				<StyledColorPalette>
					<StyledColorsList>
						{this.state.colors.map((item, index) => (
							<StyledColor
								hoverColor={this.state.colors[index].color}
								onClick={() => this.handleChangeColor(item.color)}
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
