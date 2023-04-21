import { createContext } from 'react'
import usersJson from './assets/employee.json'
import colors from './assets/colors.json'
export const UsersContext = createContext()

export const myData = {
	users2: usersJson,
	colors: colors,
	user: {
		name: 'petya',
		email: 'petyaPupkin@mail.com',
		greetings: name => {
			console.log(`hello ${name}`)
		},
	},
}
