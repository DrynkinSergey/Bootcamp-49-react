import { SingleTodo } from './singleTodo'
import { Filter } from './Filter'
import { useDispatch, useSelector } from 'react-redux'
import { selectTodos } from '../../redux/Todo/selectors'
import { useEffect } from 'react'
import { fetchTodosThunk } from '../../redux/Todo/operations'

export const TodoList = () => {
	const todos = useSelector(selectTodos)
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(fetchTodosThunk())
	}, [dispatch])
	// const todos = useSelector(state => state.todoList.todos)

	const ViewData = () =>
		todos.map(todo => <SingleTodo key={todo.id} {...todo} />).reverse()

	return (
		<div className='font-josefin bg-darkMain shadow-mainDark'>
			<ul className='rounded-md overflow-hidden'>
				<ViewData />
				<Filter />
			</ul>
		</div>
	)
}
