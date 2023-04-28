import React, { useEffect } from 'react'
import icon from '../../assets/images/icon-check.svg'
import { useDispatch, useSelector } from 'react-redux'
import { toggleTodo } from '../../redux/Todo/todoSlice'
import { selectLoading } from '../../redux/Todo/selectors'
import { removeTodoThunk } from '../../redux/Todo/operations'
export const SingleTodo = ({ id, title, completed }) => {
	const dispatch = useDispatch()

	const stylesActive = completed
		? 'bg-gradient-to-br from-checkboxFrom to-checkboxTo'
		: ''

	return (
		<li className='group  list-none cursor-pointer  py-4  border-b-white/10 border-b-[1px] text-white/80 grid   grid-cols-todo items-center'>
			<label className='relative inline-block cursor-pointer'>
				<input
					onChange={() => dispatch(toggleTodo(id))}
					type='checkbox'
					className='absolute opacity-0 cursor-pointer h-0 w-0'
					checked={completed}
				/>
				<span
					className={`${stylesActive} absolute h-5 w-5 flex items-center justify-center  left-4 top-[-10px] rounded-full border-white/20 border-[1px]`}
				>
					{completed && <img src={icon} alt='' />}
				</span>
			</label>
			<span
				className={
					completed
						? 'line-through text-white/20 transition-all'
						: 'transition-all'
				}
			>
				{title}
			</span>
			<button
				className=' transition-all hidden text-white/20 hover:text-white  group-hover:block mx-auto'
				onClick={() => dispatch(removeTodoThunk(id))}
			>
				X
			</button>
		</li>
	)
}
