import React, { Component, useEffect } from 'react'
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

const Modal = ({ onClose, children }) => {
	const handleKeydown = e => {
		if (e.key === 'Escape') {
			console.log('Escape')
			onClose()
		}
	}
	useEffect(() => {
		document.addEventListener('keydown', handleKeydown)
		return () => {
			document.removeEventListener('keydown', handleKeydown)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const onBackdropClick = e => {
		if (e.target === e.currentTarget) {
			onClose()
		}
	}

	// componentDidMount() {
	// 	document.addEventListener('keydown', this.handleKeydown)

	// 	this.intervalId = setInterval(() => {
	// 		this.setState({ time: new Date().toLocaleTimeString() })
	// 	}, 1000)

	// 	this.timeoutId = setTimeout(() => {
	// 		console.log('hello from modal')
	// 	}, 4000)
	// }

	// componentWillUnmount() {
	// 	console.log('componentWillUnmount')
	// 	clearInterval(this.intervalId)
	// 	clearTimeout(this.timeoutId)
	// 	document.removeEventListener('keydown', this.handleKeydown)
	// }
	return ReactDOM.createPortal(
		<ModalWrapper onClick={onBackdropClick}>
			<ModalContent>
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
// 		if (e.key === 'm') {
// 			console.log('m')
// 			this.props.onClose()
// 		}
// 	}

// 	onBackdropClick = e => {
// 		// console.log('Закрити модалку по кліку на бекдроп')

// 		// console.log('event target=>>>>>>>>', e.target)
// 		// console.log('event Current Target=>>>>>>>>', e.currentTarget)
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
