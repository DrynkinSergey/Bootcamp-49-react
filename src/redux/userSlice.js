import { createSlice } from '@reduxjs/toolkit'

const initialState = { users: [], filter: '' }
const userSlice = createSlice({
	name: '@@users',
	initialState,
	reducers: {
		setUsers: (state, action) => {
			state.users.push(...action.payload)
		},
		setFilter: (state, { payload }) => {
			state.filter = payload
		},
	},
})
export const { setUsers, setFilter } = userSlice.actions
export const userReducer = userSlice.reducer
