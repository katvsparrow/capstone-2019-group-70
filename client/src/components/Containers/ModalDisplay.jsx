import React from "react";

import {
    Modal, 
    ModalHeader, 
    ModalBody,
} from "reactstrap";


const ModalDisplay = (props) => {
    return (
        <Modal size="lg" isOpen={props.isModalOpen} toggle={props.toggle}>
            <ModalHeader toggle={props.toggle}>
                { props.modalTitle }
            </ModalHeader>
            <ModalBody>
                { props.modalBody }
            </ModalBody>
        </Modal>
    );
}

export default ModalDisplay; 
