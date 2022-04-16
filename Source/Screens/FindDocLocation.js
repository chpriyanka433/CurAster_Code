import { Alert, FlatList, Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Colors from '../Assetst/Constants/Colors';

const FindLocation = (props) => {

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <StatusBar
                    // translucent={true}
                    backgroundColor={Colors.primaryColor1}
                />

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: wp('100%'), height: hp('8%'), backgroundColor: Colors.primaryColor1 }}>
                    <View style={{ width: wp('60%'), flexDirection: 'row', justifyContent: 'space-between',marginLeft:wp('5%') }}>
                        <TouchableOpacity onPress={() => props.navigation.goBack('FindYourDoctors')} style={{ flexDirection: 'row', alignItems: 'center'}}  >
                            <AntDesign name='left' size={hp('2%')} color='white' />
                            <Text style={{ fontSize: hp('2%'), fontFamily: 'Roboto-Bold', color: Colors.primaryColor3, justifyContent: 'center',}}>Back</Text>
                        </TouchableOpacity>
                        <Text style={{ fontSize: hp('2.3%'), fontFamily: 'Roboto-Bold', color: Colors.primaryColor3, justifyContent: 'center' }}>Find Location</Text>
                    </View>
                </View>

                <TouchableOpacity style={{ width: wp('96%'), height: hp('6%'), flexDirection: 'row', alignSelf: 'center', marginTop: hp('1%'), justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#ddeef0', borderRadius: hp('0.2%') }}>
                    <Text style={{ fontSize: hp('2.5%'), fontFamily: 'Roboto-Bold', color: Colors.primaryColor1, justifyContent: 'center', marginLeft: hp('1%') }}>Use my current location</Text>
                    <MaterialIcons name='my-location' size={hp('3%')} color={Colors.primaryColor1} style={{ marginRight: hp('1%') }} />
                </TouchableOpacity>

                <View style={{ width: wp('96%'), height: hp('6%'), alignSelf: 'center', marginTop: hp('1%'), justifyContent: 'center', backgroundColor: '#ddeef0', borderRadius: hp('0.2%') }}>
                    <TextInput
                        placeholder='Search by city or locality'
                        placeholderTextColor={Colors.primaryColor1}
                    />
                </View>
                <View style={{ width: wp('96%'), height: hp('50%'), alignSelf: 'center', marginTop: hp('1%'), }}>
                    <Text style={{ fontSize: hp('2.5%'), fontFamily: 'Roboto-Bold', color: Colors.primaryColor2, justifyContent: 'center', marginLeft: hp('1%') }}>Popular Cities</Text>

                    <Text style={{ fontSize: hp('2.5%'), fontFamily: 'Roboto-Medium', color: Colors.primaryColor1, justifyContent: 'center', marginLeft: hp('1%'), marginTop: hp('1%') }}>Noida</Text>
                    <Text style={{ fontSize: hp('2.5%'), fontFamily: 'Roboto-Medium', color: Colors.primaryColor1, justifyContent: 'center', marginLeft: hp('1%'), marginTop: hp('1%') }}>Gurugram</Text>
                    <Text style={{ fontSize: hp('2.5%'), fontFamily: 'Roboto-Medium', color: Colors.primaryColor1, justifyContent: 'center', marginLeft: hp('1%'), marginTop: hp('1%') }}>Delhi</Text>
                    <Text style={{ fontSize: hp('2.5%'), fontFamily: 'Roboto-Medium', color: Colors.primaryColor1, justifyContent: 'center', marginLeft: hp('1%'), marginTop: hp('1%') }}>Patna</Text>
                    <Text style={{ fontSize: hp('2.5%'), fontFamily: 'Roboto-Medium', color: Colors.primaryColor1, justifyContent: 'center', marginLeft: hp('1%'), marginTop: hp('1%') }}>Chennai</Text>
                    <Text style={{ fontSize: hp('2.5%'), fontFamily: 'Roboto-Medium', color: Colors.primaryColor1, justifyContent: 'center', marginLeft: hp('1%'), marginTop: hp('1%') }}>Kolkata</Text>
                    <Text style={{ fontSize: hp('2.5%'), fontFamily: 'Roboto-Medium', color: Colors.primaryColor1, justifyContent: 'center', marginLeft: hp('1%'), marginTop: hp('1%') }}>Banglore</Text>
                    <Text style={{ fontSize: hp('2.5%'), fontFamily: 'Roboto-Medium', color: Colors.primaryColor1, justifyContent: 'center', marginLeft: hp('1%'), marginTop: hp('1%') }}>Lucknow</Text>
                    <Text style={{ fontSize: hp('2.5%'), fontFamily: 'Roboto-Medium', color: Colors.primaryColor1, justifyContent: 'center', marginLeft: hp('1%'), marginTop: hp('1%') }}>Agra</Text>

                </View>

            </View>
        </SafeAreaView>
    )

};

const styles = StyleSheet.create({

    container: {
        width: wp('100%'),
        height: hp('100%'),
        backgroundColor: Colors.primaryColor8,
        // borderRadius: hp('3%')
    },
})

export default FindLocation;
