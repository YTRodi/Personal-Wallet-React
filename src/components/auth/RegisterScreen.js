import React from 'react';
import { Link } from 'react-router-dom';

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


export const RegisterScreen = () => {

    const classes = useStylesAuth();

    return (
        <Container component='main' maxWidth='xs' className={ classes.container }>

            <CssBaseline />

            <div className={ classes.paper }>

                <Avatar className={ classes.avatar }>
                    <PersonIcon />
                </Avatar>

                <Typography component='h1' variant='h5'>
                    Sign Up!
                </Typography>

                <form className={ classes.form } noValidate>

                    <TextField
                        variant='outlined'
                        margin='normal'
                        required
                        fullWidth
                        name=''
                        label='Name'
                        autoFocus
                    />

                    <TextField
                        variant='outlined'
                        margin='normal'
                        required
                        fullWidth
                        name=''
                        label='Email Address'
                    />

                    <TextField
                        variant='outlined'
                        margin='normal'
                        required
                        fullWidth
                        name=''
                        label='Password'
                        type='password'
                    />

                    <TextField
                        variant='outlined'
                        margin='normal'
                        required
                        fullWidth
                        name=''
                        label='Repeat the password'
                        type='password'
                    />

                    <Button
                        type='submit'
                        fullWidth
                        variant='contained'
                        color='primary'
                        className={ classes.submit }
                    >
                        Sign Up
                    </Button>

                    <Grid container justify='flex-end'>
                        <Grid item>
                            <Link to='/auth/login'>
                                { `Already have an account? Sign in!` }
                            </Link>
                        </Grid>
                    </Grid>

                </form>

            </div>

            <Box mt={ 8 }>
                <Copyright />
            </Box>
            
        </Container>
    )
}
