import React from 'react';
import WillAPI from "api/will";
import UserAPI from "api/user";
import { getDateTimeString } from "utils";
import { UserInfoContext } from "contexts/Session";

import * as ROUTES from "constants/routes";

import PageSpinner from "components/Containers/PageSpinner";
import ModalDisplay from "components/Containers/ModalDisplay";
import WillView from "components/Media/WillView";
import WillContributeForm from "components/Forms/WillContributeForm";
import ActionButton from "components/Containers/ActionButton";
import RerouteButton from "components/Containers/RerouteButton";

import * as Mock from "constants/placeholder";
import * as Text from "constants/text";

import {
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
        this.userInfo = this.props.userInfo; 

        this.state = {
            'viewType': 'text',
            'isModalOpen': false, 
            'modalTitle': "",
            'modalBody': "",
            'modalSize': '',
            "favorited": false,
            'role': null
        };
    }

    // Toggle for modal display
    toggle = (e, title, body, size) => {
        this.setState({
            isModalOpen: !this.state.isModalOpen, 
            modalTitle: title, 
            modalBody: body,
            modalSize: size
        })
    }

    // Change view type of page 
    changeViewType = (e) => {
        this.state.viewType === 'text'
            ? this.setState({ 'viewType': 'media'})
            : this.setState({ 'viewType': 'text'});
    };

    componentDidMount() {
        if(this.props.userInfo && this.props.userInfo.favorited_wills) {
            let favorited = this.props.userInfo.favorited_wills
                                                    .split(',')
                                                    .map(Number)
                                                    .includes(this.will['id']);

            this.setState({
                'favorited': favorited, 
                'role': this.props.userInfo.Role
            });
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.userInfo && this.props.userInfo !== prevProps.userInfo) {
            // Check to see if the user has favorited the will 
            if(this.props.userInfo.favorited_wills) {
                let favorited = this.props.userInfo.favorited_wills
                                                    .split(',')
                                                    .map(Number)
                                                    .includes(this.will['id']);

                this.setState({
                    'favorited': favorited,
                    'role': this.props.userInfo.Role
                });
            }
            
        }
    }

    sendComment = (e) => {
        // If a user attempts to submit a comment without an account, prompt an error
        if(!this.props.userInfo) {
            this.toggle(
                e, 
                'You must be logged in to submit a comment.',
                <RerouteButton
                    route={ROUTES.LOGIN}
                    buttonLabel='Take me to login'
                />,
                'sm'
            );
            return; 
        }

        // Toggle the submit modal 
        this.toggle(
            e, 
            Text.WillSuggestionModalHeader  + this.will['title'],
            <WillContributeForm />,
            'lg'
        );
    }

    setFavorite = async(e) => { 
        // If a user attempts to favorite without an account, prompt an error
        if(!this.props.userInfo) {
            this.toggle(
                e, 
                'You must be logged in to save wills.',
                <RerouteButton
                    route={ROUTES.LOGIN}
                    buttonLabel='Take me to login'
                />,
                'sm'
            );
            return; 
        }

        if(this.state.favorited) {
            await UserAPI.removeFavorite(this.props.userInfo.id, this.will['id']); 
        } else {
            await UserAPI.addFavorite(this.props.userInfo.id, this.will['id']);
        }

        this.setState({
            'favorited': !this.state.favorited
        })
    }

    render() {
        return (
            <section>
                <Container>
                    <Row className="mt-2 mb-2 border-bottom">
                        <h3>{this.will['title']}</h3>
                    </Row>
                    <Row>
                        <div className='action-buttons'>
                            <ActionButton
                                iconClass= {this.state.favorited === true ? 'fas fa-heart fa-2x' : 'far fa-heart fa-2x' }
                                onClick={this.setFavorite}
                            />
                            {/*
                            <ActionButton 
                                iconClass='far fa-image fa-2x' 
                                active={this.state.viewType === 'media'} 
                                onClick={this.changeViewType}
                            />
                            */}
                            <ActionButton 
                                iconClass='fas fa-flag fa-2x' 
                                onClick={this.sendComment}  
                            />
                            <ModalDisplay 
                                toggle={this.toggle}
                                isModalOpen={this.state.isModalOpen}
                                modalTitle={this.state.modalTitle}
                                modalBody={this.state.modalBody}
                                modalSize={this.state.modalSize}
                            />
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
                    <RerouteButton 
                        route={ROUTES.HOME}
                        buttonLabel='Return Home'
                    />
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
            return (
                <UserInfoContext.Consumer> 
                    {
                        userInfo => <LoadedWill data={data[0]} userInfo={userInfo} />
                    }
                </UserInfoContext.Consumer>
            )
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
