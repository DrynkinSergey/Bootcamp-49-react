import React, { useEffect, useState } from 'react'
import { SingleTodo } from './singleTodo'
import axios from 'axios'
import { Filter } from './Filter'

export const TodoList = () => {
	const ViewData = () => [].map(todo => <SingleTodo key={todo.id} {...todo} />)

	return (
		<div className='font-josefin bg-darkMain shadow-mainDark'>
			<ul className='rounded-md overflow-hidden'>
				<ViewData />
			</ul>
		</div>
	)
}
