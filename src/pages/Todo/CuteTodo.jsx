import React, { useEffect, useMemo } from 'react'
import bgDark from './../../assets/images/bg-desktop-dark.jpg'
import bgLight from './../../assets/images/bg-desktop-light.jpg'
import bgMobile from './../../assets/images/bg-mobile-dark.jpg'
import { AddForm } from './AddForm'
import { TodoList } from './todoList'
import { useDispatch, useSelector } from 'react-redux'
import { selectTheme } from '../../redux/selectors'
import { setTheme } from '../../redux/Theme/themeSlice'
import { fetchTasksThunk } from '../../redux/Todo/operations'

export const CuteTodo = () => {
	const theme = useSelector(selectTheme)
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(fetchTasksThunk())
	}, [dispatch])
	const bgImage = useMemo(
		() => (
			<>
				<img
					className='absolute hidden md:block w-full h-1/2 object-cover left-0 z-1'
					src={theme === 'dark' ? bgDark : bgLight}
					alt='bgImage'
				/>
				<img
					className='fixed md:hidden block w-full h-1/2 object-cover left-0 z-1'
					src={bgMobile}
					alt='bgImage'
				/>
			</>
		),
		[theme]
	)
	return (
		<div
			className={`${
				theme === 'dark' ? 'bg-darkVeryBG' : 'bg-white'
			}  min-h-screen px-6 text-lg transition-all duration-1000`}
		>
			{bgImage}
			<div className='relative z-2 flex w-full  sm:w-3/4 md:w-3/4 lg:w-2/3 xl:w-2/4 flex-col mx-auto py-40 '>
				<span className='flex justify-between font-extrabold mb-8 text-2xl text-white/80'>
					TODO:
					<button onClick={() => dispatch(setTheme())}>{theme}</button>
				</span>
				<AddForm />
				<TodoList />
			</div>
		</div>
	)
}
