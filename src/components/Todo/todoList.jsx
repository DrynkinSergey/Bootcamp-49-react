import { SingleTodo } from './singleTodo'
import { Filter } from './Filter'
import { useSelector } from 'react-redux'
import { selectTodos } from '../../redux/Todo/selectors'

export const TodoList = () => {
	const todos = useSelector(selectTodos)
	// const todos = useSelector(state => state.todoList.todos)

	const ViewData = () =>
		todos.map(todo => <SingleTodo key={todo.id} {...todo} />)

	return (
		<div className='font-josefin bg-darkMain shadow-mainDark'>
			<ul className='rounded-md overflow-hidden'>
				<ViewData />
				<Filter />
			</ul>
		</div>
	)
}
