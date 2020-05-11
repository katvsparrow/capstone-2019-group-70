import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

// React Context objects
import { withFirebase } from 'contexts/Firebase';
import { AuthUserContext } from 'contexts/Session';

// Views
import Home from "views/Home.jsx";
import AboutUs from "views/AboutUs.jsx";
import Search from "views/Search.jsx";
import Login from "views/Login.jsx";
import Account from "views/Account.jsx";
import Admin from "views/Admin.jsx";
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
            authUser: null, 
            loading: true
        };
    }

    componentDidMount() {
        console.log(this.state.authUser);
        this.listener = this.props.firebase.auth.onAuthStateChanged(authUser => {
            console.log(authUser);
            authUser 
                ? this.setState({ authUser: authUser, loading: false })
                : this.setState({ authUser: null, loading: false })
        });
    }

    componentWillUnmount() {
        this.listener();
    }

    render() {
        return this.state.loading === true ? <h1>Loading</h1> : (
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
                            <Route path={ROUTES.ACCOUNT} render={props => <Account {...props}/> } />
                            <Route path={ROUTES.ADMIN} render={props => <Admin {...props} />} /> 
                            <Route component={NotFound} />
                        </Switch>
                    <MainFooter />
                </BrowserRouter>
            </AuthUserContext.Provider>
        );
    }
}

export default withFirebase(App); 
