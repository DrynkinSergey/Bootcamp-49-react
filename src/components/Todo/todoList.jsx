import { SingleTodo } from './singleTodo'
import { useDispatch, useSelector } from 'react-redux'
import {
	selectFilter,
	selectFilteredData,
	selectFilteredDataReselect,
	selectLoading,
	selectTodos,
} from '../../redux/selectors'
import { useEffect } from 'react'
import { getTodosThunk } from '../../redux/Todo/todoSlice'
import { fetchTodosThunk } from '../../redux/Todo/operations'
import { Filter } from './Filter'

export const TodoList = () => {
	const todos = useSelector(selectFilteredDataReselect)

	const loading = useSelector(selectLoading)
	const dispatch = useDispatch()
	// const todos = useSelector(state => state.todoList.todos)
	useEffect(() => {
		dispatch(fetchTodosThunk())
	}, [dispatch])
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
