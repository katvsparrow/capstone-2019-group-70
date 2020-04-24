import React from 'react';

import {InputGroup, Input} from 'reactstrap';

class HomeSearch extends React.Component {
    render() {
        return(
            <>
                <InputGroup size="lg">
                    <Input disabled/>
                </InputGroup>
            </>
        );
    }
}

export default HomeSearch;