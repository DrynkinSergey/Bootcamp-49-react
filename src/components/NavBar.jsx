import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { useAuth } from '../hooks/useAuth'

export const NavBar = () => {
	const location = useLocation()
	const navigate = useNavigate()
	const navMap = [
		{ path: '/', title: 'Home' },
		{ path: '/about', title: 'About' },
		{ path: '/imageFinder', title: 'ImageFinder' },
		{ path: '/users', title: 'Users' },
		{ path: '/posts', title: 'Posts' },
	]
	const { user, signOut } = useAuth()

	return (
		<SideBar>
			{user && <h1>{user}</h1>}
			{navMap.map(({ path, title }) => (
				<NavItem key={path} to={path} state={{ from: location }}>
					{title}
				</NavItem>
			))}
			{!user ? (
				<button
					onClick={() => navigate('/login', { state: { from: location } })}
				>
					Login
				</button>
			) : (
				<button onClick={() => signOut()}>Exit</button>
			)}
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
