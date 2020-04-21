import React from "react";

import {
    Button, 
    Card, 
    CardHeader, 
    CardBody, 
    FormGroup, 
    Form, 
    Input, 
    InputGroupAddon,
    InputGroupText, 
    InputGroup, 
    Container, 
    Row, 
    Col
} from "reactstrap";

import MainNavbar from "components/Navbars/MainNavbar.jsx";
import SimpleFooter from "components/Footers/SimpleFooter.jsx";

class Login extends React.Component {
    render() {
        return (
            <>
                <MainNavbar />
                    <main ref="main">
                        <section className="section section-shaped section-lg">
                            {/* Background */}
                            <div className="shape shape-style-1 bg-gradient-jww-primary">
                                <span />
                                <span />
                                <span />
                                <span />
                                <span />
                                <span />
                                <span />
                                <span />
                            </div>

                            {/* Login */}                       
                            <Container className="pt-lg-md">
                                <Row className="justify-content-center">
                                    <Col lg="5">
                                        {/* Login Card */}
                                        <Card className="bg-secondary shadow border-0">
                                            <CardBody className="px-lg-5 py-lg-5">
                                                <div className="text-center text-muted mb-4">
                                                    <small>Sign in with credentials</small>
                                                </div>
                                            </CardBody>  
                                        </Card>
                                    </Col>
                                </Row>
                            </Container>
                        </section>
                    </main>
                <SimpleFooter />
            </>
        );        
    }
}

export default Login; 