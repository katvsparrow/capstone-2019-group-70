import React from 'react';


// Create a context provide a Firebase instance only once
// This will be provided at the top-level (Browser-Router)
const FirebaseContext = React.createContext(null);


// Create a higher-order component wrapper for firebase
export const withFirebase = Component => props => (
    <FirebaseContext.Consumer>
        {firebase => <Component {... props} firebase={firebase} />}
    </FirebaseContext.Consumer>
);

export default FirebaseContext; 