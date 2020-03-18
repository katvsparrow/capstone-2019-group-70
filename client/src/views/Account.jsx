import React from 'react';
import classnames from "classnames";


// Component Imports 
import MainNavbar from "components/Navbars/MainNavbar.jsx";
import SimpleFooter from "components/Footers/SimpleFooter.jsx";
import WillSubmitForm from "components/Forms/WillSubmitForm.jsx";





import {
    Container, 
    Row, 
    Col,
    ListGroup,
    ListGroupItem, 
    Table,
    TabContent,
    TabPane, 
} from "reactstrap";


const WillTable = (props) => {
    return (
      <Table hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
    );
}

class Account extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: '1'
        };
    }
    
    toggle(tab) {
        if(this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }
    
    render() {
        return (
          <>
            <MainNavbar />
            <main href="main">
                <div className = "position-relative">
                <section className="section section-lg bg-secondary">
                    <Container className="my-4">
                        <Row>
                            <h2>Abel Dillanes</h2>
                        </Row>
                    </Container>
                    <Container>
                        <Row>
                            <Col xs="3">
                                <ListGroup>
                                    <ListGroupItem tag="a"
                                        className={classnames({active: this.state.activeTab === '1'})}
                                        onClick={() => {
                                          this.toggle('1');
                                        }}
                                    >
                                        My Account
                                    </ListGroupItem>
                                    <ListGroupItem tag="a"
                                        className={classnames({active: this.state.activeTab === '2'})}
                                        onClick={() => {
                                          this.toggle('2');
                                        }}
                                    >
                                        My Saved Wills
                                    </ListGroupItem>
                                    <ListGroupItem tag="a"
                                        className={classnames({active: this.state.activeTab === '3'})}
                                        onClick={() => {
                                          this.toggle('3');
                                        }}
                                    >
                                        Contribute to JWW
                                    </ListGroupItem>
                                </ListGroup>
                            </Col>
                            <Col xs="9" className="bg-white">
                                <TabContent className="my-2" activeTab={this.state.activeTab}>
                                    <TabPane tabId="1">
                                        <h2>My Account</h2>
                                        <h6>Personal Information</h6>
                                        <hr />
                                        <h6>Account Statistics</h6>
                                        <hr />
                                    </TabPane>
                                    <TabPane tabId="2">
                                        <h2>My Saved Wills</h2>
                                        <h6>Favorited Wills</h6>
                                        <WillTable />
                                        <hr />
                                        <h6>My Submitted Wills</h6>
                                        <WillTable />
                                    </TabPane>
                                    <TabPane tabId="3">
                                        <h2>Submit a Will</h2>
                                        <WillSubmitForm />
                                    </TabPane>
                                </TabContent>
                            </Col>
                        </Row>
                    </Container>
                </section>
                </div>
            </main>
            <SimpleFooter />
          </>  
        );
    }
}

export default Account;