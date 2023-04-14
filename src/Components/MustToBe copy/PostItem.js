import React from 'react'

import styled from 'styled-components'
import { AiFillHeart } from 'react-icons/ai'
import { PostButtons } from './PostButtons'

export const PostItem = ({
	id,
	userName,
	title,
	body,
	reactions,
	onDeletePost,
	onLiked,
}) => {
	return (
		<Card>
			<h3>{userName}</h3>
			<h4>{title}</h4>
			<h4>{body}</h4>
			<div style={{ display: 'flex', justifyContent: 'space-between' }}>
				<span style={{ cursor: 'pointer' }} onClick={() => onLiked(id)}>
					<span style={{ color: 'red' }}>
						<AiFillHeart />
					</span>
					{reactions}
				</span>
				<PostButtons onDeletePost={onDeletePost} id={id} />
			</div>
		</Card>
	)
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
