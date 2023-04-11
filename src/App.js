import React from 'react'
import { Counter } from './components/Counter/Counter'
import { Flex } from './styledComponents/Flex'
export const App = () => {
	return (
		<>
			{/* <ColorPicker colors={colors} /> */}
			<Flex items='center' justify='center' height='100vh'>
				<Counter counter={1} />
			</Flex>
		</>
	)
}
