import { View, Text, StyleSheet, SafeAreaView, FlatList, ScrollView, Image, TouchableOpacity, StatusBar } from 'react-native'
import React, { useState } from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Colors from '../Assetst/Constants/Colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Rating } from 'react-native-ratings';
import LottieView from 'lottie-react-native';


const PaymentStatus = (props) => {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <StatusBar
                    backgroundColor={Colors.primaryColor1} />
                {/* <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#09c6f9', '#035fce']} style={{ width: wp('100%'), height: hp('10%'), }}> */}
                <View style={styles.head}>
                    <Text style={styles.heading}>Payment Status</Text>
                </View>

                <View style={{ width: wp('100%'), height: hp('92%'), backgroundColor: Colors.primaryColor3, alignSelf: "center" }}>

                    <View style={{ width: wp('100%'), height: hp('38%'), alignSelf: "center", marginTop: hp('2.6%'), }}>
                        <LottieView source={require('../Assetst/Images/Lottie/data.json')} autoPlay loop={false}
                            style={{ height: hp('28%'), marginTop: hp('4.2%'), alignSelf: "center" }} />
                    </View>
                    <View style={{ width: wp('100%'), height: hp('8%'), alignSelf: "center", justifyContent: "center", borderColor: Colors.primaryColor5, borderBottomWidth: hp('0.1%'), }}>
                        <Text style={{ textAlign: "center", color: Colors.primaryColor7, fontFamily: "Roboto-Regular", fontSize: hp('1.8%') }}>Your payment has been processed!</Text>
                        <Text style={{ textAlign: "center", color: Colors.primaryColor7, fontFamily: "Roboto-Regular", fontSize: hp('1.8%') }}>Details of transcation are included below</Text>
                    </View>

                    <View style={{ width: wp('100%'), height: hp('6%'), alignSelf: "center", justifyContent: "center", }}>
                        <Text style={{ textAlign: "center", color: Colors.primaryColor2, fontFamily: "Roboto-Bold", fontSize: hp('1.7%') }}>Transcation Number:123456789</Text>
                    </View>

                    <View style={{ width: wp('100%'), height: hp('6%'), alignSelf: "center", justifyContent: "space-between", marginTop: hp('1%'), flexDirection: "row", borderBottomColor: Colors.primaryColor5, borderBottomWidth: hp('0.1%'), paddingLeft: wp('6%'), paddingRight: wp('6%'), }}>
                        <Text style={{ color: Colors.primaryColor6, fontFamily: "Roboto-Medium", fontSize: hp('1.7%'), textAlignVertical: "center" }}>TOTAL AMOUNT PAID</Text>
                        <Text style={{ color: Colors.black, fontFamily: "Roboto-Bold", fontSize: hp('1.7%'), textAlignVertical: "center" }}> ₹840</Text>
                    </View>

                    <View style={{ width: wp('100%'), height: hp('6%'), alignSelf: "center", justifyContent: "space-between", flexDirection: "row", paddingLeft: wp('6%'), paddingRight: wp('6%'), }}>
                        <Text style={{ color: Colors.primaryColor6, fontFamily: "Roboto-Medium", fontSize: hp('1.7%'), textAlignVertical: "center" }}>PAID BY</Text>
                        <Text style={{ color: Colors.black, fontFamily: "Roboto-Bold", fontSize: hp('1.7%'), textAlignVertical: "center" }}>PAYTM</Text>
                    </View>

                    <View style={{ width: wp('100%'), height: hp('6%'), alignSelf: "center", justifyContent: "space-between", flexDirection: "row", borderTopColor: Colors.primaryColor5, borderTopWidth: hp('0.1%'), paddingLeft: wp('6%'), paddingRight: wp('6%'), }}>
                        <Text style={{ color: Colors.primaryColor6, fontFamily: "Roboto-Medium", fontSize: hp('1.7%'), textAlignVertical: "center" }}>TRANSACTION DATE</Text>
                        <Text style={{ color: Colors.black, fontFamily: "Roboto-Bold", fontSize: hp('1.7%'), textAlignVertical: "center", }}>22aug 2020, 05:25 AM</Text>
                    </View>


                    <TouchableOpacity style={{
                        width: wp('80%'), height: hp('7%'), backgroundColor: "white", borderRadius: hp('1%'), backgroundColor: Colors.primaryColor1, alignItems: "center", justifyContent: "center",
                        marginTop: hp('6%'), alignSelf: 'center'
                    }} onPress={() => props.navigation.navigate('SearchingDoctors')}>
                        <Text style={{ color: Colors.primaryColor8, fontFamily: "Roboto-Bold", fontSize: hp('2%') }}>Continue</Text>

                    </TouchableOpacity>



                </View>
            </View>
        </SafeAreaView>
    )
}

export default PaymentStatus;

const styles = StyleSheet.create({
    container: {
        width: wp('100%'),
        height: hp('100%'),
        backgroundColor: Colors.primaryColor5,

    },
    head: {
        width: wp('100%'),
        height: hp('8%'),
        backgroundColor: Colors.primaryColor1,
        justifyContent: "center",
        alignItems: "center"


    },
    heading: {
        color: Colors.primaryColor8,
        fontFamily: 'Roboto-Medium',
        fontSize: hp('2%'),

    },

})