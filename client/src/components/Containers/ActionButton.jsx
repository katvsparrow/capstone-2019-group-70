import React from "react";
import { Button } from "reactstrap";

class ActionButton extends React.Component {
    render() {
        const { iconClass, onClick, active } = this.props; 

        return (
            <Button onClick={ onClick } active={ active }>
                {iconClass && <i className={ iconClass } />}
            </Button>
        );
    }
}

export default ActionButton;