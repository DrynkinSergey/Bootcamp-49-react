import React from 'react'
import styled, { css } from 'styled-components'

const StyledFlex = styled.div`
	${props =>
		props.center100vh &&
		css`
			display: flex;
			justify-content: center;
			align-items: center;
			min-height: 100vh;
		`};
	flex-direction: ${props => props.direction || 'row'};
	gap: ${props => props.gap || '0'};
`
export const Flex = props => {
	return <StyledFlex {...props} />
}
