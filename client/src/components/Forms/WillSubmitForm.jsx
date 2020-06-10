import React from 'react';

import { 
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    Row,
    Col
} from 'reactstrap';

import WillAPI from "../../api/will.js";

const INITIAL_STATE = {
    title: '', 
    date: '', 
    original_text: '',
    translated_text: '',
    language: '',
    document_location: '',
    archive: '',
    archive_location: '',
    reference: ''
};

class WillSubmitForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {...INITIAL_STATE};
    }

    onSubmit = async(event) => {
        event.preventDefault();
        const payload = {...this.state};
        const res = await WillAPI.postNewDocument(payload);
        console.log(res);
        
        if(res) {
            this.setState({ ...INITIAL_STATE});
        }
    }

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        const {
            title, date, original_text,
            translated_text, language, document_location, reference, 
            archive, archive_location
        } = this.state;

        return (
            <Form className="p-3 will-submit-form" onSubmit={this.onSubmit}>
                <Row form>
                    <Col md={9}>
                        <FormGroup>
                            <Label for="form-title">Document Title</Label>
                            <Input type="text" name="title" id="form-author" value={title} onChange={this.onChange}/>
                        </FormGroup>
                    </Col>
                    <Col md={3}>
                        <FormGroup>
                            <Label for="exampleDate">Date of Publication</Label>
                            <Input type="date" name="date" id="date" placeholder="date placeholder" value={date} onChange={this.onChange}/>
                        </FormGroup>
                    </Col>
                </Row>
                <Row form>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="form-language">Original Language</Label>
                            <Input type="text" name="language" id="form-language" value={language} onChange={this.onChange} />
                        </FormGroup>
                             
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="form-document-location">Document: Location of Origin</Label>
                            <Input type="text" name="document_location" id="form-document-location" value={document_location} onChange={this.onChange} />
                        </FormGroup>   
                    </Col>
                </Row>
                <Row form>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="form-archive">Archive / Library name</Label>
                            <Input type="text" name="archive" id="form-archive" value={archive} onChange={this.onChange} />
                        </FormGroup>      
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="form-archive-location">Archive: Location of Origin</Label>
                            <Input type="text" name="archive_location" id="form-archive-location" value={archive_location} onChange={this.onChange} />
                        </FormGroup>
                    </Col>
                </Row>
                <FormGroup>
                    <Label for="form-reference">Reference</Label>
                    <Input type="text" name="reference" id="form-reference" value={reference} onChange={this.onChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="form-original-text">Original Text</Label>
                    <Input cols="80" rows="5" type="textarea" name="original_text" id="form-original-text" value={original_text} onChange={this.onChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="form-translated-text">Translated Text (English)</Label>
                    <Input cols="80" rows="5" type="textarea" name="translated_text" id="form-translated-text" value={translated_text} onChange={this.onChange} />
                </FormGroup>
                <Button className="btn btn-success btn-lg btn-block">Submit</Button>
            </Form>
        )
    }
}

export default WillSubmitForm;