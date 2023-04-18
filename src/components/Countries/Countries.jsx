import React, { Component } from 'react'
import { Header } from './Header'
import { CountryList } from './CountryList'
import countriesAPI from '../../services/countryAPI'

export class Countries extends Component {
	state = {
		items: [],
		name: '',
		error: null,
		status: 'fullfiled',
	}
	componentDidMount() {
		countriesAPI.getCountries().then(res => this.setState({ items: res.data }))
	}
	componentDidUpdate(prevProps, prevState) {
		if (prevState.name !== this.state.name) {
			this.setState({ status: 'pending' })
			countriesAPI
				.getCountry(this.state.name)
				.then(res => this.setState({ items: res.data, status: 'fullfiled' }))
				.catch(error => this.setState({ error, status: 'error' }))
		}
	}
	handleChangeCountry = name => {
		this.setState({ name })
	}

	render() {
		const { status, items } = this.state
		if (status === 'fullfiled') {
			return (
				<>
					<Header onFind={this.handleChangeCountry} />
					<CountryList items={items} />
				</>
			)
		}

		if (status === 'pending') {
			return (
				<>
					<Header onFind={this.handleChangeCountry} />
					<h1>Loading...</h1>
				</>
			)
		}
		if (status === 'error') {
			return (
				<>
					<Header onFind={this.handleChangeCountry} />
					<h1>Sorry its a mistake, try again!</h1>
				</>
			)
		}
	}
}
