import React from 'react';

import WillView from "components/Media/WillView.jsx";
import WillAPI from "api/will.js";

import {
    Container,
    Row, 
    Table 
} from 'reactstrap';


const LoadedWill = (data) => {
    let will = data.will;
    console.log(will);
    return (
        <>
            <section className="section section-lg bg-dark text-white">
                <Container>
                    {/* Title */}
                    <Row>{will['title']}</Row>
                    <Row>
                        <WillView />
                    </Row>
                </Container>
            </section>
            <section className="section">
                <Container>
                    <Row>
                        <h2>Document Details</h2>
                    </Row>
                    <Row className="bg-secondary">
                        <TableView {...will}/>
                    </Row>
                    <Row className="mt-3">
                        <h2>Original Text</h2>
                    </Row>
                    <Row className="bg-secondary p-4">{will['original_text']}</Row>
                    <Row className="mt-3">
                        <h2>Translated Text</h2>
                    </Row>
                    <Row className="bg-secondary p-4">{will['translated_text']}</Row>
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
        will : null
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
            // spinner
            return null;
        } 
        else if(data.length === 0) {
            // no will found
            return null;
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
                        {this.renderType(this.state.will) }
                    </div>
                </main>
            </>
        );
    }
}


export default Will;