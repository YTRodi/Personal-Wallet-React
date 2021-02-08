import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { AppBar } from '../ui/AppBar';
import { AddNewFab } from '../ui/AddNewFab';
import { OperationModal } from '../forms/OperationModal';
import { operationStartLoading } from '../../actions/operations';
import { Panel } from '../ui/Panel';

export const WalletScreen = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(operationStartLoading());
	}, [dispatch]);

	return (
		<div>
			<AppBar />
			<AddNewFab />
			<OperationModal />
			<Panel />
		</div>
	);
};
