import React from 'react'
import { toast } from 'react-toastify'
import styled from 'styled-components'

export const Header = ({ title = 'header', onChangeInput }) => {
	const onSubmit = e => {
		e.preventDefault()
		if (!e.target.input.value) {
			toast.warning('Empty query!')
			return
		}
		const form = e.target
		onChangeInput(form.input.value)
		form.reset()
	}
	return (
		<HeaderWrapper>
			<h1>{title}</h1>
			<form onSubmit={onSubmit}>
				<input name='input' type='text' />
				<button>Search</button>
			</form>
		</HeaderWrapper>
	)
}
const HeaderWrapper = styled.header`
	padding: 45px 90px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	background-color: lightblue;
	font-size: 1.2rem;

	input {
		padding: 4px 15px;
		font-size: 1.5rem;
	}
	button {
		padding: 4px 15px;
		font-size: 1.5rem;
	}
`
