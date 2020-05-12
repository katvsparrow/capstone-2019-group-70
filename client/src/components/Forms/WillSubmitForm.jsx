import React from 'react';

import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import WillAPI from "../../api/will.js";


class WillSubmitForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    onSubmit = event => {
        console.log(event);
        event.preventDefault();
    }

    render() {
        return (
            <Form onSubmit={this.onSubmit}>
                <FormGroup>
                    <Label for="form-title">Document Title</Label>
                    <Input type="text" name="title" id="form-author" />
                </FormGroup>
                <FormGroup>
                <Label for="exampleDate">Date of Publication</Label>
                    <Input type="date" name="date" id="date" placeholder="date placeholder" />
                </FormGroup>
                <FormGroup>
                    <Label for="form-original-text">Original Text</Label>
                    <Input cols="80" rows="5" type="textarea" name="original-text" id="form-original-text" />
                </FormGroup>
                <FormGroup>
                    <Label for="form-translated-text">Translated Text (English)</Label>
                    <Input cols="80" rows="5" type="textarea" name="translated-text" id="form-translated-text" />
                </FormGroup>
                <FormGroup>
                    <Label for="form-language">Original Language</Label>
                    <Input type="text" name="language" id="form-language" />
                </FormGroup>
                <FormGroup>
                    <Label for="form-document-city">Document: City of Origin</Label>
                    <Input type="text" name="document-city" id="form-document-city" />
                </FormGroup>
                <FormGroup>
                    <Label for="form-document-country">Document: Country of Origin</Label>
                    <Input type="text" name="document-country" id="form-document-country" />
                </FormGroup>
                <FormGroup>
                    <Label for="form-archive-city">Archive: City of Origin</Label>
                    <Input type="text" name="archive-city" id="form-archive-city" />
                </FormGroup>
                <FormGroup>
                    <Label for="form-archive-country">Archive: country of Origin</Label>
                    <Input type="text" name="archive-country" id="form-archive-country" />
                </FormGroup>
                <FormGroup>
                    <Label for="form-will-image">Will Image</Label>
                    <Input type="file" name="will-image" id="form-will-image" />
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