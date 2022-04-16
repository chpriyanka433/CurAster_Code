import { View, Text, StyleSheet, SafeAreaView, StatusBar, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Colors from '../Assetst/Constants/Colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Rating } from 'react-native-ratings';


const PastAppointmentFindDoctor = (props) => {





    return (
        <SafeAreaView>
            <View style={styles.container}>
                <StatusBar backgroundColor={Colors.primaryColor1} />
                <View style={styles.head}>
                    <TouchableOpacity onPress={() => props.navigation.goBack("Appointment")} style={{ width: wp('15%'), height: hp('4%'), alignSelf: "center", flexDirection: "row", justifyContent: "center", alignItems: "center", marginLeft: wp('1.7%') }}>
                        <AntDesign name="left" size={hp('2%')} color='#ffffff' />
                        <Text style={{ fontFamily: "Roboto-Regular", fontSize: hp('2%'), color: Colors.primaryColor8 }}>Back</Text>
                    </TouchableOpacity>
                    <Text style={{ fontFamily: "Roboto-Bold", fontSize: hp('2%'), color: Colors.primaryColor8, textAlignVertical: "center", marginLeft: wp('20%') }}>Past Appointment</Text>
                </View>

                <View style={{ width: wp('100%'), height: hp('92%'), alignSelf: "center", }}>

                    <View style={styles.details}>
                        <View style={styles.doctor}>

                            <View style={styles.img}>
                                <Image source={require('../Assetst/Images/doctor4.png')} style={{ width: wp('24%'), height: hp('13.4%'), borderRadius: hp('1%'), marginTop: hp('0.6%') }} />


                            </View>
                            <View style={styles.doc}>
                                <Text style={{ color: Colors.primaryColor7, fontFamily: "Roboto-Bold", fontSize: hp('2.5%') }}>Dr. Shruti Kedia</Text>
                                <Text style={{ color: Colors.primaryColor2, fontFamily: "Roboto-Medium", fontSize: hp('2%') }}>Cardiology</Text>
                                <Text style={{ color: Colors.primaryColor6, fontFamily: "Roboto-Medium", fontSize: hp('1.5%') }}>7 Years experience</Text>
                                <Text style={{ color: Colors.primaryColor6, fontFamily: "Roboto-Regular", fontSize: hp('1.2%') }}>English/Hindi</Text>
                                <Text style={{ color: '#677294', fontFamily: "Roboto-Bold", fontSize: hp('1.8%') }}>MBBS,MD</Text>

                                <Rating
                                    type='star'
                                    ratingCount={5}
                                    ratingColor='#f6d060'
                                    // unSelectedColor='#BDC3C7'
                                    imageSize={wp('3.2%')}
                                    onFinishRating={(rating) => {
                                        Alert.alert('Star Rating: ' + JSON.stringify(rating));
                                    }}
                                    style={{ alignItems: "flex-start", paddingTop: hp('0.2%'), }} />



                            </View>
                        </View>
                    </View>
                    <View style={styles.patient}>
                        <Text style={{ color: Colors.primaryColor1, fontFamily: "Roboto-Bold", fontSize: hp('2.3%'), paddingTop: hp('1%'), paddingLeft: wp('0.5%') }}>Booking Details</Text>

                        <View style={{ width: wp('90%'), height: hp('18%'), flexDirection: "row", alignSelf: "center", justifyContent: "space-between", borderBottomColor: Colors.primaryColor6, borderTopColor: Colors.primaryColor6, borderTopWidth: hp('0.2%'), borderBottomWidth: hp('0.2%') }}>


                            <View style={styles.patientDet}>
                                <Text style={{ color: Colors.primaryColor7, fontFamily: "Roboto-Medium", fontSize: hp('1.7%'), marginTop: hp('0.3%') }}>Name</Text>
                                <Text style={{ color: Colors.primaryColor7, fontFamily: "Roboto-Medium", fontSize: hp('1.7%'), marginTop: hp('0.3%') }}>Mobile No.</Text>
                                <Text style={{ color: Colors.primaryColor7, fontFamily: "Roboto-Medium", fontSize: hp('1.7%'), marginTop: hp('0.3%') }}>Booking Date & Time</Text>
                                <Text style={{ color: Colors.primaryColor7, fontFamily: "Roboto-Medium", fontSize: hp('1.7%'), marginTop: hp('0.3%') }}>Transcation ID</Text>
                                <Text style={{ color: Colors.primaryColor7, fontFamily: "Roboto-Medium", fontSize: hp('1.7%'), marginTop: hp('0.3%') }}>Amount Paid</Text>
                                <Text style={{ color: Colors.primaryColor7, fontFamily: "Roboto-Medium", fontSize: hp('1.7%'), marginTop: hp('0.3%') }}>Payment Mode</Text>
                            </View>
                            <View style={styles.name}>


                                <Text style={{ color: Colors.primaryColor7, fontFamily: "Roboto-Medium", fontSize: hp('1.7%'), marginTop: hp('0.3%') }}>Olivia Rodrigo</Text>
                                <Text style={{ color: Colors.primaryColor7, fontFamily: "Roboto-Medium", fontSize: hp('1.7%'), marginTop: hp('0.3%') }}>9432156096</Text>
                                <Text style={{ color: Colors.primaryColor7, fontFamily: "Roboto-Medium", fontSize: hp('1.7%'), marginTop: hp('0.3%') }}>22 Aug,2020,2Pm to 4PM</Text>
                                <Text style={{ color: Colors.primaryColor7, fontFamily: "Roboto-Medium", fontSize: hp('1.7%'), marginTop: hp('0.3%') }}>123456789</Text>
                                <Text style={{ color: Colors.primaryColor7, fontFamily: "Roboto-Medium", fontSize: hp('1.7%'), marginTop: hp('0.3%') }}>₹240</Text>
                                <Text style={{ color: Colors.primaryColor7, fontFamily: "Roboto-Medium", fontSize: hp('1.7%'), marginTop: hp('0.3%') }}>Paytm</Text>

                            </View>
                        </View>
                    </View>

                    <View style={styles.reason}>
                        <Text style={{ color: Colors.primaryColor1, fontFamily: "Roboto-Bold", fontSize: hp('2.3%') }}>Appointment Records</Text>
                    </View>

                    {/* {slots.map((val) => {
                             return (
                                 <TouchableOpacity key={val.id} onPress={checkClick.bind(this, val.id)} style={{ width: wp('25.5%'), height: hp('4%'), backgroundColor: "white", borderRadius: wp('0.9%'), backgroundColor: Colors.primaryColor1, alignItems: "center", justifyContent: "center",}} >
                                 <Text style={{ fontSize: hp('1.8%'), fontFamily: 'Roboto-Medium', color: val.id == isSelected ? '#ffffff' : '#09c6f9', }}>{val.slot}</Text>
                                 </TouchableOpacity>
                                 )
                                })} */}
                    {/* {products.map((val) => {
                         return (
                             <TouchableOpacity key={val.id} onPress={checkClick.bind(this, val.id)} style={{ width: wp('33%'), justifyContent: 'center', alignItems: 'center', height: hp('8%'), backgroundColor: val.id == isCheckSelected ? '#00abf6' : "white", borderRadius: hp('1%'), marginRight: hp('1%'), borderWidth: val.id == isCheckSelected ? 0 : 1.3, borderColor: '#696969' }}>
                             <Text style={{ fontSize: hp('2.2%'), fontFamily: 'Roboto-Medium', color: val.id == isCheckSelected ? '#ffffff' : '#696969', }}>{val.name}</Text>
                             <Text style={{ fontSize: hp('2%'), color: val.id == isCheckSelected ? '#ffffff' : '#696969', }}>{val.name}</Text>
                             </TouchableOpacity>
                             )
                            })} */}

                    <View style={{ height: hp('8%'), width: wp('91.2'), flexDirection: "row", alignSelf: "center", alignItems: "center", justifyContent: "space-between" }}>
                        <TouchableOpacity onPress={() => props.navigation.navigate("Prescription")} style={{ width: wp('26%'), height: hp('4%'), borderRadius: hp('0.9%'), backgroundColor: Colors.primaryColor1, alignItems: "center", justifyContent: "center", }}>
                            <Text style={{ color: Colors.primaryColor8, fontFamily: "Roboto-Bold", fontSize: hp('1.7%') }}>Prescription</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => props.navigation.navigate("ReferralLetter")} style={{ width: wp('26%'), height: hp('4%'), borderRadius: hp('0.9%'), backgroundColor: '#67ddf5', alignItems: "center", justifyContent: "center", }}>
                            <Text style={{ color: '#000000', fontFamily: "Roboto-Bold", fontSize: hp('1.7%') }}>Referral Letter</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => props.navigation.navigate("Invoice")} style={{ width: wp('26%'), height: hp('4%'), borderRadius: hp('0.9%'), backgroundColor: '#67ddf5', alignItems: "center", justifyContent: "center", }}>
                            <Text style={{ color: '#000000', fontFamily: "Roboto-Bold", fontSize: hp('1.7%') }}>Invoice</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: wp('86%'), height: hp('9%'), alignSelf: "center", justifyContent: "center", alignItems: "center", marginTop: hp('19%') }}>
                        <TouchableOpacity style={{ width: wp('36%'), height: hp('5.5%'), backgroundColor: "white", borderRadius: hp('0.8%'), backgroundColor: Colors.primaryColor1, alignItems: "center", justifyContent: "center" }}>
                            <Text style={{ color: Colors.primaryColor8, fontFamily: "Roboto-Bold", fontSize: hp('2%') }}>Done</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default PastAppointmentFindDoctor;

const styles = StyleSheet.create({
    container: {
        width: wp('100%'),
        height: hp('100%'),
        backgroundColor: '#ffffff',
    },
    head: {
        width: wp('100%'),
        height: hp('8%'),
        backgroundColor: Colors.primaryColor1,
        flexDirection: "row",
    },
    details: {
        width: wp('95%'),
        height: hp('18%'),
        // backgroundColor: Colors.primaryDark,
        alignSelf: "center",
        justifyContent: "center",

        marginTop: hp('3%')

    },
    doctor: {
        width: wp('94%'),
        height: hp('16%'),
        // backgroundColor: Colors.primaryRed,
        alignSelf: "center",
        flexDirection: "row",
        justifyContent: "center",
    },
    img: {
        width: wp('26%'),
        height: hp('15%'),
        // backgroundColor: Colors.primaryDark,
        // alignSelf:"center",
        alignItems: "center"
    },
    doc: {
        width: wp('64.4%'),
        height: hp('15.5%'),
        // backgroundColor: Colors.primaryColor8,
        // alignSelf:"center",
        paddingLeft: wp('1%'),
        paddingTop: hp('0.4%')
    },
    patient: {
        width: wp('91.2%'),

        height: hp('24%'),
        // backgroundColor:Colors.primaryRed,
        alignSelf: "center",
        // justifyContent:"space-between"



    },
    patientDet: {
        width: wp('42%'),
        height: hp('17%'),
        // backgroundColor:Colors.greenSyan,
        alignSelf: "center",
        paddingLeft: wp('1%')

    },
    name: {
        width: wp('42%'),
        height: hp('17%'),
        // backgroundColor:Colors.darkPurple,
        alignItems: "flex-end",
        alignSelf: "center",
        paddingRight: wp('1%')
    },
    reason: {
        width: wp('91.2%'),

        height: hp('5%'),
        // backgroundColor:Colors.skyBlue,
        alignSelf: "center",
        marginTop: hp('1%'),
        borderBottomColor: Colors.primaryColor6,
        borderBottomWidth: hp('0.2%'),
        paddingLeft: wp('0.5%')

    },

})