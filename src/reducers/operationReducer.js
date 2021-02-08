// import { types } from '../types/types';

import { types } from '../types/types';

const initialState = {
	data: [], // operations
	// data: [
	// 	{
	// 		id: 35,
	// 		concept: 'Carniceria',
	// 		amount: 1000,
	// 		creation: '2021-02-07T15:58:30.566Z',
	// 		type: 'egreso',
	// 		user: {
	// 			id: '1',
	// 			name: 'Yago',
	// 		},
	// 	},
	// ],
};

export const operationReducer = (state = initialState, action) => {
	switch (action.type) {
		// Logout (clear store)
		case types.operationLogout:
			return {
				...initialState,
			};

		// Add
		case types.operationAddNew:
			return {
				...state,
				data: [...state.data, action.payload],
			};

		// List
		case types.operationLoaded:
			return {
				...state,
				data: [...action.payload],
			};

		// Delete
		case types.operationDeleted:
			return {
				...state,
				data: state.data.filter((operation) => operation.id !== action.payload),
			};
		default:
			return state;
	}
};
