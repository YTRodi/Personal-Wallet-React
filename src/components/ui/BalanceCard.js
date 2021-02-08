import React from 'react';
import { useSelector } from 'react-redux';
// import {authUpdateBalanc} from '../../actions/operations';

import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';

export const BalanceCard = () => {
	const { balance } = useSelector((state) => state.auth);

	return (
		<Card className='animate__animated animate__fadeIn'>
			<CardContent style={{ padding: '30px' }}>
				<Typography gutterBottom variant='h5'>
					Dinero disponible
				</Typography>
				<hr />
				<Typography variant='h6'>{`$ ${balance}`}</Typography>
			</CardContent>
		</Card>
	);
};
