import React from 'react'
import PropTypes from 'prop-types'
import styles from './UserList.module.scss'
import { User } from '../User/User'

export const UserList = ({ usersData }) => {
	console.log(styles)
	// const styles = {
	// 	display: 'flex',
	// 	flexWrap: 'wrap',
	// 	gap: '20px',
	// 	padding: '100px 40px',
	// }
	return (
		<ul className={styles.userList}>
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
