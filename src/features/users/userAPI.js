
export const fetchUsers = () => {

	/*return fetch('https://placeholderit.com/users');*/

	return new Promise((resolve) => {
		setTimeout(() => resolve({
				data: [
					{
						id : 1,
						username: 'dadapas',
						email: 'myemail@gmail.com',
						address: {
							street: '6545',
							line1: 'line +6'
						},
						phone: '+261345698465'
					},
					{
						id : 2,
						username: 'lumiere',
						email: 'lumiere.rakoto@tomail.fr',
						address: {
							street: '465 LOMAI',
							line1: '4654 line 5'
						},
						phone: '+261345698465'
					},
					{
						id : 3,
						username: 'senegal',
						email: 'mamaline.klin@gmail.com',
						address: {
							street: '985 KLANKSON',
							line1: 'line 5984'
						},
						phone: '+6-654-6546-564'
					},
				]
			})
		, 3000);
	})
}

export const updateUser = (data) => {
	const formBody = {
		'username' : 'placeholit',
		'password': 'blabla'
	};

	return fetch('https://placeholit.com/users/1', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=UTF-8'
		},
		body: JSON.stringify(formBody)
	})
}