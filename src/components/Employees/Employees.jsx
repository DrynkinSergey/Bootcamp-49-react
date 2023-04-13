import React from 'react'
import { EmployeeCard } from '../EmployeeCard/EmployeeCard'
import users from './../../assets/employee.json'
import { StyledUserList } from '../UserList/UserList'
import styled from 'styled-components'
import { EmployeesFilter } from '../EmployeesFilter/EmployeesFilter'
export const Employees = () => {
	
	return (
		<div>
			<EmployeesFilter />
			<UserList>
				{users.map(user => (
					<EmployeeCard key={user.id} {...user} />
				))}
			</UserList>
		</div>
	)
}
const UserList = styled.ul`
	display: grid;
	justify-content: center;
	grid-template-columns: repeat(auto-fit, minmax(350px, 400px));
	gap: 10px;
`
// {
//   "id": 1,
//   "name": "Leanne Graham",
//   "email": "Sincere@april.biz",
//   "bio": "Assumenda harum mollitia neque, officiis veniam repellat sapiente delectus aspernatur",
//   "skills": ["react", "vue"],
//   "isOpenToWork": false
// },
