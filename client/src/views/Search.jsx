import React from 'react';
import algoliasearch from 'algoliasearch/lite';


import {
    InstantSearch, 
    Hits, 
    SearchBox,
} from 'react-instantsearch-dom';   

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

const searchClient = algoliasearch('5HZO9XNZH3', '8f0e8b74cc6600ccc74527ba33fd9121');

class Search extends React.Component {
    render () {
        return (
            <>
                <main href="main">
                    <div className="position-relative">
                        <section className="section section-shaped search-container">
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
                                        <Label for="form-search">Search for wills by keywords, location, year, language</Label>
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
                                            <h3>Displaying 3 of 3 Document Results</h3>
                                        </Row>
                                        <Row className="justify-content-right">
                                            <h6>Sort by: <b>Submission Date</b>|<b>Publication Year</b></h6>
                                        </Row>
                                        <Row>
                                        <ListGroup>
                                            <ListGroupItem>
                                                <ListGroupItemHeading tag="a" href="/willexample">Regina, Wife of Bondia Coras: Puigcerdá 1306</ListGroupItemHeading>
                                                <ListGroupItemText>
                                                Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
                                                </ListGroupItemText>
                                            </ListGroupItem>
                                            <ListGroupItem>
                                                <ListGroupItemHeading>List group item heading</ListGroupItemHeading>
                                                <ListGroupItemText>
                                                Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
                                                </ListGroupItemText>
                                            </ListGroupItem>
                                            <ListGroupItem>
                                                <ListGroupItemHeading>List group item heading</ListGroupItemHeading>
                                                <ListGroupItemText>
                                                Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
                                                </ListGroupItemText>
                                            </ListGroupItem>
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