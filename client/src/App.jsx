import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import UserAPI from "api/user";

// React Context objects
import { withFirebase } from 'contexts/Firebase';
import { AuthUserContext, UserInfoContext } from 'contexts/Session';

// App Page Views
import Home from "views/Home.jsx";
import AboutUs from "views/AboutUs.jsx";
import Search from "views/Search.jsx";
import Login from "views/Login.jsx";
import Account from "views/Account.jsx";
import Admin from "views/Admin.jsx";
import Register from "views/Register.jsx";
import Will from "views/Will.jsx";
//import Bibliography from "views/Bibliography.jsx";
import Contribute from "views/Contribute.jsx";
import NotFound from "views/NotFound.jsx";


// Components
import MainNavbar from "components/Navbars/MainNavbar.jsx";
import MainFooter from "components/Footers/SimpleFooter.jsx";

import * as ROUTES from "constants/routes";


class App extends React.Component {    
    constructor(props) {
        super(props);

        this.state = {
            authUser: null,
            userInfo: null,  
            loading: true
        };
    }

    getUserInformation = async() => {
        let res = await UserAPI.getUserInformation(this.state.authUser.uid);
        this.setState({
            userInfo: res
        })
    }

    componentDidMount() {
        this.listener = this.props.firebase.auth.onAuthStateChanged(authUser => {
            authUser 
                ? this.setState({ authUser: authUser, loading: false }, () => this.getUserInformation())
                : this.setState({ authUser: null, loading: false })
            console.log(this.state.authUser);
        });
    }

    componentWillUnmount() {
        this.listener();
    }

    render() {
        return this.state.loading === true ? null : (
            <AuthUserContext.Provider value={this.state.authUser}>
                <UserInfoContext.Provider value={this.state.userInfo}>
                    <BrowserRouter>
                        <MainNavbar />
                            <Switch>
                                <Route path={ROUTES.HOME} exact render={props => <Home {...props} />} />
                                <Route path={ROUTES.ABOUT} exact render={props=> <AboutUs {...props} />} />
                                <Route path={ROUTES.SEARCH} render={props => <Search {...props} />} />
                                <Route path={ROUTES.WILL} render={props=> <Will {...props} /> } /> 
                                <Route path={ROUTES.ACCOUNT} render={props => <Account {...props}/> } />
                                <Route path={ROUTES.ADMIN} render={props => <Admin {...props} />} /> 
                                <Route path={ROUTES.LOGIN} render={props=> <Login {...props} /> } />
                                <Route path={ROUTES.REGISTER} render={props => <Register {...props}/> } />
                                {/*<Route path={ROUTES.BIBLIOGRAPHY} render={props => <Bibliography {...props}/> } />*/}
                                <Route path={ROUTES.CONTRIBUTE}  render={props => <Contribute {...props}/> } />
                                <Route component={NotFound} />
                            </Switch>
                        <MainFooter />
                    </BrowserRouter>
                </UserInfoContext.Provider>
            </AuthUserContext.Provider>
        );
    }
}

export default withFirebase(App); 
