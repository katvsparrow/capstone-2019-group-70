import React from "react";
import { getDateTimeString } from "utils";
import { Link } from "react-router-dom";

class ResultRow extends React.Component {
    render() {
        return(
            <tr>
                <Link to={'will/' + this.props.data['id']}>
                    <th scope="row">{this.props.data['title']}</th>
                </Link>
                <td>{getDateTimeString(this.props.data['date_of_publication'])}</td>
                <td>{this.props.data['city_name'] + ', ' + this.props.data['country_name'] }</td>
                <td>{this.props.data['language_name']}</td>
                <td>{this.props.data['archive_name']}</td>
            </tr>
        );
    }
};

export default ResultRow;
