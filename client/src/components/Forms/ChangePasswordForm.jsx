import React from "react";
import { Formik } from "formik";
import {
    Form,
    FormGroup,
    Input,
    Button
} from "reactstrap";

const ChangePasswordForm = (context) => (


  <Formik
      initialValues = {{ current_password: "" , new_password: "",confirm_new_password: "" }}
      onSubmit={(values, { setSubmitting }) => {

        console.log("Password changed");

      }}
      validate = { values => {

          let errors = {};

          const int_password = /(?=.*[0-9])/
          const upper_case_password = /(?=.*[A-Z])/
          if ((!values.new_password) || (values.new_password < 8) || (!int_password.test(values.new_password)) || (!upper_case_password.test(values.new_password))){
              errors.new_password ="Password must be 8 characters long including at least one digit [0-9] and one upper-case letter [A-Z]  ";
          }

          if(values.new_password !== values.confirm_new_password){
              errors.confirm_new_password ="Password didn't matched. Please try agian"
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
                    {/* Current password */}
                    <FormGroup>
                        <label for="current-password-input">Enter old password</label>
                        <Input
                            name="current_password"
                            id="current-password-input"
                            value={values.current_password}
                            placeholder="Current password"
                            type="password"
                            onChange={handleChange}
                        />
                    </FormGroup>

                    {/* New Password */}
                    <FormGroup>
                        <label for="new-password-input">Enter new password</label>
                        <Input
                            name="new_password"
                            id="new-password-input"
                            value={values.new_password}
                            placeholder="New password"
                            type="password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={errors.new_password && touched.new_password &&"error"}
                        />
                        {errors.new_password && touched.new_password && (
                            <div>
                                <small className="form-text input-feedback text-danger">
                                    {errors.new_password}
                                </small>
                            </div>
                        )}
                    </FormGroup>

                    <FormGroup>
                        <label for="confirm-new-password-input">Enter new password</label>
                            <Input
                                name="confirm_new_password"
                                id="confirm-new-password-input"
                                value={values.confirm_new_password}
                                placeholder="Confirm password"
                                type="password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={errors.confirm_new_password && touched.confirm_new_password &&"error"}
                            />

                            {errors.confirm_new_password && touched.confirm_new_password && (
                                <div>
                                    <small className="form-text input-feedback text-danger">
                                        {errors.confirm_new_password}
                                    </small>
                                </div>
                            )}
                    </FormGroup>

                    {/* Submit Form */}
                    <Button className="mt-4" color="primary" type="submit">
                        Change password
                    </Button>

                    </Form>

                  );
                }}
                </Formik>
              );
              export default ChangePasswordForm;
