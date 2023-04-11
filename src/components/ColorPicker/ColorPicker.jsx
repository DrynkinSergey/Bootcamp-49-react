import React from 'react'
import {
	BackgroundTheme,
	ColorPalette,
	Color,
	ColorsList,
} from './ColorPicker.styled'
export const ColorPicker = ({ colors }) => {
	return (
		<BackgroundTheme>
			<ColorPalette>
				<ColorsList>
					{colors.map((item, index) => (
						<Color key={item.id}>{item.color}</Color>
					))}
				</ColorsList>
			</ColorPalette>
		</BackgroundTheme>
	)
}
