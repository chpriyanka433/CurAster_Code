import { View, Text, SafeAreaView, StyleSheet, StatusBar, TouchableOpacity, TextInput, Alert, Image, ImageBackground } from 'react-native'
import React, { useState, useEffect } from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Colors from '../Assetst/Constants/Colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Foundation from 'react-native-vector-icons/Foundation';
import Feather from 'react-native-vector-icons/Feather';
import Octicons from 'react-native-vector-icons/Octicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
//import { Rating } from 'react-native-ratings';
import { Rating } from 'react-native-elements';

import LinearGradient from 'react-native-linear-gradient';
import Modal from "react-native-modal";
import LottieView from 'lottie-react-native';
import CheckBox from '@react-native-community/checkbox';


const VideoCall = (props) => {

    const [rate, setRate] = useState(false);

    const RateYourFeedback = () => {
        setRate(!rate);
        setPrescription(false);
    };





    const [animating, setAnimating] = useState(true);
    const [myModal, setMyModal] = useState(false);

    const toggleMyMobile = () => {
        setMyModal(!myModal);
        setRate(false);
        setTimeout(() => {
            setAnimating(false);

            props.navigation.navigate('Home')

        }, 5000);

    };






    const [whatsAppCheckbox, setWhatsAppCheckbox] = useState(false);
    const [emailCheckbox, setEmailCheckbox] = useState(false);

    const [prescription, setPrescription] = useState(false);

    const GetYourPrescription = () => {
        setPrescription(!prescription);
       


    };
    const [defaultRating, setDefaultRating] = useState(0);

    const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);


    const starImageFilled =
        'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_filled.png';

    const starImageCorner =
        'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_corner.png';


    return (
        <SafeAreaView>
            <View style={styles.container}>
                <StatusBar backgroundColor={'#6fa832'} />
                <ImageBackground source={require('../Assetst/Images/doctorv.jpg')} style={{ width: wp('100%'), height: hp('100%'), borderRadius: hp('1%') }}>
                    <View style={styles.head}>
                        <View style={{ width: wp('20%'), height: hp('6%'), justifyContent: "center", marginTop: hp('3.5%') }}>
                            <TouchableOpacity onPress={() => props.navigation.goBack("Home")} style={{ width: wp('15%'), height: hp('4%'), flexDirection: "row", alignItems: "center", alignSelf: "center" }}>
                                <AntDesign name="left" size={hp('2%')} color='#ffffff' />
                                <Text style={{ fontFamily: "Roboto-Regular", fontSize: hp('2%'), color: Colors.primaryColor8 }}>Back</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ width: wp('36%'), height: hp('10%'), alignItems: "center", marginLeft: wp('10%'), marginTop: hp('7.5%') }}>
                            <Text style={{ fontFamily: "Roboto-Bold", fontSize: hp('3%'), color: Colors.primaryColor8 }}>Shruti Kedia</Text>
                            <Text style={{ fontFamily: "Roboto-Bold", fontSize: hp('3%'), color: Colors.primaryColor8 }}>11:09</Text>
                        </View>
                        <View style={{ width: wp('28%'), height: hp('19%'), marginLeft: wp('2.5%'), marginTop: hp('5.7%'), borderRadius: hp('1%'), alignItems: "center", justifyContent: "center" }}>
                            <Image source={require('../Assetst/Images/client.jpg')} style={{ width: wp('24%'), height: hp('16%'), borderRadius: hp('0.4%'), borderRadius: hp('1%') }} />
                        </View>
                    </View>
                    <View style={{ width: wp('90%'), height: hp('11%'),  flexDirection: "row", padding: wp('4%'), alignSelf: "center"}}>
                        <TouchableOpacity style={{ width: wp('11%'), height: wp('11%'), alignItems: "center", alignSelf: "center", borderRadius: hp('11/2%'), backgroundColor: "white", justifyContent: "center" }}>
                            <Foundation name="video" size={hp('3%')} color='#09c6f9' />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ width: wp('11%'), height: wp('11%'), alignItems: "center", alignSelf: "center", borderRadius: hp('11/2%'), backgroundColor: "white", justifyContent: "center", marginLeft: wp('6%') }}>
                            <Feather name="mic-off" size={hp('3%')} color='#09c6f9' />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={GetYourPrescription} style={{ width: wp('14%'), height: wp('14%'), alignItems: "center", alignSelf: "center", borderRadius: hp('14/2%'), backgroundColor: '#ff0000', justifyContent: "center", marginLeft: wp('7%') }}>
                            <MaterialIcons name="call-end" size={hp('4%')} color='#ffffff' />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ width: wp('11%'), height: wp('11%'), alignItems: "center", alignSelf: "center", borderRadius: hp('11/2%'), backgroundColor: "white", justifyContent: "center", marginLeft: wp('6%') }}>
                            <Octicons name="unmute" size={hp('3%')} color='#09c6f9' />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ width: wp('11%'), height: wp('11%'), alignItems: "center", alignSelf: "center", borderRadius: hp('11/2%'), backgroundColor: "white", justifyContent: "center", marginLeft: wp('6%') }}>
                            <Ionicons name="chatbox-sharp" size={hp('3%')} color='#09c6f9' />
                        </TouchableOpacity>
                    </View>


                    <View style={{ bottom: 0 }}>

                        <Modal isVisible={rate}
                            animationIn='zoomIn'
                            // animationOutTiming={500}
                            // animationInTiming={500}
                            hideModalContentWhileAnimating={true}
                            useNativeDriverForBackdrop={true}
                            onBackdropPress={() => setRate(false)}
                            onSwipeComplete={() => setRate(false)}
                            swipeDirection={['down']}
                            avoidKeyboard={true}
                            useNativeDriver={true}
                            style={{ width: wp('100%'), }}>


                            <View style={{ width: wp('92%'), height: hp('34%'), borderRadius: hp('1%'), backgroundColor: '#ffffff' }}>
                                <View style={{ width: wp('80%'), height: hp('11%'), alignSelf: "center", alignItems: "flex-start", marginTop: hp('2%'), }}>
                                    <Text style={{ fontFamily: 'Roboto-Bold', fontSize: hp('2%'), color: Colors.primaryColor1 }}>Rate your Experience</Text>
                                    <Text style={{ fontFamily: 'Roboto-Regular', fontSize: hp('1.7%'), color: Colors.primaryColor7 }}>Are you satisfied with the service</Text>
                                    <View style={{ width: wp('34%'), height: hp('5%'), justifyContent: 'center', flexDirection: 'row',alignItems:'center',marginLeft:-wp('2.5%')}}>
                                        {maxRating.map((item, key) => {
                                            return (
                                                <TouchableOpacity
                                                    activeOpacity={0.2}
                                                    key={item}
                                                    onPress={() => setDefaultRating(item)}>
                                                    <Image
                                                        style={{
                                                            width: wp('5.4%'),
                                                            height: hp('3.3%'),
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
                                    <View style={{ width: wp('80%'), height: hp('13%'), alignSelf: 'center', marginTop: hp('1%'), borderRadius: hp('1%'), borderWidth: hp('0.2%'), borderColor: '#d0dae0', }}>
                                        <TextInput
                                            placeholder='Comment your experience here(optional) ' placeholderTextColor='#d0dae0'
                                            style={{ fontSize: hp('1.5%'), height: hp('5%'), }}


                                        />
                                    </View>
                                    <View style={{ width: wp('80%'), height: hp('6%'), justifyContent: "center", alignItems: "center", marginTop: hp('1%'), }}>
                                        <TouchableOpacity onPress={() => { setRate(false); toggleMyMobile(); }} style={{ width: wp('30%'), height: hp('4.8%'), backgroundColor: Colors.primaryColor1, justifyContent: 'center', alignItems: 'center', borderRadius: hp('1%') }} >
                                            <Text style={{ color: Colors.primaryColor8, fontFamily: 'Roboto-Bold', fontSize: hp('1.5%') }}>Submit</Text>
                                        </TouchableOpacity>

                                    </View>
                                </View>
                            </View>
                        </Modal>
                    </View>


                    <View style={{ bottom: 0, }}>
                        <Modal isVisible={prescription}
                            animationIn='zoomIn'
                            // animationOutTiming={500}
                            // animationInTiming={500}
                            hideModalContentWhileAnimating={true}
                            useNativeDriverForBackdrop={true}
                            onBackdropPress={() => setPrescription(false)}
                            onSwipeComplete={() => setPrescription(false)}
                            swipeDirection={['down']}
                            avoidKeyboard={true}
                            useNativeDriver={true}
                            style={{ width: wp('90%'), }}>
                            <View style={{ width: wp('90%'), height: hp('30%'), backgroundColor: 'white', borderRadius: hp('1%') }}>
                                <View style={{ width: wp('83%'), height: hp('8%'), alignSelf: "center", alignItems: "flex-start", marginTop: hp('2%'),}}>
                                    <Text style={{ fontFamily: 'Roboto-Bold', fontSize: hp('2%'), color: Colors.primaryColor1 }}>Thank You For Booking Consultation With Us!</Text>
                                    <Text numberOfLines={1} style={{ fontFamily: 'Roboto-Bold', fontSize: hp('1.5%'), color: Colors.primaryGray, marginTop: hp('0.5%') }}>You will get an SMS notification onec your prescription is ready</Text>
                                    <Text numberOfLines={1} style={{ fontFamily: 'Roboto-Bold', fontSize: hp('1.8%'), color: Colors.primaryColor7, marginTop: hp('2.5%') }}>Where Would You Like To Get Your Prescription</Text>
                                    <View style={{ flexDirection: 'row', width: wp('83%'), height: hp('3.5%'), alignItems: 'center', marginTop: hp('1%'),}}>
                                        <CheckBox
                                            disabled={false}
                                            value={whatsAppCheckbox}
                                            tintColors={whatsAppCheckbox ? 'red' : 'white'}
                                            onValueChange={(newValue) => setWhatsAppCheckbox(newValue)}
                                            style={{ alignSelf: 'center' }}/>
                                     <Text style={{ color: Colors.primaryColor6, fontFamily: 'Roboto-Medium', marginLeft: hp('1%') }}>WhatsApp</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', width: wp('83%'), height: hp('3.5%'), alignItems: 'center', marginTop: hp('1%'),}}>
                                        <CheckBox
                                            disabled={false}
                                            value={emailCheckbox}
                                            tintColors={emailCheckbox ? 'red' : 'white'}
                                            onValueChange={(newValue) => setEmailCheckbox(newValue)}
                                            style={{ alignSelf: 'center' }}/>
                                   <Text style={{ color: Colors.primaryColor6, fontFamily: 'Roboto-Medium', marginLeft: hp('1%') }}>Email</Text>
                                    </View>
                                    <View style={{ width: wp('84%'), height: hp('7%'), justifyContent: "center", alignItems: "center", }}>
                                        <TouchableOpacity onPress={ RateYourFeedback} style={{ width: wp('40%'), height: hp('5%'), backgroundColor: Colors.primaryColor1, justifyContent: 'center', alignItems: 'center', borderRadius: hp('1%'), marginTop: hp('1%') }} >
                                            <Text style={{ color: Colors.primaryColor8, fontFamily: 'Roboto-Bold' }}>Submit</Text>
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
                            style={{ width: wp('90%'), }}>
                            <View style={{ width: wp('90%'), height: hp('18%'), backgroundColor: 'white', borderRadius: hp('1%') }}>
                                <View style={{ width: wp('83%'), height: hp('10%'), alignSelf: "center", justifyContent: "center" }}>
                                  <LottieView source={require('../Assetst/Images/Lottie/Summit.json')} autoPlay loop={false} style={{ height: hp('9%'), alignSelf: "center" }} />
                                </View>
                                <View style={{ width: wp('83%'), height: hp('6%'), alignItems: "center", justifyContent: "center", marginTop: hp('1%'), alignSelf: "center" }}>
                                    <TouchableOpacity onPress={toggleMyMobile}style={{ width: wp('80%'), height: hp('4.8%'), backgroundColor: Colors.primaryColor8, justifyContent: 'center', alignItems: 'center' }} >
                                        <Text style={{ color: Colors.primaryColor1, fontFamily: 'Roboto-Bold', fontSize: hp('2%') }}>Thank you for your feedback</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </Modal>
                    </View>












                </ImageBackground>
            </View>
        </SafeAreaView>
    )
}

export default VideoCall;

const styles = StyleSheet.create({
    container: {
        width: wp('100%'),
        height: hp('100%'),

    },
    head: {
        width: wp('100%'),
        height: hp('85%'),
        flexDirection: "row",
        
    },
})



//onPress={() => props.navigation.navigate('Home')}









