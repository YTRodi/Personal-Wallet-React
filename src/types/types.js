export const types = {
	// Dialog
	uiOpenDialog: '[ui] Open dialog',
	uiCloseDialog: '[ui] Close dialog',

	// Operation
	operationSetActive: '[Operation] Set active',
	operationClearActiveOperation: '[Operation] Clear active operation',
	operationLogout: '[Operation] Logout',
	operationLoaded: '[Operation] loaded',
	operationStartAddNew: '[Operation] Start add new', // Va a inicializar todo el proceso de grabación.
	operationAddNew: '[Operation] Add new',
	operationDeleted: '[Operation] Delete operation',
	operationUpdated: '[Operation] Updated operation',

	// Auth
	authCheckingFinish: '[Auth] Finish checking login state',
	authStartLogin: '[Auth] Start login',
	authLogin: '[Auth] Login',
	authStartRegister: '[Auth] Start register',
	authStartTokenRenew: '[Auth] Start token renew',
	authLogout: '[Auth] Logout',
	authUpdateBalance: '[Auth] Update balance',
};
