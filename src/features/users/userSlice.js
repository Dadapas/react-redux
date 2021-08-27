import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { fetchUsers } from './userAPI'
import axios from 'axios';

const initialState = {
	status : 'notloading',
	users : []
}

export const fetchUsersAnsync = createAsyncThunk(
	'user/fetchUsers',
	async () => {
		// const response = await fetchUsers();
		const response = await axios.get('https://jsonplaceholder.typicode.com/users')
		console.log(response)

		return response.data
	}
)

export const userSelector = (state) => state.user.users

export const loadingSelector = (state) => state.user.status

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		getUsers: (state, action) => {
			return state.users
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchUsersAnsync.pending, (state, action) => {
				state.status = 'loading'
			})
			.addCase(fetchUsersAnsync.fulfilled, (state, action) => {
				state.status = 'loaded';
				action.payload.forEach( user  => {
					state.users.push(user)
				});

			})
	}
})

export const { getUsers } = userSlice.actions

export default userSlice.reducer
