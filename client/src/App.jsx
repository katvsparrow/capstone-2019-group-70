import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

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
import WillExample from "views/WillExample.jsx";
import NotFound from "views/NotFound.jsx";

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
                : <Redirect to={ROUTES.LOGIN} />
        )} />
    );

    render() {
        return(
            <AuthUserContext.Provider value={this.state.authUser}>
                <BrowserRouter>
                    <MainNavbar />
                        <Switch>
                            <Route path={ROUTES.HOME} exact render={props => <Home {...props} />} />
                            <Route path={ROUTES.ABOUT} exact render={props=> <AboutUs {...props} />} />
                            <Route path={ROUTES.SEARCH} render={props => <Search {...props} />} />
                            <Route path={ROUTES.LOGIN} render={props=> <Login {...props} /> } />
                            <Route path={ROUTES.REGISTER} render={props => <Register {...props}/> } />
                            <Route path={ROUTES.WILL} render={props=> <Will {...props} /> } /> 
                            <Route path={ROUTES.WILL_EXAMPLE} render={props => <WillExample {...props}/> } />
                            <this.PrivateRoute path={ROUTES.ACCOUNT} component={Account} />
                            <Route component={NotFound} />
                        </Switch>
                    <MainFooter />
                </BrowserRouter>
            </AuthUserContext.Provider>
        );
    }
}

export default withFirebase(App); 
