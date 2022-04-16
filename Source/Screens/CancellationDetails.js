import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Image, StatusBar } from 'react-native'
import React, { useState } from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Colors from '../Assetst/Constants/Colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Rating } from 'react-native-ratings';




const CancellationDetails = (props) => {
    const [color, setColor] = useState(true);
    const [myColor, setMyColor] = useState(false);

    const MyButton = () => {
        setColor(true)
        setMyColor(false)
        props.navigation.navigate('Home')
    }
    const YourButton = () => {
        setMyColor(true)
        setColor(false)
        props.navigation.navigate('VideoConsultForGP')
    }
    const [defaultRating, setDefaultRating] = useState(4);

    const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);


    const starImageFilled =
        'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_filled.png';

    const starImageCorner =
        'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_corner.png';
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <StatusBar
                    backgroundColor={Colors.primaryColor1} />
                <View style={styles.head}>
                    <TouchableOpacity style={{ width: wp('15%'), height: hp('4%'), alignSelf: "center", flexDirection: "row", justifyContent: "center", alignItems: "center", marginLeft: wp('2%') }} onPress={() => props.navigation.goBack('MyAppointments')}>
                        <AntDesign name="left" size={hp('2%')} color='white' />
                        <Text style={{ fontFamily: "Roboto-Regular", fontSize: hp('2%'), color: Colors.primaryColor8 }}>Back</Text>
                    </TouchableOpacity>
                    <Text style={{ fontFamily: "Roboto-Bold", fontSize: hp('2%'), color: Colors.primaryColor8, textAlignVertical: "center", marginLeft: wp('17%') }}>Cancellation Details</Text>
                </View>
                <View style={{ width: wp('100%'), height: hp('88%'), backgroundColor: Colors.primaryColor8 }}>
                    <View style={styles.details}>
                        <View style={styles.doctor}>
                            <View style={styles.img}>
                                <Image source={require('../Assetst/Images/doctor4.png')} style={{ width: wp('27%'), height: hp('13%'), borderRadius: hp('1%') }} />
                            </View>
                            <View style={styles.doc}>
                                <Text style={{ color: Colors.primaryColor7, fontFamily: "Roboto-Bold", fontSize: hp('2.5%') }}>Dr. Shruti Kedia</Text>
                                <Text style={{ color: Colors.primaryColor1, fontFamily: "Roboto-Medium", fontSize: hp('2.2%') }}>Cardiology</Text>
                                <Text style={{ color: Colors.primaryColor6, fontFamily: "Roboto-Medium", fontSize: hp('1.5%') }}>7 Years experience</Text>
                                <Text style={{ color: Colors.primaryColor7, fontFamily: "Roboto-Bold", fontSize: hp('1.5%') }}>MBBS,MD</Text>
                                <Text style={{ color: Colors.primaryColor6, fontFamily: "Roboto-Regular", fontSize: hp('1.5%') }}>English/Hindi</Text>
                                <View style={{ width: wp('18.5%'), height: hp('2.5%'), justifyContent: 'center', flexDirection: 'row',alignItems:'center',marginLeft:-wp('1.9%')}}>
                                        {maxRating.map((item, key) => {
                                            return (
                                                <TouchableOpacity
                                                    activeOpacity={0.2}
                                                    key={item}
                                                    onPress={() => setDefaultRating(item)}>
                                                    <Image
                                                        style={{
                                                            width: wp('2.7%'),
                                                            height: hp('1.6%'),
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
                        </View>
                    </View>
                    <View style={styles.patient}>
                        <Text style={{ color: Colors.primaryColor1, fontFamily: "Roboto-Bold", fontSize: hp('2.3%'), paddingTop: hp('1%'), paddingLeft: wp('0.5%') }}>Booking Details</Text>
                        <View style={{ width: wp('90%'), height: hp('15%'), flexDirection: "row", alignSelf: "center", justifyContent: "space-between", borderBottomColor:'#d0dae0', borderTopColor: '#d0dae0', borderTopWidth: hp('0.2%'), borderBottomWidth: hp('0.2%') }}>
                            <View style={styles.patientDet}>
                                <Text style={{ color: Colors.primaryColor7, fontFamily: "Roboto-Medium", fontSize: hp('1.5%'), }}>Name</Text>
                                <Text style={{ color: Colors.primaryColor7, fontFamily: "Roboto-Medium", fontSize: hp('1.5%') }}>Mobile No.</Text>
                                <Text style={{ color: Colors.primaryColor7, fontFamily: "Roboto-Medium", fontSize: hp('1.5%'), }}>Booking Date & Time</Text>
                                <Text style={{ color: Colors.primaryColor7, fontFamily: "Roboto-Medium", fontSize: hp('1.5%'), }}>Transcation ID</Text>
                                <Text style={{ color: Colors.primaryColor7, fontFamily: "Roboto-Medium", fontSize: hp('1.5%'), }}>Amount Paid</Text>
                                <Text style={{ color: Colors.primaryColor7, fontFamily: "Roboto-Medium", fontSize: hp('1.5%'), }}>Payment Mode</Text>
                            </View>
                            <View style={styles.name}>
                                <Text style={{ color: Colors.primaryColor7, fontFamily: "Roboto-Medium", fontSize: hp('1.5%'), }}>Olivia Rodrigo</Text>
                                <Text style={{ color: Colors.primaryColor7, fontFamily: "Roboto-Medium", fontSize: hp('1.5%') }}>9432156096</Text>
                                <Text style={{ color: Colors.primaryColor7, fontFamily: "Roboto-Medium", fontSize: hp('1.5%'), }}>22 Aug,2020,5:25 AM</Text>
                                <Text style={{ color: Colors.primaryColor7, fontFamily: "Roboto-Medium", fontSize: hp('1.5%'), }}>123456789</Text>
                                <Text style={{ color: Colors.primaryColor7, fontFamily: "Roboto-Medium", fontSize: hp('1.5%'), }}>₹840</Text>
                                <Text style={{ color: Colors.primaryColor7, fontFamily: "Roboto-Medium", fontSize: hp('1.5%'), }}>Paytm</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.reason}>
                        <Text style={{ color: Colors.primaryColor1, fontFamily: "Roboto-Bold", fontSize: hp('2.3%') }}>Cancellation Reason</Text>
                    </View>
                    <View style={{ height: hp('5%'), width: wp('92%'), alignSelf: "center" }}>
                        <Text style={{ color: Colors.primaryColor7, fontFamily: "Roboto-Regular", fontSize: hp('1.5%'), paddingLeft: wp('0.5%') }}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed.</Text>
                    </View>
                    <View style={{ height: hp('5%'), width: wp('92%'), backgroundColor: Colors.green, alignSelf: "center", justifyContent: "center" }}>
                        <Text style={{ color: Colors.green2, fontFamily: "Roboto-Bold", fontSize: hp('2%'), padding: wp('1.3%') }}>Your refund has been initiated</Text>
                    </View>
                    <View style={{ height: hp('7%'), width: wp('92%'), alignSelf: "center", flexDirection: "row", justifyContent: "space-between", alignItems: "center", borderBottomColor: '#d0dae0', borderBottomWidth: hp('0.2%') }}>
                        <Text style={{ color: Colors.primaryColor7, fontFamily: "Roboto-Bold", fontSize: hp('2%'), padding: wp('0.5%'), }}>Amount Due</Text>
                        <Text style={{ color: Colors.primaryColor1, fontFamily: "Roboto-Bold", fontSize: hp('2%'), padding: wp('0.5%') }}>₹840</Text>
                    </View>
                    <View style={{ height: hp('8%'), width: wp('88%'), alignSelf: "center", flexDirection: "row", justifyContent: "space-between", marginTop: hp('14%'), paddingLeft: wp('0.5%'), paddingRight: wp('0.5%') }}>
                        <TouchableOpacity onPress={MyButton}
                            style={[styles.eng, { backgroundColor: color ? "#09c6f9" : "white", }]}>
                            <Text style={[styles.enter, { color: color ? "white" : "#09c6f9" }]}>Done</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={YourButton}
                            style={[styles.hin, { backgroundColor: myColor ? "#09c6f9" : "white", }]} >
                            <Text style={[styles.enter, { color: myColor ? "white" : "#09c6f9" }]} >Reschedule</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default CancellationDetails;


const styles = StyleSheet.create({
    container: {
        width: wp('100%'),
        height: hp('100%'),
        backgroundColor: Colors.primaryColor8,

    },
    head: {
        width: wp('100%'),
        height: hp('8%'),
        backgroundColor: Colors.primaryColor1,
        flexDirection: "row",
    },
    details: {
        width: wp('95%'),
        height: hp('20%'),
        alignSelf: "center",
        justifyContent: "center",
        marginTop: hp('3%')
    },
    doctor: {
        width: wp('95%'),
        height: hp('18%'),
        alignSelf: "center",
        flexDirection: "row",
        justifyContent: "center",
    },
    img: {
        width: wp('30%'),
        height: hp('16%'),
        alignSelf: "center",
        alignItems: "center",
        paddingTop: hp('0.4%')
       
    },
    doc: {
        width: wp('62%'),
        height: hp('16%'),
        alignSelf: "center",
        paddingLeft: wp('1%'),
        paddingTop: hp('0.4%')

    },
    patient: {
        width: wp('92%'),
        height: hp('20%'),
        alignSelf: "center",
    },
    patientDet: {
        width: wp('43%'),
        height: hp('13%'),
        alignSelf: "center",
        paddingLeft: wp('1%')

    },
    name: {
        width: wp('43%'),
        height: hp('13%'),
        alignItems: "flex-end",
        alignSelf: "center",
        paddingRight: wp('1%')
    },

    reason: {
        width: wp('92%'),
        height: hp('4%'),
        alignSelf: "center",
        marginTop: hp('1%'),
        paddingLeft: wp('0.5%')

    },
    enter: {
        fontSize: hp('1.5%'),
        fontWeight: "bold",
        fontFamily: "Roboto"
    },
    eng: {
        height: hp('5%'),
        width: wp('37%'),
        justifyContent: "center",
        alignItems: "center",
        borderRadius: hp('1%'),
        alignSelf: "center",
        borderColor: Colors.primaryColor1,
        borderWidth: hp('0.2%'),
    },
    hin: {
        height: hp('5%'),
        width: wp('37%'),
        justifyContent: "center",
        alignItems: "center",
        borderRadius: hp('1%'),
        alignSelf: "center",
        borderColor: Colors.primaryColor1,

        // borderColor:"#8f9194",
        borderWidth: hp('0.2%'),
        // borderColor:"black"
    },



})