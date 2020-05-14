import React from "react";
import { Link } from "react-router-dom";
import { getDateTimeString } from "utils";

import * as Mock from "constants/placeholder";


import {
    ListGroupItem,
    ListGroupItemText,
    ListGroupItemHeading, 
    Badge
} from "reactstrap";

class Result extends React.Component {

    format_preview = (text) => {
        return "\"" + text.substring(0, 200) + "...\"";
    }

    render () {
        return (
            <ListGroupItem>
                    <ListGroupItemHeading>{this.props.data['title']}</ListGroupItemHeading>
                    <ListGroupItemText>{getDateTimeString(this.props.data['date_of_publication'])}</ListGroupItemText>
                    <ListGroupItemText className="font-italic">{this.format_preview(Mock.translated_text)}</ListGroupItemText>
                    <div className="will-context-badges">
                        <Badge color="primary">{this.props.data['location_name']}</Badge>
                        <Badge color="dark">{this.props.data['language_name']}</Badge>
                        <Badge color="info">{this.props.data['year']}</Badge>
                    </div>
            </ListGroupItem>
        )
    }
}

export default Result; 