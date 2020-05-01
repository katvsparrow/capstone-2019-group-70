import React from 'react';

import {
    Jumbotron,
    Container, 
    Row, 
    Col,
    Button
} from "reactstrap";

import * as ROUTES from '../constants/routes';

const NotFound = () => {
    return (
        <>
            <main href="main">
                <div className="position-relative">
                    <section className="section section-lg section-shaped pb-250">
                        {/* Background bubbles */ }
                        <div className="shape shape-style-1 bg-gradient-jww-primary">
                            <span />
                            <span />
                            <span />
                            <span />
                            <span />
                            <span />
                            <span />
                            <span />
                            <span />
                            <span />
                            <span />
                        </div>
                        <Container className="mt-md mb-md pt-lg pb-lg">
                            <Row className="justify-content-center">
                                <Jumbotron>
                                    <h1 className="display-3">Oops!</h1>
                                    <p>404: The page you requested is not found.</p>
                                    <p className="lead">
                                        <Button href={ROUTES.HOME} color="dark">Take me home</Button>
                                    </p>
                                </Jumbotron>
                            </Row>
                        </Container>
                    </section>
                </div>
            </main>
        </>
    );
}

export default NotFound;