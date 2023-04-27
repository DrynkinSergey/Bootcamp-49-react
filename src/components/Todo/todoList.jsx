import { SingleTodo } from './singleTodo'
import { Filter } from './Filter'
import { useSelector } from 'react-redux'

export const TodoList = () => {
	const { todos } = useSelector(state => state.todoList)
	const ViewData = () =>
		todos.map(todo => <SingleTodo key={todo.id} {...todo} />)

	return (
		<div className='font-josefin bg-darkMain shadow-mainDark'>
			<ul className='rounded-md overflow-hidden'>
				<ViewData />
			</ul>
		</div>
	)
}
