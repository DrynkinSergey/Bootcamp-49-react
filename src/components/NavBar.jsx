import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
const pages = [
	{ title: 'Color Picker', url: '/colorPicker' },
	{ title: 'Counter', url: '/counter' },
	{ title: 'Login', url: '/login' },
	{ title: 'ImageFinder', url: '/imageFinder' },
	{ title: 'Posts', url: '/posts' },
]

export const NavBar = () => {
	const [active, setActive] = useState(0)

	const setActiveHandler = id => {
		setActive(id)
	}
	return (
		<Navbar>
			{pages.map((page, index) => (
				<NavLink key={page.title} to={page.url}>
					<Link
						active={active}
						index={index}
						onClick={() => setActiveHandler(index)}
					>
						{page.title}
					</Link>
				</NavLink>
			))}
		</Navbar>
	)
}

const Navbar = styled.nav`
	display: flex;
	justify-content: center;
	gap: 20px;
	padding: 10px 0;
`

const Link = styled.span`
	transition: all 0.3s linear;
	border-bottom: ${props =>
		props.active === props.index && '2px solid lightblue'};
	&:hover {
		color: blue;
	}
`
