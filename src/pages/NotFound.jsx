import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
	return (
		<div>
			Page is not found! You can go back at
			<Link to='/'>Home</Link>
		</div>
	)
}

export default NotFound
