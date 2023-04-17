import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import styled from 'styled-components'
const BannerWrapper = styled.div`
	width: 40%;
	height: 40%;
	background-color: green;
	position: fixed;
	left: 0;
	top: 0;
`
const bannerDiv = document.querySelector('#banner')
export default class Banner extends Component {
	state = {
		display: 'block',
	}
	render() {
		return ReactDOM.createPortal(
			<BannerWrapper
				style={this.state}
				onClick={() => this.setState({ display: 'none' })}
			>
				Banner
			</BannerWrapper>,
			bannerDiv
		)
	}
}
