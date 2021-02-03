import { types } from '../types/types';

const initialState = {
	dialogOpen: false,
};

export const uiReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.uiOpenDialog:
			return {
				...state,
				dialogOpen: true,
			};

		case types.uiCloseDialog:
			return {
				...state,
				dialogOpen: false,
			};

		default:
			return state;
	}
};
