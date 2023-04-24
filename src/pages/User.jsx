import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, Outlet, useParams } from 'react-router-dom'

const User = () => {
	const { id } = useParams()
	const [user, setUser] = useState({})

	useEffect(() => {
		axios.get(`https://dummyjson.com/users/${id}`).then(res => {
			setUser(res.data)
			console.log(res.data)
		})
	}, [id])

	const { firstName, lastName, age, image, phone, email } = user
	return (
		<div>
			<h1>You see user #{id}</h1>
			<img src={image} alt='userImg' />
			<h1>
				{firstName} {lastName}
			</h1>
			<h2>Age:{age}</h2>
			<h2>email:{email}</h2>
			<h3>phone: {phone}</h3>
			<Link to={`posts`}>Побачити пости</Link>
			<br />
			<Link to={`adress`}>Побачити адресу юзера</Link>
			<Outlet fallback={<h1>Loading...</h1>} />
		</div>
	)
}

export default User
