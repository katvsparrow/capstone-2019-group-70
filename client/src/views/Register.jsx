import React from "react";

import { 
    Card,  
    CardBody,  
    Container, 
    Row, 
    Col
} from "reactstrap";

import SignUpForm from "components/Forms/SignUpForm.jsx";

import { AuthUserContext } from "contexts/Session";

import * as ROUTES from "constants/routes";
import { Redirect } from "react-router-dom";

class Register extends React.Component {
    render() {
        return(
            <>
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
                        {/* Register */}
                        <Container className="mt-md mb-md pt-md pb-md">
                            <Row className="justify-content-center">
                                <Col lg="6">
                                    <Card className="bg-secondary shadow border-0">
                                        <CardBody>
                                        <div className="text-center text-muted mb-4">
                                            Create an Account
                                        </div>
                                        <SignUpForm />
                                        <a href='/login'>Already have an account? Login.</a>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                </main>
            </>
        );
    }
}


const RegisterBase = (props) => {
    return (
        <AuthUserContext.Consumer>
            {
                authUser =>
                    authUser ? <Redirect to={ROUTES.ACCOUNT} />
                             : <Register />
            }
        </AuthUserContext.Consumer>
    )
}



export default RegisterBase;