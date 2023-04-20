import React, { useEffect, useRef, useState } from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

const ModalWrapper = styled.div`
	position: fixed;
	inset: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: rgba(0, 0, 0, 0.5);
`

const ModalContent = styled.div`
	position: relative;
	background-color: white;
	padding: 20px;
	overflow: hidden;
	max-width: 1000px;
	border-radius: 5px;
`

const CloseButton = styled.button`
	position: absolute;
	top: 5px;
	right: 5px;
	background-color: transparent;
	border: none;
	font-size: 20px;
	cursor: pointer;
`
const modalDiv = document.querySelector('#modal')

const Modal = ({ onClose, children, title }) => {
	const intervalId = useRef(null)
	// console.log(intervalId.current)

	const timeoutID = useRef(null)
	const [state, setState] = useState('')
	useEffect(() => {
		document.addEventListener('keydown', handleKeydown)
		intervalId.current = setInterval(() => {
			setState(new Date().toLocaleTimeString())
		}, 1000)
		timeoutID.current = setTimeout(() => {
			console.log('Timeout')
		}, 3000)

		//Очищує наші еффекти, лісенери, таймаути, інтервали
		// willUnmount аналог
		return () => {
			console.log('unmount')
			clearTimeout(timeoutID.current)
			// clearInterval(intervalId.current)
			clearInterval(intervalId.current)
			document.removeEventListener('keydown', handleKeydown)
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const handleKeydown = e => {
		if (e.key === 'Escape') {
			console.log('Escape')
			onClose()
		}
	}

	const onBackdropClick = e => {
		if (e.target === e.currentTarget) {
			onClose()
		}
	}

	return ReactDOM.createPortal(
		<ModalWrapper onClick={onBackdropClick}>
			<ModalContent>
				{title && <h1>{title}</h1>}
				<CloseButton onClick={onClose}>×</CloseButton>
				{children}
			</ModalContent>
		</ModalWrapper>,
		modalDiv
	)
}

// class Modal extends Component {
// 	handleKeydown = e => {
// 		if (e.key === 'Escape') {
// 			console.log('Escape')
// 			this.props.onClose()
// 		}
// 	}

// 	onBackdropClick = e => {
// 		if (e.target === e.currentTarget) {
// 			this.props.onClose()
// 		}
// 	}

// 	intervalId = null
// 	timeoutId = null
// 	componentDidMount() {
// 		document.addEventListener('keydown', this.handleKeydown)

// 		this.intervalId = setInterval(() => {
// 			this.setState({ time: new Date().toLocaleTimeString() })
// 		}, 1000)

// 		this.timeoutId = setTimeout(() => {
// 			console.log('hello from modal')
// 		}, 4000)
// 	}

// 	componentDidUpdate() {}

// 	componentWillUnmount() {
// 		console.log('componentWillUnmount')
// 		clearInterval(this.intervalId)
// 		clearTimeout(this.timeoutId)
// 		document.removeEventListener('keydown', this.handleKeydown)
// 	}

// 	render() {
// 		const { onClose, children, title } = this.props
// 		return ReactDOM.createPortal(
// 			<ModalWrapper onClick={this.onBackdropClick}>
// 				<ModalContent>
// 					{title && <h1>{title}</h1>}
// 					<CloseButton onClick={onClose}>×</CloseButton>
// 					{children}
// 				</ModalContent>
// 			</ModalWrapper>,
// 			modalDiv
// 		)
// 	}
// }

export default Modal
