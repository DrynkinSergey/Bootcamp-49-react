import React from 'react'
import PropTypes from 'prop-types'
import { User } from '../User/User'
import styled from 'styled-components'
import usersData from './../../assets/users.json'
export const StyledUserList = styled.ul`
	display: flex;
	flex-wrap: wrap;
	gap: 20px;
	padding: 100px 40px;
`

export const UserList = () => {
	return (
		<StyledUserList>
			{usersData.map(user => (
				<User key={user.id} {...user} />
			))}
		</StyledUserList>
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
