import React, { Component } from 'react'
import styled from 'styled-components'
import { PostCard } from './PostCard'
import { Header } from '../Countries/Header'

export class Posts extends Component {
	state = {
		items: [],
	}

	render() {
		const { items } = this.state
		return (
			<div>
				<Header title='Posts' />
				<ListUL>
					{items.map(post => (
						<PostCard key={post.id} {...post} />
					))}
				</ListUL>
			</div>
		)
	}
}
const ListUL = styled.ul`
	display: grid;
	padding: 100px 15px;
	justify-content: center;
	grid-template-columns: repeat(auto-fit, minmax(450px, 500px));
	gap: 10px;
`
