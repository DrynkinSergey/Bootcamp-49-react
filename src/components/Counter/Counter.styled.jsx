import styled from 'styled-components'

export const StyledButton = styled.button`
	padding: 10px 22px;
	border-radius: 4px;
	border: none;
	font-size: calc((2vh+2vw) * 1.3);
	background-color: white;
	transition: all 0.2s ease-in-out;
	cursor: pointer;
	&:hover {
		background-color: #091ec2;
		color: white;
	}
`
export const StyledCounter = styled.div`
	background-color: #454545;
	min-height: 40vh;
	display: flex;
	flex-direction: column;
	gap: 10px;
	align-items: center;
	justify-content: center;
	width: 40vw;
	border-radius: 12px;
	h1 {
		font-size: 100px;
		color: white;
	}
`
