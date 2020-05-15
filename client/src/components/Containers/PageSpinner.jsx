import React from 'react';

import { Container } from "reactstrap";

const Spinner = () => {
    return (
        <>
            <section className="my-lg py-lg">
                <Container className="text-center">
                    <div className="loader"></div>
                </Container>
            </section>
        </>
    );
}

export default Spinner; 