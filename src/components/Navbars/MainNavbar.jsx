import React from "react"; 
import { Link } from "react-router-dom"; 

// import reactstrap components 
import {
    Button,
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
                    className = "navbar-main navbar-transparent navbar-light"
                    expand="lg"
                    id="navbar-main"
                >
                    <Container>
                        {/* Navbar logo */}
                        <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
                            <img alt="..." src={require("assets/img/brand/argon-react-white.png")} />
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
                                    <NavLink href="/" onClick={e => e.preventDefault()}>
                                        <i className="ni ni-collection d-lg-none mr-1" />
                                        <span className="nav-link-inner--text">Discover</span>
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
                                    <Button className="btn-neutral btn-icon" color="default" href="/login" >
                                        <span className="btn-inner--icon">
                                            <i className="fa fa-user-circle" />
                                        </span>
                                        <span className="nav-link-inner--text ml-1">
                                            Login / Register
                                        </span>
                                    </Button>
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