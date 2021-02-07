import React from 'react';

import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

export const BalanceCard = () => {
	return (
		<Card>
			<CardContent style={{ padding: '30px' }}>
				<Typography gutterBottom variant='h5'>
					Dinero disponible
				</Typography>
				<hr />
				<Typography variant='h6'>$ 999999</Typography>
			</CardContent>
		</Card>
	);
};
