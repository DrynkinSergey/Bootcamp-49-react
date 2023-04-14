import React from 'react'
import styled from 'styled-components'
import { PostItem } from './PostItem'

export const PostList = ({ posts }) => {
	return (
		<>
			<PostsList>
				{posts.map(post => (
					<PostItem key={post.id} {...post} /> // {...post} =>  {id, userName, title, body, reactions}
				))}
			</PostsList>
		</>
	)
}
const PostsList = styled.ul`
	display: grid;
	gap: 20px;
	grid-template-columns: repeat(auto-fit, minmax(350px, 400px));
`
