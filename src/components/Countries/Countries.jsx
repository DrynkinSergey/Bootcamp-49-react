import React, { Component } from 'react'
import { Header } from './Header'
import { CountryList } from './CountryList'
import countriesAPI from '../../services/countryAPI'

export class Countries extends Component {
	render() {
		return (
			<>
				<Header />
				<CountryList />
			</>
		)
	}
}
