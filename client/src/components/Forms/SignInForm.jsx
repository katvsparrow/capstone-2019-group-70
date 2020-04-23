import React from "react";
import { withFirebase } from "../Firebase";

import * as ROUTES from "../../constants/routes";

import {
    Form, 
    FormGroup, 
    Input, 
    InputGroupAddon, 
    InputGroupText, 
    InputGroup,
    Button
} from "reactstrap";

// Define initial form fields as empty 
const INITIAL_STATE = {
    email: '', 
    password: '',
    error: null
};


class SignInForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE} ;
    }

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    onSubmit = event => {
        const {email, password } = this.state;
        
        // Attempt to sign in 
        this.props.firebase
            .doSignInWithEmailAndPassword(email, password)
            .then(() => {
                this.setState({ ...INITIAL_STATE});
                this.props.history.push(ROUTES.ACCOUNT);
            })
            .catch(error => {
                this.setState({ error });
            });
            
        event.preventDefault();
    };
    
    render() {
        const { email, password, error} = this.state
        
        // Check if input fields have been filled 
        const isInvalid = email === '' ||
                          password === '';

        return(
            <>
                <Form onSubmit={this.onSubmit}>
                    {/* Email */}
                    <FormGroup>
                        <InputGroup className="input-group-alternative mb-3">
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                    <i className="ni ni-email-83" />
                                </InputGroupText>
                            </InputGroupAddon>
                            <Input 
                                name="email"
                                value={email}
                                placeholder="Email" 
                                type="text" 
                                onChange={this.onChange}
                            />
                        </InputGroup>
                    </FormGroup>
                    
                    {/* Password */}
                    <FormGroup>
                        <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-lock-circle-open" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              name="password"
                              value={password}
                              placeholder="Password" 
                              type="password" 
                              onChange={this.onChange}
                              autoComplete="off"
                            />
                        </InputGroup>
                    </FormGroup>
                    
                    {/* Submit Form */}
                    <Button disabled={isInvalid} className="mt-4" color="primary" type="submit">
                        Login
                    </Button>

                    {/* Error message */}
                    {error && <p>{error.message}</p>}
                </Form>  
            </>
        );
    }
}

// Export with Firebase Context 
export default withFirebase(SignInForm);