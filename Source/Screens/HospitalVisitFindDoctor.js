import { View, Text, StyleSheet, SafeAreaView, FlatList, ScrollView, Image, TouchableOpacity, StatusBar } from 'react-native'
import React, { useState } from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Colors from '../Assetst/Constants/Colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Rating } from 'react-native-ratings';
import LinearGradient from 'react-native-linear-gradient';
import Modal from "react-native-modal";

const Visit = (props) => {
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


    const [isModalVisible, setModalVisible] = useState(false);

    const toggleMobileModal = () => {
        setModalVisible(!isModalVisible);
    };

    const [colors, setColors] = useState(true);
    const [myColors, setMyColors] = useState(false);


    const ChangeSlot = () => {
        setColors(true)
        setMyColors(false)

    }
    const Cancel = () => {
        setMyColors(true)
        setColors(false)

    }
    const [myModalVisible, setMyModalVisible] = useState(false);

    const toggleMyMobileModal = () => {
        setMyModalVisible(!myModalVisible);
    };


    const [colori, setColorin] = useState(true);
    const [myColori, setMyColorin] = useState(true);


    const MyButtonin = () => {
        setColorin(true)
        setMyColorin(false)

    }

    const YourButtonin = () => {
        setMyColorin(true)
        setColorin(false)
    };

    const [myModalVisiblei, setMyModalVisiblei] = useState(false);

    const toggleMyMobileModali = () => {
        setMyModalVisiblei(!myModalVisiblei);
        setMyModalVisible(false)
    };

    const [myModal, setMyModal] = useState(false);

    const toggleMyMobile = () => {
        setMyModal(!myModal);
        setMyModalVisiblei(false)

    };

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <StatusBar
                    backgroundColor={Colors.primaryColor1} />


                <View style={styles.head}>
                    <TouchableOpacity style={{ width: wp('15%'), height: hp('4%'), alignSelf: "center", flexDirection: "row", justifyContent: "center", alignItems: "center", marginLeft: wp('2%') }} onPress={() => props.navigation.goBack("MyAppointmentFindDoctors")}>
                        <AntDesign name="left" size={hp('2%')} color='white' />
                        <Text style={{ fontFamily: "Roboto-Regular", fontSize: hp('2%'), color: Colors.primaryColor8 }}>Back</Text>
                    </TouchableOpacity>
                    <Text style={{ fontFamily: "Roboto-Bold", fontSize: hp('2%'), color: Colors.primaryColor8, textAlignVertical: "center", paddingLeft: wp('20%') }}>Hospital Visit</Text>
                </View>

                <View style={{ width: wp('100%'), height: hp('86%'), alignSelf: "center", backgroundColor: Colors.primaryColor8 }}>

                    <View style={styles.details}>
                        <View style={styles.doctor}>

                            <View style={styles.img}>
                                <Image source={require('../Assetst/Images/doctor4.png')} style={{ width: wp('25.5%'), height: hp('13.2%'), borderRadius: hp('1%') }} />

                            </View>
                            <View style={styles.doc}>
                                <Text style={{ color: Colors.primaryColor7, fontFamily: "Roboto-Bold", fontSize: hp('2.5%') }}>Dr. Shruti Kedia</Text>
                                <Text style={{ color: Colors.primaryColor2, fontFamily: "Roboto-Medium", fontSize: hp('2.2%') }}>Cardiology</Text>
                                <Text style={{ color: Colors.primaryColor6, fontFamily: "Roboto-Medium", fontSize: hp('1.5%') }}>7 Years experience</Text>
                                <Text style={{ color: Colors.primaryColor7, fontFamily: "Roboto-Bold", fontSize: hp('1.5%') }}>MBBS,MD</Text>
                                <Text style={{ color: Colors.primaryColor6, fontFamily: "Roboto-Regular", fontSize: hp('1.5%') }}>English/Hindi</Text>
                                <Rating
                                    type='star'
                                    ratingCount={5}
                                    ratingColor='#f6d060'
                                    imageSize={wp('3.2%')}
                                    onFinishRating={(rating) => {
                                        Alert.alert('Star Rating: ' + JSON.stringify(rating));
                                    }}
                                    style={{ alignItems: "flex-start", paddingTop: hp('0.2%') }} />
                            </View>
                        </View>
                    </View>
                    <View style={styles.time}>
                        <Text style={{ color: Colors.primaryColor1, fontFamily: "Roboto-Bold", fontSize: hp('2%') }}>Patient Details</Text>
                        <Text style={{ color: Colors.primaryColor1, fontFamily: "Roboto-Bold", fontSize: hp('2%') }}>Today At 5:00 PM</Text>

                    </View>
                    <View style={styles.patientDet}>
                        <Text style={{ color: Colors.primaryColor7, fontFamily: "Roboto-Medium", fontSize: hp('1.7%'), }}>Suman Dubey</Text>
                        <Text style={{ color: Colors.primaryColor7, fontFamily: "Roboto-Medium", fontSize: hp('1.7%') }}>21,Female</Text>
                        <Text style={{ color: Colors.primaryColor7, fontFamily: "Roboto-Medium", fontSize: hp('1.7%'), }}>9891502453</Text>
                        <Text style={{ color: Colors.primaryColor7, fontFamily: "Roboto-Bold", fontSize: hp('1.7%'), }}>olivia@gmail.com</Text>
                    </View>


                    <View style={styles.reason}>
                        <Text style={{ color: Colors.primaryColor1, fontFamily: "Roboto-Bold", fontSize: hp('2%') }}>Location</Text>
                    </View>

                    <View style={styles.map}>
                        <Text style={{ color: Colors.primaryColor7, fontFamily: "Roboto-Regular", fontSize: hp('1.7%') }}>Fortis Hospital,b-22,D Block,Sector-62,Noida,</Text>
                        <Text style={{ color: Colors.primaryColor7, fontFamily: "Roboto-Regular", fontSize: hp('1.7%') }}>Uttar Pradesh 201301</Text>
                    </View>
                    <View style={styles.hosp}>
                        <Image source={require('../Assetst/Images/Map.png')} style={{ width: wp('88%'), height: hp('19%') }} />

                    </View>

                    <View style={styles.amount}>
                        <Text style={{ color: Colors.primaryColor1, fontFamily: "Roboto-Bold", fontSize: hp('2%') }}>Total Amount Due</Text>
                        <Text style={{ color: Colors.primaryColor7, fontFamily: "Roboto-Bold", fontSize: hp('2%') }}>₹249</Text>
                    </View>
                    <View style={{ width: wp('80%'), height: hp('4.5%'), flexDirection: "row", alignSelf: "center", justifyContent: "center", marginTop: hp('6.2%') }}>
                        <Text style={{ color: Colors.primaryColor7, fontFamily: "Roboto-Bold", fontSize: hp('2%'), textAlignVertical: "center" }}>NOTE:</Text>
                        <Text style={{ color: Colors.primaryColor7, fontFamily: "Roboto-Regular", fontSize: hp('2%'), textAlignVertical: "center" }}>Please bring your Aadhar Card with you</Text>
                    </View>




                    <View style={{ bottom: 0, }}>
                        <Modal isVisible={isModalVisible}
                            animationIn='zoomIn'
                            hideModalContentWhileAnimating={true}
                            useNativeDriverForBackdrop={true}
                            onBackdropPress={() => setModalVisible(false)}
                            onSwipeComplete={() => setModalVisible(false)}
                            swipeDirection={['down']}
                            avoidKeyboard={true}
                            useNativeDriver={true}
                            style={{ width: wp('90%'), }}
                        >

                            <View style={{ width: wp('90%'), height: hp('30%'), backgroundColor: 'white', borderRadius: hp('1%'), }}>
                                <View style={{ width: wp('85%'), height: hp('20%'), alignSelf: "center", marginTop: hp('1.5%') }}>
                                    <Text style={{ fontFamily: 'Roboto-Bold', fontSize: hp('2%'), color: Colors.primaryColor7, marginLeft: hp('2%'), }}>Reschedule</Text>
                                    <Text style={{ fontFamily: 'Roboto-Regular', fontSize: hp('1.7%'), color: Colors.primaryColor1, marginLeft: hp('2%'), marginTop: hp('1%') }}>We are sorry that you have to reschedule your</Text>
                                    <Text style={{ fontFamily: 'Roboto-Regular', fontSize: hp('1.7%'), color: Colors.primaryColor1, marginLeft: hp('2%') }}>Consultantion</Text>
                                    <Text style={{ fontFamily: 'Roboto-Regular', fontSize: hp('1.7%'), color: Colors.primaryColor1, marginLeft: hp('2%') }}>You can reschedule up to 5 times for free.</Text>
                                    <Text style={{ fontFamily: 'Roboto-Regular', fontSize: hp('1.7%'), color: Colors.primaryColor1, marginLeft: hp('2%'), marginTop: hp('2%') }}>Next slot available for Dr. Shruti Kedia is on</Text>
                                    <Text style={{ fontFamily: 'Roboto-Regular', fontSize: hp('1.7%'), color: Colors.primaryColor1, marginLeft: hp('2%') }}>14 February 2022, 4:00 PM</Text>

                                    <View style={{ width: wp('80%'), flexDirection: 'row', justifyContent: 'space-between', height: hp('8%'), marginTop: hp('2%'), alignSelf: "center" }}  >
                                        <TouchableOpacity onPressIn={() => { ChangeSlot(); MyButtonin(); }} style={[styles.cancel, { backgroundColor: colori ? "#09c6f9" : "white" }]} onPress={() => props.navigation.navigate("BookingSlotTime")} >
                                            <Text style={[styles.can, { color: colori ? "white" : "#09c6f9" }]}>CHANGE SLOT</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => { setModalVisible(false); YourButtonin(); }} style={[styles.change, { backgroundColor: myColori ? "#09c6f9" : "white" }]}>
                                            <Text style={[styles.can, { color: myColori ? "white" : "#09c6f9" }]} >CANCEL</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </Modal>
                    </View>


                    <View style={{ bottom: 0, }}>
                        <Modal isVisible={myModalVisible}
                            animationIn='zoomIn'
                            hideModalContentWhileAnimating={true}
                            useNativeDriverForBackdrop={true}
                            onBackdropPress={() => setMyModalVisible(false)}
                            onSwipeComplete={() => setMyModalVisible(false)}
                            swipeDirection={['down']}
                            avoidKeyboard={true}
                            useNativeDriver={true}
                            style={{ width: wp('90%'), }}
                        >

                            <View style={{ width: wp('90%'), height: hp('22%'), backgroundColor: 'white', borderRadius: hp('1%') }}>
                                <View style={{ width: wp('83%'), height: hp('8%'), alignSelf: "center", alignItems: "flex-start", marginTop: hp('2%') }}>
                                    <Text style={{ fontFamily: 'Roboto-Bold', fontSize: hp('2%'), color: Colors.primaryColor2 }}>Appointment Cancellation</Text>
                                    <Text style={{ fontFamily: 'Roboto-Regular', fontSize: hp('1.7%'), color: Colors.primaryColor1, marginTop: hp('1.5%') }}>Would you like to proceed with cancellation process?</Text>


                                    <View style={{ width: wp('84%'), height: hp('8%'), flexDirection: 'row', justifyContent: "space-between", alignItems: "center", marginTop: hp('3.8%') }}>
                                        <TouchableOpacity onPress={() => { ChangeSlot(); MyButtonin(); }} style={[styles.cancel, { backgroundColor: colori ? "#09c6f9" : "white" }]} >
                                            <Text style={[styles.can, { color: colori ? "white" : "#09c6f9" }]}>CANCEL</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => { YourButtonin(); toggleMyMobileModali(); }} style={[styles.change, { backgroundColor: myColori ? "#09c6f9" : "white" }]}>
                                            <Text style={[styles.can, { color: myColori ? "white" : "#09c6f9" }]}>CONFIRM</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </Modal>
                    </View>


                    <View style={{ bottom: 0, }}>
                        <Modal isVisible={myModalVisiblei}
                            animationIn='zoomIn'
                            hideModalContentWhileAnimating={true}
                            useNativeDriverForBackdrop={true}
                            onBackdropPress={() => setMyModalVisiblei(false)}
                            onSwipeComplete={() => setMyModalVisiblei(false)}
                            swipeDirection={['down']}
                            avoidKeyboard={true}
                            useNativeDriver={true}
                            style={{ width: wp('90%'), }}
                        >

                            <View style={{ width: wp('90%'), height: hp('22%'), backgroundColor: 'white', borderRadius: hp('1%') }}>
                                <View style={{ width: wp('83%'), height: hp('8%'), alignSelf: "center", alignItems: "flex-start", marginTop: hp('2%') }}>
                                    <Text style={{ fontFamily: 'Roboto-Bold', fontSize: hp('2%'), color: Colors.primaryColor2 }}>Cancel Consultantion</Text>
                                    <Text style={{ fontFamily: 'Roboto-Regular', fontSize: hp('1.7%'), color: Colors.primaryColor1, marginTop: hp('1.5%') }}>Select a reason for cancelling your consultation</Text>


                                    <View style={{ width: wp('84%'), height: hp('8%'), justifyContent: "space-between", alignItems: "center", marginTop: hp('3.8%') }}>
                                        <TouchableOpacity onPress={() => { YourButtonin(); toggleMyMobile(); }} style={[styles.cancel, { backgroundColor: colori ? "#09c6f9" : "white" }]} >
                                            <Text style={[styles.can, { color: colori ? "white" : "#09c6f9" }]}>Submit</Text>
                                        </TouchableOpacity>

                                    </View>
                                </View>
                            </View>
                        </Modal>
                    </View>








                    <View style={{ bottom: 0, }}>
                        <Modal isVisible={myModal}
                            animationIn='zoomIn'
                            hideModalContentWhileAnimating={true}
                            useNativeDriverForBackdrop={true}
                            onBackdropPress={() => setMyModal(false)}
                            onSwipeComplete={() => setMyModal(false)}
                            swipeDirection={['down']}
                            avoidKeyboard={true}
                            useNativeDriver={true}
                            style={{ width: wp('90%'), }}
                        >

                            <View style={{ width: wp('90%'), height: hp('18%'), backgroundColor: 'white', borderRadius: hp('1%') }}>
                                <View style={{ width: wp('83%'), height: hp('7%'), alignSelf: "center", alignItems: "flex-start", marginTop: hp('2.5%') }}>
                                    <Text style={{ fontFamily: 'Roboto-Bold', fontSize: hp('1.7%'), color: Colors.primaryColor1 }}>Hi Olivia Rodrigo!As per your request,your appointment</Text>
                                    <Text style={{ fontFamily: 'Roboto-Bold', fontSize: hp('1.7%'), color: Colors.primaryColor1 }}>with Dr. Shruti Kedia with a unique</Text>
                                    <Text style={{ fontFamily: 'Roboto-Bold', fontSize: hp('1.7%'), color: Colors.primaryColor1 }}>identification number #2209876 has been cancelled</Text>

                                    <View style={{ width: wp('83%'), height: hp('6%'), alignItems: "center", justifyContent: "center", marginTop: hp('1%') }}>
                                        <TouchableOpacity onPress={() => setMyModal(false)} style={[styles.cancel, { backgroundColor: colori ? "#09c6f9" : "white" }]} >
                                            <Text style={[styles.can, { color: colori ? "white" : "#09c6f9" }]}>Okay</Text>
                                        </TouchableOpacity>

                                    </View>
                                </View>
                            </View>
                        </Modal>
                    </View>
















                    <View style={{ height: hp('7%'), width: wp('84%'), alignSelf: "center", flexDirection: "row", justifyContent: "space-between" }}>

                        <TouchableOpacity onPress={() => { MyButton(); toggleMobileModal(); }}
                            style={[styles.eng, { backgroundColor: color ? "#09c6f9" : "white" }]}>
                            <Text style={[styles.enter, { color: color ? "white" : "#09c6f9" }]}>Reschedule</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => { YourButton(); toggleMyMobileModal(); }}

                            style={[styles.hin, { backgroundColor: myColor ? "#09c6f9" : "white" }]}>
                            <Text style={[styles.enter, { color: myColor ? "white" : "#09c6f9" }]}>Cancellation</Text>
                        </TouchableOpacity>
                    </View>



                </View>
            </View>
        </SafeAreaView>
    )
}

export default Visit;

const styles = StyleSheet.create({
    container: {
        width: wp('100%'),
        height: hp('100%'),
        backgroundColor: '#FFFFFF'
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
        alignSelf: "center",
        justifyContent: "center",

        marginTop: hp('3%')

    },
    doctor: {
        width: wp('95%'),
        height: hp('16%'),
        alignSelf: "center",
        flexDirection: "row",
        justifyContent: "center",
    },
    img: {
        width: wp('28%'),
        height: hp('15%'),
        alignItems: "center"
    },
    doc: {
        width: wp('65%'),
        height: hp('15%'),
        paddingLeft: wp('1%'),

    },
    time: {
        width: wp('92%'),
        height: hp('3.2%'),
        alignSelf: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingLeft: wp('0.8%'),
        paddingRight: wp('0.8%')

    },
    patientDet: {
        width: wp('92%'),
        height: hp('10%'),
        alignSelf: "center",
        borderTopColor: Colors.primaryColor5,
        borderTopWidth: wp('0.1%'),
        paddingLeft: hp('0.8')


    },
    reason: {
        width: wp('92%'),
        height: hp('3%'),
        alignSelf: "center",
        borderBottomColor: Colors.primaryColor5,
        borderBottomWidth: hp('0.1%'),
        justifyContent: "center",
        paddingLeft: hp('0.8%')

    },
    map: {
        width: wp('92%'),
        height: hp('4.5%'),
        alignSelf: "center",
        paddingLeft: hp('0.8%')

    },
    hosp: {
        width: wp('92%'),
        height: hp('19%'),
        alignSelf: "center",
        alignItems: "center",
        marginTop: hp('1.5%')

    },
    amount: {
        height: hp('5%'),
        width: wp('88%'),
        alignSelf: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomColor: Colors.primaryColor5,
        borderBottomWidth: hp('0.2%'),
        // paddingLeft:hp('0.8%')
    },
    enter: {
        fontSize: hp('2%'),
        fontWeight: "bold",

        fontFamily: "Roboto"
    },
    eng: {
        height: hp('5%'),
        width: wp('35%'),
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: hp('0.9%'),
        alignSelf: "center",
        borderColor: Colors.primaryColor1,
        borderWidth: hp('0.2%'),


    },
    hin: {
        height: hp('5%'),
        width: wp('35%'),
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: hp('0.9%'),
        alignSelf: "center",
        borderColor: Colors.primaryColor1,

        borderWidth: hp('0.2%'),
    },

    cancel: {
        width: wp('36%'),
        height: hp('5%'),
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: hp('0.7%'),
        alignSelf: "center",
        borderColor: Colors.primaryColor1,
        borderWidth: hp('0.2%'),

    },

    change: {
        width: wp('36%'),
        height: hp('5%'),
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: hp('0.7%'),
        alignSelf: "center",
        borderColor: Colors.primaryColor1,
        borderWidth: hp('0.2%'),

    },
    can: {
        alignItems: 'center',
        fontFamily: 'Roboto-Bold',
        fontSize: hp('1.8%')

    },
})