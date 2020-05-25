import React from 'react';
import WillAPI from "api/will";
import { getDateTimeString } from "utils";

import { Link } from "react-router-dom";
import * as ROUTES from "constants/routes";

import PageSpinner from "components/Containers/PageSpinner";
import ModalDisplay from "components/Containers/ModalDisplay";
import WillView from "components/Media/WillView";
import ActionButton from "components/Containers/ActionButton";

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
 * Renders table full of information related to the rendered will 
 * @param {json} details 
 */
const DetailTable = ({details}) => {
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
                    <td>{getDateTimeString(details.date_of_publication)}</td>
                </tr>
                <tr>
                    <td>Archive / Library</td>
                    <td>
                        {details.archive_name}
                    </td>
                </tr>
                <tr>
                    <td>Source Reference</td>
                    <td>{details.reference}</td>
                </tr>
            </tbody>
        </Table>
    )
}


/**
 * Media view container for will 
 */
const MediaView = ({will}) => {
    return (
        <>
            <Col md="7">
                <WillView />
            </Col>
            <Col md="5">
                <Card>
                    <CardHeader tag="h4">Original Text</CardHeader>
                    <CardBody className="bg-secondary transcript-container">
                        {Mock.original_text}
                    </CardBody>
                </Card>
                <Card className="mt-4">
                    <CardHeader tag="h4">Translated Text</CardHeader>
                    <CardBody className="bg-secondary transcript-container">
                        {Mock.translated_text}
                    </CardBody>  
                </Card>
            </Col>
            <Row className="mt-3">
                <h4>Document Information</h4>
                <DetailTable details={will}/>
            </Row>
        </>
    );
}


const TextView = ({will}) => {
    return (
        <>
            <Col md='8' className='my-4'>
                {/* Original Text */}
                <Card>
                    <CardHeader tag="h4">Original Text</CardHeader>
                    <CardBody className="bg-secondary transcript-container">
                        {Mock.original_text}
                    </CardBody>
                </Card>
                <Card className="mt-4">
                    <CardHeader tag="h4">Translated Text</CardHeader>
                    <CardBody className="bg-secondary transcript-container">
                        {Mock.translated_text}
                    </CardBody>  
                </Card>
            </Col>
            <Col md='4' className='my-4'>
                {/* Document Details */}
                <DetailTable details={will}/>
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
        
        this.state = {
            'viewType': 'text'
        };
    }

    /* Change view type depending on active class */ 
    changeViewType = (e) => {
        this.state.viewType === 'text'
            ? this.setState({ 'viewType': 'media'})
            : this.setState({ 'viewType': 'text'});
    };

    suggestChange = () => {
        
    }

    render() {
        return(
            <section>
                <Container>
                    <Row className="mt-2 mb-2 border-bottom">
                        <h3>{this.will['title']}</h3>
                    </Row>
                    <Row>
                        <div className='action-buttons'>
                            <ActionButton 
                                iconClass='far fa-heart fa-2x'/>
                            <ActionButton 
                                iconClass='far fa-image fa-2x' 
                                active={this.state.viewType === 'media'} 
                                onClick={this.changeViewType}
                            />
                            <ActionButton 
                                iconClass='fas fa-flag fa-2x' 
                                onClick={this.suggestChange}    
                            />
                            <ModalDisplay />
                        </div>
                    </Row>
                    <Row className="mt-4">
                        {this.state.viewType === 'text'
                            ? <TextView will={this.will} />
                            : <MediaView will={this.will} />
                        }
                    </Row>
                </Container>
            </section>
        );
    }
}


/**
 * Returns message stating requested will is not in the database
 */
const NoWillFound = () => {
    return (
        <>
        <Container className="my-lg py-lg">
            <Row className="justify-content-center">
                <Jumbotron className="text-dark">
                    <h1 className="display-3">Oops!</h1>
                    <p>No will found with the requested id</p>
                    <Link to={ROUTES.HOME}>
                        <Button className="bg-gradient-jww-primary text-white">
                            Return Home 
                        </Button>
                    </Link>
                </Jumbotron>
            </Row>
        </Container>    
        </>
    )
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
