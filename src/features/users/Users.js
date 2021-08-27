import {
	userSelector, loadingSelector,
	fetchUsersAnsync
} from './userSlice'
import { useDispatch } from 'react-redux';

import { useAppSelector } from '../../app/hooks'


function Users(props) {
	const dispatch = useDispatch();

	let users = useAppSelector(userSelector);
	let loading = useAppSelector(loadingSelector)
	console.log(loading)


	return loading === 'loaded' ? (
		<div>
			<h3>Users list</h3>
			{users.map((user, i) => (
				<div key={'myKey'+i}>
					<p>Username: {user.username}</p>
					<p>Email: {user.email}</p>
				</div>
			))}
		</div>
	) : loading === 'notloading' ? (
		<div>
			<button onClick={ () => dispatch(fetchUsersAnsync()) } >load user</button>
		</div>
	) : loading === 'failed' ? (
		<h3 style={{color: 'red', textAlign:'center'}} >Error fetching data from server</h3>
	) : <p>Loading...</p>
}

export default Users;
