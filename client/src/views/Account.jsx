import React from 'react';

import MainNavbar from "components/Navbars/MainNavbar.jsx";
import SimpleFooter from "components/Footers/SimpleFooter.jsx";

import {
    Container, 
    Row, 
    Col,
    ListGroup,
    ListGroupItem
} from "reactstrap";

class Account extends React.Component {
    render() {
        return (
          <>
            <MainNavbar />
            <main href="main">
                <div className = "position-relative">
                <section className="section section-lg bg-secondary">
                    <Container className="my-4">
                        <Row>
                            <h2>John Smith</h2>
                        </Row>
                    </Container>
                    <Container>
                        <Row>
                            <Col xs="4">
                                <ListGroup>
                                    <ListGroupItem active action>My Account</ListGroupItem>
                                    <ListGroupItem action>My Saved Wills</ListGroupItem>
                                    <ListGroupItem action>Contribute to JWW</ListGroupItem>
                                </ListGroup>
                            </Col>
                            <Col xs="8" className="bg-white">
                                <div className="my-2">
                                    <h2>My Account</h2>
                                    <h6>Personal Information</h6>
                                    <hr />
                                    <h6>Account Statistics</h6>
                                    <hr />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
                </div>
            </main>
            <SimpleFooter />
          </>  
        );
    }
}

export default Account;