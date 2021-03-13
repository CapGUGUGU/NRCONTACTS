import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeNavigator from './homeNavigator';
import { HOME } from '../constants/routeNames';

const DrawerNavigator = () => {
    const DrawerStack = createDrawerNavigator();
    return(
        <DrawerStack.Navigator>
            <DrawerStack.Screen name= {HOME} component={HomeNavigator}></DrawerStack.Screen>
        </DrawerStack.Navigator>
    );
};

export default DrawerNavigator;