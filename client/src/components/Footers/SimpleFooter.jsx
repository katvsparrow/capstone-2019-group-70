import React from "react";

import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";


// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
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
                    target="_blank"
                  >
                    Rena Lauer
                  </a>
                  .
                </div>
              </Col>
              <Col md="6">
                <Nav className=" nav-footer justify-content-end">
                  <NavItem>
                    <Link to={ROUTES.SEARCH}>
                      <NavLink>Search</NavLink>
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link to={ROUTES.ABOUT}>
                      <NavLink>
                        About Us
                      </NavLink>
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
