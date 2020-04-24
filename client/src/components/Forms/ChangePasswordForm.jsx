import React from "react";

import {
    Form, 
    FormGroup, 
    Input,
    Button
} from "reactstrap";

// Define initial form fields as empty 
const INITIAL_STATE = {
    current_password: '', 
    new_password: '',
    confirm_new_password: null
};

class ChangePasswordForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE} ;
    }

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };
    
    render() {
        const { current_password, new_password, confirm_new_password, error} = this.state
        
        // Check if input fields have been filled 
        const isInvalid = current_password === '' ||
                          new_password === '' ||
                          new_password !== confirm_new_password;

        return(
            <Form onSubmit={this.onSubmit}>
                {/* Current password */}
                <FormGroup>
                    <label for="current-password-input">Enter old password</label>
                    <Input 
                        name="current_password"
                        id="current-password-input"
                        value={current_password}
                        placeholder="Current password" 
                        type="password" 
                        onChange={this.onChange}
                    />
                </FormGroup>
                
                {/* New Password */}
                <FormGroup>
                    <label for="new-password-input">Enter new password</label>
                    <Input 
                        name="new_password"
                        id="new-password-input"
                        value={new_password}
                        placeholder="New password" 
                        type="password" 
                        onChange={this.onChange}
                    />
                </FormGroup>
                
                <FormGroup>
                    <label for="confirm-new-password-input">Enter new password</label>
                        <Input 
                            name="confirm_new_password"
                            id="confirm-new-password-input"
                            value={confirm_new_password}
                            placeholder="Confirm password" 
                            type="password" 
                            onChange={this.onChange}
                        />
                </FormGroup>
                
                {/* Submit Form */}
                <Button disabled={isInvalid} className="mt-4" color="primary" type="submit">
                    Change password
                </Button>

                {/* Error message */}
                {error && <p>{error.message}</p>}
            </Form>    
        );
    }
}

export default ChangePasswordForm; 