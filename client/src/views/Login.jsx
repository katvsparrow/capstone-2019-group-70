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

import SignInForm from "components/Forms/SignInForm.jsx";

class Login extends React.Component {
    render() {
        return (
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
                        {/* Login */}
                        <Container className="mt-md mb-md pt-lg pb-lg">
                            <Row className="justify-content-center">
                                <Col lg="6">
                                    <Card className="bg-secondary shadow border-0">
                                        <CardBody>
                                        <div className="text-center text-muted mb-4">
                                            Login with credentials
                                        </div>
                                        <SignInForm />
                                        <div className="mt-3">
                                            <Link to={ROUTES.REGISTER}>
                                                Don't have an account? Register now!
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

const LoginBase = (props) => {
    return (
        <AuthUserContext.Consumer>
            {
                authUser =>
                    authUser ? <Redirect to={ROUTES.ACCOUNT} />
                             : <Login />
            }
        </AuthUserContext.Consumer>
    )
}

export default LoginBase; 