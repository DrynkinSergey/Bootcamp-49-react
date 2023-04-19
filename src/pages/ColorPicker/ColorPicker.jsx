import React, { Component, useEffect, useState } from 'react'
import {
	StyledBackgroundTheme,
	StyledColorPalette,
	StyledColor,
	StyledColorsList,
} from './ColorPicker.styled'
import colorsJson from '../../assets/colors.json'

export const ColorPicker = ({ title }) => {
	const [colors] = useState(colorsJson)
	const [currentColor, setCurrentColor] = useState('white')

	// useEffect(() => {
	// 	console.log('First render')
	// }, [])
	// useEffect(() => {
	// 	console.log('Every render')
	// })

	// useEffect(() => {
	// 	console.log('Current color was changed')
	// }, [currentColor, colors])

	return (
		<StyledBackgroundTheme bgColor={currentColor}>
			<StyledColorPalette>
				<h2>Title:{title}</h2>
				<h1>Мій колір зараз це: {currentColor}</h1>
				<StyledColorsList>
					{colors.map(item => (
						<StyledColor
							onClick={() => setCurrentColor(item.color)}
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
// export class ColorPicker extends Component {
// 	static defaultProps = {
// 		colors: colors,
// 		title: 'Its default title ',
// 	}

// 	state = {
// 		colors: this.props.colors,
// 		currentColor: 'white',
// 	}

// 	componentDidUpdate(prevPrev, prevState) {
// 		console.log('update')
// 	}

// 	shouldComponentUpdate(_, nextState) {
// 		return nextState.currentColor !== this.state.currentColor
// 	}

// 	render() {
// 		const { colors, currentColor } = this.state
// 		return (
// 			<StyledBackgroundTheme bgColor={currentColor}>
// 				<StyledColorPalette>
// 					<h2>Title:{this.props.title}</h2>
// 					<h1>Мій колір зараз це: {currentColor}</h1>
// 					<StyledColorsList>
// 						{colors.map(item => (
// 							<StyledColor
// 								onClick={() => this.setState({ currentColor: item.color })}
// 								key={item.id}
// 							>
// 								{item.color}
// 							</StyledColor>
// 						))}
// 					</StyledColorsList>
// 				</StyledColorPalette>
// 			</StyledBackgroundTheme>
// 		)
// 	}
// }
