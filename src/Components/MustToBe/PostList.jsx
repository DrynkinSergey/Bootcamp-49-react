import React from 'react'
import { PostItem } from './PostItem'
import { PostFilter } from './PostFilter'
import styled from 'styled-components'

export const PostList = ({ posts }) => {
	return (
		<>
			<PostFilter />
			<PostsList>
				{posts.map(post => (
					<PostItem key={post.id} {...post} />
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
