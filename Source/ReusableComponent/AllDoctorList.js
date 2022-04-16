import { Alert, FlatList, Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

import Colors from '../Assetst/Constants/Colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

// import DoctorList from '../ReusableComponent/DoctorList';



const AllDoctorList = (props) => {

    const [filled, setFilled] = useState("false");

    const favorite = () => {
        setFilled(!filled)
    };

    const [color, setColor] = useState(true);
    const [myColor, setMyColor] = useState(false);


    const VideoConsult = () => {
        setColor(true)
        setMyColor(false)

    }

    const HospitalVisit = () => {
        setMyColor(true)
        setColor(false)
        // setAppointmentCancellation(false)
    }




    return (

        <SafeAreaView>
          



            <View style={styles.details}>
                <View style={styles.doctor}>

                    <View style={styles.img}>
                        <Image source={props.doctorImage} style={{ width: wp('20%'), height: hp('12%'), borderRadius: hp('1%'), }} />
                    

                    </View>
                    <View style={styles.doc}>
                        <View style={{ width: wp('65%'), flexDirection: 'row', justifyContent: 'space-between', }}>
                            <Text style={{ color: Colors.primaryColor7, fontFamily: "Roboto-Bold", fontSize: hp('2.5%'), }}>{props.name}</Text>
                            <TouchableOpacity onPress={favorite} >
                                <FontAwesome name={filled ? "star" : "star"} size={hp('2.2%')} color={filled ? '#ffd700' : '#BDC3C7'} />
                            </TouchableOpacity>
                        </View>
                        <Text style={{ color: Colors.primaryColor1, fontFamily: "Roboto-Medium", fontSize: hp('2.2%') }}>{props.specialist}</Text>
                        <Text style={{ color: Colors.primaryColor6, fontFamily: "Roboto-Medium", fontSize: hp('1.5%') }}>{props.experience}</Text>
                        <Text style={{ color: Colors.primaryColor6, fontFamily: "Roboto-Medium", fontSize: hp('1.5%') }}>{props.language}</Text>
                        <View style={{ width: wp('65%'), flexDirection: 'row', justifyContent: 'space-between', }}>
                            <Text style={{ color: Colors.primaryColor6, fontFamily: "Roboto-Medium", fontSize: hp('1.5%') }}>{props.fees}</Text>
                            <Text style={{ color: Colors.primaryColor1, fontFamily: "Roboto-Bold", fontSize: hp('1.8%'), marginLeft: hp('1%') }}>{'\u20B9'}{props.rupees}</Text>
                        </View>

                    </View>

                </View>
                <View style={{ width: wp('91%'), height: hp('6%'), flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center', }}>
                    <TouchableOpacity onPress={props.functionghgjhj} onPressIn={VideoConsult} style={{ width: wp('40%'), height: hp('5%'), flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', borderWidth: 1, borderColor: Colors.primaryColor1, borderRadius: hp('1%'), marginTop: hp('0.5%'), backgroundColor: color ? Colors.primaryColor1 : Colors.primaryColor8 }} p1={props.p1} >
                        <FontAwesome name='video-camera' size={hp('2%')} color={color ? Colors.primaryColor8 : Colors.primaryColor1} />
                        <Text style={{ color: color ? Colors.primaryColor8 : Colors.primaryColor1, fontFamily: "Roboto-Medium", fontSize: hp('1.8%'), marginLeft: hp('1%') }}>Book Video Consult</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPressIn={HospitalVisit} onPress={props.bookhospital} style={{ width: wp('40%'), height: hp('5%'), flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', borderWidth: 1, borderColor: Colors.primaryColor1, borderRadius: hp('1%'), marginTop: hp('0.5%'), backgroundColor: myColor ? Colors.primaryColor1 : Colors.primaryColor8 }}>
                        <FontAwesome5 name='hospital' size={hp('2%')} color={myColor ? Colors.primaryColor8 : Colors.primaryColor1} />
                        <Text style={{ color: myColor ? Colors.primaryColor8 : Colors.primaryColor1, fontFamily: "Roboto-Medium", fontSize: hp('1.8%'), marginLeft: hp('1%') }}>Book Hospital Visit</Text>

                    </TouchableOpacity>
                </View>

            </View>



            {/* </View> */}
        </SafeAreaView>

    );
};

const styles = StyleSheet.create({

    container: {
        width: wp('100%'),
        height: hp('100%'),
        backgroundColor: Colors.primaryColor9,
        alignItems: 'center'
    },

    details: {
        width: wp('96%'),
        height: hp('23%'),
        backgroundColor: Colors.primaryColor8,
        // alignItems: "center",
        justifyContent: "center",
        marginTop: hp('2%'),
        borderRadius: hp('1%')

    },
    doctor: {
        width: wp('96%'),
        height: hp('15%'),
        backgroundColor: Colors.primaryColor8,
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
        width: wp('68%'),
        height: hp('15%'),
        // backgroundColor: Colors.primaryColor2,
        justifyContent: "center",
        paddingLeft: wp('1%'),

    },

})

export default AllDoctorList;