import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Colors from '../Assetst/Constants/Colors';

const Mobile = (props) => {



    return (

        <View style={styles.container}>
            <View style={{ width: wp('85%'), height: hp('3%'), marginTop: hp('1%') }} >

                <Text style={{ fontSize: hp('2%'), fontFamily: 'Roboto-Medium', color: Colors.primaryColor7, marginLeft: wp('1.5%') }}>Mobile No</Text>
            </View>
            <View style={{ width: wp('85%'), height: hp('6%'), flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1, borderBottomColor: Colors.primaryColor4, }}>
                <TextInput
                    placeholder='+91876545678'
                    placeholderTextColor={Colors.primaryGray}
                    style={{ fontSize: hp('2%'), width: wp('70%'), marginLeft: wp('2%') }}
                    maxLength={10}
                    keyboardType='number-pad'

                />
                <TouchableOpacity style={{ width: wp('14%'), height: hp('3.5%'), backgroundColor: Colors.primaryColor1, alignItems: 'center', justifyContent: 'center', borderRadius: hp('0.5%') }}>
                    <Text style={{ fontSize: hp('1.4%'), alignSelf: 'center', color: Colors.primaryColor9 }}>Get OTP</Text>
                </TouchableOpacity>


            </View>
            <View style={{ width: wp('85%'), height: hp('3%'), marginTop: hp('2%'), }} >

                <Text style={{ fontSize: hp('2%'), fontFamily: 'Roboto-Medium', color: Colors.primaryColor7, marginLeft: wp('1.5%') }}>OTP</Text>
            </View>
            <View style={{ width: wp('85%'), height: hp('6%'), flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1, borderBottomColor: Colors.primaryColor4, }}>
                <TextInput
                    // placeholder='+91876545678'
                    placeholderTextColor={Colors.primaryGray}
                    style={{ fontSize: hp('2%'), width: wp('70%'), marginLeft: wp('2%') }}
                    maxLength={10}
                    keyboardType='number-pad'

                />

            </View>
            <View style={{ width: wp('85%'), height: hp('5%'), justifyContent: 'center', alignItems: 'flex-end' }}>
                <Text style={{ color: Colors.darkGray, fontSize: hp('1.5%') }}>Resend OTP</Text>
            </View>
            <TouchableOpacity style={{ width: wp('60%'), height: hp('5.5%'), backgroundColor: '#9da6a0', 
            justifyContent: 'center', alignItems: 'center', borderRadius: hp('1%'), marginTop: hp('3.5%')}}
            onPress={() => props.navigation.navigate('DrawerNavigation')}>
                <Text style={{ fontFamily: 'Roboto-Bold', fontSize: hp('2%'), color: 'white' }}>Continue</Text>
            </TouchableOpacity>


        </View>


    );
};



export default Mobile;

const styles = StyleSheet.create({
    container: {
        width: wp('90%'),
        height: hp('43%'),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.primaryColor8,
        borderBottomRightRadius: hp('3%'),
        borderBottomLeftRadius: hp('3%'),
    },

});