import { Alert, Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Colors from '../Assetst/Constants/Colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import { Rating } from 'react-native-ratings';
import { colors } from 'react-native-elements';


const CheckOut = (props) => {
    const [defaultRating, setDefaultRating] = useState(4);

    const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);


    const starImageFilled =
        'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_filled.png';

    const starImageCorner =
        'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_corner.png';



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
                    <View style={{ width: wp('60%'), flexDirection: 'row', justifyContent: 'space-between' }}>
                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginLeft: hp('2%'), marginTop: hp('1%') }} onPress={() => props.navigation.goBack('BookingSlotTime')}  >
                            <AntDesign name='left' size={hp('2%')} color='white' />
                            <Text style={{ fontSize: hp('2%'), fontFamily: 'Roboto-Medium', color: Colors.primaryColor3, justifyContent: 'center'}}>Back</Text>
                        </TouchableOpacity>
                        <Text style={{ fontSize: hp('2.3%'), fontFamily: 'Roboto-Bold', color: Colors.primaryColor3, justifyContent: 'center', marginTop: hp('1%') }}>Checkout</Text>
                    </View>
                </View>
                <View style={styles.details}>
                    <View style={styles.doctor}>
                        <View style={styles.img}>
                            <Image source={require('../Assetst/Images/doctor4.png')} style={{ width: wp('22%'), height: hp('13%'), borderRadius: hp('1%'), }} />
                        </View>
                        <View style={styles.doc}>
                            <Text style={{ color: Colors.primaryColor7, fontFamily: "Roboto-Bold", fontSize: hp('2.3%') }}>Dr. Shruti Kedia</Text>
                            <Text style={{ color: Colors.primaryColor1, fontFamily: "Roboto-Medium", fontSize: hp('2%') }}>Cardiology</Text>
                            <Text style={{ color: Colors.primaryColor6, fontFamily: "Roboto-Medium", fontSize: hp('1.5%') }}>7 Years experience</Text>
                            <Text style={{ color: Colors.primaryColor7, fontFamily: "Roboto-Bold", fontSize: hp('1.5%') }}>MBBS,MD</Text>
                            <View style={{ width: wp('18%'), height: hp('2.4%'), justifyContent: 'center', flexDirection: 'row',alignItems:'center',marginLeft:-wp('1.2%'),}}>
                                        {maxRating.map((item, key) => {
                                            return (
                                                <TouchableOpacity
                                                    activeOpacity={0.2}
                                                    key={item}
                                                    onPress={() => setDefaultRating(item)}>
                                                    <Image
                                                        style={{
                                                            width: wp('3%'),
                                                            height: hp('1.8%'),
                                                            resizeMode: 'cover',
                                                           marginLeft: wp('0.5%')
                                                        }}
                                                        source={
                                                            item <= defaultRating
                                                                ? { uri: starImageFilled }
                                                                : { uri: starImageCorner }
                                                        }
                                                    />
                                                </TouchableOpacity>
                                            );
                                        })}
                                    </View>

                        </View>
                        <View style={{ width: wp('25%'),alignItems:'center' }}>
                            <Text style={{ color: Colors.primaryColor1, fontFamily: "Roboto-Bold", fontSize: hp('1.5%'), marginTop: hp('9%') }}numberOfLines={1}>Today, 5:00 PM</Text>
                            <Text style={{ color: Colors.primaryColor1, fontFamily: "Roboto-Bold", fontSize: hp('1.5%')}}numberOfLines={1}>In-Clinic visit</Text>
                        </View>
                    </View>
                </View>

                <View style={{ width: wp('100%'), height: hp('32%'), backgroundColor: 'white', alignItems: 'center', marginTop: hp('1%') }}>
                    <View style={{ width: wp('90%'), height: hp('10%'), justifyContent: 'center', borderWidth: 1, borderColor: '#d3d3d3', marginTop: hp('2%'), borderRadius: hp('1%'), }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                <View style={{ width: wp('10%'), height: wp('10%'), justifyContent: 'center', alignItems: 'center', borderRadius: hp('6%'), marginLeft: hp('1%') }}>
                                    <Image source={require('../Assetst/Images/discount.png')} style={{ width: wp('11%'), height: wp('11%'), }} />

                                </View>
                                <View style={{ marginLeft: hp('2%'), }}>
                                    <Text style={{ color: Colors.primaryColor7, fontFamily: "Roboto-Bold", fontSize: hp('1.8%'), }}>Apply Refer Code</Text>
                                    <Text style={{ color: Colors.primaryGray, fontFamily: "Roboto-Bold", fontSize: hp('1.5%'), }}>Unlock offers with coupon</Text>
                                    <Text style={{ color: Colors.primaryGray, fontFamily: "Roboto-Bold", fontSize: hp('1.5%'), }}>code</Text>
                                </View>

                            </View>
                            <TouchableOpacity style={{ width: wp('10%') }}>
                                <Text style={{ color: Colors.primaryColor1, fontFamily: "Roboto-Bold", fontSize: hp('1.8%'), }}>Apply</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ width: wp('92%'), justifyContent: 'center', marginTop: hp('2%'), padding: wp('1%') }}>
                        <Text style={{ color: Colors.primaryColor7, fontFamily: "Roboto-Bold", fontSize: hp('1.8%'), }}>Bill Details</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: hp('2%') }}>
                            <Text style={{ color: Colors.primaryGray, fontFamily: "Roboto-Medium", fontSize: hp('1.8%'), }}>Consult Fee</Text>
                            <Text style={{ color: Colors.primaryGray, fontFamily: "Roboto-Medium", fontSize: hp('1.8%'), }}>{'\u20B9'}249</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: hp('1%') }}>
                            <Text style={{ color: Colors.primaryGray, fontFamily: "Roboto-Medium", fontSize: hp('1.8%'), }}>GST</Text>
                            <Text style={{ color: Colors.primaryGray, fontFamily: "Roboto-Medium", fontSize: hp('1.8%'), }}>{'\u20B9'}40</Text>
                        </View>
                        <View style={{ width: wp('100%'), borderWidth:wp('0.2%'), borderColor: Colors.primaryColor5, marginTop: hp('1%'),alignSelf:'center' }}></View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: hp('1%') }}>
                            <Text style={{ color: Colors.primaryColor7, fontFamily: "Roboto-Medium", fontSize: hp('1.8%'), }}>Total Pay</Text>
                            <Text style={{ color: Colors.primaryColor7, fontFamily: "Roboto-Medium", fontSize: hp('1.8%'), }}>{'\u20B9'}289</Text>
                        </View>
                    </View>
                </View>

                <View style={{ width: wp('100%'), height: hp('20%'), backgroundColor: 'white', alignItems: 'center', marginTop: hp('2%') }}>
                    <View style={{ width: wp('92%'), marginTop: hp('2%'), height: hp('15%') }}>
                        <Text style={{ color: Colors.primaryGray, fontFamily: "Roboto-Medium", fontSize: hp('1.8%'), marginTop: hp('1%'), marginLeft: hp('1%') }}>Note: cancellation charges applicable</Text>
                        <Text style={{ color: Colors.primaryGray, fontFamily: "Roboto-Medium", fontSize: hp('1.8%'), marginTop: hp('1%'), marginLeft: hp('1%') }}>Updates will be sent to your email id and mobile no</Text>
                        <Text style={{ color: Colors.primaryGray, fontFamily: "Roboto-Medium", fontSize: hp('1.8%'), marginTop: hp('1%'), marginLeft: hp('1%') }}>By booking the appointment you are agree to curaster</Text>
                        <TouchableOpacity>
                            <Text style={{ color: Colors.primaryColor2, fontFamily: "Roboto-Medium", fontSize: hp('1.8%'), marginTop: hp('1%'), marginLeft: hp('1%') }}>Terms and Conditions</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <TouchableOpacity style={{
                    width: wp('80%'), height: hp('6%'), justifyContent: 'center', alignItems: 'center', backgroundColor: Colors.primaryColor1,
                    borderRadius: hp('1.2%'), marginTop: hp('10%')
                }} onPress={() => props.navigation.navigate('PaymentMethod2')}>
                    <Text style={{ fontFamily: 'Roboto-Bold', fontSize: hp('2%'), color: Colors.primaryColor9, }}>Pay {'\u20B9'}289</Text>
                </TouchableOpacity>

            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    doctContainer: {
        width: wp('100%'),
        height: hp('100%'),
        alignItems: 'center',
        backgroundColor: Colors.primaryColor8
    },
    details: {
        width: wp('100%'),
        height: hp('18%'),
        // backgroundColor: Colors.primaryDark,
        alignItems: "center",
        justifyContent: "center",
        // marginTop:hp('2%')

    },
    doctor: {
        width: wp('100%'),
        height: hp('15%'),
        backgroundColor: Colors.primaryColor9,
        borderRadius: hp('1%'),
        // alignItems: "center",
        flexDirection: "row",
        justifyContent: "center",
    },
    img: {
        width: wp('25%'),
        height: hp('15%'),
        // backgroundColor: Colors.primaryDark,
        // alignSelf:"center",
        justifyContent: 'center',
        alignItems: 'center'
    },
    doc: {
        width: wp('45%'),
        height: hp('15%'),
        // backgroundColor: Colors.primaryColor9,
        justifyContent: "center",
        paddingLeft: wp('1%'),

    },

})


export default CheckOut;