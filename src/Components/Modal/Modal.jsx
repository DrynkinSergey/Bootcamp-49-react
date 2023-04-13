import React from 'react'

export const Modal = ({ closeModal, children }) => {
	return (
		<div>
			{children}
			<button onClick={closeModal}>Close</button>
		</div>
	)
}
