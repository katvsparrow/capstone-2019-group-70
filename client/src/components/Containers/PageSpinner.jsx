import React from 'react';

import { Container } from "reactstrap";

const Spinner = () => {
    return (
        <>
            <section className="my-lg py-lg">
                <Container className="text-center">
                    <h2>Fetching content...</h2>
                    <div className="loader"></div>
                </Container>
            </section>
        </>
    );
}

export default Spinner; 