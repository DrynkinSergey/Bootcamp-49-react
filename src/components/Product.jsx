import React from 'react'

export const Product = ({
	image,
	title = 'нема назви',
	description,
	price,
	stock,
}) => {
	return (
		<li>
			<div>
				<img src={image} alt='' />
			</div>
			<h1>Назва: {title}</h1>
			<h3>Опис: {description}</h3>
			<h4>Ціна: {price}$</h4>
			<h4>Залишилось на складі: {stock}</h4>
		</li>
	)
}
