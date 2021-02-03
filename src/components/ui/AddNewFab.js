import React from 'react';
import { useDispatch } from 'react-redux';

import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { useStylesAddFab } from '../../styles/ui';
import { uiOpenDialog } from '../../actions/ui';

export const AddNewFab = () => {
	const classes = useStylesAddFab();

	const dispatch = useDispatch();

	const handleOpenDialog = () => {
		dispatch(uiOpenDialog());
	};

	return (
		<Fab color='primary' aria-label='add' className={classes.fab} onClick={handleOpenDialog}>
			<AddIcon className={classes.fabIcon} />
		</Fab>
	);
};
