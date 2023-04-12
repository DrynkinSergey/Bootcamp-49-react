import React from 'react'
import { Counter } from './components/Counter/Counter'
import { Flex } from './styledComponents/Flex'
import { TodoList } from './components/TodoList/TodoList'
import { ColorPicker } from './components/ColorPicker/ColorPicker'
import todos from './assets/todos.json'
import colors from './assets/colors.json'
export const App = () => {
	return (
		<>
			{/* <ColorPicker colors={colors} /> */}
			{/* <Flex items='center' justify='center' height='100vh'>
				<Counter counter={2} title='First counter' />
			</Flex> */}
			<TodoList todos={todos} title='Hello' active={true} />
		</>
	)
}
