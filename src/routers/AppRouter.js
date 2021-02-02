import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { WalletScreen } from '../components/wallet/WalletScreen';
import { AuthRouter } from './AuthRouter';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>

                   <Route path="/auth" component={ AuthRouter } />

                   <Route path="/" component={ WalletScreen } />

                    <Redirect to="/auth/login"/>

                </Switch>
            </div>
        </Router>
    );
};
