import { FlatList, Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Colors from '../Assetst/Constants/Colors';
import LinearGradient from 'react-native-linear-gradient';
import { Rating } from 'react-native-ratings';
import React from 'react'

const ConsultationCancelled1 = (props) => {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={{height: hp('90%'), width: wp('100%'), }}>
                    <ScrollView>
                <View style={{ backgroundColor:'#ffffff', height: hp('28%'), width: wp('100%'), }}>
                    <View style={{backgroundColor:'#ffffff', height: hp('20%'), width: wp('88%'), alignSelf: "center", marginTop: hp('2%'), borderRadius: hp('1%'),elevation: hp('0.7%')}}>
                        <View style={{ flexDirection: "row", backgroundColor: '#e9edf7', height: hp('3%'), width: wp('88%'), borderTopLeftRadius: hp('1%'), borderTopRightRadius: hp('1%'), justifyContent: "space-between", paddingLeft: wp('1.5%'), paddingRight: wp('1.5%'), alignItems: "center" }}>
                            <Text style={{ fontFamily: "Roboto-Medium", fontSize: hp('1.2%'),color:'#000000'}}>12 Feb,2022  5:00 PM</Text>
                            <Text style={{ fontFamily: "Roboto-Medium", fontSize: hp('1.2%'), color:'#ff0000' }}>Cancelled</Text>
                        </View>
                        <View style={{ flexDirection: "row", height: hp('4%'), width: wp('88%'), paddingLeft: wp('1.5%'), alignItems: "center" }}>
                            <Text style={{ fontFamily: "Roboto-Medium", fontSize: hp('1.5%'), color: Colors.primaryColor1 }}>Fortis Hospital, sector-62, Noida</Text>
                        </View>
                        <View style={{ flexDirection: "row", height: hp('9%'), width: wp('88%'), justifyContent: "center", borderBottomColor: Colors.primaryColor5, borderBottomWidth: hp('0.1%'), alignItems: 'center' }}>
                            <View style={{ height: hp('8%'), width: wp('15%'), justifyContent: "center", borderRadius: hp('1%'), alignItems: 'center' }}>
                                <Image source={require('../Assetst/Images/doctor4.png')} style={{ width: wp('14%'), height: hp('7.5%'), borderRadius: hp('1%') }} />
                            </View>
                            <View style={{ height: hp('8%'), width: wp('40%'), justifyContent: "center", paddingLeft: wp('1%') }}>
                                <Text style={{ fontFamily: "Roboto-Bold", fontSize: hp('1.9%'), color: Colors.primaryColor7, }}>Dr. Shruti Kedia</Text>
                                <Text style={{ fontFamily: "Roboto-Medium", fontSize: hp('1.5%'), color: Colors.primaryColor7, }}>Hindi/English</Text>
                                <Text style={{ fontFamily: "Roboto-Medium", fontSize: hp('1.5%'), color: Colors.primaryColor1 }}>General Physician</Text>
                            </View>
                            <View style={{ height: hp('8%'), width: wp('30%'), justifyContent: 'center' }}>
                                <TouchableOpacity style={{ width: wp('24%'), height: hp('4%'), backgroundColor: Colors.primaryColor1, borderRadius: hp('0.8%'), alignSelf: 'center', justifyContent: 'center' }} onPress={()=> props.navigation.navigate('CancellationDetailsTwo')}  >
                                    <Text style={{ fontFamily: "Roboto-Bold", fontSize: hp('1.5%'), color: Colors.primaryColor8, textAlign: "center" }}>VIEW DETAILS</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ width: wp('88%'), height: hp('3%'), flexDirection: 'row', alignItems: "center" }}>
                            <Text style={{ fontFamily: "Roboto-Bold", fontSize: hp('1%'), color: Colors.primaryColor1, marginLeft: wp('1.5%') }}>Patient Name</Text>
                            <Text style={{ fontFamily: "Roboto-Medium", fontSize: hp('1%'), color: Colors.primaryColor7, marginLeft: wp('1.5%') }}>Olivia Rodrigo,21, Female</Text>
                        </View>
                    </View>
                </View>
             </ScrollView>
            </View>
            </View>
        </SafeAreaView>
    )
}

export default ConsultationCancelled1;

const styles = StyleSheet.create({
    container: {
        width: wp('100%'),
        height: hp('100%'),
        backgroundColor:'#ffffff'
    },
    head: {
        width: wp('100%'),
        height: hp('8%'),
        backgroundColor: Colors.primaryColor1,
        flexDirection: "row",
    },
    heading: {
        color: Colors.primaryColor8,
        fontFamily: 'Roboto-Medium',
        fontSize: hp('2%'),
    },
})