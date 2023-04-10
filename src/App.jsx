import React from 'react'
import productsJson from './assets/mockData/products.json'
import { Product } from './components/Product'
// const h1 = React.createElement('h1', null, 'hello im h1')
// const el = React.createElement(
// 	'div',
// 	{ title: 'Our div', b: '10', style: { color: 'red' } },
// 	[
// 		'Hello world its first element',
// 		h1,
// 		React.createElement('h2', null, 'hello im h2'),
// 	]
// )
// const section = <section>Section</section>
// const el2 = (
// 	<div>
// 		Hello world its first element
// 		<h1>Hello world its h1</h1>
// 		<h2>Hello world its h2</h2>
// 		<h1>{2 + 2}</h1>
// 		{h1}
// 		{section}
// 	</div>
// )

export const App = props => {
	return (
		<div>
			<header className='dfadsf'>
				<h1>{props.title}</h1>{' '}
			</header>
			<ul>
				{productsJson.map((product, index) => {
					return (
						<Product
							key={product.id}
							image={product.images[0]}
							title={product.title}
							description={product.description}
							price={product.price}
							stock={product.stock}
						/>
					)
				})}
			</ul>
		</div>
	)
}
// { image, title, description, price, stock }
{
	/* <Section title='Main' content='information about smth' />
			<Section content='user info' />
			<Section />
			<Section title='music' /> */
}
