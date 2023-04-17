import React from 'react'
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

const Modal = ({ onClose, children, title }) => {
	return (
		<ModalWrapper>
			<ModalContent>
				{title && <h1>{title}</h1>}
				<CloseButton onClick={onClose}>×</CloseButton>
				{children}
			</ModalContent>
		</ModalWrapper>
	)
}

export default Modal
