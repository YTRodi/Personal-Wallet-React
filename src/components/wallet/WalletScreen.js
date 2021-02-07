import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { AppBar } from '../ui/AppBar';
import { AddNewFab } from '../ui/AddNewFab';
import { OperationModal } from '../forms/OperationModal';
import { eventStartLoading } from '../../actions/operations';

export const WalletScreen = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(eventStartLoading());
	}, [dispatch]);

	return (
		<div>
			<AppBar />
			<AddNewFab />
			<OperationModal />
		</div>
	);
};
