import { FlatList, Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Colors from '../Assetst/Constants/Colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import React from 'react'

const AllMyConsultation = (props) => {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={{ backgroundColor: '#ffffff', height: hp('92%'), width: wp('100%'), }}>
                    <ScrollView>
                        <View style={{ backgroundColor: '#ffffff', height: hp('3%'), width: wp('88%'), alignSelf: "center", justifyContent: "center", paddingLeft: wp('1%') }}>
                            <Text style={{ fontFamily: 'Roboto-Bold', fontSize: hp('2%'), color: '#000000' }}>Today</Text>
                        </View>
                        <View style={{ backgroundColor: '#ffffff', height: hp('23%'), width: wp('96%'), alignSelf: "center" }}>

                            <View style={{ backgroundColor: '#ffffff', height: hp('20%'), width: wp('88%'), alignSelf: "center", marginTop: hp('2%'), borderRadius: hp('1%'), shadowColor: Colors.primaryColor7, elevation: hp('0.7%') }}>
                                <View style={{ flexDirection: "row", backgroundColor: '#e9edf7', height: hp('3%'), width: wp('88%'), borderTopLeftRadius: hp('1%'), borderTopRightRadius: hp('1%'), justifyContent: "space-between", paddingLeft: wp('1.5%'), paddingRight: wp('1.5%'), alignItems: "center" }}>
                                    <Text style={{ fontFamily: "Roboto-Medium", fontSize: hp('1.2%'), color: '#000000' }}>12 Feb,2022  5:00 PM</Text>
                                    <Text style={{ fontFamily: "Roboto-Medium", fontSize: hp('1.2%'), color: '#04bf39' }}>Active</Text>
                                </View>
                                <View style={{ flexDirection: "row", height: hp('4%'), width: wp('88%'), paddingLeft: wp('1.5%'), alignItems: "center" }}>
                                    <Text style={{ fontFamily: "Roboto-Medium", fontSize: hp('1.5%'), color: Colors.primaryColor1 }}>Online Consutation</Text>
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
                                    <View style={{ height: hp('8%'), width: wp('30%'), justifyContent: 'center', alignItems: 'center' }}>
                                        <TouchableOpacity style={{ width: wp('24%'), height: hp('4%'), backgroundColor: Colors.primaryColor1, borderRadius: hp('0.8%'), alignItems: 'center', justifyContent: 'center' }} onPress={() => props.navigation.navigate('voicePage')}   >
                                            {/* <Text style={{ fontFamily: "Roboto-Bold", fontSize: hp('1.5%'), color: Colors.primaryColor8, textAlign: "center" }}>VIEW DETAILS</Text> */}

                                            <Text style={{ fontFamily: "Roboto-Bold", fontSize: hp('1.5%'), color: Colors.primaryColor8, }}>VIEW DETAILS</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View style={{ width: wp('88%'), height: hp('3%'), flexDirection: 'row', alignItems: "center" }}>
                                    <Text style={{ fontFamily: "Roboto-Bold", fontSize: hp('1%'), color: Colors.primaryColor1, marginLeft: wp('1.5%') }}>Patient Name</Text>
                                    <Text style={{ fontFamily: "Roboto-Medium", fontSize: hp('1%'), color: Colors.primaryColor7, marginLeft: wp('1.5%') }}>Olivia Rodrigo,21, Female</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ backgroundColor: '#ffffff', height: hp('23%'), width: wp('96%'), alignSelf: "center" }}>
                            <View style={{ backgroundColor: '#ffffff', height: hp('20%'), width: wp('88%'), alignSelf: "center", marginTop: hp('2%'), borderRadius: hp('1%'), shadowColor: Colors.primaryColor7, elevation: hp('0.7%') }}>
                                <View style={{ flexDirection: "row", backgroundColor: '#e9edf7', height: hp('3%'), width: wp('88%'), borderTopLeftRadius: hp('1%'), borderTopRightRadius: hp('1%'), justifyContent: "space-between", paddingLeft: wp('1.5%'), paddingRight: wp('1.5%'), alignItems: "center" }}>
                                    <Text style={{ fontFamily: "Roboto-Medium", fontSize: hp('1.2%'), color: '#000000' }}>12 Feb,2022  5:00 PM</Text>
                                    <Text style={{ fontFamily: "Roboto-Medium", fontSize: hp('1.2%'), color:'#ff0000' }}>Cancelled</Text>
                                </View>
                                <View style={{ flexDirection: "row", height: hp('4%'), width: wp('88%'), paddingLeft: wp('1.5%'), alignItems: "center" }}>
                                    <Text style={{ fontFamily: "Roboto-Medium", fontSize: hp('1.5%'), color: Colors.primaryColor1 }}>In-Clinic Visit</Text>
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
                                    <View style={{ height: hp('8%'), width: wp('30%'), justifyContent: 'center', alignItems: 'center', }}>
                                        <TouchableOpacity style={{ width: wp('24%'), height: hp('4%'), backgroundColor: Colors.primaryColor1, borderRadius: hp('0.8%'), alignItems: 'center', justifyContent: 'center' }} onPress={() => props.navigation.navigate("CancellationDetailsThird")} >
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
                        <View style={{ backgroundColor: '#ffffff', height: hp('3%'), width: wp('88%'), alignSelf: "center", justifyContent: "center", paddingLeft: wp('1%'), }}>
                            <Text style={{ fontFamily: 'Roboto-Bold', fontSize: hp('2%'), color: '#000000' }}>Upcoming</Text>
                        </View>
                        <View style={{ backgroundColor: '#ffffff', height: hp('23%'), width: wp('96%'), alignSelf: "center" }}>
                            <View style={{
                                backgroundColor: "white", height: hp('20%'), width: wp('88%'), alignSelf: "center", marginTop: hp('2%'), borderRadius: hp('1%'), shadowColor: Colors.primaryColor7, elevation: hp('0.7%')
                            }}>
                                <View style={{ flexDirection: "row", backgroundColor: '#e9edf7', height: hp('3%'), width: wp('88%'), borderTopLeftRadius: hp('1%'), borderTopRightRadius: hp('1%'), justifyContent: "space-between", paddingLeft: wp('1.5%'), paddingRight: wp('1.5%'), alignItems: "center" }}>
                                    <Text style={{ fontFamily: "Roboto-Medium", fontSize: hp('1.2%'), color: '#000000' }}>12 Feb,2022  5:00 PM</Text>
                                    <Text style={{ fontFamily: "Roboto-Medium", fontSize: hp('1.2%'), color:'#04bf39'}}>Active</Text>
                                </View>
                                <View style={{ flexDirection: "row", height: hp('4%'), width: wp('88%'), paddingLeft: wp('1.5%'), alignItems: "center" }}>
                                    <Text style={{ fontFamily: "Roboto-Medium", fontSize: hp('1.5%'), color: Colors.primaryColor1 }}>In-Clinic Visit</Text>
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
                                        <TouchableOpacity style={{ width: wp('24%'), height: hp('4%'), backgroundColor: Colors.primaryColor1, borderRadius: hp('0.8%'), alignSelf: 'center', justifyContent: 'center' }} onPress={() => props.navigation.navigate("HospitalVisitFindDoctor")} >
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
                        <View style={{ backgroundColor: '#ffffff', height: hp('3%'), width: wp('88%'), alignSelf: "center", justifyContent: "center", paddingLeft: wp('1%') }}>
                            <Text style={{ fontFamily: 'Roboto-Bold', fontSize: hp('2%'), color: '#000000' }}>Past</Text>
                        </View>
                        <View style={{ backgroundColor: '#ffffff', height: hp('23%'), width: wp('96%'), alignSelf: "center" }}>
                            <View style={{ backgroundColor: '#ffffff', height: hp('20%'), width: wp('88%'), alignSelf: "center", marginTop: hp('2%'), borderRadius: hp('1%'), shadowColor: Colors.primaryColor7, elevation: hp('0.7%') }}>
                                <View style={{ flexDirection: "row", backgroundColor: '#e9edf7', height: hp('3%'), width: wp('88%'), borderTopLeftRadius: hp('1%'), borderTopRightRadius: hp('1%'), justifyContent: "space-between", paddingLeft: wp('1.5%'), paddingRight: wp('1.5%'), alignItems: "center" }}>
                                    <Text style={{ fontFamily: "Roboto-Medium", fontSize: hp('1.2%'), color: '#000000' }}>12 Feb,2022  5:00 PM</Text>
                                    <Text style={{ fontFamily: "Roboto-Medium", fontSize: hp('1.2%'), color: Colors.primaryColor2 }}>Completed</Text>
                                </View>
                                <View style={{ flexDirection: "row", height: hp('4%'), width: wp('88%'), paddingLeft: wp('1.5%'), alignItems: "center" }}>
                                    <Text style={{ fontFamily: "Roboto-Medium", fontSize: hp('1.5%'), color: Colors.primaryColor1 }}>In-Clinic Visit</Text>
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
                                        <TouchableOpacity style={{ width: wp('24%'), height: hp('4%'), backgroundColor: Colors.primaryColor1, borderRadius: hp('0.8%'), alignSelf: 'center', justifyContent: 'center' }} onPress={() => props.navigation.navigate("PastAppointmentFindDoctor")} >
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
                        <View style={{ backgroundColor: '#ffffff', height: hp('23%'), width: wp('96%'), alignSelf: "center" }}>
                            <View style={{ backgroundColor: "white", height: hp('20%'), width: wp('88%'), alignSelf: "center", marginTop: hp('2%'), borderRadius: hp('1%'), shadowColor: Colors.primaryColor7, elevation: hp('0.7%') }}>
                                <View style={{ flexDirection: "row", backgroundColor: '#e9edf7', height: hp('3%'), width: wp('88%'), borderTopLeftRadius: hp('1%'), borderTopRightRadius: hp('1%'), justifyContent: "space-between", paddingLeft: wp('1.5%'), paddingRight: wp('1.5%'), alignItems: "center" }}>
                                    <Text style={{ fontFamily: "Roboto-Medium", fontSize: hp('1.2%'), color: '#000000' }}>12 Feb,2022  5:00 PM</Text>
                                    <Text style={{ fontFamily: "Roboto-Medium", fontSize: hp('1.2%'), color: Colors.primaryColor2 }}>Completed</Text>
                                </View>
                                <View style={{ flexDirection: "row", height: hp('4%'), width: wp('88%'), paddingLeft: wp('1.5%'), alignItems: "center" }}>
                                    <Text style={{ fontFamily: "Roboto-Medium", fontSize: hp('1.5%'), color: Colors.primaryColor1 }}>In-Clinic Visit</Text>
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
                                        <TouchableOpacity style={{ width: wp('24%'), height: hp('4%'), backgroundColor: Colors.primaryColor1, borderRadius: hp('0.8%'), alignSelf: 'center', justifyContent: 'center' }}>
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

export default AllMyConsultation;

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
    heading: {
        color: Colors.primaryColor8,
        fontFamily: 'Roboto-Medium',
        fontSize: hp('2%'),
    },
})