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
                        <Container className="justify-content-center text-center">
                            <h1 className="display-3">About JWW</h1>
                            <p className="lead">Pellentesque rutrum metus ut mauris tristique, et gravida dolor laoreet. Morbi non rutrum lacus. In hac habitasse platea dictumst. Nulla id sagittis velit. </p>
                            <hr />
                            <p>
                            Suspendisse potenti. Cras vitae dolor vel nibh porttitor tempor in quis lectus. Sed neque tellus, finibus in ex finibus, pretium bibendum ipsum. Maecenas interdum cursus massa at euismod. Donec laoreet elit vitae elit luctus commodo vitae sit amet turpis. Sed vehicula orci eu quam malesuada eleifend. Donec turpis libero, iaculis nec posuere sed, pharetra et nibh. Maecenas tempor iaculis dui at convallis. Nunc lacus orci, consequat a posuere a, euismod in metus. Donec non tempor orci.
                            <br/><br/>
                            Aliquam congue nibh at convallis aliquet. Curabitur et tellus suscipit, ultricies lacus id, lacinia est. Aliquam varius vulputate pretium. Ut pharetra non erat quis semper. Aliquam sagittis in diam ac semper. Fusce iaculis lobortis nisl, sed feugiat nibh eleifend sit amet. In lectus quam, auctor non ornare in, lobortis et diam. Nam quis pharetra augue. Quisque pharetra mi id magna porta, in fringilla nibh tincidunt. Donec dignissim placerat tempor. In ac pharetra metus, ac pharetra diam. Integer dapibus sed augue malesuada tincidunt. Donec mattis et sem id feugiat. Sed ac convallis purus, vitae condimentum augue. Nulla vel justo eget sem iaculis varius eget non nisi.
                            <br/><br/>
                            Nam faucibus lorem quis orci vehicula tincidunt. Morbi cursus, nunc quis ultrices imperdiet, mauris turpis lobortis neque, sed tristique elit nisi id nibh. Maecenas aliquet ut dolor nec tincidunt. Etiam laoreet ipsum sit amet ipsum bibendum volutpat. In hendrerit lorem nec erat vehicula, a tincidunt risus ultricies. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam euismod ipsum mauris, id consectetur urna sagittis sed. Duis fringilla odio id est cursus, scelerisque vehicula ex elementum. Vivamus sed ex neque. Vivamus condimentum, dolor id varius consectetur, libero nibh ullamcorper leo, nec placerat diam mauris dignissim magna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam in vulputate dolor, vel consectetur tellus. Quisque porta elit mollis ipsum pretium, id sodales turpis lobortis.
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
