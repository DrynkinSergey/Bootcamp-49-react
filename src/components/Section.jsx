import React from 'react'

export const Section = props => {
	const { title = 'undefined', content = 'content is empty' } = props
	return (
		<section>
			<h1>{title} Content</h1>
			<p>{content}</p>
		</section>
	)
}
