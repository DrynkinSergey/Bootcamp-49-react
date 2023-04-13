import React from 'react'
import styled from 'styled-components'
import { EmployeeCard } from '../EmployeeCard/EmployeeCard'
import PropTypes from 'prop-types'

export const EmployeeList = ({ users, onDelete }) => {
	// props = {
	// 	users: [],
	// 	title: 'hello',
	// }
	// console.log(props)
	// const { users } = props
	return (
		<UserList>
			{users.map(({ id, name, bio, skills, isOpenToWork, email }) => (
				<EmployeeCard
					onDelete={onDelete}
					key={id}
					id={id}
					name={name}
					bio={bio}
					skills={skills}
					isOpenToWork={isOpenToWork}
					email={email}
				/>
			))}
		</UserList>
	)
}
const UserList = styled.ul`
	display: grid;
	justify-content: center;
	grid-template-columns: repeat(auto-fit, minmax(350px, 400px));
	gap: 10px;
`
EmployeeList.propTypes = {
	users: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number,
			name: PropTypes.string,
			email: PropTypes.string,
			bio: PropTypes.string,
			skills: PropTypes.array,
			isOpenToWork: PropTypes.bool,
		})
	),
}
