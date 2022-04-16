import React, { useState, useRef, useEffect } from 'react';
import { View, SafeAreaView, StyleSheet, Image, Text, ActivityIndicator, Animated, TouchableOpacity, StatusBar } from 'react-native';

import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Colors from '../Assetst/Constants/Colors';




const LoginsignupScreen = (props) => {
    const [color, setColor] = useState(true);
    const [myColor, setMyColor] = useState(false);


    const English = () => {
        setColor(true)
        setMyColor(false)

    }
    const Hindi = () => {
        setMyColor(true)
        setColor(false)

    }



    return (
        <SafeAreaView>

            <View style={styles.container}>
                <StatusBar
                    animated={true}
                    backgroundColor={Colors.primaryColor1}
                />

                <View style={{ width: wp('100%'), height: hp('10%'), alignItems: 'flex-end', padding: wp('2%'), }}>
                    <View style={{ width: wp('25%'), height: hp('3%'), paddingHorizontal: wp('1%') }}>
                        <Text style={{ fontFamily: 'Roboto-Black', fontSize: hp('1.5%') }} numberOfLines={1}>Select Language</Text>
                    </View>

                    <View style={{ width: wp('25%'), height: hp('4%'), flexDirection: 'row', }}>
                        <TouchableOpacity onPress={English}
                            style={{ backgroundColor: color ? Colors.primaryColor1 : "white", width: wp('12.5%'), height: hp('4%'), alignItems: 'center', justifyContent: 'center', borderTopLeftRadius: hp('1%'), borderBottomLeftRadius: hp('1%') }} >
                            <Text style={{ fontFamily: 'Roboto-Black', fontSize: hp('1.5%'), color: color ? "white" : "black" }}>English</Text>
                        </TouchableOpacity>


                        <TouchableOpacity onPress={Hindi}

                            style={{ backgroundColor: myColor ? Colors.primaryColor1 : "white", width: wp('12.5%'), height: hp('4%'), alignItems: 'center', justifyContent: 'center', borderTopRightRadius: hp('1%'), borderBottomRightRadius: hp('1%') }}>
                            <Text style={{ fontFamily: 'Roboto-Black', fontSize: hp('1.5%'), color: myColor ? "white" : "black" }}>हिंदी</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ width: wp('100%'), height: hp('25%'), alignItems: "center", justifyContent: 'center', }}>
                    <Image source={require('../Assetst/Images/Logo.png')}
                        style={{ width: wp('20%'), height: wp('20%'), }} />
                    <Text style={{ color: Colors.primaryColor2, fontFamily: 'Roboto-Bold', fontSize: hp('4%') }}>C u r A s t e r</Text>
                    <Text style={{ color: 'black', fontFamily: 'Roboto-Regular', fontSize: hp('1.8%') }}>For your family's wellness</Text>
                </View>

                <View style={{ width: wp('100%'), height: hp('30%'), alignItems: "center", justifyContent: 'center', }}>
                    <Image source={require('../Assetst/Images/Familydoctor.png')}
                        style={{ width: wp('100%'), height: hp('32%'), resizeMode: 'contain' }} />
                </View>

                <View style={{ width: wp('100%'), height: hp('35%'), alignItems: 'center', justifyContent: 'center' }}>
                    <TouchableOpacity style={{ width: wp('90%'), height: hp('7%'), backgroundColor: Colors.primaryColor1, borderRadius: hp('1%'), alignItems: 'center', justifyContent: 'center' }} onPress={() => props.navigation.navigate('Login')}  >
                        <Text style={{ fontFamily: 'Roboto-Black', fontSize: hp('2%'), color: Colors.white }}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ width: wp('90%'), height: hp('7%'), backgroundColor: '#C7f2fc', marginTop: hp('1%'), borderRadius: hp('1%'), alignItems: 'center', justifyContent: 'center' }} onPress={() => props.navigation.navigate('Signup')} >
                        <Text style={{ fontFamily: 'Roboto-Black', fontSize: hp('2%'), color: Colors.primaryColor1 }}>Sign up</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ width: wp('90%'), height: hp('7%'), backgroundColor: Colors.primaryColor2, marginTop: hp('1%'), borderRadius: hp('1%'), alignItems: 'center', justifyContent: 'center' }} onPress={() => props.navigation.navigate('DrawerNavigationForGuest')}>
                        <Text style={{ fontFamily: 'Roboto-Black', fontSize: hp('2%'), color: Colors.white }}>Explore as Guest</Text>
                    </TouchableOpacity>
                </View>


            </View>

        </SafeAreaView>

    )
}

export default LoginsignupScreen;
const styles = StyleSheet.create({
    container: {
        width: wp('100%'),
        height: hp('100%'),
        backgroundColor: Colors.primaryColor9
    },

})




