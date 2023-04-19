import React, { Component } from 'react'
import {
	StyledBackgroundTheme,
	StyledColorPalette,
	StyledColor,
	StyledColorsList,
} from './ColorPicker.styled'
import colors from '../../assets/colors.json'

export class ColorPicker extends Component {
	static defaultProps = {
		colors: colors,
		title: 'Its default title ',
	}

	state = {
		colors: this.props.colors,
		currentColor: 'white',
	}

	componentDidUpdate(prevPrev, prevState) {
		console.log('update')
	}

	shouldComponentUpdate(_, nextState) {
		return nextState.currentColor !== this.state.currentColor
	}

	render() {
		const { colors, currentColor } = this.state
		return (
			<StyledBackgroundTheme bgColor={currentColor}>
				<StyledColorPalette>
					<h2>Title:{this.props.title}</h2>
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
