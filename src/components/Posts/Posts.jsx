import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { Comment } from 'react-loader-spinner'
import { PostCard } from './PostCard'
import { Header } from '../Countries/Header'
import { toast } from 'react-toastify'

export class Posts extends Component {
	state = {
		items: [],
		loading: false,
		error: '',
		query: '',
	}
	componentDidMount() {
		this.setState({ loading: true })
		setTimeout(() => {
			axios
				.get('https://dummyjson.com/posts')
				.then(res => {
					toast.success('Congratulation, your data is ready!')
					this.setState({ items: res.data.posts })
				})
				.catch(error => {
					this.setState({ error: error.message })
					toast.error('Try again!')
				})
				.finally(this.setState({ loading: false }))
		}, 1000)
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.query !== this.state.query) {
			this.setState({ loading: true })
			setTimeout(() => {
				axios
					.get(`https://dummyjson.com/posts/search?q=${this.state.query}`)
					.then(res => {
						toast.success('Congratulation, your data is ready!')
						this.setState({ items: res.data.posts })
					})
					.catch(error => {
						this.setState({ error: error.message })
						toast.error('Try again!')
					})
					.finally(this.setState({ loading: false }))
			}, 1000)
		}
	}

	handleChangeQuery = query => {
		this.setState({ query })
	}
	render() {
		const { items, loading, error, query } = this.state
		return (
			<div>
				<Header title='Posts' onChangeInput={this.handleChangeQuery} />
				{loading && (
					<Comment
						visible={true}
						height='180'
						width='180'
						ariaLabel='comment-loading'
						wrapperStyle={{}}
						wrapperClass='comment-wrapper'
						color='#fff'
						backgroundColor='#F4442E'
					/>
				)}
				{error && <h1>ERRRRORR Try again!</h1>}
				{!loading && (
					<ListUL>
						{items.map(post => (
							<PostCard key={post.id} {...post} />
						))}
					</ListUL>
				)}
				{/* {loading ? (
					<Comment
						visible={true}
						height='180'
						width='180'
						ariaLabel='comment-loading'
						wrapperStyle={{}}
						wrapperClass='comment-wrapper'
						color='#fff'
						backgroundColor='#F4442E'
					/>
				) : (
					<ListUL>
						{items.map(post => (
							<PostCard key={post.id} {...post} />
						))}
					</ListUL>
				)} */}
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
