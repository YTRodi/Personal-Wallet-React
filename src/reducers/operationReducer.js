import { types } from '../types/types';

const initialState = {
	data: [], // operations
	activeOperation: null,
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
		case types.operationSetActive:
			return {
				...state,
				activeOperation: action.payload,
			};

		case types.operationClearActiveOperation:
			return {
				...state,
				activeOperation: null,
			};

		// Logout (clear store)
		case types.operationLogout:
			return {
				...initialState,
			};

		// List
		case types.operationLoaded:
			return {
				...state,
				data: [...action.payload],
			};

		// Add
		case types.operationAddNew:
			return {
				...state,
				data: [...state.data, action.payload],
			};

		// Delete
		case types.operationDeleted:
			return {
				...state,
				data: state.data.filter((operation) => operation.id !== action.payload),
			};

		// Update
		case types.operationUpdated:
			return {
				...state,
				data: state.data.map((operation) =>
					operation.id === action.payload.id ? action.payload : operation
				),
			};
		default:
			return state;
	}
};
