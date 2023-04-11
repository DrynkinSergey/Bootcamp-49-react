import styled from 'styled-components'

export const StyledUserItem = styled.li`
	border: 2px solid black;
	padding: 20px 10px;
	border-radius: 12px;
	background-color: ${({ gender }) => {
		return gender === 'male' ? 'lightblue' : 'pink'
	}};
	box-shadow: 4px 4px 2px 3px rgb(0, 0, 0, 0.3);
	&:hover {
		box-shadow: 0px 0px 12px 23px rgba(0, 255, 89, 0.3);
	}
`
export const StyledFirstName = styled.h3`
	color: indigo;
`
