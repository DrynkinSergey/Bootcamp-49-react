import React from 'react'

export const Section = props => {
	return (
		<div>
			{/* <h1>Section name:{props.title}</h1>
			<h1>Section data:{props.data}</h1> */}
			{props.children}
		</div>
	)
}
