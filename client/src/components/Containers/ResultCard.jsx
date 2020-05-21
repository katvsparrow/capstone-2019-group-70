import React from "react";
//import { Link } from "react-router-dom";
import { getDateTimeString, formatPreview } from "utils";

import * as Mock from "constants/placeholder";


import {
    ListGroupItem,
    ListGroupItemText,
    ListGroupItemHeading, 
    Badge
} from "reactstrap";

class ResultCard extends React.Component {
    render () {
        return (
            <ListGroupItem>
                    <i className="favorite-icon far fa-heart fa-2x" aria-hidden="true" />
                    <ListGroupItemHeading>{this.props.data['title']}</ListGroupItemHeading>
                    <ListGroupItemText>{getDateTimeString(this.props.data['date_of_publication'])}</ListGroupItemText>
                    <ListGroupItemText className="text-dark font-italic">{formatPreview(Mock.translated_text, 200)}</ListGroupItemText>
                    <div className="will-context-badges">
                        <Badge color="primary">{this.props.data['location_name']}</Badge>
                        <Badge color="dark">{this.props.data['language_name']}</Badge>
                        <Badge color="info">{this.props.data['year']}</Badge>
                    </div>
            </ListGroupItem>
        )
    }
}

export default ResultCard; 