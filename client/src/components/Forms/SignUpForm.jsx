import React from "react";
import { Formik } from "formik";
import { withFirebase } from "../../contexts/Firebase";
import * as EmailValidator from "email-validator";

import {
    Form,
    FormGroup,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Button
} from "reactstrap";

const SignUpForm = (context) => (
    <Formik
        initialValues = {{ email: "", passwordOne: "", username: "", passwordTwo:"" }}
        onSubmit={(values, { setSubmitting }) => {
            setSubmitting(true);
            context.firebase.doCreateUserWithEmailAndPassword(values.email, values.passwordOne, values.username);
        }}
        validate =  { values => {
                let errors = {};
                if(!values.email) {
                    errors.email = "Please enter an email address.";
                }
                
                else if (!EmailValidator.validate(values.email)) {
                    errors.email = " Invalid Email Address. Please enter a valid Email Address. "
                }
                
                // Validate passwords
                const int_password = /(?=.*[0-9])/
                const upper_case_password = /(?=.*[A-Z])/
                if ((!values.passwordOne) || (values.passwordOne < 8) || (!int_password.test(values.passwordOne)) || (!upper_case_password.test(values.passwordOne))){
                    errors.passwordOne ="Password must be 8 characters long including at least one digit [0-9] and one upper-case letter [A-Z]  ";
                }
                
                if(values.passwordOne !== values.passwordTwo){
                    errors.passwordTwo ="Password didn't matched. Please try agian"
                }
                
                return errors;
            }
        }
    >
        {
        props => {
            const {
                values, 
                touched, 
                errors, 
                isSubmitting, 
                handleChange, 
                handleBlur,
                handleSubmit
            } = props;
        
        return (
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                            <i className="fas fa-user" />
                        </InputGroupText>
                    </InputGroupAddon>
                    <Input
                        name="username"
                        value={values.username}
                        placeholder="Username"
                        type="text"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={errors.username && touched.username &&"error"}
                    />
                    {errors.username && touched.username && (
                        <div className="input-feedback text-danger"> {errors.username}</div>
                    )}
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
                        value={values.email}
                        placeholder="Email"
                        type="text"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={errors.email && touched.email &&"error"}
                    />
                </InputGroup>
                {errors.email && touched.email && (
                    <div>
                        <small className="form-text input-feedback text-danger">
                            {errors.email}
                        </small>
                    </div>
                )}

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
                        value={values.passwordOne}
                        placeholder="Password"
                        type="password"
                        onChange={handleChange}
                        autoComplete="off"
                        onBlur={handleBlur}
                        className={errors.passwordOne && touched.passwordOne &&"error"}
                    />
                </InputGroup>
                {errors.passwordOne && touched.passwordOne && (
                    <div>
                        <small className="form-text input-feedback text-danger">
                            {errors.passwordOne}
                        </small>
                    </div>
                )}
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
                            value={values.passwordTwo}
                            placeholder="Confirm Password"
                            type="password"
                            onChange={handleChange}
                            autoComplete="off"
                            onBlur={handleBlur}
                            className={errors.passwordTwo && touched.passwordTwo && "error"}
                        />
                    </InputGroup>
                    {errors.passwordTwo && touched.passwordTwo && (
                        <div>
                            <small className="form-text input-feedback text-danger">
                                {errors.passwordTwo}
                            </small>
                        </div>
                    )}
                </FormGroup>
                {/* Submit Form */}
                <Button disabled={isSubmitting} className="mt-4" color="primary" type="submit">
                    Create Account
                </Button>
            </Form>
        );    
    }}
    </Formik>
);

export default withFirebase(SignUpForm); 
