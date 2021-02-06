import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';

import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { Copyright } from './Copyright';

import { useStylesAuth } from '../../styles/auth';

// Actions
import { startLogin } from '../../actions/auth';

//
//
//
export const LoginScreen = () => {
	const classes = useStylesAuth();

	const dispatch = useDispatch();

	const [formLoginValues, handleLoginInputChange] = useForm({
		email: 'yago@gmail.com',
		password: '123456',
	});
	const { email, password } = formLoginValues;

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(startLogin(email, password));
	};

	return (
		<Container component='main' maxWidth='xs' className={classes.container}>
			<CssBaseline />

			<div className={classes.paper}>
				<Avatar className={classes.avatar}>
					<LockOutlinedIcon />
				</Avatar>

				<Typography component='h1' variant='h5'>
					Sign in
				</Typography>

				<form className={classes.form} noValidate onSubmit={handleSubmit}>
					<TextField
						variant='outlined'
						margin='normal'
						required
						fullWidth
						autoFocus
						label='Email Address'
						name='email'
						value={email}
						onChange={handleLoginInputChange}
					/>

					<TextField
						variant='outlined'
						margin='normal'
						required
						fullWidth
						type='password'
						label='Password'
						name='password'
						value={password}
						onChange={handleLoginInputChange}
					/>

					{/* MEH, no se si voy a usarlo jeje */}
					<FormControlLabel
						control={<Checkbox value='remember' color='primary' />}
						label='Remember me'
					/>
					{/* MEH, no se si voy a usarlo jeje */}

					<Button type='submit' fullWidth variant='contained' color='primary' className={classes.submit}>
						Sign In
					</Button>

					<Grid container>
						<Grid item>
							<Link to='/auth/register'>{`Don't have an account? Sign Up!`}</Link>
						</Grid>
					</Grid>
				</form>
			</div>

			<Box mt={8}>
				<Copyright />
			</Box>
		</Container>
	);
};
