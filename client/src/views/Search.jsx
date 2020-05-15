import React from 'react';
import WillAPI from "../api/will";
import PageSpinner from "../components/Containers/PageSpinner";

/*
Search functionality removed until wills inserted into db

Algoliasearch will be used to perform search queries

import algoliasearch from 'algoliasearch/lite';
import {
    InstantSearch, 
    Hits, 
    SearchBox,
} from 'react-instantsearch-dom';   

const searchClient = algoliasearch('5HZO9XNZH3', '8f0e8b74cc6600ccc74527ba33fd9121');
*/

import {
    Button,
    ButtonGroup,
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
    Table
} from "reactstrap";

import ResultCard from "../components/Containers/ResultCard";
import ResultRow from "../components/Containers/ResultRow"

class Search extends React.Component {
    state = { 
        wills: null,  
        viewType: 'card',
        loading: true 
    }

    getStartingWills = async () => {
        const res = await WillAPI.getRandomDocuments(10);
        this.setState({
            wills: res, 
            loading: false
        });
    }

    componentDidMount() {
        this.getStartingWills();
    }
    
    
    changeResults = (e) => {
        if(e.target.classList.contains('active')) {
            return; 
        }

        const clicked = e.target.id;
        this.setState({
            'viewType': clicked
        });
    };

    render () {
        return (
            <>
                <main href="main">
                    <div className="position-relative">
                        <section className="section bg-gradient-jww-primary pb-4" />
                        <section className="mb-sm">
                            <Container className = "py-sm">
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
                                        <Label color="black" for="form-search">Search for wills by keywords, location, year, language</Label>
                                    </Col>
                                </Row>
                            </Container>
                            <Container fluid className="mx-5">
                                <Row>
                                    <Col xs="3" className="pr-5 filter-border">
                                        <Row>
                                            <h4>Result View</h4>
                                        </Row>
                                        <Row>
                                            <div className="action-buttons">
                                                <Button id="card" onClick={this.changeResults} active={this.state.viewType === 'card' }>
                                                    <i className="fas fa-poll-h fa-2x" />
                                                </Button>
                                                <Button id="table" onClick={this.changeResults} active={this.state.viewType === 'table'}>
                                                    <i className="fas fa-table fa-2x" />
                                                </Button>
                                            </div>
                                        </Row>
                                        <Row className="mt-3">
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
                                        {this.state.wills ?
                                            <>
                                                <Row>
                                                <h3>Displaying {this.state.wills.length} search results...</h3>
                                                </Row>
                                                <Row>
                                                    { 
                                                        this.state.viewType === 'card' ? (
                                                            <ListGroup>
                                                                {this.state.wills.map((d, i) => <ResultCard data={d} key={i} />)}
                                                            </ListGroup>
                                                        )
                                                        : ( 
                                                            <Table hover>
                                                                <thead>
                                                                    <tr>
                                                                        <th>Will</th>
                                                                        <th>Date of Publication</th>
                                                                        <th>Location</th>
                                                                        <th>Language</th>
                                                                        <th>Archive</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    {this.state.wills.map((d, i) => <ResultRow data={d} key={i} /> )}
                                                                </tbody>
                                                            </Table>
                                                        )
                                                    }
                                                </Row>
                                            </> 
                                            : <PageSpinner />
                                        }
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