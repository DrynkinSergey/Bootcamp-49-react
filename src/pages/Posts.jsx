import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Posts = () => {
	const { id } = useParams()
	console.log(id)
	const [posts, setPosts] = useState([])
	useEffect(() => {
		axios.get(`https://dummyjson.com/users/${id}/posts`).then(res => {
			setPosts(res.data.posts)
		})
	}, [id])
	return (
		<div>
			Posts
			<ul>
				{posts.map((post, idx) => (
					<li key={post.id}>
						<h3>
							{idx + 1}.{post.title}
						</h3>
						<p>{post.body}</p>
					</li>
				))}
			</ul>
		</div>
	)
}

export default Posts
