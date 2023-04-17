import React, { Component } from 'react'
import { Header } from './Header'
import { CountryList } from './CountryList'
import axios from 'axios'

export class Countries extends Component {
	state = {
		items: [],
	}
	componentDidMount() {
		axios
			.get(
				'https://restcountries.com/v2/all?fields=name,capital,flags,population,region'
			)
			.then(res => this.setState({ items: res.data }))
	}
	render() {
		return (
			<>
				<Header />
				<CountryList items={this.state.items} />
			</>
		)
	}
}
