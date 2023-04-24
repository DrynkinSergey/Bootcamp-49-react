import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { NavBar } from './NavBar'

export const Layout = () => {
	const navigate = useNavigate()
	return (
		<LayoutWrapper>
			<NavBar />
			<WrapperOutlet>
				<button onClick={() => navigate(-1)}>Back</button>
				<button onClick={() => navigate(1)}>Next</button>

				<Outlet />
			</WrapperOutlet>
		</LayoutWrapper>
	)
}

const LayoutWrapper = styled.main`
	display: grid;
	grid-template-columns: 200px 1fr;
`
const WrapperOutlet = styled.div`
	padding: 20px;
`
