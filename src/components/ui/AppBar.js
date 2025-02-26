import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../../actions/auth';

import { useStylesAppBar } from '../../styles/ui';
import MaterialAppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import PersonIcon from '@material-ui/icons/Person';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

export const AppBar = () => {
	const classes = useStylesAppBar();
	const { name } = useSelector((state) => state.auth);

	const dispatch = useDispatch();

	const handleLogout = () => {
		dispatch(startLogout());
	};

	return (
		<div className={`${classes.root} animate__animated animate__fadeInDown`}>
			<MaterialAppBar position='static'>
				<Toolbar>
					<IconButton edge='start' className={classes.menuButton} color='inherit' aria-label='menu'>
						<PersonIcon />
					</IconButton>

					<Typography variant='h6' className={classes.title}>
						{name}
					</Typography>

					<Button
						color='secondary'
						variant='contained'
						startIcon={<ExitToAppIcon />}
						onClick={handleLogout}
					>
						Logout
					</Button>
				</Toolbar>
			</MaterialAppBar>
		</div>
	);
};
