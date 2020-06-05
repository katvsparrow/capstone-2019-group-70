import React from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap"

class RerouteButton extends React.Component {
    render() {
        return(
            <Link to={this.props.route}>
                <Button className="bg-gradient-jww-primary text-white">
                    {this.props.buttonLabel}
                </Button>
            </Link> 
        );
    }
}

export default RerouteButton;