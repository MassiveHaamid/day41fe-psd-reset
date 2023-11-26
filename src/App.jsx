import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import ResetForm from './components/ResetForm';
import ForgotPasswordForm from './components/ForgotPasswordForm';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/login" component={LoginForm} />
                <Route path="/register" component={RegisterForm} />
                <Route path="/reset/:token" component={ResetForm} />
                <Route path="/forgot-password" component={ForgotPasswordForm} />
            </Switch>
        </Router>
    );
};

export default App;
