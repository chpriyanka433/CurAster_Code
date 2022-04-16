import { Image, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

import ActiveDoctor1 from './ActiveConsultation1';
import AllDoctor1 from './AllMyConsultation1';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Colors from '../Assetst/Constants/Colors';


import ConsultationCancelled1 from './ConsultationCancelled1';
import LinearGradient from 'react-native-linear-gradient';
import { NavigationContainer } from '@react-navigation/native';
import {
    createMaterialTopTabNavigator
} from '@react-navigation/material-top-tabs';

const MyAppointmentFindDoctor2 = (props) => {
    //const Stack = createStackNavigator();
    const Tab = createMaterialTopTabNavigator();

    return (

        <SafeAreaView >

            <View style={styles.container}>
                <StatusBar backgroundColor={Colors.primaryColor1} />
                <View style={styles.head}>
                    <TouchableOpacity style={{ width: wp('15%'), height: hp('4%'), alignSelf: "center", flexDirection: "row", justifyContent: "center", alignItems: "center", marginLeft: wp('2%') }}>
                        <AntDesign name="left" size={hp('2%')} color='white' />
                        <Text style={{ fontFamily: "Roboto-Regular", fontSize: hp('2%'), color: Colors.primaryColor8 }}>Back</Text>
                    </TouchableOpacity>
                    <Text style={{ fontFamily: "Roboto-Bold", fontSize: hp('2%'), color: Colors.primaryColor8, textAlignVertical: "center", marginLeft: wp('20%') }}>My Consultation</Text>
                </View>
                <View style={{
                    width: wp('100%'), height: hp('80%'), backgroundColor: Colors.primaryColor8, alignSelf: 'center',
                }}>
                    
                        <Tab.Navigator
                            initialRouteName="Feed"
                            tabBarOptions={{
                                activeTintColor: Colors.primaryColor1,
                                style: { backgroundColor: '#e9edf7' },
                                labelStyle: {
                                    textAlign: 'center',
                                    fontSize: hp('2%'),
                                    fontFamily: 'Roboto-Bold',
                                },
                                indicatorStyle: {
                                    borderBottomColor: '#09c6f9',
                                    borderBottomWidth: 2,
                                },
                            }} >
                            <Tab.Screen
                                name="All"
                                component={AllDoctor1}
                                screenOptions={{
                                    tabBarLabel: 'AllDoctor1',
                                    
                                }} />
                            <Tab.Screen
                                name="Active"
                                component={ActiveDoctor1}
                                screenOptions={{
                                    tabBarLabel: 'ActiveDoctor1',
                                }} />
                            <Tab.Screen
                                name="Cancelled"
                                component={ConsultationCancelled1}
                                screenOptions={{
                                    tabBarLabel: 'ConsultationCancelled1',
                                  
                                }} />
                        </Tab.Navigator>
                   
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    container: {
        width: wp('100%'),
        height: hp('100%'),
        backgroundColor: '#ffffff'
    },
    head: {
        width: wp('100%'),
        height: hp('8%'),
        backgroundColor: Colors.primaryColor1,
        flexDirection: "row",
    },

})

export default MyAppointmentFindDoctor2;