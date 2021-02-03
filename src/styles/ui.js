import { makeStyles } from '@material-ui/core';

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
		position: 'absolute',
		bottom: theme.spacing(3),
		right: theme.spacing(3),
		width: '80px',
		height: '80px',
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
