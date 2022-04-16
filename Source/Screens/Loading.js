
import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native'
import LottieView from 'lottie-react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Modal from "react-native-modal";
import Colors from '../Assetst/Constants/Colors';

const Loading = (props) => {
    const [animating, setAnimating] = useState(true);
    const [myModal, setMyModal] = useState(false);
    const [prescription, setPrescription] = useState(false);
    const toggleMyMobile = () => {
        setMyModal(!myModal);
        setPrescription(false);

        setTimeout(() => {

            setAnimating(false);

            props.navigation.navigate('Home')

        }, 5000);

    };

    return (
        <SafeAreaView>
            <TouchableOpacity style={styles.container} onPress={toggleMyMobile}>

                <LottieView source={require('../Assetst/Images/Lottie/Loading 01.json')} autoPlay loop={false}
                />
                <Modal isVisible={myModal}
                    animationIn='slideInUp'
                    // animationOutTiming={500}
                    // animationInTiming={500}
                    hideModalContentWhileAnimating={true}
                    useNativeDriverForBackdrop={true}
                    onBackdropPress={() => setMyModal(false)}
                    onSwipeComplete={() => setMyModal(false)}
                    swipeDirection={['down']}
                    // avoidKeyboard={true}
                    useNativeDriver={true}
                    style={{ width: wp('90%'), marginTop: hp('60%') }}


                >
                    <View style={{ width: wp('100%'), height: hp('50%'), backgroundColor: Colors.white, alignSelf: 'center', borderTopLeftRadius: hp('3%'), borderTopRightRadius: hp('3%') }}>
                        <View style={{ width: wp('100%'), height: hp('20%'), alignItems: 'center', justifyContent: 'center' }}>
                            <LottieView source={require('../Assetst/Images/Lottie/data.json')} autoPlay loop={false}
                            />
                        </View>
                        <View style={{ width: wp('100%'), height: hp('30%'), alignItems: 'center', }}>
                            <Text style={{ fontWeight: 'bold', fontFamily: 'Roboto-Bold', fontSize: hp('2.5%'), marginTop: hp('2%') }}>Appointment Successful</Text>
                            <Text style={{ fontFamily: 'Roboto-Regular', fontSize: hp('2%'), marginTop: hp('2%') }}>Your Appointment has been Successfully</Text>
                            <Text style={{ fontFamily: 'Roboto-Regular', fontSize: hp('2%'), }}>booked with Dr.Harshita Reddy </Text>
                            <TouchableOpacity style={{ width: wp('48%'), height: hp('6%'), backgroundColor: Colors.primaryColor1, alignItems: 'center', justifyContent: 'center', marginTop: hp('3%'), borderRadius: hp('1%') }}>
                                <Text style={{ fontFamily: 'Roboto-Bold', color: Colors.white, fontSize: hp('1.8%') }}>Done</Text>
                            </TouchableOpacity>
                        </View>


                    </View>
                </Modal>

            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    container: {
        width: wp('100%'),
        height: hp('100%'),
        alignItems: 'center',
        justifyContent: 'center'
        //backgroundColor: Colors.primaryColor8,

    },
})

export default Loading;

//style={{ height: hp('28%'), marginTop: hp('4.2%'), alignSelf: "center" }}