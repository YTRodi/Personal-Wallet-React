import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

export const Loader = ({ isOpen }) => {
	return (
		<div>
			<Backdrop style={{ color: '#fff' }} open={isOpen}>
				<CircularProgress color='inherit' />
			</Backdrop>
		</div>
	);
};
