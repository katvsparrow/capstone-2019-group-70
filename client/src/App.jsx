import React from 'react';
import { BrowserRouter, Route, Redirect } from "react-router-dom";

// React Context objects
import { withFirebase } from 'contexts/Firebase';
import { AuthUserContext } from 'contexts/Session';

// Views
import Home from "views/Home.jsx";
import Search from "views/Search.jsx";
import Login from "views/Login.jsx";
import Account from "views/Account.jsx";
import Register from "views/Register.jsx";
import Will from "views/Will.jsx";

// Components
import MainNavbar from "components/Navbars/MainNavbar.jsx";
import MainFooter from "components/Footers/SimpleFooter.jsx";

// Constants 
import * as ROUTES from "constants/routes";


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
                : <Redirect to={ROUTES.LOGIN} />
        )} />
    );

    render() {
        return(
            <AuthUserContext.Provider value={this.state.authUser}>
                <BrowserRouter>
                    <MainNavbar />
                        <Route path={ROUTES.HOME} exact render={props => <Home {...props} />} />
                        <Route path={ROUTES.SEARCH} render={props => <Search {...props} />} />
                        <Route path={ROUTES.LOGIN} render={props=> <Login {...props} /> } />
                        <Route path={ROUTES.REGISTER} render={props => <Register {...props}/> } />
                        <Route path={ROUTES.WILL_EXAMPLE} render={props => <Will {...props}/> } />
                        <Route path={ROUTES.ACCOUNT} render={props => <Account {...props}/> } />
                    <MainFooter />
                </BrowserRouter>
            </AuthUserContext.Provider>
        );
    }
}

export default withFirebase(App); 
