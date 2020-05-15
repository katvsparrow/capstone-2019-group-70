import React, { useState } from "react";

import {
    Button, 
    Modal, 
    ModalHeader, 
    ModalBody,
    ModalFooter
} from "reactstrap";


const ModalDisplay = (props) => {
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <div>
            <Modal id={props.modalId} toggle={toggle}>
                <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                <ModalBody>
                    {props.modalBody}
                </ModalBody>
            </Modal>
        </div>
    );
}

export default ModalDisplay; 
