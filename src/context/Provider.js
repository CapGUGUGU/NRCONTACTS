import React, { createContext, useReducer } from 'react';

import authInitialState from './initialsStates/authInitialState';
import contactsInitialState from './initialsStates/contactsInitialState';
import Auth from './reducers/auth';
import Contacts from './reducers/contacts';

export const GlobalContext = createContext({});

const GlobalProvider = ({children}) => {
    const [authState, authDispatch] = useReducer(Auth, authInitialState);
    const [contactsState, contactsDispatch] = useReducer(Contacts, contactsInitialState);
    return (<GlobalContext.Provider value={{authState,authDispatch,contactsState,contactsDispatch}}>
        {children}
        </GlobalContext.Provider>);
};

export default GlobalProvider;