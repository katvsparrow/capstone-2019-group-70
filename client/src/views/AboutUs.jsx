import React, { Component } from 'react'

import MainNavbar from "components/Navbars/MainNavbar.jsx";
import AboutUs from "components/AboutPage/AboutPage.jsx";
import SimpleFooter from "components/Footers/SimpleFooter.jsx";
import ContactForm from "components/Forms/ContactForm.jsx";


import {
  Badge,
  Button,
  Card,
  CardImg,
  CardBody,
  Container,
  Row,
  Col
} from "reactstrap";

class About extends Component {


    render() {
        return (
            <div>


            <MainNavbar />
             <AboutUs />

            <section className="section bg-secondary">
              <Container>
                <Row className="justify-content-center">
                  <Col lg="8">
                    <ContactForm />
                  </Col>
                </Row>
              </Container>
            </section>

            <SimpleFooter />
           </div>
         );
    }

}
export default About;
