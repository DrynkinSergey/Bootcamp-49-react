import React from 'react'
import { ColorPicker } from './components/ColorPicker/ColorPicker'
import colors from './assets/colors.json'
export const App = () => {
	return (
		<>
			<ColorPicker colors={colors} />
		</>
	)
}
