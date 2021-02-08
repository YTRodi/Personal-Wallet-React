import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { uiCloseDialog } from '../../actions/ui';
import Swal from 'sweetalert2';

// Actions
import {
	operationClearActiveOperation,
	operationStartAddNew,
	operationStartUpdate,
} from '../../actions/operations';

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

const initOperation = {
	id: 0,
	concept: '',
	amount: 0,
	type: '',
};

export const OperationModal = () => {
	const classes = useStylesDialog();

	const { dialogOpen } = useSelector((state) => state.ui);
	const { activeOperation } = useSelector((state) => state.operation);
	const dispatch = useDispatch();

	const [formValues, setFormValues] = useState(initOperation);
	const { concept, amount, type } = formValues;
	const parsedValues = {
		...formValues,
		amount: parseInt(amount),
	};

	useEffect(() => {
		if (!activeOperation) {
			setFormValues(initOperation);
		} else {
			setFormValues(activeOperation);
		}
	}, [activeOperation, setFormValues]);

	const handleInputChange = ({ target }) => {
		setFormValues({
			...formValues,
			[target.name]: target.value,
		});
	};

	const handleCloseDialog = () => {
		dispatch(operationClearActiveOperation());
		dispatch(uiCloseDialog());
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		// Validate fields
		if (concept.trim().length < 2) {
			setFormValues(initOperation);
			dispatch(uiCloseDialog());
			return Swal.fire('Error', 'The concept field must be greater than 2 characters', 'error');
		}

		if (parsedValues.amount < 0) {
			setFormValues(initOperation);
			dispatch(uiCloseDialog());
			return Swal.fire('Error', 'The amount cannot be less than zero', 'error');
		}

		if (!activeOperation) {
			// Add
			dispatch(operationStartAddNew(parsedValues));
		} else {
			// Update
			dispatch(operationStartUpdate(parsedValues));
		}
	};

	return (
		<div>
			<Dialog open={dialogOpen} onClose={handleCloseDialog} aria-labelledby='form-dialog-title'>
				<form onSubmit={handleSubmit}>
					<DialogTitle>{!activeOperation ? 'New operation' : 'Update operation'}</DialogTitle>

					<DialogContent>
						<Grid container spacing={2} alignItems='flex-end'>
							<Grid item>
								<ListAltIcon />
							</Grid>
							<Grid item>
								<TextField
									fullWidth
									label='Concept'
									autoFocus
									required
									name='concept'
									value={concept}
									onChange={handleInputChange}
									autoComplete='off'
								/>
							</Grid>
						</Grid>

						<Grid container spacing={2} alignItems='flex-end'>
							<Grid item>
								<AttachMoneyIcon />
							</Grid>
							<Grid item>
								<TextField
									type='number'
									fullWidth
									label='Amount'
									required
									disabled={!activeOperation ? false : true}
									name='amount'
									value={amount}
									onChange={handleInputChange}
									autoComplete='off'
								/>
							</Grid>
						</Grid>

						<Grid container spacing={2} alignItems='flex-end'>
							<Grid item>
								<MergeTypeIcon />
							</Grid>
							<Grid item>
								<FormControl className={classes.formControl}>
									<InputLabel>Type</InputLabel>
									<Select
										required
										name='type'
										value={type}
										onChange={handleInputChange}
										autoComplete='off'
										disabled={!activeOperation ? false : true}
									>
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
						<Button color='primary' type='submit'>
							{!activeOperation ? 'Add' : 'Update'}
						</Button>
					</DialogActions>
				</form>
			</Dialog>
		</div>
	);
};
