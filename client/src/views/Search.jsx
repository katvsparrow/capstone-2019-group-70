import React from 'react';
import WillAPI from "api/will";

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
    Container,      
    Row, 
    Col, 
    Input, 
    InputGroup,
    InputGroupText,
    InputGroupAddon,
    Label, 
    ListGroup,
    Table
} from "reactstrap";

import ResultCard from "components/Containers/ResultCard";
import ResultRow from "components/Containers/ResultRow"
import ActionButton from "components/Containers/ActionButton";

class Search extends React.Component {
    state = { 
        wills: null,  
        viewType: 'table',
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
    
    
    /* Change view type depending on active class */ 
    changeViewType = (e) => {
        console.log(e.target);
        this.state.viewType === 'table'
            ? this.setState({ 'viewType': 'card'})
            : this.setState({ 'viewType': 'table'});
    };

    render () {
        return (
            <>
                <main href="main">
                    <div className="position-relative">
                        <section className="section bg-gradient-jww-primary pb-4" />
                        <section className="mb-sm">
                            {/* Top Search Bar */}
                            <Container className = "py-sm">
                                <Row>
                                   <Col>
                                        <InputGroup size="lg">
                                            <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                                <i className="fas fa-search fa-2x"/>
                                            </InputGroupText>
                                            </InputGroupAddon>
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
                                {/*
                                <Row>
                                    <Col>
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
                                    </Col>
                                    <Col>
                                        <FormGroup>
                                            <Label for="form-language">Original Language</Label>
                                            <Input type="select" name="language" id="form-language">
                                                <option></option>
                                                <option>English</option>
                                                <option>Latin</option>
                                                <option>Spanish</option>
                                            </Input>
                                        </FormGroup>
                                    </Col>
                                </Row>*/}
                                <Row className='mt-4'>
                                    {this.state.wills 
                                        ?
                                            <>
                                                <Col lg="9" className="pt-3">
                                                    <h5>Displaying {this.state.wills.length} search results...</h5>
                                                </Col>
                                                <Col lg="3">
                                                    <div className="action-buttons">
                                                        <ActionButton
                                                            iconClass= 'fas fa-table fa-2x'
                                                            onClick = {this.changeViewType}
                                                            active = {this.state.viewType === 'table'}
                                                        />
                                                        <ActionButton
                                                            iconClass = 'fas fa-poll-h fa-2x'
                                                            onClick= {this.changeViewType}
                                                            active = {this.state.viewType === 'card'}
                                                        />
                                                    </div>
                                                </Col>
                                                { 
                                                    this.state.viewType === 'card' ? (
                                                        <ListGroup className="mt-3">
                                                            {this.state.wills.map((d, i) => <ResultCard data={d} key={i} />)}
                                                        </ListGroup>
                                                    )
                                                    : ( 
                                                        <Table className="mt-3" hover>
                                                            <thead>
                                                                <tr>
                                                                    <th>Will</th>
                                                                    <th>Date of Publication</th>
                                                                    <th>Location</th>
                                                                    <th>Archive</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {this.state.wills.map((d, i) => <ResultRow data={d} key={i} /> )}
                                                            </tbody>
                                                        </Table>
                                                    )
                                                }
                                            </> 
                                        : <div className="loader text-center" />
                                    }
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
