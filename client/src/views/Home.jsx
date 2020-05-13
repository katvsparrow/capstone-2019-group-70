import React from "react"; 


import {
    Card, 
    CardImg,
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
        //this.getWills()
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
                                    <Row>
                                        <Col lg="6">
                                            <h1 className="display-3 text-white">
                                                Lorem ipsum dolor sit ame{" "}
                                                <span>Rebum civibus appellantur</span>
                                            </h1>
                                            <p className="lead text-white">
                                                Et graeco iracundia assueverit eam, et noluisse signiferumque 
                                                nam. Eu qui quas iuvaret accumsan, mel delicata sadipscing eu, 
                                                ei prima dicta neglegentur est. Stet aeque omnium at ius.
                                            </p>
                                        </Col>
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
                                                        {/* 1st Will */}
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
                        {/* About Section */}
                        <section className="section bg-secondary">
                            <Container className="pt-lg">
                                <Row className="row-grid align-items-center">
                                    {/* CardImg Object */}
                                    <Col md="6">
                                        <Card className="bg-default shadow border-0">
                                            {/* Picture */}
                                            <CardImg
                                                alt="..." 
                                                src={require("assets/img/people/rena_lauer.jpg")}
                                                top
                                            />
                                            {/* Caption */}
                                            <blockquote className="card-blockquote">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="svg-bg" preserveAspectRatio="none" viewBox="0 0 583 95">
                                                    <polygon className="fill-default" points="0,52 583,95 0,95"/>
                                                    <polygon className="fill-default" opacity=".2" points="0,42 583,95 683,0 0,95"/>
                                                </svg>
                                                <h4 className="display-3 font-weight-bold text-white">
                                                    Dr. Rena Lauer
                                                </h4>
                                                <p className="lead text-italic text-white">
                                                    Oregon State Univeristy
                                                </p>
                                                <p className="text-white">
                                                    Delicata sadipscing eu, ei prima dicta neglegentur est. 
                                                </p>
                                            </blockquote>
                                        </Card> 
                                    </Col>
                                    {/* Description to CardImg */}
                                    <Col md="6">
                                        <h3>Message from our Founder</h3>
                                        <p className="lead">
                                            Possim ancillae pro ex, aperiam admodum patrioque ius et. Et mea 
                                            putent causae intellegam, sed eu tation semper efficiendi. 
                                            Qui ad tempor molestiae, vix ei adhuc noster.
                                        </p>
                                        <p>
                                            Et graeco iracundia assueverit eam, et noluisse signiferumque nam. Eu qui quas iuvaret accumsan, 
                                            mel delicata sadipscing eu, ei prima dicta neglegentur est. Stet aeque omnium at ius. Ne cum simul 
                                            postulant maiestatis. Vix dicta persius ne. Hinc argumentum eum ex. 
                                        </p>
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