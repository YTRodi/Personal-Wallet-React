import Swal from 'sweetalert2';
import { fetchWithToken } from '../helpers/fetch';
import { types } from '../types/types';
import { uiCloseDialog } from './ui';

export const operationStartAddNew = (operation) => {
	return async (dispatch, getState) => {
		const { uid, name } = getState().auth;

		const parsedOperation = {
			...operation,
			amount: parseInt(operation.amount),
		};

		const res = await fetchWithToken('operations', parsedOperation, 'POST');
		const body = await res.json();

		if (!body.ok) {
			dispatch(uiCloseDialog());
			Swal.fire('Error', body.details, 'error');
		} else {
			parsedOperation.id = body.newOperation.id;
			parsedOperation.creation = body.newOperation.creation;
			parsedOperation.user = {
				id: uid,
				name,
			};
			dispatch(uiCloseDialog());
			dispatch(operationAddNew(parsedOperation));
			Swal.fire('Success', 'Operation created successfully', 'success');
		}
	};
};

const operationAddNew = (operation) => ({
	type: types.operationAddNew,
	payload: operation,
});
