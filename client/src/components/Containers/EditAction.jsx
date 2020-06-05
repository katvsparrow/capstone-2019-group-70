import React from "react";

class EditAction extends React.Component {
    constructor(props) {
        super(props);

        let id = this.props.targetContainer;
        let originalContainer = document.getElementById(id); 
        let style = 'width:100%; height: ' + originalContainer.clientHeight + 'px;';

        let editContainer = document.createElement('textarea');
        editContainer.style.cssText = style; 

        editContainer.appendChild(document.createTextNode(originalContainer.innerText)); 

        this.state = {
            editEnabled: false,
            text: originalContainer.innerText,
            orignal_container: originalContainer,
            edit_container: editContainer

        }
    }

    enableEdit = () => {
        let originalContainer = this.state.orignal_container; 
        originalContainer.innerHTML = "";
        originalContainer.appendChild(this.state.edit_container);
        
        // Show edit buttons 
        this.setState({ editEnabled: true });
    }

    submitEdit = () => {
        this.setState({ editEnabled: false });
    }

    cancelEdit = () => {
        let originalContainer = this.state.orignal_container;
        originalContainer.innerHTML = "";
        originalContainer.appendChild(document.createTextNode(this.state.text));

        // Return to non-edit state
        this.setState({ editEnabled: false });
    }
    
    render() {
        return(
            <span className ="edit-button">
                {this.state.editEnabled === false
                    ? <i onClick={this.enableEdit} className="fas fa-edit" />
                    : <>
                        <i onClick={this.submitEdit} className="fas fa-check pr-3 text-success" />
                        <i onClick={this.cancelEdit} className="fas fa-times text-danger" />
                    </>
                }
            </span>
        );
    }
}

export default EditAction;
