import React from "react"; 
import { Link } from "react-router-dom"; 
import * as ROUTES from "../../constants/routes";

import Headroom from "headroom.js"

// import reactstrap components
import {
    UncontrolledCollapse,
    NavbarBrand,
    Navbar,
    NavItem,
    Nav,
    Container,
    Row,
    Col,
    Button
} from "reactstrap";

import { AuthUserContext } from "../../contexts/Session";

const LoginNavigation = (props) => (
    <Link to={ROUTES.ACCOUNT}>
        <Button className="btn-neutral btn-icon" color="default">
            <span className="btn-inner--icon">
                <i className="fa fa-user-circle" />
            </span>
            <span className="nav-link-inner--text ml-1">
                My Account 
            </span>
        </Button>
    </Link>
);

const LoginButton = () => (
    <Link to={ROUTES.LOGIN}>
        <Button className="btn-neutral btn-icon" color="default">
            <span className="btn-inner--icon">
                <i className="fa fa-user-circle" />
            </span>
            <span className="nav-link-inner--text ml-1">
                Login / Register 
            </span>
        </Button>
    </Link>
);

class MainNavbar extends React.Component {
    componentDidMount() {
        let headroom = new Headroom(document.getElementById("navbar-main"));
        headroom.init();
    }
    
    render() {
        return (
            <header className="header-global">
                <Navbar 
                    className = "navbar-main navbar-transparent navbar-light headroom"
                    expand="lg"
                    id="navbar-main"
                >
                    <Container>
                        {/* Navbar logo */}
                        <NavbarBrand className="mr-lg-5 brand" to="/" tag={Link}>
                           Jewish Women's Wills
                        </NavbarBrand>

                        {/* Navbar collapse button */}
                        <button className="navbar-toggler" id="navbar_global">
                            <span className="navbar-toggler-icon" />
                        </button>

                        {/* Collapsed items */}
                        <UncontrolledCollapse navbar toggler="#navbar_global">
                            <div className = "navbar-collapse-header">
                                <Row>
                                    {/* Collapse list close button */}
                                    <Col className="collapse-close" xs="6">
                                        <button className="navbar-toggler" id="navbar_global">
                                            <span />
                                            <span />
                                        </button>
                                    </Col>
                                </Row>
                            </div>

                            {/* Left-hand Navbar content */}
                            <Nav className="navbar-nav-hover align-items-lg-center" navbar>
                                <NavItem>
                                    <Link className="nav-link" to={ROUTES.SEARCH}>
                                        <i className="ni ni-collection d-lg-none mr-1" />
                                        <span className="nav-link-inner--text">Search</span>
                                    </Link>
                                </NavItem>
                                <NavItem>
                                    <Link className="nav-link" to={ROUTES.ABOUT}>
                                        <i className="fa fa-info-circle d-lg-none mr-1" />
                                        <span className="nav-link-inner--text">About Us</span>
                                    </Link>
                                </NavItem>
                                <NavItem>
                                    <Link className="nav-link" to={ROUTES.BIBLIOGRAPHY}>
                                        <i className="fa fa-info-circle d-lg-none mr-1" />
                                        <span className="nav-link-inner--text">Bibliography</span>
                                    </Link>
                                </NavItem>
                            </Nav>

                            {/* Right-hand Navbar content */}
                            <Nav className="align-items-lg-center ml-lg-auto" navbar>
                                <NavItem className="d-none d-lg-block ml-lg-4">
                                    <AuthUserContext.Consumer>
                                        { authUser => 
                                            authUser ? <LoginNavigation />  
                                                     : <LoginButton />                      
                                        }
                                    </AuthUserContext.Consumer>         
                                </NavItem>
                            </Nav>
                        </UncontrolledCollapse>
                    </Container>
                </Navbar>
            </header>
        );
    }
}

export default MainNavbar;
