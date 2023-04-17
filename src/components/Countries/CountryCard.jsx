import React from 'react'
import styled from 'styled-components'

export const CountryCard = ({
	name,
	capital,
	region,
	flags,
	independent,
	population,
}) => {
	return (
		<Card>
			<img src={flags.png} alt='' />
			<h1>{name}</h1>
			<h2>{capital}</h2>
			<h3>{region}</h3>
			<h4>{population}</h4>
			<h4>{independent}</h4>
		</Card>
	)
}
const Card = styled.li`
	img {
		width: 100%;
		height: 100%;
	}
	display: flex;
	gap: 10px;
	flex-direction: column;
	border: 2px solid;
	border-radius: 12px;
	padding: 15px;
	background-color: #acacfe;
`
// "name": "Afghanistan",
// "capital": "Kabul",
// "region": "Asia",
// "population": 40218234,
// "flags": {
// "svg": "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg",
// "png": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_the_Taliban.svg/320px-Flag_of_the_Taliban.svg.png"
// },
// "independent": false
