import React from 'react'
import { PostList } from './Components/MustToBe/PostList'
import postsJson from './assets/posts.json'
export class App extends React.Component {
	state = {
		posts: postsJson,
	}
	render() {
		return (
			<>
				<h1>We a create our first components</h1>
				<PostList posts={this.state.posts} />
			</>
		)
	}
}
