import React from 'react'
import styled from 'styled-components'

export const PostCard = ({ id, title, body, reactions }) => (
	<Card>
		<h1>{title}</h1>
		<p>{body}</p>
		<span>{reactions}</span>
	</Card>
)
const Card = styled.li`
	display: flex;
	gap: 10px;
	flex-direction: column;
	border: 2px solid;
	border-radius: 12px;
	padding: 15px;
`
