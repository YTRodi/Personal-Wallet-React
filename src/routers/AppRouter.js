import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startChecking } from '../actions/auth';

import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import { WalletScreen } from '../components/wallet/WalletScreen';
import { AuthRouter } from './AuthRouter';

import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import { Loader } from '../components/ui/Loader';

export const AppRouter = () => {
	const dispatch = useDispatch();
	const { checking, uid } = useSelector((state) => state.auth);

	useEffect(() => {
		dispatch(startChecking());
	}, [dispatch]);

	if (checking) {
		return <Loader isOpen={checking} />;
	}

	return (
		<Router>
			<div>
				<Switch>
					<PublicRoute path='/auth' component={AuthRouter} isAuthenticated={!!uid} />

					<PrivateRoute path='/' component={WalletScreen} isAuthenticated={!!uid} />

					<Redirect to='/auth/login' />
				</Switch>
			</div>
		</Router>
	);
};
