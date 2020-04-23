import React from "react";


import {
    ListGroupItem,
    ListGroupItemText,
    ListGroupItemHeading, 
    Badge
} from "reactstrap";

class Result extends React.Component {
    constructor(props) {
        super(props);
    }


    format_preview = (text) => {
        return "\"" + text.substring(0, 200) + "...\"";
    }

    render () {
        return (
            <ListGroupItem>
                <ListGroupItemHeading tag="a" href="/willexample">{this.props.data['document_title']}</ListGroupItemHeading>
                    <ListGroupItemText>{this.props.data['date_of_publication']}</ListGroupItemText>
                    <ListGroupItemText className="font-italic">{this.format_preview(this.props.data['translated_text'])}</ListGroupItemText>
                    <div className="will-context-badges">
                        <Badge color="primary">{this.props.data['location']}</Badge>
                        <Badge color="dark">{this.props.data['original_language']}</Badge>
                        <Badge color="info">{this.props.data['year_of_publication']}</Badge>
                    </div>
            </ListGroupItem>
        )
    }
}

export default Result; 