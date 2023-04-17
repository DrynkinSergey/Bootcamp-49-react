import axios from 'axios'
import React, { Component } from 'react'
import { CountryList } from './components/Countries/CountryList'
import { Countries } from './components/Countries/Countries'

export class App extends Component {
	render() {
		return (
			<>
				<Countries />
			</>
		)
	}
}
