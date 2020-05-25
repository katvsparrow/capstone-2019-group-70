import React from "react";
import * as Text from "constants/text";

import {
    Button,
    Form,
    FormGroup, 
    Input
} from "reactstrap";


const INITIAL_STATE = {
    suggestion: '', 
};

class WillContributeForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE }
    }

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    onSubmit = event => {
        event.preventDefault();
    }
    
    render() {
        const { suggestion } = this.state
        
        // Check if input fields have been filled 
        const isInvalid = suggestion === '';

        return(
            <>
                <p className="text-container">{Text.WillSuggestionModalBody}</p>
                <Form onSubmit={this.onSubmit}>
                    <FormGroup>
                        <Input 
                            type="textarea" 
                            className="modal-textarea" 
                            name="suggestion" 
                            value={ suggestion }
                            onChange = { this.onChange }
                        />
                    </FormGroup>
                    <Button disabled={isInvalid} className="mt-4" color="success">Submit</Button>
                </Form>
            </>
        );
    }
}

export default WillContributeForm; 