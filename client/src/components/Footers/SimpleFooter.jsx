import React from "react";

import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";


// reactstrap components
import {
  Nav,
  NavItem,
  Container,
  Row,
  Col
} from "reactstrap";

class SimpleFooter extends React.Component {
  render() {
    return (
      <>
        <footer className=" footer">
          <Container>
            <hr />
            <Row className=" align-items-center justify-content-md-between">
              <Col md="6">
                <div className=" copyright">
                  © {new Date().getFullYear()}{" "}
                  <a 
                    href="https://liberalarts.oregonstate.edu/users/rena-lauer"
                  >
                    Rena Lauer
                  </a>
                  .
                </div>
              </Col>
              <Col md="6">
                <Nav className=" nav-footer justify-content-end">
                  <NavItem>
                    <Link className="nav-link" to={ROUTES.SEARCH}>
                      Search
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link className="nav-link" to={ROUTES.ABOUT}>
                        About Us
                    </Link>
                  </NavItem>
                </Nav>
              </Col>
            </Row>
          </Container>
        </footer>
      </>
    );
  }
}

export default SimpleFooter;
