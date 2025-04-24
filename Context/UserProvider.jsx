import { useState } from 'react';
import PropTypes from 'prop-types';
import { UserContext } from './UserContext'; // Import the context

export function UserProvider({ children }) {
    const [userEmail, setUserEmail] = useState(null);
    const [isAdmin,setIsAdmin] = useState(false)
    const [redirect,setRedirect] = useState(false)
    // const [postStatus,setPostStatus] = useState('pending')

    return (
        <UserContext.Provider value={{ userEmail, setUserEmail, isAdmin, setIsAdmin, redirect, setRedirect}}>
            {children}
        </UserContext.Provider>
    );
}

// Define PropTypes for the component
UserProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
