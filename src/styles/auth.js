import { makeStyles } from '@material-ui/core';

export const useStylesAuth = makeStyles( ( theme ) => ({
    container: {
        marginTop: '8%',
        backgroundColor: 'rgb( 245, 245, 245 )'
    },
    paper: {
        marginTop: theme.spacing( 8 ),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing( 1 ),
        backgroundColor: theme.palette.secondary.main
    },
    form: {
        width: '100%',
        marginTop: theme.spacing( 1 )
    },
    submit: {
        margin: theme.spacing( 3, 0, 2)
    }
}));