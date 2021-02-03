import React from 'react';
import { AppBar } from '../ui/AppBar';
import { AddNewFab } from '../ui/AddNewFab';
import { OperationModal } from '../forms/OperationModal';

export const WalletScreen = () => {
	return (
		<div>
			<AppBar />
			<AddNewFab />
			<OperationModal />
		</div>
	);
};
