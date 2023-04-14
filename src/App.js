import React from 'react'
// import { PostList } from './Components/MustToBe/PostList'
import { PostList } from './Components/MustToBe copy/PostList'
import postJson from './assets/posts.json'
export class App extends React.Component {
	state = {
		posts: postJson,
	}

	handleDeletePost = id => {
		this.setState(prevState => ({
			posts: prevState.posts.filter(post => post.id !== id),
		}))
	}

	handleIncreeseLikes = id => {
		this.setState(prevState => ({
			posts: prevState.posts.map(post => {
				if (post.id === id) {
					return { ...post, reactions: post.reactions + 1 }
				} else return post
			}),
		}))
	}

	render() {
		const { posts } = this.state

		return (
			<>
				<h1>We a create our first components</h1>
				<h2>Hello </h2>
				<PostList
					onLiked={this.handleIncreeseLikes}
					onDeletePost={this.handleDeletePost}
					posts={posts}
				/>
			</>
		)
	}
}
