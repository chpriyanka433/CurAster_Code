/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
//import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
//import Splash from './Source/Screens/Splash';
//import LoginsignupScreen from './Source/Screens/LoginsignupScreen';
//import StackNavigation from './Source/Navigations/StackNavigation';
//import SignupOtp from './Source/Screens/SignupOtp';
//import Home from './Source/Screens/Home';
//import HomeForGuest from './Source/Screens/HomeForGuest';
//import BottomTabNavigation from './Source/Navigations/BottomTabNavigation';
//import SearchingLoader from './Source/Screens/SearchingLoader';
//import DrawerNavigation from './Source/Navigations/DrawerNavigation';
//import Loading from './Source/Screens/Loading';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from '../Curaster/Source/Navigations/StackNavigation';

const App = () => {


  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
