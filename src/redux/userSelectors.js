export const selectAllUsers = state => state.users.users
export const selectFilter = state => state.users.filter

export const selectFilterdData = state => {
	const users = selectAllUsers(state)
	const filter = selectFilter(state)
	return users.filter(user => user.name.toLowerCase().includes(filter))
}
