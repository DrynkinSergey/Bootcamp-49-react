import React from 'react'
import { UserList } from './components/UserList/UserList'
import usersData from './assets/users.json'
import { Section } from './components/Modal'
import { StyledHeader, Footer } from './App.styled'
import styled, { css } from 'styled-components'
export const App = () => {
	return (
		<div>
			<StyledHeader>
				<Title>UserList</Title>
			</StyledHeader>

			<StyledButton size='40px' outline>
				Submit
			</StyledButton>

			<StyledButton size='10px' dashed>
				Send
			</StyledButton>
			<StyledButton colored>GET</StyledButton>

			{/* <Section title='Інфо' data='Контент іншої секції'>
				<p>Тут буде лежати зовсім інший контент</p>
			</Section> */}

			<Section>
				<UserList usersData={usersData} />
			</Section>
			<Footer>
				<h1>footer</h1>
			</Footer>
		</div>
	)
}

const Title = styled.h1`
	font-size: 1.5em;
	text-align: center;
	color: palevioletred;
`

export const StyledButton = styled.button`
	${props =>
		props.outline &&
		css`
			outline: none;
			background-color: transparent;
			border: 2px solid black;
			border-radius: 12px;
		`}

	${props =>
		props.dashed &&
		css`
			outline: none;
			background-color: transparent;
			border: 4px dashed black;
			border-radius: 12px;
		`}

		${props =>
		props.colored &&
		css`
			background-color: lightcyan;
			color: red;
			border: 2px solid blue;
			border-radius: 12px;
		`}
	padding: 10px 18px;
	font-size: ${props => props.size || '24px'};
	margin: 100px 50px;
	&:hover {
		cursor: pointer;
		box-shadow: 0px 0px 2px 2px green;
	}
	/* background-color: ${props => props.color || 'white'}; */
`
