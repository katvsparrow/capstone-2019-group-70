import React from "react";

import {
    Label,
    Form,
    FormGroup, 
    Input, 
    InputGroup,
    InputGroupAddon,
    InputGroupText
} from "reactstrap";

import { withFirebase } from "contexts/Firebase";

class UpdateDisplayNameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { input: '' };
    }

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    onSubmit = event => {
        //const { displayName } = this.state; 
        // Perform update 
    }

    render() {
        //const { input } = this.state;
        
        //const isInvalid = input === '' ||
        //                  input !== this.props.displayName;
        //console.log(isInvalid);
        return (
            <Form onSubmit={this.onSubmit}>
                <FormGroup>
                    <Label htmlFor='displayname-input'>Change display name:</Label>
                    <InputGroup>
                        <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                                <i className="fas fa-pencil-alt"></i>
                            </InputGroupText>
                        </InputGroupAddon>
                        <Input id='displayname-input'placeholder={this.props.displayName} type="text" />
                    </InputGroup>
                </FormGroup>
            </Form>
        );
    }
}

export default withFirebase(UpdateDisplayNameForm);