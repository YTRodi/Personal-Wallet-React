import { types } from '../types/types';

export const operationAddNew = (operation) => ({
	type: types.operationAddNew,
	payload: operation,
});
