import React from "react";

import EditAction from "components/Containers/EditAction";

import { 
    Card,
    CardHeader,
    CardBody
} from "reactstrap";

class TextCard extends React.Component { 
    render() {
        console.log(this.props)
        return (
            <Card>
                <CardHeader tag="h4">
                    {this.props.header}
                    {/*this.props.enableEdit &&
                        <EditAction
                            targetContainer={this.props.targetContainer}
                        />
                    */}
                </CardHeader>
                <CardBody id={this.props.targetContainer} className="bg-secondary transcript-container">
                    {this.props.bodyText}
                </CardBody>
            </Card>
        );
    }
}

export default TextCard;