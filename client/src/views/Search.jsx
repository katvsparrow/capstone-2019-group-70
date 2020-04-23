import React from 'react';

/*
import algoliasearch from 'algoliasearch/lite';
import {
    InstantSearch, 
    Hits, 
    SearchBox,
} from 'react-instantsearch-dom';   

const searchClient = algoliasearch('5HZO9XNZH3', '8f0e8b74cc6600ccc74527ba33fd9121');
*/

import {
    ButtonGroup,
    Button,
    Container,      
    Row, 
    Col, 
    Input, 
    InputGroup,
    InputGroupAddon,
    Form,
    FormGroup,
    Label, 
    ListGroup,
    ListGroupItem,
    ListGroupItemHeading,
    ListGroupItemText
} from "reactstrap";

import Result from "../components/SearchContainers/Result.jsx";

var mock_wills = require('../data/Mock/Mock_Wills.json');

class Search extends React.Component {
    state = { wills: mock_wills['mock_wills'] }

    getWills = () => {
        /* Fetch method, Pending client data */
    }

    componentDidMount() {
        this.getWills();
    }
    
    render () {
        return (
            <>
                <main href="main">
                    <div className="position-relative">
                        <section className="section section-shaped search-container bg-gradient-jww-primary">
                            <Container className = "py-md">
                                <Row>
                                   <Col>
                                        <InputGroup size="lg">
                                            <Input id="form-search" placeholder="Start searching now..." />
                                            <InputGroupAddon addonType="append">
                                                <Button color="secondary">
                                                    Search
                                                </Button>
                                            </InputGroupAddon>
                                        </InputGroup>
                                        <Label color="black" for="form-search" className="text-white">Search for wills by keywords, location, year, language</Label>
                                    </Col>
                                </Row>
                            </Container>
                        </section>
                        <section className="section section-lg pb-250 bg-secondary">
                            <Container>
                                <Row>
                                    <Col xs="4" className="pr-5 filter-border">
                                        <Row>
                                            <h4>Refine Your Results</h4>
                                        </Row>
                                        <Row>
                                            <Form>
                                                <h5>Filter By:</h5>
                                                    <FormGroup>
                                                    <Label for="form-language">Country of Origin</Label>
                                                        <Input type="select" name="country" id="form-country">
                                                        <option></option>
                                                        <option>Germany</option>
                                                        <option>Israel</option>
                                                        <option>Italy</option>
                                                        <option>Spain</option>
                                                        </Input>
                                                    </FormGroup>
                                                    <FormGroup>
                                                        <Label for="form-language">Original Language</Label>
                                                        <Input type="select" name="language" id="form-language">
                                                        <option></option>
                                                        <option>English</option>
                                                        <option>Latin</option>
                                                        <option>Spanish</option>
                                                        </Input>
                                                    </FormGroup>
                                                    <Label for="form-year">Year of Publication</Label>
                                                    <Row form id="form-year">
                                                        <Col md={6}>
                                                            <FormGroup>
                                                                <Input type="min-year" name="text" id="form-min-year" placeholder="Min" />
                                                            </FormGroup>
                                                        </Col>
                                                        <Col md={6}>
                                                            <FormGroup>
                                                                <Input type="max-year" name="text" id="form-max-year" placeholder="Max" />
                                                            </FormGroup>
                                                        </Col>
                                                    </Row>
                                                    <ButtonGroup>
                                                        <Button className="m-2" color="warning">Filter</Button>
                                                        <Button className="m-2" color="secondary">Reset</Button>
                                                    </ButtonGroup>
                                                </Form>
                                        </Row>
                                    </Col>
                                    <Col xs="8" className="pl-5">
                                        <Row>
                                            <h3>Displaying {this.state.wills.length} search results...</h3>
                                        </Row>
                                        <Row>
                                            <ListGroup>
                                                {this.state.wills.map(d => <Result data={d} />)}
                                            </ListGroup>
                                        </Row>
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

export default Search;