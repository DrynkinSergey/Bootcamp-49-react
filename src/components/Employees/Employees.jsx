import React from 'react'
import { EmployeesFilter } from '../EmployeesFilter/EmployeesFilter'
import { EmployeeList } from '../EmployeeList/EmployeeList'
import PropTypes from 'prop-types'

export const Employees = ({ users, onDelete }) => {
	return (
		<div>
			<EmployeesFilter />
			<EmployeeList users={users} onDelete={onDelete} />
		</div>
	)
}

// dumb
Employees.propTypes = {
	users: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number,
			name: PropTypes.string,
			email: PropTypes.string,
			bio: PropTypes.string,
			skills: PropTypes.arrayOf(PropTypes.oneOf(['vue', 'react', 'angular'])),
			isOpenToWork: PropTypes.bool,
		})
	),
}
