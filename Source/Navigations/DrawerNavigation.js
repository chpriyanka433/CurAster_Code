import React from 'react';
import { Text, View } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import CustomDrawer from '../ReusableComponent/CustomDrawer';
//import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Font from 'react-native-vector-icons/FontAwesome5';
import ProfileScreen from '../Screens/ProfileScreen';
import MessagesScreen from '../Screens/MessagesScreen';
import MomentsScreen from '../Screens/MomentsScreen';
import SettingsScreen from '../Screens/SettingsScreen';
import BottomTabNavigation from '../Navigations/BottomTabNavigation';
import MyConsultation from '../Screens/MyConsultation';
import MyAppointmentFindDoctors2 from '../Screens/MyAppointmentFindDoctor2';
import  MyAppointmentFindDoctors from  '../Screens/MyAppointmentFindDoctors';
import Colors from '../Assetst/Constants/Colors';
const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
    return (

        <Drawer.Navigator
            drawerContent={props => <CustomDrawer {...props} />}
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
                name="My Doctors"
                component={BottomTabNavigation}

                options={{
                    drawerIcon: ({ color }) => (
                        <Font name="hospital" size={22} color={color} />
                    ),
                }}
            />

            <Drawer.Screen
                name="My Appointments"
                component={MyAppointmentFindDoctors}
                options={{
                    drawerIcon: ({ color }) => (
                        <Ionicons name="person-outline" size={22} color={color} />
                    ),
                }}
            />

            <Drawer.Screen
                name="Doctor Consultations"
                component={MyAppointmentFindDoctors2}
                options={{
                    drawerIcon: ({ color }) => (
                        <Ionicons name="chatbox-ellipses-outline" size={22} color={color} />
                    ),
                }}
            />
            <Drawer.Screen
                name="Health Records"
                component={MomentsScreen}
                options={{
                    drawerIcon: ({ color }) => (
                        <Ionicons name="timer-outline" size={22} color={color} />
                    ),
                }}
            />
            <Drawer.Screen
                name="Hospitalization"
                component={MessagesScreen}
                options={{
                    drawerIcon: ({ color }) => (
                        <Font name="hospital" size={22} color={color} />
                    ),
                }}
            />
            <Drawer.Screen
                name="Lab Reports"
                component={MessagesScreen}
                options={{
                    drawerIcon: ({ color }) => (
                        <Font name="hospital" size={22} color={color} />
                    ),
                }}
            />

            <Drawer.Screen
                name="Medicine Orders"
                component={MomentsScreen}
                options={{
                    drawerIcon: ({ color }) => (
                        <Ionicons name="timer-outline" size={22} color={color} />
                    ),
                }}
            />


            <Drawer.Screen
                name="My Invoices"
                component={MessagesScreen}
                options={{
                    drawerIcon: ({ color }) => (
                        <Ionicons name="chatbox-ellipses-outline" size={22} color={color} />
                    ),

                }}

            />
            <Drawer.Screen
                name="My Insurance"
                component={MessagesScreen}
                options={{
                    drawerIcon: ({ color }) => (
                        <Font name="hospital" size={22} color={color} />
                    ),
                }}
            />

            <Drawer.Screen
                name="Transactions & Payment"
                component={MessagesScreen}
                options={{
                    drawerIcon: ({ color }) => (
                        <Ionicons name="chatbox-ellipses-outline" size={22} color={color} />
                    ),
                }}
            />

            <Drawer.Screen
                name="About us"
                component={SettingsScreen}
                options={{
                    drawerIcon: ({ color }) => (
                        <Ionicons name="settings-outline" size={22} color={color} />
                    ),
                }}
            />
            <Drawer.Screen
                name="Privacy Policy"
                component={SettingsScreen}
                options={{
                    drawerIcon: ({ color }) => (
                        <Ionicons name="settings-outline" size={22} color={color} />
                    ),
                }}
            />
            <Drawer.Screen
                name="Help and Support"
                component={SettingsScreen}
                options={{
                    drawerIcon: ({ color }) => (
                        <Ionicons name="settings-outline" size={22} color={color} />
                    ),
                }}
            />
            <Drawer.Screen
                name="Terms & Conditions"
                component={SettingsScreen}
                options={{
                    drawerIcon: ({ color }) => (
                        <Ionicons name="settings-outline" size={22} color={color} />
                    ),
                }}
            />
            <Drawer.Screen
                name="FAQs"
                component={SettingsScreen}
                options={{
                    drawerIcon: ({ color }) => (
                        <Ionicons name="settings-outline" size={22} color={color} />
                    ),
                }}
            />
            <Drawer.Screen
                name="Settings"
                component={SettingsScreen}
                options={{
                    drawerIcon: ({ color }) => (
                        <Ionicons name="settings-outline" size={22} color={color} />
                    ),
                }}
            />
            <Drawer.Screen
                name="Rating CurAsters"
                component={SettingsScreen}
                options={{
                    drawerIcon: ({ color }) => (
                        <Ionicons name="settings-outline" size={22} color={color} />
                    ),
                }}
            />
        </Drawer.Navigator>

    );
};

export default DrawerNavigation;
