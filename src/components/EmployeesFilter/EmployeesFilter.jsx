import React, { useContext } from 'react'
import styled from 'styled-components'
import { StyledInput } from '../../pages/LoginForm/LoginForm.styled'
import { UsersContext } from '../../Context'
const skilsList = [
	{ value: 'all', label: 'all' },
	{ value: 'react', label: 'react' },
	{ value: 'angular', label: 'angular' },
	{ value: 'vue', label: 'vue' },
]
const Filters = styled.div`
	display: flex;
	justify-content: space-around;
	background-color: skyblue;
	margin-bottom: 20px;
`
const Flex = styled.div`
	display: flex;
	padding: 20px 15px;
	gap: 10px;
	flex-direction: ${props => (props.column ? 'column' : 'row')};
`
export const EmployeesFilter = ({
	onChangeFilter,
	activeSkill,
	onInputChange,
	onChangeSkill,
	filterStr,
	isOpen,
}) => {
	const { user } = useContext(UsersContext)
	return (
		<Filters>
			<h1>{user.name}</h1>
			<hr />
			<h1>{user.email}</h1>
			<Flex column>
				<StyledInput
					type='text'
					value={filterStr}
					onChange={e => onChangeFilter(e.target.value)}
				/>
				<label htmlFor=''>
					<input type='checkbox' checked={isOpen} onChange={onInputChange} />
					<span> isAvailable</span>
				</label>
			</Flex>
			<Flex>
				{skilsList.map(skill => (
					<div key={skill.value}>
						<label>
							<input
								name='skil'
								type='radio'
								checked={skill.value === activeSkill}
								onChange={() => onChangeSkill(skill.value)}
								value={skill.value}
							/>
							<span> {skill.label}</span>
						</label>
					</div>
				))}
			</Flex>
		</Filters>
	)
}
