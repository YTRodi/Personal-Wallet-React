import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';

import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import PersonIcon from '@material-ui/icons/Person';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { Copyright } from './Copyright';

import { useStylesAuth } from '../../styles/auth';

import Swal from 'sweetalert2';
import { startRegister } from '../../actions/auth';

export const RegisterScreen = () => {
	const classes = useStylesAuth();

	const dispatch = useDispatch();

	const [formRegisterValues, handleRegisterInputChange] = useForm({
		name: '',
		email: '',
		password1: '',
		password2: '',
	});
	const { name, email, password1, password2 } = formRegisterValues;

	const handleRegister = (e) => {
		e.preventDefault();

		if (password1 !== password2) {
			return Swal.fire('Error', 'Passwords must be the same', 'error');
		}

		dispatch(startRegister(name, email, password1));
	};

	return (
		<Container
			component='main'
			maxWidth='xs'
			className={`${classes.container} animate__animated animate__fadeInLeft`}
		>
			<CssBaseline />

			<div className={classes.paper}>
				<Avatar className={classes.avatar}>
					<PersonIcon />
				</Avatar>

				<Typography component='h1' variant='h5'>
					Sign Up!
				</Typography>

				<form className={classes.form} noValidate onSubmit={handleRegister}>
					<TextField
						variant='outlined'
						margin='normal'
						required
						fullWidth
						autoFocus
						autoComplete='off'
						label='Name'
						name='name'
						value={name}
						onChange={handleRegisterInputChange}
					/>

					<TextField
						variant='outlined'
						margin='normal'
						required
						fullWidth
						autoComplete='off'
						label='Email Address'
						name='email'
						value={email}
						onChange={handleRegisterInputChange}
					/>

					<TextField
						variant='outlined'
						margin='normal'
						required
						fullWidth
						autoComplete='off'
						type='password'
						label='Password'
						name='password1'
						value={password1}
						onChange={handleRegisterInputChange}
					/>

					<TextField
						variant='outlined'
						margin='normal'
						required
						fullWidth
						autoComplete='off'
						type='password'
						label='Repeat the password'
						name='password2'
						value={password2}
						onChange={handleRegisterInputChange}
					/>

					<Button type='submit' fullWidth variant='contained' color='primary' className={classes.submit}>
						Sign Up
					</Button>

					<Grid container justify='flex-end'>
						<Grid item>
							<Link to='/auth/login'>{`Already have an account? Sign in!`}</Link>
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
