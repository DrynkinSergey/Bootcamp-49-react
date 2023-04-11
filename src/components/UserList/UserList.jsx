import React from 'react'
import PropTypes from 'prop-types'

import { User } from '../User/User'

export const UserList = ({ usersData }) => {
	return (
		<ul>
			{usersData.map(user => (
				<User key={user.id} {...user} />
			))}
		</ul>
	)
}

UserList.propTypes = {
	usersData: PropTypes.arrayOf(
		PropTypes.shape({
			firstName: PropTypes.string.isRequired,
			lastName: PropTypes.string,
			age: PropTypes.number.isRequired,
			gender: PropTypes.oneOf(['male', 'female']),
			email: PropTypes.string,
			image: PropTypes.string,
			phone: PropTypes.string,
		})
	),
}
