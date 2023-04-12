import React from 'react'
import styled from 'styled-components'
import { StyledInput } from '../LoginForm/LoginForm.styled'
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
export const EmployeesFilter = () => {
	return (
		<Filters>
			<Flex column>
				<StyledInput type='text' />
				<label htmlFor=''>
					<input type='checkbox' />
					<span> isAvailable</span>
				</label>
			</Flex>
			<Flex>
				{skilsList.map(skill => (
					<div key={skill.value}>
						<label>
							<input name='skil' type='radio' value={skill.value} />
							<span> {skill.label}</span>
						</label>
					</div>
				))}
			</Flex>
		</Filters>
	)
}
