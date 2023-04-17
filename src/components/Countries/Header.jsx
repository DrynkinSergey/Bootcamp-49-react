import React from 'react'
import styled from 'styled-components'

export const Header = () => {
	const onSubmit = e => {
		e.preventDefault()
		const form = e.target
		console.log(form.input.value)
		form.reset()
	}
	return (
		<HeaderWrapper>
			<div>Countries</div>
			<form onSubmit={onSubmit}>
				<input name='input' type='text' />
				<button>find</button>
			</form>
		</HeaderWrapper>
	)
}
const HeaderWrapper = styled.header`
	padding: 45px 90px;
	display: flex;
	justify-content: space-between;
	background-color: lightblue;
`
