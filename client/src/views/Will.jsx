import React from 'react';

import WillView from "components/Media/WillView.jsx";
import WillAPI from "api/will.js";
import PageSpinner from "components/Containers/PageSpinner.jsx";

import {
    Button,
    Col,
    Jumbotron,
    Container,
    Row, 
    Table,
    Card,
    CardHeader, 
    CardBody
} from 'reactstrap';

// Will not found content 
const NoWillFound = () => {
    return (
        <>
        <Container className="mt-md mb-md pt-lg pb-lg">
            <Row className="justify-content-center">
                <Jumbotron>
                    <h1 className="display-3">Oops!</h1>
                    <p>No records found for requested will</p>
                </Jumbotron>
            </Row>
        </Container>    
        </>
    )
}

// Will page components 
const ActionButtons = () => {
    return (
        <div className='action-buttons'>
            <Button>
                <i class="far fa-heart fa-2x"></i>
            </Button>
            <Button>
                <i class="far fa-image fa-2x"></i>
            </Button>
            <Button>
                <i class="fas fa-eye fa-2x"></i>
            </Button>
            <Button>
                <i class="fas fa-flag fa-2x"></i>
            </Button>
        </div>
    )
}

const TagCard = (tags) => {
    console.log(tags);

    return (
        <Card className="w-100">
            <CardHeader className="text-center">Associated Tags</CardHeader>
            <CardBody>
                
            </CardBody>
        </Card>
    );
}

const DetailTable = (details) => {
    console.log(details);

    return (
        <Table borderless>
            <tr>
                <td>Publication date</td>
                <td></td>
            </tr>
            <tr>
                <td>Location Origin</td>
                <td></td>
            </tr>
            <tr>
                <td>Archive / Library</td>
                <td></td>
            </tr>
            <tr>
                <td>Source Reference</td>
                <td></td>
            </tr>
        </Table>
    )
}


const LoadedWill = (data) => {
    let will = data.will;
    console.log(will);
    return (
        <>
            <section>
                <Container>
                    <Row className="mt-2 mb-2 border-bottom">
                        <h3>{will['title']}</h3>
                    </Row>
                    <Row className="mt-4">
                        <Col className="mr-1" lg="7">
                            {/* Original Text */}
                            <Row>
                                <h4>Original Text</h4>
                            </Row>
                            <Row className="bg-secondary p-4 mb-3 transcript-container h-50">
                                {will['original_text']}
                            </Row>
                            <Row>
                                <h4>Translated Text</h4>
                            </Row>
                        </Col>
                        <Col className="ml-5" lg="4">
                            {/* Action buttons */ }
                            <Row className="action-buttons">
                                <ActionButtons />
                            </Row>
                            {/* Document Tags */}
                            <Row className="mt-3">
                                <TagCard />
                            </Row>
                            {/* Document Details */}
                            <Row className="mt-3">
                                <DetailTable />
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}

const TableView = (data) => {
    return (
        <Table borderless>
            <tbody>
                <tr>
                    <th scope="row">Year of Publication</th>
                    <td>{data.year}</td>
                </tr>
                <tr>
                    <th scope="row">City of Publication</th>
                    <td>{data.city_name}</td>
                </tr>
                <tr>
                    <th scope="row">Country of Publication</th>
                    <td>{data.country_name}</td>
                </tr>
                <tr>
                    <th scope="row">Original Language</th>
                    <td>{data.language_name}</td>
                </tr>
                <tr>
                    <th scope="row">Upload Date</th>
                    <td>{data.upload_date}</td>
                </tr>
                <tr>
                    <th scope="row">Original Submitter</th>
                    <td>{data.author}</td>
                </tr>
            </tbody>
        </Table>
    );
}

class Will extends React.Component {
    state = {
        will : null, 
    }
    
    componentDidMount() {
        let id = this.props.match.params.id;
        this.getWillData(id);
    }

    getWillData = async (id) => {
        const res = await WillAPI.getDocumentByID(id);
        this.setState({ will: res });
    }

    renderType = (data) =>  {
        if(data === null) {
            return <PageSpinner />
        } 
        else if(data.length === 0) {
            // no will found
            return <NoWillFound />
        }

        else {
            return <LoadedWill will={data[0]} />
        }
    }

    render() {
        return (
            <>
                <main href="main">
                    <div className="position-relative">
                        <section className="section bg-dark text-white pb-3 mb-3" />
                        {this.renderType(this.state.will) }
                    </div>
                </main>
            </>
        );
    }
}


export default Will;