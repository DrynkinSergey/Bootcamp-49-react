import React from 'react'
import styled from 'styled-components'
import { CountryCard } from './CountryCard'

export const CountryList = ({ items }) => {
	return (
		<List>
			{items.map(item => (
				<CountryCard id={item.id} {...item} />
			))}
		</List>
	)
}
const List = styled.ul`
	padding: 15px;
	display: grid;
	justify-content: center;
	grid-template-columns: repeat(auto-fit, minmax(350px, 400px));
	gap: 10px;
`
