import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { 
    CONTACTS,
    CONTACT_DETAIL,
    CREATECONTACT, 
    SETTINGS
} from '../constants/routeNames';
import Contacts from '../screens/Contacts';
import ContactDetail from '../screens/ContactDetail';
import CreateContact from '../screens/CreateContact';
import Settings from '../screens/Settings';

const HomeNavigator = () => {
    const HomeStack = createStackNavigator();
    return(
        <HomeStack.Navigator initialRouteName= {CONTACTS}>
            <HomeStack.Screen name= {CONTACTS} component={Contacts}></HomeStack.Screen>
            <HomeStack.Screen name= {CONTACT_DETAIL} component={ContactDetail}></HomeStack.Screen>
            <HomeStack.Screen name= {CREATECONTACT} component={CreateContact}></HomeStack.Screen>
            <HomeStack.Screen name= {SETTINGS} component={Settings}></HomeStack.Screen>
        </HomeStack.Navigator>
    );
};

export default HomeNavigator;