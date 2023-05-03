import styled from 'styled-components'

export const Table = styled.table`
	border-collapse: collapse;
	width: 100%;
	box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
	padding: 10px 0;
	margin: 0 auto;
	border-radius: 10px;
	overflow: hidden;
`

export const Th = styled.th`
	background-color: #2b53f6;
	color: white;
	text-align: left;
	padding: 8px;
	border: 1px solid #ddd;
	white-space: nowrap;
`
export const ThAvatar = styled(Th)`
	text-align: center;
	width: 64px;
`
export const ThActions = styled(Th)`
	text-align: center;
	width: 120px;
`
export const ThIndex = styled(Th)`
	text-align: center;
	width: 20px;
`

export const Td = styled.td`
	text-align: left;
	padding: 8px;
	border: 1px solid #ddd;
	white-space: nowrap;
`

export const AvatarImg = styled.img`
	width: 50px;
	height: 50px;
	border-radius: 50%;
	object-fit: cover;
`
export const Tr = styled.tr`
	background-color: ${({ status }) => (status === 'yes' ? '#c6e6ff' : 'white')};
`

export const ActionButton = styled.button`
	background-color: #007bff;
	&:hover {
		background-color: ${({ remove }) => (remove ? 'red' : 'blue')};
	}
	color: white;
	padding: 8px 16px;
	border: none;
	border-radius: 4px;
	cursor: pointer;
	margin-right: 8px;

	&:last-child {
		margin-right: 0;
	}
`
