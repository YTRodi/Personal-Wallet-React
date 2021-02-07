import React from 'react';
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

export const OperationCard = ({ id, amount, creation, concept, type }) => {
	const classes = useStylesOperationCard();

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
				>
					Edit
				</Button>
				<Button
					fullWidth
					variant='contained'
					color='secondary'
					startIcon={<DeleteIcon />}
					className={classes.submit}
				>
					Delete
				</Button>
			</CardActions>
		</Card>
	);
};
