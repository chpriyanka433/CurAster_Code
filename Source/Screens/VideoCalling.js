import { Alert, Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Colors from '../Assetst/Constants/Colors';
import Modal from "react-native-modal";


const VideoCalling = (props) => {

    const [visible, setVisible] = useState(false);

    const [appointmentCancellation, setAppointmentCancellation] = useState(false);

    const Cancellation = () => {
        setAppointmentCancellation(!appointmentCancellation);
    };

    const [color, setColor] = useState(true);
    const [myColor, setMyColor] = useState(false);


    const Cancel = () => {
        setColor(true)
        setMyColor(false)

    }
    const Confirm = () => {
        setMyColor(true)
        setColor(false)
        setAppointmentCancellation(false)
    }

    const [cancelConsultation, setCancelConsultation] = useState(false);

    const CancelConsultation = () => {
        setCancelConsultation(!cancelConsultation);
    };

    return (
        <SafeAreaView>
            <View style={styles.Container}>

                <StatusBar
                    backgroundColor={Colors.primaryColor1}
                />
                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: hp('5%') }}>
                    <Text style={{ fontFamily: 'Roboto-Bold', color: Colors.primaryColor8, fontSize: hp('2.5%') }}>Shurti Kedia</Text>
                    <Text style={{ fontFamily: 'Roboto-Regular', color: Colors.primaryColor8, fontSize: hp('2%'), marginTop: hp('1%') }}>Connecting...</Text>
                </View>
                <TouchableOpacity style={{ marginTop: hp('25%') }} onPress={() => props.navigation.navigate('VideoCallConnecting')}>
                    <Image source={require('../Assetst/Images/doctor5.png')} style={{ width: hp('20%'), height: hp('20%'), borderRadius: hp('20%'), }} />
                </TouchableOpacity>

                <TouchableOpacity onPress={Cancellation} style={{ marginTop: hp('23%') }}>
                    <Image source={require('../Assetst/Images/end-call.png')} style={{ width: hp('8%'), height: hp('8%'), borderRadius: hp('8%'), }} />
                </TouchableOpacity>
                <Text style={{ fontFamily: 'Roboto-Regular', color: Colors.primaryColor8, fontSize: hp('2%'), marginTop: hp('3%') }}>While connecting you with the doctor</Text>

                <View style={{ bottom: 0, }}>
                    <Modal isVisible={appointmentCancellation}
                        animationIn='zoomIn'
                        // animationOutTiming={500}
                        // animationInTiming={500}
                        hideModalContentWhileAnimating={true}
                        useNativeDriverForBackdrop={true}
                        onBackdropPress={() => setAppointmentCancellation(false)}
                        onSwipeComplete={() => setAppointmentCancellation(false)}
                        swipeDirection={['down']}
                        avoidKeyboard={true}
                        useNativeDriver={true}
                        style={{ width: wp('90%'), }}
                    >

                        <View style={{ width: wp('90%'), height: hp('22%'), backgroundColor: 'white', borderRadius: hp('1%') }}>
                            <View style={{ width: wp('83%'), height: hp('8%'), alignSelf: "center", alignItems: "flex-start", marginTop: hp('2%') }}>
                                <Text style={{ fontFamily: 'Roboto-Bold', fontSize: hp('2%'), color: Colors.primaryColor7 }}>Appointment Cancellation</Text>
                                <Text style={{ fontFamily: 'Roboto-Regular', fontSize: hp('1.7%'), color: Colors.primaryColor1, marginTop: hp('1.5%') }}>Would you like to proceed with cancellation process?</Text>


                                <View style={{ width: wp('84%'), height: hp('8%'), flexDirection: 'row', justifyContent: "space-between", alignItems: "center", marginTop: hp('3.8%') }}>
                                    <TouchableOpacity onPress={() => { Confirm(); CancelConsultation(); }} style={[styles.cancel, { backgroundColor: myColor ? "#09c6f9" : "white" }]} >
                                        <Text style={[styles.can, { color: myColor ? "white" : "#09c6f9" }]}>CONFIRM</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => { Cancel(); setAppointmentCancellation(false); }} style={[styles.change, { backgroundColor: color ? "#09c6f9" : "white" }]}>
                                        <Text style={[styles.can, { color: color ? "white" : "#09c6f9" }]}>CANCEL</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </Modal>
                </View>

                <View style={{ bottom: 0, }}>
                    <Modal isVisible={cancelConsultation}
                        animationIn='zoomIn'
                        // animationOutTiming={500}
                        // animationInTiming={500}
                        hideModalContentWhileAnimating={true}
                        useNativeDriverForBackdrop={true}
                        onBackdropPress={() => setCancelConsultation(false)}
                        onSwipeComplete={() => setCancelConsultation(false)}
                        swipeDirection={['down']}
                        avoidKeyboard={true}
                        useNativeDriver={true}
                        style={{ width: wp('90%'), }}
                    >

                        <View style={{ width: wp('90%'), height: hp('35%'), backgroundColor: 'white', borderRadius: hp('1%') }}>
                            <View style={{ width: wp('90%'), height: hp('15%') }}>
                                <Text style={{ fontFamily: 'Roboto-Bold', fontSize: hp('2%'), color: Colors.primaryColor7, marginLeft: hp('2%'), marginTop: hp('1%') }}>Cancel Consultation</Text>
                                <Text style={{ fontFamily: 'Roboto-Medium', fontSize: hp('1.7%'), color: Colors.primaryColor1, marginTop: hp('1.5%'), marginLeft: hp('2%') }}>Select a reason for cancelling your consultation</Text>
                                {/* <TextInput 
                                placeholder='Select your Reason'
                                style={{ width:wp('60%'), height:hp('5') }}
                                /> */}
                                <View style={{ width: wp('90%'), height: hp('5%'), alignItems: 'center', borderBottomWidth: 1, borderBottomColor: '#d3d3d3', flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={{ fontFamily: 'Roboto-Medium', fontSize: hp('1.7%'), color: '#d3d3d3', marginTop: hp('1.5%'), marginLeft: hp('2%') }}>Select your reason</Text>
                                    <TouchableOpacity onPress={() => setVisible(!visible)} >
                                        <AntDesign name='caretdown' size={hp('2%')} style={{ marginRight: hp('2%') }} />
                                    </TouchableOpacity>
                                </View>

                            </View>
                            <View style={{ width: wp('90%'), height: hp('8%'), marginTop: hp('0.5%'), borderBottomWidth: 1, borderBottomColor: '#d3d3d3' }}>
                                <Text style={{ fontFamily: 'Roboto-Medium', fontSize: hp('1.7%'), color: Colors.primaryColor1, marginLeft: hp('2%') }}>Type your reason</Text>
                                <TextInput
                                    placeholder='Your reason'
                                    style={{ marginLeft: hp('2%'), }}
                                />
                                <TouchableOpacity onPress={() => props.navigation.navigate('Home')} style={{ width: wp('80%'), height: hp('6%'), justifyContent: 'center', alignItems: 'center', backgroundColor: Colors.primaryColor1, borderRadius: hp('1.2%'), marginTop: hp('2%'), marginLeft: hp('2.7%') }}>
                                    <Text style={{ fontFamily: 'Roboto-Bold', fontSize: hp('2%'), color: Colors.primaryColor9, }}>SUBMIT REQUEST</Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                    </Modal>
                </View>


            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    Container: {
        width: wp('100%'),
        height: hp('100%'),
        alignItems: 'center',
        // justifyContent:'center',
        backgroundColor: Colors.primaryColor1
        // '#008b8b'
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
        // borderColor:"#8f9194",
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
        // borderColor:"#8f9194",
        borderWidth: hp('0.2%'),

    },
    can: {
        alignItems: 'center',
        fontFamily: 'Roboto-Bold',
        fontSize: hp('1.8%')

    },
})


export default VideoCalling;