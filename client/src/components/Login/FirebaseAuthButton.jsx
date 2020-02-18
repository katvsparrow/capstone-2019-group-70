/*
 * Filename: FirebaseAuth.jsx
 * Description: Component for login box 
*/

import React, { useState } from 'react';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import { Button, Modal, ModalHeader, ModalBody, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const SignInModal = (props) => {
    const {
        className
    } = props; 

    const [modal, setModal] = useState(modal);
    const toggle = () => setModal(!modal);

    return (
        <div>
            <Button className="btn-neutral btn-icon" color="default" onClick={toggle}>
                <span className="btn-inner--icon">
                    <i className="fa fa-user-circle" />
                </span>
                <span className="nav-link-inner--text ml-1">
                    Login / Register 
                </span>
            </Button>
            <Modal isOpen={modal} toggle={toggle} className={className} centered>
                <ModalHeader toggle={toggle} />
                <ModalBody>
                    <p className="text-center">Log in to save or upload documents</p>
                    {props.StyledAuth}
                </ModalBody>
            </Modal>
        </div>
    )
}

const UserActions = (props) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState)

    return (
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle caret>
                {"Hello, " + props.user['displayName'].split(' ')[0]}
            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem href="/account">Account</DropdownItem>
                {props.logoutItem}
            </DropdownMenu>
        </Dropdown> 
    )
}

firebase.initializeApp({
    apiKey: "AIzaSyC9_SoW5PlblCdcL7286w9Zvy2aUsxJzHU",
    authDomain: "jewish-womens-wills.firebaseapp.com"
});

class FirebaseAuthButton extends React.Component {
    // initialize sign in variable to false 
    state = {isSignedIn: false, user: null}

    // set UI configurations 
    uiConfig = {
        signInFlow: "popup", 
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID
        ], 
        callbacks: {
            signInSuccessWithAuthResult: () => false
        }   
    }

    componentDidMount = () => {
        firebase.auth().onAuthStateChanged(user => {
            this.setState({isSignedIn: user != null})
            this.setState({user: user})
            //console.log(user);
        })
    }

    render () {
        return (
            <div>
                {this.state.isSignedIn && this.state.user ? (
                    // display user drop down 
                    <UserActions 
                        user={this.state.user} 
                        logoutItem={
                            <DropdownItem onClick={() => firebase.auth().signOut()}>Sign Out</DropdownItem>
                        }
                    />
                ) : (
                    <SignInModal StyledAuth = {
                        <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()} /> 
                    } />
                )}
            </div>
        )
    }
}

export default FirebaseAuthButton;  