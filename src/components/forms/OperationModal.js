import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { uiCloseDialog } from '../../actions/ui';

import { useStylesDialog } from '../../styles/ui';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import Grid from '@material-ui/core/Grid';
import ListAltIcon from '@material-ui/icons/ListAlt';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import MergeTypeIcon from '@material-ui/icons/MergeType';

export const OperationModal = () => {
	const classes = useStylesDialog();

	const { dialogOpen } = useSelector((state) => state.ui);
	const dispatch = useDispatch();

	const handleCloseDialog = () => {
		dispatch(uiCloseDialog());
	};

	const handleAdd = () => {
		console.log('pegarle a la api y agregar una nueva operation');
	};

	// Select de los types
	const [type, setType] = useState('');

	const handleChange = (event) => {
		setType(event.target.value);
	};

	return (
		<div>
			<Dialog open={dialogOpen} onClose={handleCloseDialog} aria-labelledby='form-dialog-title'>
				<DialogTitle>New operation</DialogTitle>

				<DialogContent>
					<Grid container spacing={2} alignItems='flex-end'>
						<Grid item>
							<ListAltIcon />
						</Grid>
						<Grid item>
							<TextField fullWidth name='' label='Concept' autoFocus required />
						</Grid>
					</Grid>

					<Grid container spacing={2} alignItems='flex-end'>
						<Grid item>
							<AttachMoneyIcon />
						</Grid>
						<Grid item>
							<TextField fullWidth name='' label='Amount' required />
						</Grid>
					</Grid>

					<Grid container spacing={2} alignItems='flex-end'>
						<Grid item>
							<MergeTypeIcon />
						</Grid>
						<Grid item>
							<FormControl className={classes.formControl}>
								<InputLabel>Type</InputLabel>
								<Select name='' value={type} onChange={handleChange} required>
									<MenuItem value='ingreso'>Ingreso</MenuItem>
									<MenuItem value='egreso'>Egreso</MenuItem>
								</Select>
							</FormControl>
						</Grid>
					</Grid>
				</DialogContent>

				<DialogActions>
					<Button onClick={handleCloseDialog} color='secondary'>
						Cancel
					</Button>
					<Button onClick={handleAdd} color='primary'>
						Add
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
};
