import React from 'react'
import { StyledButton } from '../Counter/Counter.styled'
import { StyledInput, StyledTodo, StyledTodoList } from './TodoList.styled'
import { Flex } from '../../styledComponents/Flex'
import todos from './../../assets/todos.json'
import { nanoid } from 'nanoid'
export class TodoList extends React.Component {
	state = {
		todos,
		isActive: this.props.active,
		inputString: '',
		error: '',
	}

	handleDelete = id => {
		const newArray = this.state.todos.filter(item => item.id !== id)
		this.setState({ todos: newArray })
	}
	handleToggle = id => {
		this.setState({
			todos: this.state.todos.map(item => {
				if (item.id === id) {
					return { ...item, completed: !item.completed }
				}
				return item
			}),
		})
	}
	handleChangeInputString = inputString => {
		this.setState({ inputString })
	}

	handleAdd = todo => {
		if (!this.state.inputString.trim()) {
			this.setState({ error: 'Пустий рядок' })
			return
		}

		this.setState({
			todos: [
				...this.state.todos,
				{
					id: nanoid(),
					todo: this.state.inputString.trim(),
					completed: false,
				},
			],
			inputString: '',
			error: '',
		})
	}

	handleRemoveAll = () => {
		this.setState({ todos: [] })
	}

	render() {
		const { active, title } = this.props
		const { todos, inputString, error } = this.state
		return (
			<div>
				<StyledTodoList>
					<Flex justify='space-between'>
						<StyledInput
							onChange={e =>
								this.handleChangeInputString(e.currentTarget.value)
							}
							value={inputString}
							type='text'
						/>
						{error && <span style={{ color: 'red' }}> {error}</span>}

						<StyledButton onClick={this.handleAdd}>Add</StyledButton>
					</Flex>
					{todos.map(({ todo, id, completed }) => (
						<StyledTodo completed={completed} key={id}>
							<input
								type='checkbox'
								checked={completed}
								onChange={() => this.handleToggle(id)}
							/>
							<span>{todo}</span>
							<StyledButton onClick={() => this.handleDelete(id)} size='18px'>
								Del
							</StyledButton>
						</StyledTodo>
					))}
					<button onClick={this.handleRemoveAll}>Clear</button>
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
// 				{todos.map(({ todo, id, completed }) => (
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
