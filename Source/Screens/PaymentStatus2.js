import { View, Text, StyleSheet, SafeAreaView, FlatList, ScrollView, Image, TouchableOpacity, StatusBar } from 'react-native'
import React, { useState } from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Colors from '../Assetst/Constants/Colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Rating } from 'react-native-ratings';
import LottieView from 'lottie-react-native';
import Modal from "react-native-modal";



const PaymentStatusFindDoctor = (props) => {

    const [color, setColor] = useState(true);
    const [myColor, setMyColor] = useState(true);


    const MyButton = () => {
        setColor(true)
        setMyColor(false)

    }
    const YourButton = () => {
        setMyColor(true)
        setColor(false)

    }
    const [myModal, setMyModal] = useState(false);

    const toggleMyMobile = () => {
        setMyModal(!myModal);
    };
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <StatusBar
                    backgroundColor={Colors.primaryColor1} />
                <View style={styles.head}>
                    <Text style={styles.heading}>Payment Status</Text>
                </View>
                <View style={{ width: wp('100%'), height: hp('92%'), backgroundColor: Colors.primaryColor3, alignSelf: "center" }}>
                    <View style={{ width: wp('100%'), height: hp('38%'), alignSelf: "center", marginTop: hp('2.6%') }}>
                        <LottieView source={require('../Assetst/Images/Lottie/data.json')} autoPlay loop={false}
                            style={{ height: hp('28%'), marginTop: hp('4.2%'), alignSelf: "center" }} />
                    </View>
                    <View style={{ width: wp('100%'), height: hp('8%'), alignSelf: "center", justifyContent: "center", borderColor: Colors.primaryColor5, borderBottomWidth: hp('0.1%') }}>
                        <Text style={{ textAlign: "center", color: Colors.primaryColor7, fontFamily: "Roboto-Regular", fontSize: hp('1.8%') }}>Your payment has been processed!</Text>
                        <Text style={{ textAlign: "center", color: Colors.primaryColor7, fontFamily: "Roboto-Regular", fontSize: hp('1.8%') }}>Details of transcation are included below</Text>
                    </View>
                    <View style={{ width: wp('100%'), height: hp('6%'), alignSelf: "center", justifyContent: "center" }}>
                        <Text style={{ textAlign: "center", color: Colors.primaryColor2, fontFamily: "Roboto-Bold", fontSize: hp('1.7%') }}>Transcation Number:123456789</Text>
                    </View>
                    <View style={{ width: wp('100%'), height: hp('6%'), alignSelf: "center", justifyContent: "space-between", marginTop: hp('1%'), flexDirection: "row", borderBottomColor: Colors.primaryColor5, borderBottomWidth: hp('0.1%'), paddingLeft: wp('6%'), paddingRight: wp('6%') }}>
                        <Text style={{ color: Colors.primaryColor6, fontFamily: "Roboto-Medium", fontSize: hp('1.7%'), textAlignVertical: "center" }}>TOTAL AMOUNT PAID</Text>
                        <Text style={{ color: Colors.primaryColor6, fontFamily: "Roboto-Medium", fontSize: hp('1.7%'), textAlignVertical: "center" }}> ₹840</Text>
                    </View>
                    <View style={{ width: wp('100%'), height: hp('6%'), alignSelf: "center", justifyContent: "space-between", flexDirection: "row", paddingLeft: wp('6%'), paddingRight: wp('6%') }}>
                        <Text style={{ color: Colors.primaryColor6, fontFamily: "Roboto-Medium", fontSize: hp('1.7%'), textAlignVertical: "center" }}>PAID BY</Text>
                        <Text style={{ color: Colors.primaryColor6, fontFamily: "Roboto-Medium", fontSize: hp('1.7%'), textAlignVertical: "center" }}>PAYTM</Text>
                    </View>

                    <View style={{ width: wp('100%'), height: hp('6%'), alignSelf: "center", justifyContent: "space-between", flexDirection: "row", borderTopColor: Colors.primaryColor5, borderTopWidth: hp('0.1%'), paddingLeft: wp('6%'), paddingRight: wp('6%') }}>
                        <Text style={{ color: Colors.primaryColor6, fontFamily: "Roboto-Medium", fontSize: hp('1.7%'), textAlignVertical: "center" }}>TRANSACTION DATE</Text>
                        <Text style={{ color: Colors.primaryColor6, fontFamily: "Roboto-Medium", fontSize: hp('1.7%'), textAlignVertical: "center" }}>22aug 2020, 05:25 AM</Text>
                    </View>
                    <View style={{ width: wp('86%'), height: hp('9%'), alignSelf: "center", justifyContent: "center", alignItems: "center", marginTop: hp('2.2%') }}>
                        <TouchableOpacity onPress={toggleMyMobile} style={{ width: wp('80%'), height: hp('7%'), backgroundColor: "white", borderRadius: hp('1%'), backgroundColor: Colors.primaryColor1, alignItems: "center", justifyContent: "center" }}>
                            <Text style={{ color: Colors.primaryColor8, fontFamily: "Roboto-Bold", fontSize: hp('2%') }}>Continue</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ bottom: 0, }}>
                    <Modal isVisible={myModal}
                        animationIn='zoomIn'
                        // animationOutTiming={500}
                        // animationInTiming={500}
                        hideModalContentWhileAnimating={true}
                        useNativeDriverForBackdrop={true}
                        onBackdropPress={() => setMyModal(false)}
                        onSwipeComplete={() => setMyModal(false)}
                        swipeDirection={['down']}
                        avoidKeyboard={true}
                        useNativeDriver={true}
                        style={{ width: wp('90%'), }}>
                        <View style={{ width: wp('92%'), height: hp('17%'), backgroundColor: 'white', borderRadius: hp('1%') }}>
                            <View style={{ width: wp('84.2%'), height: hp('8%'), justifyContent: "center", marginTop: hp('1%'), alignSelf: "center" }}>
                                <Text style={{ color: Colors.primaryColor6, fontFamily: 'Roboto-Bold', fontSize: hp('1.7%')}} numberOfLines={1}>You will get a SMS notification with your appointment</Text>
                                <Text style={{ color: Colors.primaryColor6, fontFamily: 'Roboto-Bold', fontSize: hp('1.7%') }} numberOfLines={1}>details.Your Appointment Id is 11100053210.</Text>
                            </View>
                            <View style={{ width: wp('84.2%'), height: hp('6%'), alignItems: "center", justifyContent: "center", marginTop: hp('1%'), alignSelf: "center" }}>
                                <TouchableOpacity onPress={() => props.navigation.navigate('Loading')} style={{ width: wp('30%'), height: hp('4.8%'), backgroundColor: Colors.primaryColor1, justifyContent: 'center', alignItems: 'center', borderRadius: hp('1%') }}  >
                                    <Text style={{ color: '#ffffff', fontFamily: 'Roboto-Bold', fontSize: hp('1.5%') }}>Okay</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Modal>
                </View>

                {/* <View style={{ bottom: 0, }}>
                    <Modal isVisible={myModal}
                        animationIn='slideInUp'
                        // animationOutTiming={500}
                        // animationInTiming={500}
                        hideModalContentWhileAnimating={true}
                        useNativeDriverForBackdrop={true}
                        onBackdropPress={() => setMyModal(false)}
                        onSwipeComplete={() => setMyModal(false)}
                        swipeDirection={['down']}
                        avoidKeyboard={true}
                        useNativeDriver={true}
                        style={{ width: wp('90%'), }}>
                        <View style={{ width: wp('99%'), height: hp('50%'), backgroundColor: 'white', alignSelf: "center", borderTopLeftRadius: hp('1.2%'), borderTopRightRadius: hp('1.2%'), marginTop: hp('52%'), alignItems: "center" }}>
                            <View style={{ width: wp('90%'), height: hp('20%'), justifyContent: "center", marginTop: hp('1%'), alignSelf: "center", }}>
                                <LottieView source={require('../Assets/Lottie/Summit.json')} autoPlay loop={false}
                                    style={{ height: hp('19%'), alignSelf: "center", }} />
                            </View>
                            <Text style={{ color: Colors.primaryColor7, fontFamily: 'Roboto-Bold', fontSize: hp('2.6%') }}>Appointment Successful</Text>
                            <Text style={{ color: Colors.primaryColor6, fontFamily: 'Roboto-Bold', fontSize: hp('1.8%'), marginTop: hp('1.5%') }}>Your Appointment has been Successfully</Text>
                            <Text style={{ color: Colors.primaryColor6, fontFamily: 'Roboto-Bold', fontSize: hp('1.8%') }}>booked with Dr.Harshita Reddy.</Text>
                            <View style={{ height: hp('8%'), width: wp('88%'), alignSelf: "center", flexDirection: "row", justifyContent: "space-between", marginTop: ('4.8%'), paddingLeft: wp('0.5%'), paddingRight: wp('0.5%'), }}>
                                <TouchableOpacity onPress={MyButton}
                                    style={[styles.eng, { backgroundColor: color ? "#09c6f9" : "white" }]}>
                                    <Text style={[styles.enter, { color: color ? "white" : "#09c6f9" }]}>DONE</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={YourButton}
                                    style={[styles.hin, { backgroundColor: myColor ? "#09c6f9" : "white" }]}>
                                    <Text style={[styles.enter, { color: myColor ? "white" : "#09c6f9" }]}>Go To Appointment</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Modal>
                </View> */}

            </View>
        </SafeAreaView>
    )
}

export default PaymentStatusFindDoctor;

const styles = StyleSheet.create({
    container: {
        width: wp('100%'),
        height: hp('100%'),
        backgroundColor: Colors.primaryColor3,
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
    enter: {
        fontSize: hp('2%'),
        fontWeight: "bold",

        fontFamily: "Roboto"
    },
    eng: {
        height: hp('5.5%'),
        width: wp('37%'),
        justifyContent: "center",
        alignItems: "center",
        borderRadius: hp('0.9%'),
        alignSelf: "center",
        borderColor: Colors.primaryColor1,
        borderWidth: hp('0.2%'),
    },
    hin: {
        height: hp('5.5%'),
        width: wp('37%'),
        justifyContent: "center",
        alignItems: "center",
        borderRadius: hp('0.9%'),
        alignSelf: "center",
        borderColor: Colors.primaryColor1,
        borderWidth: hp('0.2%'),
    },

})