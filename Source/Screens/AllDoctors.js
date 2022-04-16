import { Alert, FlatList, Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import AllDoctorList from '../ReusableComponent/AllDoctorList';
import Colors from '../Assetst/Constants/Colors';
import DoctorList from '../ReusableComponent/DoctorList';


const AllDoctor = (props) => {

    const [filled, setFilled] = useState("false");

    const favorite = () => {
        setFilled(!filled)
    };

    const [color, setColor] = useState(true);
    const [myColor, setMyColor] = useState(false);


    const VideoConsult = () => {
        setColor(true)
        setMyColor(false)
        props.navigation.navigate('OnlineConsultation')

    }
    const HospitalVisit = () => {
        setMyColor(true)
        setColor(false)
        // setAppointmentCancellation(false) 
        props.navigation.navigate('HospitalVisit')
    }




    return (
        <SafeAreaView>
            <View style={styles.container}>

                <ScrollView showsVerticalScrollIndicator={false}

                >

                    <AllDoctorList
                        doctorImage={require('../Assetst/Images/doctor5.png')}
                        name={"Dr. S N Jha"}
                        specialist={"Specialist Cardiologist"}
                        experience={'7 year experience'}
                        language={'Hindi/English'}
                        fees={'Consultation fee'}
                        rupees={'249'}
                        functionghgjhj={() => props.navigation.navigate('OnlineConsultation')}
                        bookhospital={() => props.navigation.navigate('HospitalVisit')}
                    />
                    <DoctorList
                        doctorImage2={require('../Assetst/Images/doctor5.png')}
                        name2={"Dr. S N Jha"}
                        specialist2={"Specialist Cardiologist"}
                        experience2={'7 year experience'}
                        language2={'Hindi/English'}
                        fees2={'Consultation fee'}
                        rupees2={'249'}
                        bookvdo={() => props.navigation.navigate('HospitalVisit')}
                    />
                    <AllDoctorList
                        doctorImage={require('../Assetst/Images/doctor5.png')}
                        name={"Dr. S N Jha"}
                        specialist={"Specialist Cardiologist"}
                        experience={'7 year experience'}
                        language={'Hindi/English'}
                        fees={'Consultation fee'}
                        rupees={'249'}

                    />



                    <DoctorList
                        doctorImage2={require('../Assetst/Images/doctor5.png')}
                        name2={"Dr. S N Jha"}
                        specialist2={"Specialist Cardiologist"}
                        experience2={'7 year experience'}
                        language2={'Hindi/English'}
                        fees2={'Consultation fee'}
                        rupees2={'249'}
                    />
                    <DoctorList
                        doctorImage2={require('../Assetst/Images/doctor5.png')}
                        name2={"Dr. S N Jha"}
                        specialist2={"Specialist Cardiologist"}
                        experience2={'7 year experience'}
                        language2={'Hindi/English'}
                        fees2={'Consultation fee'}
                        rupees2={'249'}
                    />

                </ScrollView>


            </View>
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

export default AllDoctor;