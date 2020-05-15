import React from "react"; 


import {
    Container,      
    Row, 
    Col
} from "reactstrap";    

import HomeSearch from "components/SearchBars/HomeSearch.jsx";
import WillCard from "components/Containers/WillCard.jsx";

import WillAPI from "api/will.js";

class Home extends React.Component {
    // Initialize state
    state = { wills: [] }
    
    // Fetch passwords after first mount
    componentDidMount() {
        this.getWills()
    }

    getWills = async () => {
        const res = await WillAPI.getRandomDocuments(3);
        this.setState({ wills: res })
    }

    render() {
        return (
            <>
                <main href="main">
                    <div className="position-relative">
                        {/* Opening Banner */}
                        <section className="section section-lg section-shaped pb-250">
                            {/* Background bubbles */ }
                            <div className="shape shape-style-1 bg-gradient-jww-primary">
                                <span />
                                <span />
                                <span />
                                <span />
                                <span />
                            </div>
                            {/* Text Content */ }
                            <Container className="py-lg-md d-flex">
                                <div className="col px-0">
                                    <Row className="welcome-banner p-3 text-center">
                                            <p className="lead text-white text-container">
                                                {`Jewish women’s voices from the premodern world are often hard to hear. Their last wishes—instructions for heirs, gifts to loved ones, pious bequests, and sometimes even ethical messages and warnings—provide a rare and fascinating entrée into the lives of those who were fortunate enough to have possessions they could disseminate.
                                                
                                                Women living in Jewish communities from France to Fustat (old Cairo) and beyond left behind wills, often recorded in the local language. As a result, the act of cataloging Jewish women’s wills can give us an increasingly global perspective on premodern Jewish life, and a rich source base from which to begin asking new questions and seeking new answers.
                                                `}
                                            </p>
                                    </Row>
                                </div>
                            </Container>
                        </section>
                        {/* 3 Random Wills */}
                        {this.state.wills.length === 3
                            ? <> 
                                    <section className="section section-lg pt-lg-0 mt--200">
                                        <Container>
                                            <Row className="justify-center-content">
                                                <Col lg="12">
                                                    <Row className="row-grid">
                                                        <Col lg="4">
                                                            <WillCard data={this.state.wills[0]} />
                                                        </Col>
                                                        <Col lg="4">
                                                            <WillCard data={this.state.wills[1]} />
                                                        </Col>
                                                        <Col lg="4">
                                                            <WillCard data={this.state.wills[2]} />
                                                        </Col>
                                                    </Row>
                                                </Col>
                                                                                
                                            </Row>
                                        </Container>
                                    </section>
                              </>
                            : null
                        }
                        {/* Search Bar */}
                        <section className="section section-lg">
                            <Container>
                                <Row className="justify-content-center text-center mb-lg">
                                    <Col lg="8">
                                        <h2 className="display-3">Explore the Digital Archive</h2>
                                        <p className="lead text-muted">
                                            Start searching by location, language, year, and more.
                                        </p>
                                    </Col>
                                    <Col lg="12">
                                        <HomeSearch />
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

export default Home;