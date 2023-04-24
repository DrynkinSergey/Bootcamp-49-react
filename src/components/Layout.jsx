import React from 'react'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import { NavBar } from './NavBar'

export const Layout = () => {
	return (
		<LayoutWrapper>
			<NavBar />
		</LayoutWrapper>
	)
}

const LayoutWrapper = styled.main`
	display: grid;
	grid-template-columns: 250px 1fr;
`
