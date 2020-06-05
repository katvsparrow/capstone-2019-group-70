import React from "react";

import { Container } from "reactstrap";

class Contribute extends React.Component { 
    render() {
        return(
            <main href="main">
            <div className="position-relative">
                <section className="section bg-gradient-jww-primary pb-4" />
                <section className="section section-lg">
                    <Container className="justify-content-center text-dark">
                    <h1 className="display-3 text-center">{`Contributing to Jewish Womens' Wills`}</h1>
                        <p className="lead text-center">
                            {`This Collaborative Big Data Project Thrives on Collaboration of Scholars and Students`}
                        </p>
                        <hr />
                        <p className="text-container">
                            {`If you would like to contribute a component of will (whether a photo, transcription, translation, or all three), or if you would like to simply add a reference to an new will not yet in the database, please use the login button to register. Once you have registered, you will be able to submit the documents and metadata about your will. The administrators will look over the materials you have submitted, and then will add them to the site. 

                            Should you like to contribute a component of a will that is already on the database (say, if you have a photograph, transcription, or translation of a will that does not currently have that in its entry), please also register and submit the material through the online form.

                            Of course, all contributors will be recognized by name, both on this page and on the individual will that you submitted. 

                            We are happy to communicate about this process, and eager to answer any questions you may have. Do not hesitate to get in touch with Rena Lauer at Rena.Lauer@jewishwomenswills.org.
                        `}
                        </p>
                    </Container>
                </section>
            </div>
        </main>
        );
    }
}

export default Contribute;
