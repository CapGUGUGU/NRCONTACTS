import React, { useContext } from 'react';
import { NavigationContainer } from "@react-navigation/native";

import AuthNavigator from './authNavigator';
import DrawerNavigator from './drawerNavigator';
import { GlobalContext } from '../context/Provider';

const AppNavContainer = () => {
    const {authState: {isLoggedIn}} = useContext(GlobalContext);
    console.log('isLoggedIn: ', isLoggedIn);

    return(
        <NavigationContainer>
            { isLoggedIn ? <DrawerNavigator /> : <AuthNavigator />}
        </NavigationContainer>
    );
};

export default AppNavContainer;