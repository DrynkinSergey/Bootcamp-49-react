import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const NavBar = () => {
	const navMap = [
		{ path: '/', title: 'Home' },
		{ path: '/about', title: 'About' },
		{ path: '/imageFinder', title: 'ImageFinder' },
		{ path: '/users', title: 'Users' },
		{ path: '/login', title: 'Login' },
	]
	return (
		<SideBar>
			{navMap.map(({ path, title }) => (
				<NavItem key={path} to={path}>
					{title}
				</NavItem>
			))}
		</SideBar>
	)
}
const SideBar = styled.nav`
	background-color: #d5edfd;
	min-height: 100vh;
	border-right: 2px solid black;
	display: flex;
	flex-direction: column;
	gap: 25px;
	padding: 40px 20px;
`
const NavItem = styled(NavLink)`
	display: flex;
	align-items: center;
	gap: 10px;
	padding: 5px;
	border-radius: 4px;
	text-decoration: none;
	color: black;

	&.active {
		background-color: blue;
		color: white;
	}
	&:hover:not(.active) {
		background-color: lightblue;
	}
`
