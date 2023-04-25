import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Adress = () => {
	const { id } = useParams()
	const [address, setAdress] = useState('')

	useEffect(() => {
		axios
			.get(`https://dummyjson.com/users/${id}`)
			.then(res => setAdress(res.data))
	}, [id])
	return (
		<div>
			<div>
				<h2>{address?.lastName}</h2>
				<h2>{address.address?.city}</h2>
				<h2>{address.address?.address}</h2>
			</div>
		</div>
	)
}

export default Adress
