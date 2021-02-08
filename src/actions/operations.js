import Swal from 'sweetalert2';
import { fetchWithToken } from '../helpers/fetch';
import { prepareOperations } from '../helpers/prepareOperations';
import { types } from '../types/types';
import { uiCloseDialog } from './ui';

// setActive
export const operationSetActive = (operation) => ({
	type: types.operationSetActive,
	payload: operation,
});

export const operationClearActiveOperation = () => ({ type: types.operationClearActiveOperation });

// Logout (clear store)
export const operationLogout = () => ({
	type: types.operationLogout,
});

// Add
export const operationStartAddNew = (operation) => {
	return async (dispatch, getState) => {
		const { uid, name } = getState().auth;

		const parsedOperation = {
			...operation,
			amount: parseInt(operation.amount),
		};

		try {
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
				dispatch(authUpdateBalance(parsedOperation));

				Swal.fire('Success', 'Operation created successfully', 'success');
			}
		} catch (error) {
			console.log(error);
		}
	};
};

const operationAddNew = (operation) => ({
	type: types.operationAddNew,
	payload: operation,
});

const authUpdateBalance = (operation) => ({
	type: types.authUpdateBalance,
	payload: operation,
});

// List
export const operationStartLoading = () => {
	return async (dispatch, getState) => {
		const { uid } = getState().auth;

		try {
			const res = await fetchWithToken(`operations/${uid}`);
			const body = await res.json();

			if (!body.ok) {
				Swal.fire('Error Loading', body.msg, 'warning');
			} else {
				const operations = prepareOperations(body.operations);
				dispatch(operationLoaded(operations));
			}
		} catch (error) {
			console.log(error);
		}
	};
};

const operationLoaded = (operations) => ({
	type: types.operationLoaded,
	payload: operations,
});

// Delete
export const operationStartDelete = (id) => {
	return async (dispatch) => {
		try {
			const res = await fetchWithToken(`operations/${id}`, {}, 'DELETE');
			const body = await res.json();

			if (!body.ok) {
				Swal.fire('Error', body.msg, 'error');
			} else {
				dispatch(operationDelete(id));
				Swal.fire('Deleted', 'Operation deleted successfully', 'success');
			}
		} catch (error) {
			console.log(error);
		}
	};
};

const operationDelete = (idOperation) => ({
	type: types.operationDeleted,
	payload: idOperation,
});

// Update
export const operationStartUpdate = (operation) => {
	return async (dispatch) => {
		try {
			const res = await fetchWithToken(`operations/${operation.id}`, operation, 'PUT');
			const body = await res.json();

			if (!body.ok) {
				Swal.fire('Error', body.msg, 'error');
			} else {
				console.log(body);
				dispatch(uiCloseDialog());
				dispatch(operationUpdated(operation));
				Swal.fire('Updated', 'Operation updated successfully', 'success');
			}
		} catch (error) {
			console.log(error);
		}
	};
};

const operationUpdated = (operation) => ({
	type: types.operationUpdated,
	payload: operation,
});
