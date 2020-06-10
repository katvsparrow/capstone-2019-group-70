import React from "react";
import { getDateTimeString } from "utils";
import { Link } from "react-router-dom";

class ResultRow extends React.Component {
    render() {
        return(
            <tr>
                <th scope="row">
                    <Link to={'will/' + this.props.data['id']}>
                        {this.props.data['title']}
                    </Link>
                </th>
                <td>{getDateTimeString(this.props.data['date_of_publication'])}</td>
                <td>{this.props.data['location_name'] }</td>
                <td>{this.props.data['archive_name']}</td>
            </tr>
        );
    }
};

export default ResultRow;
