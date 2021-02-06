import Swal from 'sweetalert2';
import { fetchWithoutToken } from '../helpers/fetch';
import { types } from '../types/types';

export const startLogin = (email, password) => {
	// Al ser una operación asíncrona y gracias al thunk se va a volver a disparar.
	return async (dispatch) => {
		const res = await fetchWithoutToken('auth', { email, password }, 'POST');
		const body = await res.json();

		if (!body.ok) return Swal.fire('Error', body.msg, 'error');

		localStorage.setItem('x-token', body.token);

		const userPayload = {
			uid: body.uid,
			name: body.name,
		};

		dispatch(login(userPayload));
	};
};

const login = (user) => ({
	type: types.authLogin,
	payload: user,
});
