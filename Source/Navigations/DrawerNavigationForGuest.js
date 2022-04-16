import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawerForGuest from '../ReusableComponent/CustomDrawerForGuest'
//import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Font from 'react-native-vector-icons/FontAwesome5';
import ProfileScreen from '../Screens/ProfileScreen';
import MessagesScreen from '../Screens/MessagesScreen';
import MomentsScreen from '../Screens/MomentsScreen';
import SettingsScreen from '../Screens/SettingsScreen';
import BottomTabNavigation from '../Navigations/BottomTabNavigation';
import MyConsultation from '../Screens/MyConsultation';
import MyAppointmentFindDoctors from '../Screens/MyAppointmentFindDoctors';
import HomeForGuest from '../Screens/HomeForGuest';
const Drawer = createDrawerNavigator();

const DrawerNavigationForGuest = () => {
    return (


        <Drawer.Navigator
            drawerContent={props => <CustomDrawerForGuest {...props} />}
            screenOptions={{
                headerShown: false,
                drawerActiveBackgroundColor: '#3da0d9',
                drawerActiveTintColor: '#fff',
                drawerInactiveTintColor: '#333',
                drawerLabelStyle: {
                    marginLeft: -25,
                    fontFamily: 'Roboto-Medium',
                    fontSize: 15,
                },
            }}>

            <Drawer.Screen
                name="Settings"
                component={HomeForGuest}
                options={{
                    drawerIcon: ({ color }) => (
                        <Ionicons name="settings-outline" size={22} color={color} />
                    ),
                }}
            />

            <Drawer.Screen
                options={{
                    drawerIcon: ({ color }) => (
                        <Ionicons name="help-circle-outline" size={22} color={color} />
                    ),
                }}
                name="FAQs"
                component={MyAppointmentFindDoctors}

            />

            <Drawer.Screen
                name="Privacy Policy"
                component={MyConsultation}
                options={{
                    drawerIcon: ({ color }) => (
                        <Ionicons name="lock-open-outline" size={22} color={color} />
                    ),
                }}
            />

            <Drawer.Screen
                name="Terms & Condition"
                component={MessagesScreen}
                options={{
                    drawerIcon: ({ color }) => (
                        <Ionicons name="document-text-outline" size={22} color={color} />
                    ),
                }}
            />
            <Drawer.Screen
                name="Contact us"
                component={MessagesScreen}
                options={{
                    drawerIcon: ({ color }) => (
                        <Ionicons name="chatbox-ellipses-outline" size={22} color={color} />
                    ),
                }}
            />


        </Drawer.Navigator>

    );
};

export default DrawerNavigationForGuest;
