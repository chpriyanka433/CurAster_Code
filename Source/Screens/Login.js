import { Image, SafeAreaView, StyleSheet, Text, View, TouchableOpacity, StatusBar } from 'react-native';
import React, { useState } from 'react';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Colors from '../Assetst/Constants/Colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Login = (props) => {


    return (

        <SafeAreaView >
            <View style={styles.container}>
                <StatusBar
                    animated={true}
                    backgroundColor={Colors.primaryColor1}
                />

                <View style={{ width: wp('100%'), height: hp('30%'), backgroundColor: Colors.primaryColor1, }}>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginLeft: hp('2%') }} onPress={() => props.navigation.goBack('Loginsignup')}>
                        <AntDesign name='left' size={hp('2.7%')} color='white' />
                        <Text style={{ fontSize: hp('2.5%'), fontFamily: 'Roboto-Bold', color: Colors.primaryColor3, justifyContent: 'center', marginLeft: hp('1%') }}>Back</Text>
                    </TouchableOpacity>
                </View>
                <View style={{
                    width: wp('96%'), height: hp('50%'), backgroundColor: Colors.primaryColor8, alignSelf: 'center', borderRadius: hp('3.4%'), marginTop: hp('-15%'), elevation: hp('2%'),
                    shadowColor: Colors.primaryColor4,
                }}>

                    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: hp('7%') }} >
                        <TouchableOpacity style={{ flexDirection: 'row', width: wp('80%'), height: hp('7%'), alignItems: 'center', backgroundColor: Colors.primaryColor1, borderRadius: hp('10%') }} 
                         onPress={() => props.navigation.navigate('EmailMobileLogin')}
                        >
                            <MaterialIcons name='login' size={hp('3%')} color='white' style={{ marginLeft: hp('3%') }} />
                            <Text style={{ fontSize: hp('2.2%'), fontFamily: 'Roboto-Medium', color: Colors.primaryColor3, justifyContent: 'center', marginLeft: hp('1%') }} >Login using Mobile No/Email id</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flexDirection: 'row', width: wp('80%'), height: hp('7%'), alignItems: 'center', backgroundColor: Colors.primaryColor8, borderWidth: 1, borderColor: Colors.primaryColor1, borderRadius: hp('10%'), marginTop: hp('3%') }}>
                            <Image source={require('../Assetst/Images/google.png')} style={{ width: wp('5.2%'), height: wp('5.2%'), marginLeft: hp('3%') }} />
                            <Text style={{ fontSize: hp('2.2%'), fontFamily: 'Roboto-Medium', color: Colors.primaryColor7, justifyContent: 'center', marginLeft: hp('1%') }} >Login using Google Account</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flexDirection: 'row', width: wp('80%'), height: hp('7%'), alignItems: 'center', backgroundColor: Colors.primaryColor2, borderRadius: hp('10%'), marginTop: hp('3%') }}>
                            <MaterialCommunityIcons name='facebook' size={hp('3.5%')} color='white' style={{ marginLeft: hp('3%') }} />
                            <Text style={{ fontSize: hp('2.2%'), fontFamily: 'Roboto-Medium', color: Colors.primaryColor3, justifyContent: 'center', marginLeft: hp('1%') }} >Login using Facebook</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flexDirection: 'row', width: wp('80%'), height: hp('7%'), alignItems: 'center', backgroundColor: Colors.primaryColor6, borderRadius: hp('10%'), marginTop: hp('3%') }}>
                            <Image source={require('../Assetst/Images/fingerprint.png')} style={{ width: wp('5.2%'), height: wp('5.2%'), marginLeft: hp('3%') }} />
                            <Text style={{ fontSize: hp('2.2%'), fontFamily: 'Roboto-Medium', color: Colors.primaryColor3, justifyContent: 'center', marginLeft: hp('1%') }} >Login using Finger scan</Text>
                        </TouchableOpacity>
                    </View>

                </View>

                <View style={{ width: wp('100%'), height: hp('25%'), alignSelf: 'center', marginTop: hp('2%'), }}>

                </View>
                <View style={{ width: wp('100%'), height: hp('10%'), flexDirection: 'row', justifyContent: 'center' }}>
                    <Text style={{ color: Colors.primaryColor7, fontFamily: 'Roboto-Medium', }}>New to Curaster?</Text>
                    <TouchableOpacity style={{ alignItems: 'center' }}>
                        <Text style={{ color: Colors.primaryColor2, fontFamily: 'Roboto-Bold', textDecorationLine: 'underline' }} > Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>

    )

}

const styles = StyleSheet.create({

    container: {
        width: wp('100%'),
        height: hp('100%'),
        backgroundColor: Colors.primaryColor9
    }

})

export default Login;