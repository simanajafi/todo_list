import React from 'react';

const authContext = React.createContext({
    authenticated : [],
    login: () => {},
    logout: () => {},
})

export default authContext;