import React from 'react';

const todoContext = React.createContext({
    todos : [],
    add: () => {},
    delete: () => {},
    done: () => {},
    edit: () => {}
})

export default todoContext;