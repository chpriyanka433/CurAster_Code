import React from 'react';
import StyleSheet from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5'
import Home from '../Screens/Home';
//import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../Screens/CartScreen';
import FavoriteScreen from '../Screens/FavoriteScreen';
import GameDetailsScreen from '../Screens/GameDetailsScreen';
import MessagesScreen from '../Screens/MessagesScreen'
import VideoConsultForGP from '../Screens/VideoConsultForGP'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';
import voicePage from '../Screens/VoicePage';
import PaymentMethod from '../Screens/PaymentMethod';
import PaymentStatus from '../Screens/PaymentStatus';
import SearchingDoctors from '../Screens/SearchingDoctors';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={Home}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="VideoConsultForGP"
                component={VideoConsultForGP}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="PaymentMethod"
                component={PaymentMethod}
                options={({ route }) => ({
                    title: route.params?.title,
                    headerShown: false
                })}
            />
            <Stack.Screen
                name="PaymentStatus"
                component={PaymentStatus}
                options={({ route }) => ({
                    title: route.params?.title,
                    headerShown: false
                })}
            />
            <Stack.Screen
                name="SearchingDoctors"
                component={SearchingDoctors}
                options={({ route }) => ({
                    title: route.params?.title,
                    headerShown: false
                })}
            />
            <Stack.Screen
                name="voicePage"
                component={voicePage}
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    );
};


const BottomTabNavigation = () => {


    return (

        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: { backgroundColor: '#09c6f9' },
                tabBarInactiveTintColor: '#c8cbcf',
                tabBarActiveTintColor: '#fff',
                tabBarHideOnKeyboard: true,
            }}>
            <Tab.Screen
                name="Home2"
                component={HomeStack}
                options={({ route }) => ({
                    tabBarStyle: {
                        display: getTabBarVisibility(route),
                        backgroundColor: '#09c6f9'

                    },
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home-outline" color={color} size={size} />
                    ),
                })}
            />
            <Tab.Screen
                name="Offers"
                component={CartScreen}
                options={{
                    // tabBarBadge: 3,
                    tabBarBadgeStyle: { backgroundColor: 'blue' },
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="gift-outline" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Call us"
                component={FavoriteScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="call-outline" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Chat boat"
                component={MessagesScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="md-chatbubble-ellipses-outline" color={color} size={size} />
                    ),
                }}
            />

        </Tab.Navigator>

    );
};

const getTabBarVisibility = route => {
    // console.log(route);
    const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';
    // console.log(routeName);

    if (routeName == 'PaymentMethod') {
        return 'none';
    }
    if (routeName == 'PaymentStatus') {
        return 'none';
    }
    if (routeName == 'SearchingDoctors') {
        return 'none';
    }
    return 'flex';
};



export default BottomTabNavigation;

