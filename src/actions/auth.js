import Swal from 'sweetalert2';
import { fetchWithoutToken, fetchWithToken } from '../helpers/fetch';
import { types } from '../types/types';
import { operationLogout } from './operations';

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
			balance: body.balance,
		};

		dispatch(login(userPayload));
	};
};

export const startRegister = (name, email, password) => {
	return async (dispatch) => {
		const res = await fetchWithoutToken('auth/new', { name, email, password }, 'POST');
		const body = await res.json();

		if (!body.ok) return Swal.fire('Error', body.msg, 'error');

		localStorage.setItem('x-token', body.token);

		const userPayload = {
			uid: body.uid,
			name: body.name,
			balance: body.balance,
		};

		dispatch(login(userPayload));
	};
};

export const startChecking = () => {
	return async (dispatch) => {
		const res = await fetchWithToken('auth/renew');
		const body = await res.json();

		if (body.ok) {
			localStorage.setItem('x-token', body.token);

			const userPayload = {
				uid: body.uid.toString(),
				name: body.name,
				balance: body.balance,
			};

			dispatch(login(userPayload));
		} else {
			dispatch(checkingFinish());
		}
	};
};

const checkingFinish = () => ({ type: types.authCheckingFinish });

export const startLogout = () => {
	return (dispatch) => {
		localStorage.clear();
		dispatch(logout());
		dispatch(operationLogout()); // Clear store
	};
};

const login = (user) => ({
	type: types.authLogin,
	payload: user,
});

const logout = () => ({
	type: types.authLogout,
});
