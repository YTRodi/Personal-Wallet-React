import { types } from '../types/types';

const initialState = {
	checking: true, // Cuando la app se carga, necesito verificar si el usuario esta auntenticado previamente
	// uid: null,
	// name: null,
};

export const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.authLogin:
			return {
				...state,
				...action.payload,
				checking: false, // ya lo auntentiqué
			};

		case types.authCheckingFinish:
			return {
				...state,
				checking: false,
			};

		case types.authLogout:
			return {
				checking: false,
			};

		case types.authUpdateBalance:
			const { type, amount } = action.payload;

			return {
				...state,
				balance: type === 'ingreso' ? (state.balance += amount) : (state.balance -= amount),
			};

		default:
			return state;
	}
};
