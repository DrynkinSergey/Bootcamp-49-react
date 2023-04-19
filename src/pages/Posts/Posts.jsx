import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { Comment } from 'react-loader-spinner'
import { PostCard } from './PostCard'
import { Header } from '../../components/Countries/Header'
import { toast } from 'react-toastify'
import postAPI from '../../services/postsAPI'

export const Posts = () => {
	const [items, setItems] = useState([])
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState('')
	const [query, setQuery] = useState('')
	const [page, setPage] = useState(0)
	const [totalPages, setTotalPages] = useState(null)
	const isFirstRender = useRef(true)
	const myRef = useRef(null)

	useEffect(() => {
		setLoading(true)
		setTimeout(() => {
			postAPI
				.getAllPosts(0)
				.then(res => {
					// this.setState({
					// 	items: res.data.posts,
					// 	totalPages: Math.ceil(res.data.total / res.data.limit),
					// })
					setItems(res.data.posts)
					setTotalPages(Math.ceil(res.data.total / res.data.limit))
				})
				.catch(error => {
					// this.setState({ error: error.message })
					setError(error.message)
					toast.error('Try again!')
				})
				.finally(setLoading(false))
		}, 100)
	}, [])

	useEffect(() => {
		if (isFirstRender.current) {
			isFirstRender.current = false
			return
		}

		console.log('ПОШУК')
		setLoading(true)
		setError('')
		setTimeout(() => {
			postAPI
				.getAllPosts(page, query)
				.then(res => {
					if (!res.data.total) {
						// this.setState({ error: 'Empty array', items: [] })
						setError('Empty array')
						setItems([])
						toast.error('Empty array')
						return
					}
					toast.success(`Ура ми знайшли ${res.data.posts.length} новин`)
					setItems(res.data.posts)
					// this.setState({ items: res.data.posts })
				})
				.catch(error => {
					// this.setState({ error: error.message })
					setError(error.message)
					toast.error('Try again!')
				})
				.finally(setLoading(false))
		}, 100)
	}, [page, query])

	const nextPage = () => {
		// this.setState(prevState => ({ page: prevState.page + 1 }))
		setPage(prevState => prevState + 1)
	}
	const prevPage = () => {
		// this.setState(prevState => ({ page: prevState.page - 1 }))
		setPage(prevState => prevState - 1)
	}
	const handleChangeQuery = query => {
		setQuery(query)
	}

	const pages = []
	for (let i = 1; i < totalPages; i++) {
		if (i <= 10) {
			pages.push(i)
		}
	}
	return (
		<div>
			<Header title='Posts' onChangeInput={handleChangeQuery} />
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
				<>
					<Navigate ref={myRef}>
						{page !== 0 && <button onClick={prevPage}>Prev page</button>}
						<div style={{ display: 'flex', gap: '5px' }}>
							{pages.map(page => (
								<span key={page} onClick={() => setPage(page - 1)}>
									{page}
								</span>
							))}
							...
							<span onClick={() => setPage(totalPages - 1)}>{totalPages}</span>
						</div>
						<button onClick={nextPage}>Next page</button>
					</Navigate>
					<ListUL>
						{items.map(post => (
							<PostCard key={post.id} {...post} />
						))}
					</ListUL>
				</>
			)}
		</div>
	)
}
// export class Posts extends React.Component {
// 	state = {
// 		items: [],
// 		loading: false,
// 		error: '',
// 		query: '',
// 		page: 0,
// 		totalPages: null,
// 	}
// 	componentDidMount() {
// 		this.setState({ loading: true })
// 		setTimeout(() => {
// postAPI
// 	.getAllPosts(0)
// 	.then(res => {
// 		// toast.success('Congratulation, your data is ready!')

// 		this.setState({
// 			items: res.data.posts,
// 			totalPages: Math.ceil(res.data.total / res.data.limit),
// 		})
// 	})
// 	.catch(error => {
// 		this.setState({ error: error.message })
// 		toast.error('Try again!')
// 	})
// 	.finally(this.setState({ loading: false }))
// 		}, 100)
// 	}

// 	componentDidUpdate(_, prevState) {
// 		if (prevState.query !== this.state.query) {
// 			this.setState({ loading: true, error: '' })
// 			setTimeout(() => {
// 				postAPI
// 					.getPost(this.state.query)
// 					.then(res => {
// 						if (!res.data.posts.length) {
// 							this.setState({ error: 'Empty array', items: [] })
// 							toast.error('Empty array')
// 							return
// 						}
// 						toast.success('Congratulation, your data is ready!')
// 						this.setState({ items: res.data.posts })
// 					})
// 					.catch(error => {
// 						this.setState({ error: error.message })
// 						toast.error('Try again!')
// 					})
// 					.finally(this.setState({ loading: false }))
// 			}, 100)
// 		}
// 		if (prevState.page !== this.state.page) {
// 			this.setState({ loading: true, error: '' })
// 			setTimeout(() => {
// 				postAPI
// 					.getAllPosts(this.state.page)
// 					.then(res => {
// 						if (!res.data.posts.length) {
// 							this.setState({ error: 'Empty array', items: [] })
// 							toast.error('Empty array')
// 							return
// 						}
// 						toast.success('Congratulation, your data is ready!')
// 						this.setState({ items: res.data.posts })
// 					})
// 					.catch(error => {
// 						this.setState({ error: error.message })
// 						toast.error('Try again!')
// 					})
// 					.finally(this.setState({ loading: false }))
// 			}, 100)
// 		}
// 	}

// 	nextPage = () => {
// 		this.setState(prevState => ({ page: prevState.page + 1 }))
// 	}
// 	prevPage = () => {
// 		this.setState(prevState => ({ page: prevState.page - 1 }))
// 	}
// 	handleChangeQuery = query => {
// 		this.setState({ query })
// 	}
// 	render() {
// 		const { items, loading, error, page, totalPages } = this.state
// 		const pages = []
// 		for (let i = 1; i < totalPages; i++) {
// 			if (i <= 10) {
// 				pages.push(i)
// 			}
// 		}
// 		return (
// 			<div>
// 				<Header title='Posts' onChangeInput={this.handleChangeQuery} />
// 				{loading && (
// 					<Comment
// 						visible={true}
// 						height='180'
// 						width='180'
// 						ariaLabel='comment-loading'
// 						wrapperStyle={{}}
// 						wrapperClass='comment-wrapper'
// 						color='#fff'
// 						backgroundColor='#F4442E'
// 					/>
// 				)}
// 				{error && <h1>ERRRRORR Try again!</h1>}
// 				{!loading && (
// 					<>
// 						<Navigate>
// 							{page !== 0 && <button onClick={this.prevPage}>Prev page</button>}
// 							<div style={{ display: 'flex', gap: '5px' }}>
// 								{pages.map(page => (
// 									<span onClick={() => this.setState({ page: page })}>
// 										{page}
// 									</span>
// 								))}
// 								...
// 								<span
// 									onClick={() =>
// 										this.setState({ page: this.state.totalPages - 1 })
// 									}
// 								>
// 									{this.state.totalPages}
// 								</span>
// 							</div>
// 							<button onClick={this.nextPage}>Next page</button>
// 						</Navigate>
// 						<ListUL>
// 							{items.map(post => (
// 								<PostCard key={post.id} {...post} />
// 							))}
// 						</ListUL>
// 					</>
// 				)}
// 				{/* {loading ? (
// 					<Comment
// 						visible={true}
// 						height='180'
// 						width='180'
// 						ariaLabel='comment-loading'
// 						wrapperStyle={{}}
// 						wrapperClass='comment-wrapper'
// 						color='#fff'
// 						backgroundColor='#F4442E'
// 					/>
// 				) : (
// 					<ListUL>
// 						{items.map(post => (
// 							<PostCard key={post.id} {...post} />
// 						))}
// 					</ListUL>
// 				)} */}
// 			</div>
// 		)
// 	}
// }
const ListUL = styled.ul`
	display: grid;
	padding: 100px 15px;
	justify-content: center;
	grid-template-columns: repeat(auto-fit, minmax(450px, 500px));
	gap: 10px;
`
const Navigate = styled.nav`
	display: flex;
	justify-content: center;
	gap: 10px;
`
