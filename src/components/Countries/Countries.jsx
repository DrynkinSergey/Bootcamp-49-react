import React, { Component } from 'react'
import { Header } from './Header'
import { CountryList } from './CountryList'
import axios from 'axios'

export class Countries extends Component {
	componentDidMount() {
		axios
			.get('https://restcountries.eu/rest/v2/all')
			.then(res => console.log(res))
	}

	render() {
		return (
			<>
				<Header title='Countries' />
				<CountryList />
			</>
		)
	}
}
