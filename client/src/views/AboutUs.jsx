import React, { Component } from 'react'


import {
    Container, 
    Row, 
    Col 
} from 'reactstrap';

import ContactForm from "../components/Forms/ContactForm";

class AboutUs extends Component {
  render() {
    return (
        <>
            <main href="main">
                <div className="position-relative">
                    <section className="section bg-gradient-jww-primary pb-4" />
                    <section className="section section-lg">
                        <Container className="justify-content-center text-center text-dark">
                            <h1 className="display-3">About JWW</h1>
                            <p className="lead">Pellentesque rutrum metus ut mauris tristique, et gravida dolor laoreet. Morbi non rutrum lacus. In hac habitasse platea dictumst. Nulla id sagittis velit. </p>
                            <hr />
                            <p>
                            Jewishwomenswills.org is a collaborative “big data” site spearheaded by Dr. Rena Lauer (Oregon State University).
                            <br /> <br />
                            The heart of the site is an ever-growing database containing references to extant last wills and testaments left by Jewish women who lived between 500 and 1500 CE. Whenever possible, entries will also contain a manuscript image, a transcription in the original language, and a translation into English (or any of these three). The website also contains a bibliography of relevant secondary source scholarship and editions.
                            <br /> <br />
                            Jewishwomenswills.org is intended to be a collective project, culling from the expertise and passion of many scholars who are already working in this area. You are urged to get in touch and/or contribute references, images, transcriptions, or translations through the website portal. All contributions will, of course, be properly credited. You are also invited to suggest additions to the bibliography. 
                            <br /> <br />
                            This database is meant as a resource for students, researchers, and others who are curious about the ways we can recover the voices of Jewish women in the premodern past. Using wills, we can gain insight into the ways in which Jewish women in the premodern world bequeathed their material goods, built and confirmed social networks, and related to their gender and religion within the confines of this legal instrument. 
                            </p>
                        </Container>
                    </section>
                    <section className="section bg-secondary">
                            <Container>
                            <Row className="justify-content-center">
                                <Col lg="8">
                                    <ContactForm />
                                </Col>
                            </Row>
                            </Container>
                        </section>
                </div>
            </main>
        </>
     );
}

}
export default AboutUs;
