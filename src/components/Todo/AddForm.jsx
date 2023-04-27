import { useDispatch, useSelector } from 'react-redux'
import { addTodo, fetchUsersThunk, setFilter } from '../../redux/Todo/todoSlice'

export const AddForm = ({ onSubmit }) => {
	const dispatch = useDispatch()
	// const filter = useSelector(state => state.todoList.filterStr)
	const handleSubmit = e => {
		e.preventDefault()
		if (e.target.addTodo.value.trim()) {
			const title = e.target.addTodo.value.trim()
			dispatch(fetchUsersThunk())
			e.target.reset()
			e.target.focus()
		}
	}
	return (
		<form
			className='shadow-mainDark flex justify-center w-full mb-8 font-josefin bg-darkMain list-none px-4 py-4 rounded-md border-b-white/30  text-white/80'
			onSubmit={handleSubmit}
		>
			<input
				autoComplete='off'
				placeholder='Add some todo....'
				className=' px-4  w-2/3 rounded-md mr-4 text-black'
				name='addTodo'
				type='text'
			/>
			<button className='border-[1px] border-white/10 px-4 rounded-md'>
				+
			</button>
		</form>
	)
}
