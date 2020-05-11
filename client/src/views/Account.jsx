import React from 'react';
import classnames from "classnames";

import { withFirebase } from "contexts/Firebase";

import * as ROUTES from "constants/routes";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";

import {
    Container, 
    Row, 
    Col,
    ListGroup,
    ListGroupItem, 
    Card,
    TabContent,
    TabPane
} from "reactstrap";

import ChangePasswordForm from "../components/Forms/ChangePasswordForm.jsx";
import WillSubmitForm from "../components/Forms/WillSubmitForm.jsx";
import SavedWills from "../components/Containers/SavedWills.jsx";


const INITIAL_STATE = {
    activeTab: '1'
};


/**
 * Renders account details content 
 */
const AccountDetailsConent = () => {
    return null; 
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
        props.firebase.doSignOut();
        props.history.push(ROUTES.HOME);
    }
    
    render() {
        return (
          <>
            <main className="profile-page" href="main">
                <section className="section-profile-cover section-shaped my-0">
                    {/* Background bubbles */ }
                    <div className="shape shape-style-1 bg-gradient-jww-primary">
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                    </div>
                    <div className="separator separator-bottom separator-skew">
                        <svg 
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="none"
                            version="1.1"
                            viewBox="0 0 2560 100"
                            x="0"
                            y="0"
                        > 
                            <polygon className="fill-white" points="2560 0 2560 100 0 100"/>
                        </svg>
                     </div>
                </section>  
                <section className="section">
                    <Container>
                        <Card className="card-profile shadow mt--300">
                            <div className="px-4">
                                <Row className="justify-content-center">
                                    <Col className="order-lg-2" lg="3">
                                        <div className="card-profile-image">
                                            <a href="#pablo" onClick={e => e.preventDefault()}>
                                                <img
                                                    alt="..."
                                                    className="rounded-circle"
                                                    src={require("assets/img/theme/team-4-800x800.jpg")}
                                                />
                                            </a>
                                        </div>
                                    </Col>
                                </Row>
                                <Row className="justify-content-center mt-lg text-center">
                                    <Col className="mt-5">
                                        <h3>Display Name</h3>
                                        <div className="h6 font-weight-300">
                                            <i className="ni location_pin mr-2" />
                                            Email@address.com    
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
                                                onClick={this.signOut(this.props)}
                                            >
                                                Sign Out
                                            </ListGroupItem>
                                        </ListGroup>
                                    </Col>
                                </Row>
                                <div className="mt-5 py-5 border-top text-center">
                                    <TabContent className="my-2" activeTab={this.state.activeTab}>
                                        <TabPane tabId="1">
                                            <AccountDetailsConent />
                                            <h2>My Account</h2>
                                            <h3>Pending database</h3>
                                        </TabPane>
                                        <TabPane tabId="2">
                                            <PasswordChangeContent />
                                            <h2>Password Change Form</h2>
                                            <ChangePasswordForm />
                                        </TabPane>  
                                        <TabPane tabId="3">
                                            <SavedWillsContent />
                                            <h2>Your Saved Wills</h2>
                                            <SavedWills />
                                        </TabPane>
                                        <TabPane tabId="4">
                                            <SubmitWillContent />
                                            <WillSubmitForm />
                                        </TabPane>
                                    </TabContent>
                                </div>
                            </div>
                        </Card>
                    </Container>
                </section>
            </main>
          </>  
        );
    }
}

export default compose(
    withRouter,
    withFirebase
)(Account);