import React from 'react'
import styled from 'styled-components'

const UserCard = styled.li`
	display: flex;
	gap: 10px;
	flex-direction: column;
	border: 2px solid;
	border-radius: 12px;
	padding: 15px;
	width: 80%;
	background-color: ${props => (props.open ? 'lightgreen' : 'tomato')};
`
const Skill = styled.li`
	border: 2px solid black;

	border-radius: 12px;
	padding: 4px 9px;
	display: inline;
	color: white;
	margin-right: 10px;
	background-color: ${({ skill }) => {
		switch (skill) {
			case 'react':
				return 'blue'
			case 'vue':
				return 'green'
			case 'angular':
				return 'red'
			default:
				return 'white'
		}
	}};
`

export const EmployeeCard = ({
	id,
	name,
	email,
	bio,
	skills,
	isOpenToWork,
}) => {
	return (
		<UserCard open={isOpenToWork}>
			<h3>{name}</h3>
			<h4>{email}</h4>
			<h5>{bio}</h5>
			<ul>
				{skills.map(skill => (
					<Skill skill={skill} key={skill}>
						{skill}
					</Skill>
				))}
			</ul>
			<h3>{isOpenToWork ? 'openToWork' : 'dont disturb'}</h3>
			<button>Delete</button>
		</UserCard>
	)
}
