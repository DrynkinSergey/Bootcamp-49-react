import axios from 'axios'
import { Component } from 'react'
import Modal from '../components/Modal'
import styled from 'styled-components'

export class ImageFinder extends Component {
	state = {
		images: [],
		largeImg: null,
		showModal: false,
	}
	onClose = () => {
		this.setState(prevState => ({
			showModal: !prevState.showModal,
			largeImg: null,
		}))
	}
	componentDidMount() {
		axios
			.get(
				'https://pixabay.com/api/?key=34245251-6411f4167ae6b395d699c44eb&q=yellow+flowers&image_type=photo'
			)
			.then(res =>
				this.setState(prevState => ({
					images: [...prevState.images, ...res.data.hits],
				}))
			)
		setTimeout(() => {
			axios
				.get(
					'https://pixabay.com/api/?key=34245251-6411f4167ae6b395d699c44eb&q=yellow+flowers&image_type=photo'
				)
				.then(res =>
					this.setState(prevState => ({
						images: [...prevState.images, ...res.data.hits],
					}))
				)
		}, 3000)
	}
	componentDidUpdate(p, prevState) {}
	render() {
		const { images, largeImg } = this.state
		return (
			<>
				<ImageContainer>
					{images.map(image => (
						<Card
							key={image.id}
							onClick={() => this.setState({ largeImg: image.largeImageURL })}
						>
							<img src={image.webformatURL} alt='img' />
						</Card>
					))}
				</ImageContainer>
				{largeImg && (
					<Modal onClose={this.onClose}>
						<img width='100%' src={largeImg} alt='img' />
					</Modal>
				)}
			</>
		)
	}
}
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
