import React from "react";
import { Redirect, Link } from "react-router-dom";
import { AuthUserContext } from "contexts/Session";
import * as ROUTES from "constants/routes";

import { 
    Card,  
    CardBody,  
    Container, 
    Row, 
    Col
} from "reactstrap";

import SignUpForm from "components/Forms/SignUpForm.jsx";

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
                                            <div className="mt-3">
                                                <Link to={ROUTES.LOGIN}>
                                                    Already have an account? Login
                                                </Link>
                                            </div>
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