import React from 'react';

import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const WillSubmitForm = (props) => {
    return (
        <Form>
            <FormGroup>
                <Label for="form-author">Author</Label>
                <Input type="text" name="author" id="form-author" />
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
                <Label for="form-country">Country of Origin</Label>
                <Input type="select" name="country" id="form-country">
                <option>Germany</option>
                <option>Israel</option>
                <option>Italy</option>
                <option>Spain</option>
                </Input>
            </FormGroup>
            <FormGroup>
                <Label for="form-language">Original Language</Label>
                <Input type="select" name="language" id="form-language">
                <option>English</option>
                <option>Latin</option>
                <option>Spanish</option>
                </Input>
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

export default WillSubmitForm;