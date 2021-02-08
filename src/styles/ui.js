import { makeStyles } from '@material-ui/core';
import { red, green } from '@material-ui/core/colors';

export const useStylesPanel = () => ({
	divContainer: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	divBalance: {
		paddingTop: '20px',
		display: 'flex',
		justifyContent: 'flex-start',
	},
	divCards: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-evenly',
		paddingTop: '50px',
		maxWidth: '1400px',
	},
});

export const useStylesAppBar = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(1),
	},
	title: {
		flexGrow: 1,
	},
}));

export const useStylesAddFab = makeStyles((theme) => ({
	fab: {
		position: 'fixed',
		bottom: theme.spacing(2),
		right: theme.spacing(2),
		width: '70px',
		height: '70px',
	},
	fabIcon: {
		width: '50px',
		height: '50px',
	},
}));

export const useStylesDialog = makeStyles((theme) => ({
	formControl: {
		minWidth: 182,
	},
}));

export const useStylesOperationCard = makeStyles((theme) => ({
	root: {
		maxWidth: 300,
		margin: '10px',
	},
	avatarEgreso: {
		backgroundColor: red[500],
	},
	avatarIngreso: {
		backgroundColor: green[500],
	},
	submit: {
		margin: theme.spacing(0, 1, 1),
	},
}));
