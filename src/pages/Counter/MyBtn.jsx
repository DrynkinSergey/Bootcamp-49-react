import React, { useEffect } from 'react'

export const MyBtn = props => {
	useEffect(() => {
		console.log('children is changed')
	}, [props.children])
	return <button>OK</button>
}
