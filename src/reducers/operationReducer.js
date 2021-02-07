// import { types } from '../types/types';

import { types } from '../types/types';

const initialState = {
	data: [], // operations
};

export const operationReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.operationAddNew:
			return {
				...state,
				data: [...state.data, action.payload],
			};

		default:
			return state;
	}
};
