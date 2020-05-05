import React from "react";
import { withFirebase } from "../../contexts/Firebase";

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
    username: '', 
    email: '', 
    passwordOne: '',
    passwordTwo: '',
    error: null
};


class SignUpForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE} ;
    }

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    onSubmit = event => {
        const {username, email, passwordOne } = this.state;
        
        // Attempt to create a user with an email and password
        this.props.firebase
            .doCreateUserWithEmailAndPassword(email, passwordOne)
            .then(authUser => {
                this.setState({ ...INITIAL_STATE});
            })
            .catch(error => {
                this.setState({ error });
            });

        event.preventDefault();
    };

    checkInput = () => {
        // Return false if password
        // less than 6 chars, does not contain one captial / one lowercase etc...

        return email === '' ||
        username === '' ||
        passwordOne === '' ||
        passwordOne !== passwordTwo;
    };
    
    render() {
        const {
            username,
            email,
            passwordOne,
            passwordTwo,
            error,
        } = this.state
        
        // Check if input fields have been filled 
        const isInvalid = this.checkInput;
                          
        return(
            <>
                <Form onSubmit={this.onSubmit}>
                    {/* Username */}
                    <FormGroup>
                        <InputGroup className="input-group-alternative mb-3">
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                    <i className="ni ni-hat-3" />
                                </InputGroupText>
                            </InputGroupAddon>
                            <Input 
                                name="username"
                                value={username}
                                placeholder="Username" 
                                type="text" 
                                onChange={this.onChange}
                            />
                        </InputGroup>
                    </FormGroup>

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
                              name="passwordOne"
                              value={passwordOne}
                              placeholder="Password" 
                              type="password" 
                              onChange={this.onChange}
                              autoComplete="off"
                            />
                        </InputGroup>
                    </FormGroup>
                
                    {/* Password Confirm */}
                    <FormGroup>
                        <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-lock-circle-open" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              name="passwordTwo"
                              value={passwordTwo}
                              placeholder="Confirm Password" 
                              type="password" 
                              onChange={this.onChange}
                              autoComplete="off"
                            />
                        </InputGroup>
                    </FormGroup>

                    {/* Submit Form */}
                    <Button disabled={isInvalid} className="mt-4" color="primary" type="submit">
                        Create Account
                    </Button>

                    {/* Error message */}
                    {error && <p>{error.message}</p>}
                </Form>  
            </>
        );
    }
}

// Export with Firebase Context 
export default withFirebase(SignUpForm);