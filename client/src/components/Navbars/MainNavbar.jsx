import React from "react"; 
import FirebaseAuthButton from "components/Login/FirebaseAuthButton";
import { Link } from "react-router-dom"; 

// import reactstrap components 
import {
    UncontrolledCollapse,
    NavbarBrand,
    Navbar,
    NavItem,
    NavLink,
    Nav,
    Container,
    Row,
    Col
} from "reactstrap";

class MainNavbar extends React.Component {
    render() {
        return (
            <header className="header-global">
                <Navbar 
                    className = "navbar-main navbar-transparent navbar-light bg-gradient-jww-primary"
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
                                    {/* Logo Header for collapsed list */}
                                    <Col className="collapse-brand" xs="6">
                                        <Link to="/">
                                            <img alt="..." src={require("assets/img/brand/argon-react.png")}/>
                                        </Link>
                                    </Col>
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
                                    <NavLink href="/search">
                                        <i className="ni ni-collection d-lg-none mr-1" />
                                        <span className="nav-link-inner--text">Search</span>
                                    </NavLink>
                                </NavItem>
                                <NavItem>   
                                    <NavLink href="/" onClick={e => e.preventDefault()}>
                                    <i className="fa fa-info-circle d-lg-none mr-1" />
                                        <span className="nav-link-inner--text">About Us</span>
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            
                            {/* Right-hand Navbar content */}
                            <Nav className="align-items-lg-center ml-lg-auto" navbar>
                                <NavItem className="d-none d-lg-block ml-lg-4">
                                    <FirebaseAuthButton />
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