import React from 'react'
import { PostItem } from './PostItem'
import { PostFilter } from './PostFilter'

export const PostList = () => {
	return (
		<>
			<PostFilter />
			<PostItem />
		</>
	)
}
