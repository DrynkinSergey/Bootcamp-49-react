import React from 'react'
import usersData from './../../assets/users.json'
import { User } from '../User/User'
export const UserList = () => {
	return (
		<ul>
			{usersData.map(user => (
				<User key={user.id} {...user} />
			))}
		</ul>
	)
}
