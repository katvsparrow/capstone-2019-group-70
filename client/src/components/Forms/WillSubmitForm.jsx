import React from 'react';

import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import WillAPI from "../../api/will.js";

const INITIAL_STATE = {
    title: '', 
    date: '', 
    original_text: '',
    translated_text: '',
    language: '',
    document_city: '',
    document_country: '',
    archive: '',
    archive_city: '',
    archive_country: ''
};

class WillSubmitForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {...INITIAL_STATE};
    }

    onSubmit = async(event) => {
        console.log("STARTING SUBMIT");
        event.preventDefault();
        const payload = {...this.state};
        const res = await WillAPI.postNewDocument(payload);
        console.log(res);
    }

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        const {
            title, date, original_text,
            translated_text, language, document_city,
            document_country, archive, archive_city, archive_country
        } = this.state;

        return (
            <Form onSubmit={this.onSubmit}>
                <FormGroup>
                    <Label for="form-title">Document Title</Label>
                    <Input type="text" name="title" id="form-author" value={title} onChange={this.onChange}/>
                </FormGroup>
                <FormGroup>
                <Label for="exampleDate">Date of Publication</Label>
                    <Input type="date" name="date" id="date" placeholder="date placeholder" value={date} onChange={this.onChange}/>
                </FormGroup>
                <FormGroup>
                    <Label for="form-original-text">Original Text</Label>
                    <Input cols="80" rows="5" type="textarea" name="original_text" id="form-original-text" value={original_text} onChange={this.onChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="form-translated-text">Translated Text (English)</Label>
                    <Input cols="80" rows="5" type="textarea" name="translated_text" id="form-translated-text" value={translated_text} onChange={this.onChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="form-language">Original Language</Label>
                    <Input type="text" name="language" id="form-language" value={language} onChange={this.onChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="form-document-city">Document: City of Origin</Label>
                    <Input type="text" name="document_city" id="form-document-city" value={document_city} onChange={this.onChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="form-document-country">Document: Country of Origin</Label>
                    <Input type="text" name="document_country" id="form-document-country" value={document_country} onChange={this.onChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="form-archive">Archive / Library name</Label>
                    <Input type="text" name="archive" id="form-archive" value={archive} onChange={this.onChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="form-archive-city">Archive: City of Origin</Label>
                    <Input type="text" name="archive_city" id="form-archive-city" value={archive_city} onChange={this.onChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="form-archive-country">Archive: Country of Origin</Label>
                    <Input type="text" name="archive_country" id="form-archive-country" value={archive_country} onChange={this.onChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="form-will-image">Will Image</Label>
                    <Input type="file" name="will_image" id="form-will-image" />
                    <FormText color="muted">
                        File must be less than: <b>10MB</b> <br />
                        Allowed File Type: <b>PNG</b>
                    </FormText>
                </FormGroup>
                <Button className="btn btn-success btn-lg btn-block">Submit For Approval</Button>
            </Form>
        )
    }
}

export default WillSubmitForm;