import React from 'react'
import { UserList } from './components/UserList/UserList'
import usersData from './assets/users.json'
import { Section } from './components/Modal'

export const App = () => {
	const isLoading = false
	return (
		<div>
			<h1>UserList</h1>

			{/* {isOpen && <h1>If isOpen im open</h1>}

			{isOpen ? (
				<h1>If isOpen == true im open</h1>
			) : (
				<h1>If isOpen == false im closed</h1>
			)} */}
			{/* {isLoading && <h1>Loading</h1>} */}
			{/* {!isLoading && <UserList usersData={usersData} />} */}

			<Section title='Інфо' data='Контент іншої секції'>
				<p>Тут буде лежати зовсім інший контент</p>
			</Section>

			<Section title='Users' data='users data example'>
				<UserList usersData={usersData} />
			</Section>
		</div>
	)
}
