import { Image, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Colors from '../Assetst/Constants/Colors';
import AllMyConsultation from '../Screens/AllMyConsultation'
import ActiveConsultation from '../Screens/ActiveConsultation';
import CancelMyConsultation from '../Screens/CancelMyConsultation';
import {
    createMaterialTopTabNavigator
} from '@react-navigation/material-top-tabs';

const MyAppointmentFindDoctors = (props) => {
    //const Stack = createStackNavigator();
    const Tab = createMaterialTopTabNavigator();

    return (

        <SafeAreaView >

            <View style={styles.container}>
                <StatusBar backgroundColor={Colors.primaryColor1} />
                <View style={styles.head}>
                    <TouchableOpacity style={{ width: wp('15%'), height: hp('4%'), alignSelf: "center", flexDirection: "row", justifyContent: "center", alignItems: "center", marginLeft: wp('2%') }} onPress={() => props.navigation.goBack('Home')}  >
                        <AntDesign name="left" size={hp('2%')} color='white' />
                        <Text style={{ fontFamily: "Roboto-Regular", fontSize: hp('2%'), color: Colors.primaryColor8 }}>Back</Text>
                    </TouchableOpacity>
                    <Text style={{ fontFamily: "Roboto-Bold", fontSize: hp('2%'), color: Colors.primaryColor8, textAlignVertical: "center", marginLeft: wp('19%') }}>My Appointment</Text>
                </View>
                <View style={{
                    width: wp('100%'), height: hp('83%'), backgroundColor: Colors.primaryColor7, alignSelf: 'center',
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
                                name="Today"
                                component={AllMyConsultation}
                                screenOptions={{
                                    tabBarLabel: 'AllDoctor2',
                                }} />
                        <Tab.Screen
                            name="Upcoming"
                            component={ActiveConsultation}
                            screenOptions={{
                                tabBarLabel: 'ActiveDoctor',
                                }} />
                        <Tab.Screen
                            name="Past"
                            component={CancelMyConsultation}
                            screenOptions={{
                                tabBarLabel: 'ConsultationCancelled',
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

export default MyAppointmentFindDoctors;