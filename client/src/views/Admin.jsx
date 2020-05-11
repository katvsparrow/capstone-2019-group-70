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

const INITIAL_STATE = {
    activeTab: '1'
};

class Admin extends React.Component {
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
                                        <h2>Admin Portal</h2>
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
                                                Accounts
                                            </ListGroupItem>
                                            <ListGroupItem tag="a"
                                                className={classnames({active: this.state.activeTab === '2'})}
                                                onClick={() => {
                                                    this.toggle('2');
                                                }}
                                            >
                                                Wills
                                            </ListGroupItem>
                                            <ListGroupItem tag="a"
                                                className={classnames({active: this.state.activeTab === '3'})}
                                                onClick={() => {
                                                    this.toggle('3');
                                                }}
                                            >
                                                Awaiting Review
                                            </ListGroupItem>
                                        </ListGroup>
                                    </Col>
                                </Row>
                                <div className="mt-5 py-5 border-top text-center">
                                    <TabContent className="my-2" activeTab={this.state.activeTab}>
                                        <TabPane tabId="1">
                                        </TabPane>
                                        <TabPane tabId="2">
                                        </TabPane>  
                                        <TabPane tabId="3">
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
const AdminBase = (props) => {
    return(
        <AuthUserContext.Consumer>
            {
                /* Check Role */
                authUser =>
                    authUser ? <Admin contexts={props} user={authUser} />
                             : <Redirect to={ROUTES.LOGIN} />
            }
        </AuthUserContext.Consumer>
    )
}

export default compose(
    withRouter,
    withFirebase
)(AdminBase);