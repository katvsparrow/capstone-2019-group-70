import React from "react";

import { 
    Table, 
} from "reactstrap";


const SavedWills = (props) => {
    return (
      <Table hover>
        <thead>
          <tr>
            <th></th>
            <th>Document title</th>
            <th>Date of publication</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
        <tr>
            <th scope="row">
                <i className="fas fa-heart"></i>
            </th>
            <td>Regina, Wife of Bondia Coras (or Cresques?): Puigcerdá 1306"</td>
            <td>23 October 1306</td>
            <td>Spain</td>
          </tr>
          <tr>
            <th scope="row">
                <i className="fas fa-heart"></i>
            </th>
            <td>Mock_Will_1</td>
            <td>08 July 1362</td>
            <td>Israel</td>
          </tr>
        </tbody>
      </Table>
    );
}

export default SavedWills;