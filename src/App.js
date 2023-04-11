import React from 'react'
import { Counter } from './components/Counter/Counter'
import { Flex } from './styledComponents/Flex'
import { TodoList } from './components/TodoList/TodoList'
import colors from './assets/colors.json'
import todos from './assets/todos.json'
import { ColorPicker } from './components/ColorPicker/ColorPicker'
export const App = () => {
	return (
		<>
			<ColorPicker colors={colors} />
			<Flex items='center' justify='center' height='100vh'>
				<Counter counter={1} />
			</Flex>
			<TodoList todos={todos} />
		</>
	)
}
