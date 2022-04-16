import { Image, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

import ActiveDoctor from './ActiveConsultation';
import AllDoctor2 from './AllMyConsultation';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Colors from '../Assetst/Constants/Colors';
import ConsultCompleted from './CompletedMyConsultation';
import ConsultationCancelled from './CancelMyConsultation';
import LinearGradient from 'react-native-linear-gradient';
import { NavigationContainer } from '@react-navigation/native';
import {
    createMaterialTopTabNavigator
} from '@react-navigation/material-top-tabs';

const MyConsultation = (props) => {
    //const Stack = createStackNavigator();
    const Tab = createMaterialTopTabNavigator();

    return (

        <SafeAreaView >

            <View style={styles.container}>

               
                <StatusBar backgroundColor={Colors.primaryColor1}/>
                    <View style={{ flexDirection: 'row', width: wp('100%'), height: hp('8%'), alignItems: 'center', justifyContent: 'space-between', backgroundColor: Colors.primaryColor1 }}>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginLeft: hp('2%'),}} onPress={() => props.navigation.goBack('Home')} >
                        <AntDesign name='left' size={hp('2%')} color='white' />
                        <Text style={{ fontSize: hp('2%'), fontFamily: 'Roboto-Bold', color: Colors.primaryColor3, justifyContent: 'center',}}>Back</Text>
                    </TouchableOpacity>
                    <Text style={{ fontSize: hp('2.3%'), fontFamily: 'Roboto-Bold', color: Colors.primaryColor3, justifyContent: 'center',marginLeft:wp('2%') }}>My Consultation</Text>
                    <Text style={{ fontSize: hp('2.3%'), fontFamily: 'Roboto-Bold', color: Colors.primaryColor3, justifyContent: 'center',  marginRight: hp('1%') }}>Sector 62</Text>
                </View>
         <View style={{width: wp('100%'), height: hp('80%'), backgroundColor: Colors.primaryColor8, alignSelf: 'center', elevation: hp('2%'),shadowColor: Colors.primaryColor4, }}>
                    <Tab.Navigator
                        initialRouteName="Feed"
                        tabBarOptions={{
                            activeTintColor: Colors.primaryColor1,
                            inactiveTintColor: Colors.black,
                            labelStyle: {
                                textAlign: 'center',
                            },
                            indicatorStyle: {
                                borderBottomColor: '#09c6f9',
                                borderBottomWidth: 2,
                           },
                        }} >
                        <Tab.Screen
                            name="All"
                            component={AllDoctor2}
                            screenOptions={{
                                tabBarLabel: 'AllDoctor2',}} />
                                                          
                        <Tab.Screen
                            name="Active"
                            component={ActiveDoctor}
                            screenOptions={{
                                tabBarLabel: 'ActiveDoctor',  }} />
                               
                          
                        <Tab.Screen
                            name="Cancelled"
                            component={ConsultationCancelled}
                            screenOptions={{
                                tabBarLabel: 'ConsultationCancelled',
                               
                            }} />
                    </Tab.Navigator>
                    {/* </NavigationContainer> */}
                </View>


            </View>
        </SafeAreaView>

    )

}

const styles = StyleSheet.create({

    container: {
        width: wp('100%'),
        height: hp('100%'),
        backgroundColor: Colors.primaryColor8,
        // borderRadius: hp('3%')
    }

})

export default MyConsultation;