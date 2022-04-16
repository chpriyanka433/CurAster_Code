import { Image, SafeAreaView, StyleSheet, Text, View, TouchableOpacity, StatusBar, TextInput } from 'react-native';
import React, { useState } from 'react';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Colors from '../Assetst/Constants/Colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import Email from './Email';
import Mobile from './Mobile';
//import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
   


const EmailMobileLogin = (props) => {
    //const Stack = createStackNavigator();
    const Tab = createMaterialTopTabNavigator();

    return (

        <SafeAreaView >

            <View style={styles.container}>

               
                <StatusBar backgroundColor={Colors.primaryColor1} />
                <View style={{ width: wp('100%'), height: hp('45%'),backgroundColor:Colors.primaryColor1 }}>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginLeft: hp('2%'), marginTop: hp('1%') }}onPress={()=> props.navigation.goBack('Login')} >
                        <AntDesign name='left' size={hp('2%')} color='white' />
                        <Text style={{ fontSize: hp('2%'), fontFamily: 'Roboto-Medium', color: Colors.primaryColor3, justifyContent: 'center',}}>Back</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ width: wp('90%'), height: hp('60%'), backgroundColor: Colors.primaryColor8, alignSelf: 'center', borderTopLeftRadius: hp('3%'), borderTopRightRadius: hp('3%'), borderBottomLeftRadius: hp('3%'), borderBottomRightRadius: hp('3%'), marginTop: -hp('35%'), elevation: hp('2%'), shadowColor: Colors.primaryColor4, }}>
                    <View style={{ justifyContent: 'center', alignItems: 'center', width: wp('90%'), height: hp('10%'), }}>
                        <Text style={{ fontSize: hp('2.3%'), fontFamily: 'Roboto-Bold', color: Colors.primaryColor1, marginTop: hp('1.8%') }}>Login Using Email Id/Mobile</Text>
                    </View>
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
                        }}>
                        <Tab.Screen
                            name="Email"
                            component={Email}
                            options={{
                                tabBarLabel: 'Email',
                                tabBarLabelStyle:{fontSize:14, fontWeight:'bold'},  }} />

                        <Tab.Screen
                            name="Mobile"
                            component={Mobile}
                            options={{
                                tabBarLabel: 'Mobile',
                                tabBarLabelStyle:{fontSize:14, fontWeight:'bold'},
                            }} />
                    </Tab.Navigator>
                </View>
                <View style={{ height: hp('30%'), justifyContent: 'center', alignItems: 'center', }}>
                    <Text style={{ color: Colors.primaryColor6, fontFamily: 'Roboto-Medium', }}>Login Using</Text>

                    <View style={{ width: wp('100%'), justifyContent: 'center', alignItems: 'center', flexDirection: 'row', marginTop: hp('2%') }}>
                        <TouchableOpacity style={{ width: wp('13%'), height: wp('13%'), justifyContent: 'center', backgroundColor: Colors.primaryColor8, borderRadius: hp('6.5%'), borderWidth: 1, borderColor: Colors.primaryGray, }}>
                            <Image source={require('../Assetst/Images/google.png')} style={{ width: wp('5.2%'), height: wp('5%'), resizeMode: 'center', alignSelf: 'center', }} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ width: wp('13%'), height: wp('13%'), justifyContent: 'center', backgroundColor: Colors.primaryColor8, borderRadius: hp('6.5%'), borderWidth: 1, borderColor: Colors.primaryGray, marginLeft: hp('2%') }}>
                            <MaterialCommunityIcons name='facebook' size={hp('3.5%')} color={Colors.primaryColor2} style={{ justifyContent: 'center', alignSelf: 'center', }} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ width: wp('13%'), height: wp('13%'), justifyContent: 'center', backgroundColor: Colors.primaryColor8, borderRadius: hp('6.5%'), borderWidth: 1, borderColor: Colors.primaryGray, marginLeft: hp('2%') }}>
                            <Image source={require('../Assetst/Images/fingerprint2.png')} style={{ width: wp('5.2%'), height: wp('5%'), resizeMode: 'center', alignSelf: 'center', borderRadius: hp('100%') }} />
                        </TouchableOpacity>
                    </View>
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
        borderRadius: hp('3%')
    }

})

export default EmailMobileLogin;