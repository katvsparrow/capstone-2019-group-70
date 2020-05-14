import React from 'react';
import classnames from "classnames";

import { withFirebase } from "contexts/Firebase";
import { AuthUserContext } from "contexts/Session";

import * as ROUTES from "constants/routes";
import { withRouter, Redirect } from "react-router-dom";
import { compose } from "recompose";

import {
    Container, 
    Row, 
    Col,
    ListGroup,
    ListGroupItem, 
    TabContent,
    TabPane
} from "reactstrap";

import UpdateDisplayNameForm from "../components/Forms/UpdateDisplayNameForm";


/**
 * Renders account details content 
 */
const AccountDetailsContent = (user) => {
    return (
        <>  
            <UpdateDisplayNameForm displayName={user.displayName} />
        </>
    );
}

/**
 * Renders password change form 
 */
const PasswordChangeContent = () => {
    return null; 
}

/**
 * Renders will submission form 
 */
const SubmitWillContent = () => {
    return null; 
}

const SavedWillsContent = () => {
    return null;
}

const INITIAL_STATE = {
    activeTab: '1'
};

class Account extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = { ...INITIAL_STATE} ;
    }
    
    toggle(tab) {
        if(this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    signOut(props) {
        props.contexts.firebase.doSignOut();
        props.contexts.history.push(ROUTES.HOME);
    }
    
    render() {
        return (
          <>
            <main href="main">
                <div className="position-relative">
                    <section className="section bg-gradient-jww-primary pb-4" />
                    <section className='page-content'>
                        <Container className="py-sm">
                            <div className="px-4">
                                <Row className="justify-content-center text-center">
                                    <Col>
                                        <h2>Account Portal</h2>
                                        <h3>{this.props.user.displayName}</h3>
                                        <div className="h6 font-weight-300">
                                            <i className="ni location_pin mr-2" />
                                            {this.props.user.email}
                                        </div>
                                    </Col>
                                </Row>
                                <Row className="justify-content-center mt-4">
                                    <Col lg="12">
                                        <ListGroup className="list-group-horizontal">
                                            <ListGroupItem tag="a"
                                                className={classnames({active: this.state.activeTab === '1'})}
                                                onClick={() => {
                                                    this.toggle('1');
                                                }}
                                            >
                                                Account Details
                                            </ListGroupItem>
                                            <ListGroupItem tag="a"
                                                className={classnames({active: this.state.activeTab === '2'})}
                                                onClick={() => {
                                                    this.toggle('2');
                                                }}
                                            >
                                                Change Password
                                            </ListGroupItem>
                                            <ListGroupItem tag="a"
                                                className={classnames({active: this.state.activeTab === '3'})}
                                                onClick={() => {
                                                    this.toggle('3');
                                                }}
                                            >
                                                Saved Wills
                                            </ListGroupItem>
                                            <ListGroupItem tag="a"
                                                className={classnames({active: this.state.activeTab === '4'})}
                                                onClick={() => {
                                                    this.toggle('4');
                                                }}
                                            >
                                                Submit Will
                                            </ListGroupItem>
                                            <ListGroupItem color="danger"tag="a"
                                                onClick={() => {
                                                    this.signOut(this.props)
                                                }}
                                            >
                                                Sign Out
                                            </ListGroupItem>
                                        </ListGroup>
                                    </Col>
                                </Row>
                                <div className="mt-5 py-5 border-top">
                                    <TabContent className="my-2" activeTab={this.state.activeTab}>
                                        <TabPane tabId="1">
                                            <AccountDetailsContent user={this.props.user} />
                                        </TabPane>
                                        <TabPane tabId="2">
                                            <PasswordChangeContent />
                                        </TabPane>  
                                        <TabPane tabId="3">
                                            <SavedWillsContent />
                                        </TabPane>
                                        <TabPane tabId="4">
                                            <SubmitWillContent />
                                        </TabPane>
                                    </TabContent>
                                </div>
                            </div>
                        </Container>
                    </section>
                </div>
            </main>    
          </>  
        );
    }
}

/**
 * Determine page authorization access
 */
const AccountBase = (props) => {   
    return(
        <AuthUserContext.Consumer>
            {
                authUser =>
                    authUser ? <Account contexts={props} user={authUser} />
                             : <Redirect to={ROUTES.LOGIN} />
            }
        </AuthUserContext.Consumer>
    )
};

export default compose(
    withRouter,
    withFirebase
)(AccountBase);