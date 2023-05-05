import React from 'react'
import { useMediaQuery } from 'react-responsive'
import Form from './Form'

const Media = () => {
	const isMobile = useMediaQuery({ query: '(max-width: 600px)' })
	const isTablet = useMediaQuery({
		query: '(min-width: 601px) and (max-width: 768px)',
	})
	const isDesktop = useMediaQuery({ query: '(min-width: 769px)' })
	console.log(isMobile)
	return (
		<div className='w-1/2'>
			{isDesktop && <Form />}
			{isTablet && (
				<div className='bg-blue-500 w-[200px] h-[200px]'>Tablet</div>
			)}
		</div>
	)
}

export default Media
// npm i axios
