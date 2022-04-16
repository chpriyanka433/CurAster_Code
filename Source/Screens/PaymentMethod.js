import { Alert, Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Colors from '../Assetst/Constants/Colors';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import { Rating } from 'react-native-ratings';

const PaymentMethod = (props) => {

    return (
        <SafeAreaView>

            <View style={styles.doctContainer}>
                {/* <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#09c6f9', '#035fce']} style={{ width: wp('100%'), height: hp('8%'), }} > */}
                <StatusBar
                    // translucent={true}
                    backgroundColor={Colors.primaryColor1}
                />
                {/* </LinearGradient> */}
                {/* <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#09c6f9', '#035fce']} style={{ width: wp('100%'), height: hp('8%'), }}> */}
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: wp('100%'), height: hp('8%'), backgroundColor: Colors.primaryColor1 }}>
                    <View style={{ width: wp('67%'), flexDirection: 'row', justifyContent: 'space-between' }}>
                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginLeft: hp('2%'), marginTop: hp('1%') }} onPress={()=> props.navigation.goBack('VideoConsultForGP')} >
                            <AntDesign name='left' size={hp('2.5%')} color='white' />
                            <Text style={{ fontSize: hp('2.5%'), fontFamily: 'Roboto-Bold', color: Colors.primaryColor3, justifyContent: 'center', marginLeft: hp('1%') 
                        
                        }}>Back</Text>
                        </TouchableOpacity>
                        <Text style={{ fontSize: hp('2.5%'), fontFamily: 'Roboto-Bold', color: Colors.primaryColor3, justifyContent: 'center', marginTop: hp('1%') }}>Payment Method</Text>
                    </View>
                </View>

                <View style={{ width: wp('100%'), height: hp('17%'), marginTop: hp('1%'), alignItems: 'center' }}>

                    <View style={{ width: wp('94%'), height: hp('4%'), borderRadius: hp('6%'), marginLeft: hp('1%'), flexDirection: 'row', }}>
                        <Image source={require('../Assetst/Images/discount2.png')} style={{ width: wp('5%'), height: wp('5%'), }} />

                        <Text style={{ fontSize: hp('2%'), fontFamily: 'Roboto-Bold', color: Colors.primaryColor7, marginLeft: hp('1%'), }}>BANK OFFERS</Text>
                    </View>

                    <View style={{ width: wp('90%'), height: hp('11%'), backgroundColor: 'white', alignItems: 'center', borderRadius: hp('1%'), marginTop: hp('1%'), }}>
                        <View style={{ width: wp('90%'), flexDirection: 'row', padding: wp('1%'), borderRadius: hp('1%') }}>
                            <View style={{ width: wp('70%'), height: hp('10%'), borderRadius: hp('6%'), flexDirection: 'row', }}>
                                {/* <View style={{ width: wp('7%'), height: wp('7%'), }}> */}
                                <Image source={require('../Assetst/Images/googlepay.png')} style={{ width: wp('7%'), height: wp('7%'), }} />
                                {/* </View> */}
                                <TouchableOpacity style={{ width: wp('60%'), }}>
                                    <Text style={{ fontSize: hp('1.8%'), fontFamily: 'Roboto-Bold', color: Colors.primaryColor1, marginLeft: hp('2%'), }}>Get upto {'\u20B9'}400 Amazon pay wallet </Text>
                                    <Text style={{ fontSize: hp('1.8%'), fontFamily: 'Roboto-Bold', color: Colors.primaryColor1, marginLeft: hp('2%'), }}>Cashback</Text>
                                    <Text style={{ fontSize: hp('1.8%'), fontFamily: 'Roboto-Regular', color: Colors.primaryColor1, marginLeft: hp('2%'), marginTop: hp('1%') }}>Win{'\u20B9'} to {'\u20B9'}500 Cashback </Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ width: wp('23%'), }}>
                                <Text style={{ fontSize: hp('1.8%'), fontFamily: 'Roboto-Bold', color: Colors.primaryColor7, }}>T&C Apply</Text>
                            </View>
                        </View>

                    </View>
                </View>

                <View style={{ width: wp('100%'), height: hp('14%'), marginTop: hp('1%'), alignItems: 'center' }}>
                    <View style={{ width: wp('94%'), marginLeft: hp('1%') }}>
                        <Text style={{ fontSize: hp('2%'), fontFamily: 'Roboto-Bold', color: Colors.primaryColor7, }}>WALLET</Text>
                    </View>
                    <View style={{ width: wp('90%'), height: hp('9%'), backgroundColor: 'white', justifyContent: 'center', borderRadius: hp('1%'), marginTop: hp('1%') }}>
                        <View style={{ width: wp('88%'), height: hp('10%'), flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <TouchableOpacity style={{ width: wp('40%'), height: hp('10%'), borderRadius: hp('6%'), flexDirection: 'row', alignItems: 'center' }}>
                                <View style={{ width: wp('7%'), height: wp('7%'), marginLeft: hp('1%') }}>
                                    <Image source={require('../Assetst/Images/wallet.png')} style={{ width: wp('7%'), height: wp('7%'), }} />
                                </View>
                                <Text style={{ fontSize: hp('2%'), fontFamily: 'Roboto-Bold', color: Colors.primaryColor1, marginLeft: hp('1%') }}>CurAster Wallet</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ width: wp('17%'), marginLeft: hp('1%'), flexDirection: 'row', alignItems: 'center', }}>
                                <Text style={{ fontSize: hp('2%'), fontFamily: 'Roboto-Bold', color: Colors.primaryColor1, marginLeft: hp('1%') }}>{'\u20B9'}0.00</Text>
                                <Entypo name='chevron-right' size={hp('3.5%')} />
                            </TouchableOpacity>

                        </View>
                    </View>
                </View>

                <View style={{ width: wp('100%'), height: hp('40%'), marginTop: hp('2%'), alignItems: 'center' }}>

                    <View style={{ width: wp('94%'), height: hp('4%'), borderRadius: hp('6%'), marginLeft: hp('1%'), }}>


                        <Text style={{ fontSize: hp('2%'), fontFamily: 'Roboto-Bold', color: Colors.primaryColor7, marginLeft: hp('1%'), }}>Other Payment Method</Text>
                    </View>

                    <View style={{ width: wp('90%'), height: hp('32%'), backgroundColor: 'white', alignItems: 'center', borderRadius: hp('1%'), marginTop: hp('1%'), }}>
                        <View style={{ width: wp('90%'), height: hp('5%'), flexDirection: 'row', backgroundColor: 'white', padding: wp('1%'), borderRadius: hp('1%'), alignItems: 'center', }}>
                            <View style={{ width: wp('80%'), height: hp('5%'), flexDirection: 'row', alignItems: 'center' }}>

                                {/* <Image source={require('../Assetst/Images/upi.png')} style={{ width: wp('7%'), height: wp('7%'), }} /> */}

                                <TouchableOpacity style={{ width: wp('60%'), }} onPress={() => props.navigation.navigate('PaymentStatus')}>
                                    <Text style={{ fontSize: hp('1.8%'), fontFamily: 'Roboto-Bold', color: Colors.primaryColor1, marginLeft: hp('2%'), }}>Pay with UPI</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ width: wp('23%'), }}>
                                <Entypo name='chevron-right' size={hp('3.5%')} />
                            </View>
                        </View>
                        <View style={{ width: wp('83%'), borderBottomWidth: 1, borderBottomColor: '#d3d3d3' }}></View>

                        <View style={{ width: wp('90%'), flexDirection: 'row', backgroundColor: 'white', padding: wp('1%'), borderRadius: hp('1%'), alignItems: 'center' }}>
                            <View style={{ width: wp('70%'), height: hp('5%'), flexDirection: 'row', alignItems: 'center' }}>

                                <Image source={require('../Assetst/Images/paytm.png')} style={{ width: wp('7%'), height: wp('7%'), }} />

                                <TouchableOpacity style={{ width: wp('60%')}} onPress={() => props.navigation.navigate('PaymentStatus')}>
                                    <Text style={{ fontSize: hp('1.8%'), fontFamily: 'Roboto-Bold', color: Colors.primaryColor1, marginLeft: hp('2%'), }}>Payment Wallet & Postpaid</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ width: wp('23%'), }}>
                                <Text style={{ fontSize: hp('1.8%'), fontFamily: 'Roboto-Bold', color: Colors.primaryColor7, }}>Pay Now</Text>
                            </View>
                        </View>
                        <View style={{ width: wp('83%'), borderBottomWidth: 1, borderBottomColor: '#d3d3d3' }}></View>

                        <View style={{ width: wp('90%'), flexDirection: 'row', backgroundColor: 'white', padding: wp('1%'), borderRadius: hp('1%'), alignItems: 'center' }}>
                            <View style={{ width: wp('70%'), height: hp('5%'), flexDirection: 'row', alignItems: 'center' }}>

                                {/* <Image source={require('../Assetst/Images/googlepay.png')} style={{ width: wp('7%'), height: wp('7%'), }} /> */}
                                <FontAwesome name='google-pay' size={hp('2.5%')} color='white' />
                                <TouchableOpacity style={{ width: wp('60%')}} onPress={() => props.navigation.navigate('PaymentStatus')}>
                                    <Text style={{ fontSize: hp('1.8%'), fontFamily: 'Roboto-Bold', color: Colors.primaryColor1, marginLeft: hp('2%'), }}>Google Pay</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ width: wp('23%'), }}>
                                <Text style={{ fontSize: hp('1.8%'), fontFamily: 'Roboto-Bold', color: Colors.primaryColor7, }}>Pay Now</Text>
                            </View>
                        </View>
                        <View style={{ width: wp('83%'), borderBottomWidth: 1, borderBottomColor: '#d3d3d3' }}></View>

                        <View style={{ width: wp('90%'), flexDirection: 'row', backgroundColor: 'white', padding: wp('1%'), borderRadius: hp('1%'), alignItems: 'center' }}>
                            <View style={{ width: wp('65%'), height: hp('5%'), flexDirection: 'row', alignItems: 'center' }}>

                                {/* <Image source={require('../Assetst/Images/amazonpay.png')} style={{ width: wp('7%'), height: wp('7%'), marginTop: hp('1%') }} /> */}
                                <FontAwesome name='amazon-pay' size={hp('2.5%')} color='white' />
                                <TouchableOpacity style={{ width: wp('60%')}} onPress={() => props.navigation.navigate('PaymentStatus')}>
                                    <Text style={{ fontSize: hp('1.8%'), fontFamily: 'Roboto-Bold', color: Colors.primaryColor1, marginLeft: hp('2%'), }}>Amazon pay</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ width: wp('20%'), }}>
                                <Text style={{ fontSize: hp('1.8%'), fontFamily: 'Roboto-Bold', color: Colors.primaryColor7, }}>Link Account</Text>
                            </View>
                        </View>
                        <View style={{ width: wp('83%'), borderBottomWidth: 1, borderBottomColor: '#d3d3d3' }}></View>
                        <View style={{ width: wp('90%'), flexDirection: 'row', backgroundColor: 'white', padding: wp('1%'), borderRadius: hp('11%'), alignItems: 'center' }}>
                            <View style={{ width: wp('80%'), height: hp('5%'), flexDirection: 'row', alignItems: 'center' }}>

                                <Image source={require('../Assetst/Images/bankbuilding.png')} style={{ width: wp('7%'), height: wp('7%'), }} />

                                <TouchableOpacity style={{ width: wp('70%'), }} onPress={() => props.navigation.navigate('PaymentStatus')}> 
                                    <Text style={{ fontSize: hp('1.8%'), fontFamily: 'Roboto-Bold', color: Colors.primaryColor1, marginLeft: hp('2%'), }}>NetBanking{'\n'}Hdfc,SBI,Axiz & More</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ width: wp('23%')}} >
                                <Entypo name='chevron-right' size={hp('3.5%')} />
                            </View>
                        </View>
                    </View>

                </View>

                <View style={{ width: wp('92%'), justifyContent: 'center', padding: wp('1%'), height: hp('11%') }}>

                    <Text style={{ color: Colors.primaryColor7, fontFamily: "Roboto-Bold", fontSize: hp('1.8%'), }}>Payment Details</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: hp('1%') }}>
                        <Text style={{ color: Colors.primaryGray, fontFamily: "Roboto-Medium", fontSize: hp('1.8%'), }}>Amount</Text>
                        <Text style={{ color: Colors.primaryGray, fontFamily: "Roboto-Medium", fontSize: hp('1.8%'), }}>{'\u20B9'}249</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: hp('1%') }}>
                        <Text style={{ color: Colors.primaryGray, fontFamily: "Roboto-Medium", fontSize: hp('1.8%'), }}>GST</Text>
                        <Text style={{ color: Colors.primaryGray, fontFamily: "Roboto-Medium", fontSize: hp('1.8%'), }}>{'\u20B9'}40</Text>
                    </View>
                    <View style={{ width: wp('90%'), borderWidth: 0.8, borderColor: 'gray', marginTop: hp('1%') }}></View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: hp('1%') }}>
                        <Text style={{ color: Colors.primaryColor7, fontFamily: "Roboto-Medium", fontSize: hp('1.8%'), }}>Total Amount</Text>
                        <Text style={{ color: Colors.primaryColor7, fontFamily: "Roboto-Medium", fontSize: hp('1.8%'), }}>{'\u20B9'}289</Text>
                    </View>
                </View>

            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    doctContainer: {
        width: wp('100%'),
        height: hp('100%'),
        alignItems: 'center',
        backgroundColor: Colors.primaryColor3
    },

})


export default PaymentMethod;