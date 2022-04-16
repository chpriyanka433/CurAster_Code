import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Colors from '../Assetst/Constants/Colors';
import CheckBox from '@react-native-community/checkbox';

const Email = (props) => {
    const [checked, setChecked] = useState(false);


    return (

        <View style={styles.container}>

            <View style={{ width: wp('85%'), height: hp('3%'), }} >

                <Text style={{ fontSize: hp('2%'), fontFamily: 'Roboto-Medium', color: Colors.primaryColor7, marginLeft: wp('1.5%') }}>Email Id</Text>
            </View>
            <View style={{ width: wp('85%'), height: hp('6%'), borderBottomWidth: 1, borderBottomColor: Colors.primaryColor4, }}>
                <TextInput
                    placeholder='JohnsonDoe@gmail.com'
                    placeholderTextColor={Colors.primaryGray}
                    style={{ fontSize: hp('2%'), width: wp('70%'), marginLeft: wp('2%') }}

                    keyboardType='email-address'

                />
                {/* <TouchableOpacity style={{ width: wp('14%'), height: hp('3.5%'), backgroundColor: Colors.primaryColor1, alignSelf: 'center', justifyContent: 'center', borderRadius: hp('0.5%') }}>
                    <Text style={{ fontSize: hp('1.7%'), alignSelf: 'center', color: Colors.primaryColor9 }}>Get OTP</Text>
                </TouchableOpacity> */}

            </View>
            <View style={{ width: wp('85%'), height: hp('3%'), marginTop: hp('2%'), }} >
                {/* {mobile == 0 ? <Text style={{ color: "red", fontSize: hp('2%') }}>*</Text>
                                        :
                                        <Text ></Text>} */}
                <Text style={{ fontSize: hp('2%'), fontFamily: 'Roboto-Medium', color: Colors.primaryColor7, marginLeft: wp('1.5%') }}>Password</Text>
            </View>
            <View style={{ width: wp('85%'), height: hp('6%'), flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1, borderBottomColor: Colors.primaryColor4, }}>
                <TextInput
                    placeholder='***********'
                    placeholderTextColor={Colors.primaryGray}
                    style={{ fontSize: hp('2%'), width: wp('70%'), marginLeft: hp('2%') }}
                    secureTextEntry={true}
                    autoCapitalize="none"
                // value={data.password}
                // onChangeText={(val) => handlePasswordChange(val)}
                />

            </View>
            <View style={{ flexDirection: 'row', width: wp('85%'), height: hp('3.5%'), justifyContent: 'space-between', marginTop: hp('1%') }}>
                <View style={{ flexDirection: 'row', height: hp('3.5%'), }}>
                    <CheckBox
                        disabled={false}
                        value={checked}
                        onValueChange={(newValue) => setChecked(newValue)}
                        style={{ alignSelf: 'center' }}
                    />
                    <Text style={{ alignSelf: 'center', fontFamily: 'Roboto-medium', fontSize: hp('2%'), color: Colors.primaryColor1 }}>Keep me logged in</Text>
                </View>
                <TouchableOpacity style={{ justifyContent: 'center' }}>
                    <Text style={{ alignSelf: 'center', fontFamily: 'Roboto-medium', fontSize: hp('2%'), color: Colors.primaryGray }}>Forgot Password?</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={{
                width: wp('60%'), height: hp('5.5%'), backgroundColor: Colors.primaryColor1, justifyContent: 'center',
                alignItems: 'center', borderRadius: hp('1%'), marginTop: hp('2%')
            }}
                onPress={() => props.navigation.navigate('DrawerNavigation')}>
                <Text style={{ fontFamily: 'Roboto-Bold', fontSize: hp('2%'), color: 'white' }}>Continue</Text>
            </TouchableOpacity>



        </View>


    );
};



export default Email;

const styles = StyleSheet.create({
    container: {
        width: wp('90%'),
        height: hp('43%'),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.primaryColor8,
        borderBottomLeftRadius: hp('3%'),
        borderBottomRightRadius: hp('3%')
    },

});