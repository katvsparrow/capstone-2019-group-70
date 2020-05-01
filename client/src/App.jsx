import React from 'react';
import { BrowserRouter, Route, Redirect } from "react-router-dom";

// React Context objects
import { withFirebase } from 'contexts/Firebase';
import { AuthUserContext } from 'contexts/Session';

// Views
import Home from "views/Home.jsx";
import AboutUs from "views/AboutUs.jsx";
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
            authUser: JSON.parse(localStorage.getItem('authUser'))
        };
    }

    // Create protected routes based only available to logged in users
    PrivateRoute = ({ component: Component, ...rest }) => (
        <Route {...rest} render={(props) => (
            this.state.authUser
                ? <Component {...props} />
                : <Login {...props} />
        )} />
    );

    render() {
        return(
            <AuthUserContext.Provider value={this.state.authUser}>
                <BrowserRouter>
                    <MainNavbar />
                        <Route path={ROUTES.HOME} exact render={props => <Home {...props} />} />
                        <Route path={ROUTES.ABOUT} exact render={props=> <AboutUs {...props} />} />
                        <Route path={ROUTES.SEARCH} render={props => <Search {...props} />} />
                        <Route path={ROUTES.LOGIN} render={props=> <Login {...props} /> } />
                        <Route path={ROUTES.REGISTER} render={props => <Register {...props}/> } />
                        <Route path={ROUTES.WILL_EXAMPLE} render={props => <Will {...props}/> } />
                        <this.PrivateRoute path={ROUTES.ACCOUNT} component={Account} />
                    <MainFooter />
                </BrowserRouter>
            </AuthUserContext.Provider>
        );
    }
}

export default withFirebase(App); 
