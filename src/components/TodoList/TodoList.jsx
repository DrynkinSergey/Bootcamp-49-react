import React from 'react'
import { StyledButton } from '../Counter/Counter.styled'
import { StyledInput, StyledTodo, StyledTodoList } from './TodoList.styled'
import { Flex } from '../../styledComponents/Flex'

export const TodoList = ({ todos }) => {
	return (
		<div>
			<StyledTodoList>
				<Flex justify='space-between'>
					<StyledInput type='text' />
					<StyledButton>Add</StyledButton>
				</Flex>
				{todos.map(({ todo, id, completed }) => (
					<StyledTodo key={id}>
						<input type='checkbox' checked={completed} />
						<span>{todo}</span>
						<StyledButton size='18px'>Del</StyledButton>
					</StyledTodo>
				))}
			</StyledTodoList>
		</div>
	)
}
