import { View, Text, Image, SafeAreaView, StyleSheet } from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Colors from '../Assetst/Constants/Colors';

const RegisterConfirmation = () => {

    return (

        <SafeAreaView>
            <View style={styles.container}>
                <MaterialCommunityIcons name='checkbox-marked-circle' size={hp('6%')} color='green' />
                <Text style={{ fontFamily: 'Roboto-Bold', fontSize: hp('2.5%'), color: Colors.primaryColor7 }}>Your account has been registered</Text>
                <Text style={{ fontFamily: 'Roboto-Bold', fontSize: hp('2.5%'), color: Colors.primaryColor7 }}>with CurAtser</Text>
                <Image source={require('../Assetst/Images/confirmation.jpg')} style={{ width: wp('90%'), height: hp('30%'), resizeMode: 'cover', alignSelf: 'center',  }} />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    container: {
        width: wp('100%'),
        height: hp('100%'),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.primaryColor8
    }

})

export default RegisterConfirmation