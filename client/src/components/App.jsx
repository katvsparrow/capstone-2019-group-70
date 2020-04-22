import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Home from "../views/Home.jsx";
import Search from "../views/Search.jsx";
import Login from "../views/Login.jsx";
import Account from "../views/Account.jsx";
import Register from "../views/Register.jsx";

import { withFirebase } from './Firebase/index.js';
import { AuthUserContext } from './Session/index.js';
import MainNavbar from './Navbars/MainNavbar.jsx';
import SimpleFooter from './Footers/SimpleFooter.jsx';

class App extends React.Component {    
    constructor(props) {
        super(props);
        this.state = {
            authUser: null,
        };
    }

    componentDidMount() {
        this.listener = this.props.firebase.auth.onAuthStateChanged(
            authUser => {
                authUser ? this.setState({ authUser })
                            : this.setState({ authUser: null });
            },
        );
    }

    componentWillUnmount() {
        this.listener();
    }

    // Create protected routes based only available to logged in users
    PrivateRoute = ({ component: Component, ...rest }) => (
        <Route {...rest} render={(props) => (
            this.state.authUser
                ? <Component {...props} />
                : <Redirect to='/login' />
        )} />
    );

    render() {
        return(
            <AuthUserContext.Provider value={this.state.authUser}>
                <BrowserRouter>
                    <MainNavbar />
                        <Route path="/" exact render={props => <Home {...props} />} />
                        <Route path="/search" exact render={props => <Search {...props} />} />
                        <Route path="/login" exact render={props=> <Login {...props} /> } />
                        <Route path="/register" exact render={props => <Register {...props}/> } />
                        <this.PrivateRoute path="/account" component={Account} />
                    <SimpleFooter />
                </BrowserRouter>
            </AuthUserContext.Provider>
        );
    }
}

export default withFirebase(App); 
