import React from 'react'
// import { PostList } from './Components/MustToBe/PostList'
import { PostList } from './Components/MustToBe copy/PostList'
import postJson from './assets/posts.json'
export const App = () => {
	return (
		<>
			<h1>We a create our first components</h1>
			<PostList posts={postJson} />
		</>
	)
}
