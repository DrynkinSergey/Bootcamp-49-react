import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const NavBar = () => {
	return (
		<SideBar>
			<NavItem to='/'>Home</NavItem>
			<NavItem>Home</NavItem>
			<NavItem>Home</NavItem>
			<NavItem>Home</NavItem>
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

	&:active {
		background-color: blue;
		color: white;
	}
`
