import React from 'react'
import styled from 'styled-components'

const StyledFlex = styled.div`
	display: flex;
	flex-direction: ${props => props.direction || 'row'};
	justify-content: ${props => props.justify || 'stretch'};
	align-items: ${props => props.items || 'stretch'};
	gap: ${props => props.gap || '0'};
	height: ${props => props.height || 'auto'};
	width: 100%;
`
export const Flex = props => {
	return <StyledFlex {...props} />
}
