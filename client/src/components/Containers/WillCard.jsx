import React from "react";
import { Link } from "react-router-dom";
import { formatPreview } from "../../utils";

import {
    Badge,
    Button,
    Card,
    CardBody,
} from "reactstrap";

import * as Mock from "../../constants/placeholder";

class WillCard extends React.Component {
    render() {
        return(
            <Card className="card-lift--hover shadow border-0">
                <CardBody className="py-6">
                    <h6 className="text-dark text-uppercase">
                        {this.props.data['title']}
                    </h6>
                    <p className="descption mt-3">
                        {formatPreview(Mock.original_text, 100)}
                    </p>
                    <div>
                        <Badge color="primary" pill className="mr-1">
                            {this.props.data['location_name']}
                        </Badge>
                        <Badge color="dark" pill className="mr-1">
                            {this.props.data['language_name']}
                        </Badge>
                        <Badge color="info" pill className="mr-1">
                            {this.props.data['year']}
                        </Badge>
                    </div>
                    <Link to={'/will/' + this.props.data['id']}>
                        <Button className="mt-4" color="dark">
                            Read Will
                        </Button>
                    </Link>
                </CardBody>
            </Card>
        );
    }
}

export default WillCard; 