// Higher Order Component (HOC) - A component that renders another component

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            { props.isAdmin && <p>This is private info</p> }
            <WrappedComponent {...props}/>
        </div>
    );
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            { props.isAuthenticated ? (<WrappedComponent {...props}/>) : (<p>Please log in to see the content</p>) }
        </div>
    );
};

const AdminInfo = withAdminWarning(Info);
const AuthenInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info="this is info"/>, document.getElementById('app'));
ReactDOM.render(<AuthenInfo isAuthenticated={false} info="this is info"/>, document.getElementById('app'));