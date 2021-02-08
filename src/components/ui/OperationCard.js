import React from 'react';
import { useDispatch } from 'react-redux';

import moment from 'moment';
import { useStylesOperationCard } from '../../styles/ui';

import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

// Icons
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'; // TYPE: EGRESO
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'; // TYPE: INGRESO
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

// Actions
import { operationSetActive, operationStartDelete } from '../../actions/operations';
import { uiOpenDialog } from '../../actions/ui';
import Swal from 'sweetalert2';

export const OperationCard = ({ id, amount, creation, concept, type }) => {
	const classes = useStylesOperationCard();

	const dispatch = useDispatch();

	const handleOpenDialogUpdate = () => {
		dispatch(operationSetActive({ id, amount, concept, type }));
		dispatch(uiOpenDialog());
	};

	const handleOperationDelete = (id) => {
		Swal.fire({
			title: 'Are you sure?',
			text: `You won't be able to revert this!`,
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes, delete it!',
		}).then((results) => {
			dispatch(operationStartDelete(id));
		});
	};

	return (
		<Card key={id} className={classes.root}>
			<CardHeader
				avatar={
					type === 'egreso' ? (
						<Avatar className={classes.avatarEgreso}>
							<ShoppingCartIcon />
						</Avatar>
					) : (
						<Avatar className={classes.avatarIngreso}>
							<AddShoppingCartIcon />
						</Avatar>
					)
				}
				title={type === 'egreso' ? `-$ ${amount}` : `$ ${amount}`}
				subheader={moment(creation).format('MMM Do YYYY, h:mm:ss a')}
			/>

			<CardContent>
				<Typography variant='body1' color='textSecondary'>
					{concept}
				</Typography>
			</CardContent>

			<CardActions>
				<Button
					fullWidth
					variant='contained'
					color='primary'
					startIcon={<EditIcon />}
					className={classes.submit}
					onClick={handleOpenDialogUpdate}
				>
					Edit
				</Button>
				<Button
					fullWidth
					variant='contained'
					color='secondary'
					startIcon={<DeleteIcon />}
					className={classes.submit}
					onClick={() => handleOperationDelete(id)}
				>
					Delete
				</Button>
			</CardActions>
		</Card>
	);
};
