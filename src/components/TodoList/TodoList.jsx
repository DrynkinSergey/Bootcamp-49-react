import React, { Component, createRef } from 'react'
import { StyledButton } from '../Counter/Counter.styled'
import { StyledInput, StyledTodo, StyledTodoList } from './TodoList.styled'
import { Flex } from '../../styledComponents/Flex'

export class TodoList extends Component {
	state = {
		todos: this.props.todos,
	}
	del = id => {
		this.setState({ todos: this.state.todos.filter(item => item.id !== id) })
	}
	add = todo => {
		this.setState({
			todos: [
				...this.state.todos,
				{
					id: new Date().getTime(),
					todo,
					completed: false,
					userId: 39,
				},
			],
		})
	}
	check = id => {
		this.setState({
			todos: this.state.todos.map(item => {
				if (item.id === id) {
					return { ...item, completed: !item.completed }
				}
				return item
			}),
		})
	}
	render() {
		const { todos } = this.state
		const inputRef = createRef()
		return (
			<div>
				<StyledTodoList>
					<Flex justify='space-between'>
						<StyledInput ref={inputRef} type='text' />
						<StyledButton onClick={() => this.add(inputRef.current.value)}>
							Add
						</StyledButton>
					</Flex>
					{todos.map(({ todo, id, completed }) => (
						<StyledTodo completed={completed} key={id}>
							<input
								onChange={() => this.check(id)}
								type='checkbox'
								checked={completed}
							/>

							<span onClick={() => this.check(id)}>{todo}</span>
							<StyledButton onClick={() => this.del(id)} size='18px'>
								Del
							</StyledButton>
						</StyledTodo>
					))}
				</StyledTodoList>
			</div>
		)
	}
}

// export const TodoList = ({ todos }) => {
// 	return (
// 		<div>
// 			<StyledTodoList>
// 				<Flex justify='space-between'>
// 					<StyledInput type='text' />
// 					<StyledButton>Add</StyledButton>
// 				</Flex>
// 				{todos.splice(4, 12).map(({ todo, id, completed }) => (
// 					<StyledTodo key={id}>
// 						<input type='checkbox' checked={completed} />
// 						<span>{todo}</span>
// 						<StyledButton size='18px'>Del</StyledButton>
// 					</StyledTodo>
// 				))}
// 			</StyledTodoList>
// 		</div>
// 	)
// }
