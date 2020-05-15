import React from 'react';

import WillAPI from "api/will";
import PageSpinner from "components/Containers/PageSpinner";
import * as Mock from "constants/placeholder";

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

/**
 * Returns message stating requested will is not in the database
 */
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

/**
 * Defines available action buttons on page
 */
const ActionButtons = () => {
    return (
        <div className='action-buttons'>
            <Button>
                <i className="far fa-heart fa-2x"></i>
            </Button>
            <Button>
                <i className="far fa-image fa-2x"></i>
            </Button>
            <Button>
                <i className="fas fa-eye fa-2x"></i>
            </Button>
            <Button>
                <i className="fas fa-flag fa-2x"></i>
            </Button>
        </div>
    )
}

/**
 * Renders all associated tags of rendered Will 
 * @param {json} tags 
 */
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

/**
 * Renders table full of information related to the rendered will 
 * @param {json} details 
 */
const DetailTable = ({details}) => {
    console.log(details);

    return (
        <Table borderless>
            <tbody>
                <tr>
                    <td>Language</td>
                    <td>{details.language_name}</td>
                </tr>
                <tr>
                    <td>Location Origin</td>
                    <td>
                        {details.city_name && 
                            details.city_name + ', '
                        }
                        {details.country_name &&
                            details.country_name
                        }
                    </td>
                </tr>
                <tr>
                    <td>Publication date</td>
                    <td>{details.date_of_publication}</td>
                </tr>
                <tr>
                    <td>Archive / Library</td>
                    <td>
                        {details.archive_name}
                    </td>
                </tr>
                <tr>
                    <td>Source Reference</td>
                    <td></td>
                </tr>
            </tbody>
        </Table>
    )
}

/**
 * Media view container for will 

const MediaView = () => {
    return (
        <>
        </>
    );
}
 */

const TextView = ({will}) => {
    console.log(will);
    return (
        <>
            <Col className="mr-1" lg='7'>
                {/* Original Text */}
                <Row>
                    <h4>Original Text</h4>
                </Row>
                <Row className="bg-secondary p-4 mb-3 transcript-container h-50">
                    {Mock.original_text}
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
                {/* Document Tags 
                <Row className="mt-3">
                    <TagCard />
                </Row>
                */}
                {/* Document Details */}
                <Row className="mt-3">
                    <DetailTable details={will}/>
                </Row>
            </Col>
        </>
    );
}

/**
 * Main container for Will content
 * @param {json} data
 */
class LoadedWill extends React.Component { 
    constructor(props){
        super(props); 
        this.will = this.props.data; 
    }

    render() {
        return(
            <section>
                <Container>
                    <Row className="mt-2 mb-2 border-bottom">
                        <h3>{this.will['title']}</h3>
                    </Row>
                    <Row className="mt-4">
                        <TextView will={this.will}/>
                    </Row>
                </Container>
            </section>
        );
    }
}


/**
 * Main Page for will
 */
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
        } else if(data.length === 0) {
            return <NoWillFound />
        } else {
            return <LoadedWill data={data[0]} />
        }
    }

    render() {
        return (
            <>
                <main href="main">
                    <div className="position-relative">
                        <section className="section bg-gradient-jww-primary pb-4" />
                        { this.renderType(this.state.will) }
                    </div>
                </main>
            </>
        );
    }
}


export default Will;
