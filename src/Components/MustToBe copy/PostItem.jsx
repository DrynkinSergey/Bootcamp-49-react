import React from 'react'

import styled from 'styled-components'
export const PostItem = () => {
	return <Card></Card>
}

const Card = styled.li`
	border: 3px solid;
	border-radius: 12px;
	padding: 30px 15px;
	h1 {
		margin: 0;
		padding: 0;
	}
	display: flex;
	flex-direction: column;
	gap: 10px;
`
// {
// 		"id": 1,
// 		"title": "His mother had always taught him",
// 		"body": "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.",
// 		"userName": "Antony",
// 		"reactions": 2123
// 	},
