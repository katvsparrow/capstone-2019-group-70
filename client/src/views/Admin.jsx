import React from 'react';
import classnames from "classnames";

import { withFirebase } from "contexts/Firebase";
import { AuthUserContext, UserInfoContext } from "contexts/Session";

import * as ROUTES from "constants/routes";
import { withRouter, Redirect } from "react-router-dom";
import { compose } from "recompose";

import WillSubmitForm from "components/Forms/WillSubmitForm";
import TextCard from "components/Containers/TextCard";

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


class WebsiteContent extends React.Component {
    render() {
        return(
            <>
                <TextCard
                    header="Home Page Welcome Banner"
                    enableEdit={true}
                    targetContainer="home=page-welcome"
                    bodyText={'fsf'}
                />
            </>
        )
    }
}


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
                                                Modify Website Content
                                            </ListGroupItem>
                                            <ListGroupItem tag="a"
                                                className={classnames({active: this.state.activeTab === '2'})}
                                                onClick={() => {
                                                    this.toggle('2');
                                                }}
                                            >
                                                Add new will
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
                                <div className="mt-5 border-top">
                                    <TabContent className="my-2" activeTab={this.state.activeTab}>
                                        <TabPane tabId="1">
                                            <WebsiteContent />
                                        </TabPane>
                                        <TabPane tabId="2">
                                            <WillSubmitForm user={this.props.user}/>
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
                authUser =>
                    authUser 
                        ? (
                            <UserInfoContext.Consumer>
                                { userInfo => (userInfo && userInfo.Role === 'ADMIN') && <Admin contexts={props} user={authUser} info={userInfo}/> }
                            </UserInfoContext.Consumer>
                        ) 
                        : <Redirect to={ROUTES.LOGIN} />
            }
        </AuthUserContext.Consumer>
    )
};

export default compose(
    withRouter,
    withFirebase
)(AdminBase);
