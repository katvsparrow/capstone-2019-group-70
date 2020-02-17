import React from 'react';
import algoliasearch from 'algoliasearch/lite';

import MainNavbar from "components/Navbars/MainNavbar.jsx";
import SimpleFooter from "components/Footers/SimpleFooter.jsx";

import {
    InstantSearch, 
    Hits, 
    SearchBox,
} from 'react-instantsearch-dom';   

import {
    Container,      
} from "reactstrap";

const searchClient = algoliasearch('5HZO9XNZH3', '8f0e8b74cc6600ccc74527ba33fd9121');

class Search extends React.Component {
    render () {
        return (
            <>
                <MainNavbar />
                <main href="main">
                    <div className="position-relative">
                        <section className="section section-lg section-shaped pb-250">
                            <Container className = "py-lg-md d-flex">
                                <InstantSearch searchClient={searchClient}>
                                    <SearchBox />
                                    <Hits />
                                </InstantSearch>
                            </Container>
                        </section>
                    </div>
                    
                </main>
                <SimpleFooter />
            </>
        );
    }
}

export default Search;