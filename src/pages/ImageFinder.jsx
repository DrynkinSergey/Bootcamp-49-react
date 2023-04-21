import axios from 'axios'
import { useEffect, useReducer, useState } from 'react'
import Modal from '../components/Modal'
import styled from 'styled-components'
import { useToggle } from '../hooks/useToggle'

export const ImageFinder = () => {
	// const [images, setImages] = useState([])
	// const [largeImg, setLargeImg] = useState(null)
	useEffect(() => {
		console.log('Компонент ImageFinder є на екрані')
		return () => {
			console.log('Компонент ImageFinder видалено')
		}
	}, [])
	const initialState = {
		images: [],
		largeImg: null,
		loading: false,
	}
	const imageReducer = (state, action) => {
		switch (action.type) {
			case 'getImages':
				return {
					...state,
					images: [...state.images, ...action.payload],
				}
			case 'setLoading':
				return {
					...state,
					loading: true,
				}
			case 'setLoadingFalse':
				return {
					...state,
					loading: false,
				}
			case 'setImage':
				return {
					...state,
					largeImg: action.payload,
				}

			default:
				console.log('Такого єкшену не має ще')
				return state
		}
	}

	const [state, dispatch] = useReducer(imageReducer, initialState)

	const { toggle } = useToggle()

	useEffect(() => {
		dispatch({ type: 'setLoading' })
		axios
			.get(
				'https://pixabay.com/api/?key=34245251-6411f4167ae6b395d699c44eb&q=yellow+flowers&image_type=photo'
			)
			// .then(res => setImages(prevState => [...prevState, ...res.data.hits]))
			.then(res => {
				dispatch({ type: 'getImages', payload: res.data.hits })
				dispatch({ type: 'setLoadingFalse' })
			})
	}, [])

	const onClose = () => {
		// setLargeImg(null)
		dispatch({ type: 'setImage', payload: null })
	}
	return (
		<>
			<ImageContainer>
				{state.images.map(image => (
					<Card
						key={image.id}
						onClick={() =>
							dispatch({ type: 'setImage', payload: image.largeImageURL })
						}
					>
						<img src={image.webformatURL} alt='img' />
					</Card>
				))}
			</ImageContainer>
			{state.largeImg && (
				<Modal onClose={onClose}>
					<img width='100%' src={state.largeImg} alt='img' />
				</Modal>
			)}
		</>
	)
}
// export class ImageFinder extends Component {
// 	state = {
// 		images: [],
// 		largeImg: null,
// 		showModal: false,
// 	}
// 	onClose = () => {
// 		this.setState(prevState => ({
// 			showModal: !prevState.showModal,
// 			largeImg: null,
// 		}))
// 	}
// 	componentDidMount() {
// 		axios
// 			.get(
// 				'https://pixabay.com/api/?key=34245251-6411f4167ae6b395d699c44eb&q=yellow+flowers&image_type=photo'
// 			)
// 			.then(res =>
// 				this.setState(prevState => ({
// 					images: [...prevState.images, ...res.data.hits],
// 				}))
// 			)
// 		setTimeout(() => {
// 			axios
// 				.get(
// 					'https://pixabay.com/api/?key=34245251-6411f4167ae6b395d699c44eb&q=yellow+flowers&image_type=photo'
// 				)
// 				.then(res =>
// 					this.setState(prevState => ({
// 						images: [...prevState.images, ...res.data.hits],
// 					}))
// 				)
// 		}, 3000)
// 	}
// 	componentDidUpdate(p, prevState) {}
// 	render() {
// 		const { images, largeImg } = this.state
// 		return (
// 			<>
// 				<ImageContainer>
// 					{images.map(image => (
// 						<Card
// 							key={image.id}
// 							onClick={() => this.setState({ largeImg: image.largeImageURL })}
// 						>
// 							<img src={image.webformatURL} alt='img' />
// 						</Card>
// 					))}
// 				</ImageContainer>
// 				{largeImg && (
// 					<Modal onClose={this.onClose}>
// 						<img width='100%' src={largeImg} alt='img' />
// 					</Modal>
// 				)}
// 			</>
// 		)
// 	}
// }
const ImageContainer = styled.ul`
	display: grid;
	justify-content: center;
	grid-template-columns: repeat(auto-fit, minmax(350px, 400px));
	gap: 10px;
	cursor: pointer;
`
const Card = styled.li`
	display: flex;
	gap: 10px;
	flex-direction: column;
	border-radius: 12px;
	overflow: hidden;

	img {
		width: 100%;
		height: 100%;
		transition: all 0.8s ease-in-out;

		object-fit: cover;
		&:hover {
			transform: scale(1.1);
		}
	}
`
