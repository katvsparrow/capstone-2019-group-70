import React from "react";
import classnames from "classnames";

import {
    Button,
    Card, 
    CardBody, 
    FormGroup, 
    Input,
    InputGroup, 
    InputGroupAddon, 
    InputGroupText   
} from "reactstrap";


class ContactForm extends React.Component {
    state = {};
    render() {
        return(
            <Card className="bg-gradient-secondary shadow">
                <CardBody className="p-lg-5">
                    <h4 className="mb-1">Want to contact us?</h4>
                    <p className="mt-0">
                        Get in contact with our developers and founder.
                    </p>
                    <FormGroup
                        className={classnames("mt-5", {
                        focused: this.state.nameFocused
                        })}
                    >
                        <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                            <i className="ni ni-user-run" />
                            </InputGroupText>
                        </InputGroupAddon>
                        <Input
                            placeholder="Your name"
                            type="text"
                            onFocus={e => this.setState({ nameFocused: true })}
                            onBlur={e => this.setState({ nameFocused: false })}
                        />
                        </InputGroup>
                    </FormGroup>
                    <FormGroup
                        className={classnames({
                        focused: this.state.emailFocused
                        })}
                    >
                        <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                            <i className="ni ni-email-83" />
                            </InputGroupText>
                        </InputGroupAddon>
                        <Input
                            placeholder="Email address"
                            type="email"
                            onFocus={e => this.setState({ emailFocused: true })}
                            onBlur={e => this.setState({ emailFocused: false })}
                        />
                        </InputGroup>
                    </FormGroup>
                    <FormGroup className="mb-4">
                        <Input className="form-control-alternative" cols="80" name="name" placeholder="Type a message..." rows="4" type="textarea"/>
                    </FormGroup>
                    <div>
                        <Button block className="btn-round" color="default" size="lg" type="button"> 
                            Send Message
                        </Button>
                    </div>
                </CardBody>
            </Card>
        );
    }
}

export default ContactForm;