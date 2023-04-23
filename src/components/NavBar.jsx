import styled from 'styled-components'

export const NavBar = () => {
	return (
		<SideBar>
			<span>Home</span>
			<span>Home</span>
			<span>Home</span>
			<span>Home</span>
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
