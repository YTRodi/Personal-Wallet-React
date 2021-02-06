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

		default:
			return state;
	}
};
