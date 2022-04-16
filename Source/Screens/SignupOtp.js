import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, TextInput, StatusBar, Image } from 'react-native';
import React, { useState } from 'react';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Colors from '../Assetst/Constants/Colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import Modal from "react-native-modal";
import OtpInputs from 'react-native-otp-inputs';
import CheckBox from '@react-native-community/checkbox';
import * as yup from 'yup';
import { Formik } from 'formik';

const SignupWithEmail = (props) => {

    const [otp, setOtp] = useState('')
    const handleOTPChange = (otp) => {
        setOtp(otp)
    }

  const [emailOtp, setEmailOtp] = useState('');

    const handleEmailOTPChange = (emailOtp) => {
        setEmailOtp(emailOtp)
    }


    const [isMyArray, setMyArray] = useState([{
        id: 1,
    },

    ]);

    const [isModalVisible, setModalVisible] = useState(false);

    const toggleMobileModal = () => {
        setModalVisible(!isModalVisible);
    };

    const [isMyModalVisible, setMyModalVisible] = useState(false);

    const toggleEmailModal = () => {
        setMyModalVisible(!isMyModalVisible);
        // setModalVisible(false)
    };


    const authCheckbox = () => {

        if (!checked) {
            alert('Click checkbox to agree T & C');
        }
        else {
            props.navigation.navigate('DrawerNavigation')
        }
    }
    const [checked, setChecked] = useState(false);

    const schema = yup.object().shape({
        name: yup.string()
            .min(4, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Name is required')
            .matches(
                "^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$",
                "Name should be in this format"
            ),
        email: yup.string().email('Please enter valid email').required('Email id is required'),
        password: yup.string()
            .min(8, ({ min }) => `Password must contain at least ${min} character`).required('Password is required').matches(
                "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{4,12}$",
                "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
            ),
        mobileno: yup.string()
            .min(10, ({ min }) => `Mobile No. must contain at least ${min} digit`).required('Mobile No. is required'),

        confirmpassword: yup.string().when("password", {
            is: val => (val && val.length > 0 ? true : false),
            then: yup.string().oneOf(
                [yup.ref("password")],
                "Both password need to be the same"
            )
        })
    });

    const [isVisible, setIsVisible] = useState(false);

    return (

        <SafeAreaView >
            <Formik
                initialValues={{ email: '', password: '', mobileno: '', name: '', confirmpassword: '' }}
                validateOnMount={true}
                onSubmit={values => console.log(values)}
                validationSchema={schema}
            >
                {({ handleChange, handleBlur, handleSubmit, values, touched, errors, isValid }) => (
                    <View style={styles.container}>


                        {/* <StatusBar
                            // translucent={true}
                            backgroundColor={'gray'}
                        />


                        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#09c6f9', '#035fce']} style={{ width: wp('100%'), height: hp('18%'), }}>
                            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginLeft: hp('2%'), marginTop: hp('1%') }}>
                                <AntDesign name='left' size={hp('2.5%')} color='white' />
                                <Text style={{ fontSize: hp('2.5%'), fontFamily: 'Roboto-Bold', color: Colors.primaryColor3, justifyContent: 'center', marginLeft: hp('1%') }}>Back</Text>
                            </TouchableOpacity>
                        </LinearGradient> */}
                                  <StatusBar
                            animated={true}
                            backgroundColor={Colors.primaryColor1}
                        />


                       
                        <View style={{ width: wp('100%'), height: hp('18%'), backgroundColor: Colors.primaryColor1 }}>
                            <TouchableOpacity onPress={() => props.navigation.goBack('Signup')} style={{ flexDirection: 'row', alignItems: 'center', marginLeft: hp('2%'), marginTop: hp('1%') }} >
                                <AntDesign name='left' size={hp('2.5%')} color='white' />
                                <Text style={{ fontSize: hp('2.5%'), fontFamily: 'Roboto-Bold', color: Colors.primaryColor3, justifyContent: 'center', marginLeft: hp('1%') }}>Back</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{ bottom: 0, }}>
                            <Modal isVisible={isModalVisible}
                                animationIn='zoomIn'
                                // animationOutTiming={500}
                                // animationInTiming={500}
                                hideModalContentWhileAnimating={true}
                                useNativeDriverForBackdrop={true}
                                onBackdropPress={() => setModalVisible(false)}
                                onSwipeComplete={() => setModalVisible(false)}
                                swipeDirection={['down']}
                                avoidKeyboard={true}
                                useNativeDriver={true}
                                style={{ width: wp('90%'), }}
                            >

                                <View style={{ width: wp('90%'), height: hp('28%'), backgroundColor: 'white', borderRadius: hp('1%') }}>

                                    <OtpInputs
                                        handleChange={handleOTPChange}
                                        numberOfInputs={4}
                                        keyboardType='phone-pad'
                                        value='otp'
                                        autoFocus
                                        inputStyles={
                                            styles.underlineStyleBase
                                        }
                                        style={{ flexDirection: 'row', alignSelf: 'center', marginTop: hp('1%') }}
                                    />

                                    <TouchableOpacity onPress={() => setModalVisible(false)}
                                   style={{ width: wp('50%'), height: hp('5.5%'), backgroundColor: Colors.primaryColor1, justifyContent: 'center', alignSelf: 'center', borderRadius: hp('1%'), marginTop: hp('4%'), marginBottom: hp('1%') }}>
                                        <Text style={{ alignSelf: 'center', fontFamily: 'Roboto-Bold', fontSize: hp('2%'), color: Colors.primaryColor8 }}>Continue</Text>
                                    </TouchableOpacity>
                                    <View style={{ flexDirection: 'row', width: wp('90%'), justifyContent: 'space-between', alignItems: 'center', marginTop: hp('2%'), }}>
                                        <Text style={{ fontFamily: 'Roboto-Regular', marginLeft: hp('2%') }}>Time Remaining 00:30s</Text>
                                        <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', marginRight: hp('2%') }}>
                                            <Text style={{ fontFamily: 'Roboto-Bold', fontSize: hp('2%'), color: Colors.primaryColor1, }}>Resend OTP</Text>
                                        </TouchableOpacity>
                                    </View>

                                </View>
                            </Modal>
                        </View>

                        <View style={{ bottom: 0, }}>
                            <Modal isVisible={isMyModalVisible}
                                animationIn='zoomIn'
                                // animationOutTiming={900}
                                // animationInTiming={900}
                                hideModalContentWhileAnimating={true}
                                useNativeDriverForBackdrop={true}
                                onBackdropPress={() => setMyModalVisible(false)}
                                onSwipeComplete={() => setMyModalVisible(false)}
                                swipeDirection={['down']}
                                avoidKeyboard={true}
                                useNativeDriver={true}
                                style={{ width: wp('90%'), alignSelf: 'center', }}
                            >

                                <View style={{ width: wp('90%'), height: hp('30%'), alignItems: 'center', backgroundColor: 'white', borderRadius: hp('1%') }}>
                                    <OtpInputs
                                        handleChange={handleEmailOTPChange}
                                        numberOfInputs={4}
                                        keyboardType='phone-pad'
                                        value='emailOtp'
                                        inputStyles={
                                            styles.underlineStyleBase
                                        }
                                        style={{ flexDirection: 'row', alignSelf: 'center', marginTop: hp('1%') }}
                                    />

                                    <TouchableOpacity onPress={() => setMyModalVisible(false)} style={{ width: wp('50%'), height: hp('5.5%'), backgroundColor: Colors.primaryColor1, justifyContent: 'center', alignSelf: 'center', borderRadius: hp('1%'), marginTop: hp('4%'), marginBottom: hp('1%') }}>
                                        <Text style={{ alignSelf: 'center', fontFamily: 'Roboto-Bold', fontSize: hp('2%'), color: Colors.primaryColor8 }}>Continue</Text>
                                    </TouchableOpacity>
                                    <View style={{ flexDirection: 'row', width: wp('90%'), justifyContent: 'space-between', alignItems: 'center', marginTop: hp('2%'), }}>
                                        <Text style={{ fontFamily: 'Roboto-Regular', marginLeft: hp('2%') }}>Time Remaining 00:30s</Text>
                                        <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', marginRight: hp('2%') }}>
                                            <Text style={{ fontFamily: 'Roboto-Bold', fontSize: hp('2%'), color: Colors.primaryColor1, }}>Resend OTP</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </Modal>
                        </View>


                        <View style={{
                            width: wp('96%'), height: hp('63%'), backgroundColor: Colors.primaryColor8, alignSelf: 'center', borderRadius: hp('2%'), marginTop: hp('-10%'), elevation: hp('2%'),
                            shadowColor: Colors.primaryColor4,

                        }}>
                            <View style={{ height: hp('52.5%') }}>
                                <View style={{ alignSelf: 'center', }}>
                                    <Text style={{ fontSize: hp('2.3%'), fontFamily: 'Roboto-Bold', color: Colors.primaryColor2, marginTop: hp('1.8%') }}>Sign Up with Email</Text>
                                </View>


                                <View style={{ width: wp('92%'), height: hp('5%'), alignSelf: 'center', flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1, borderBottomColor: Colors.primaryColor4, marginTop: hp('1.8%') }}>
                                    <TextInput
                                        placeholder='Enter your Name'
                                        placeholderTextColor={Colors.primaryGray}
                                        style={{ fontSize: hp('1.8%'), width: wp('70%'), marginLeft: hp('1%') }}
                                        autoCapitalize="none"
                                        onChangeText={handleChange('name')}
                                        onBlur={handleBlur('name')}
                                        value={values.name}
                                    />
                                    <View style={{ width: wp('17%'), height: hp('4%'), alignSelf: 'center', justifyContent: 'center', }}>

                                        <AntDesign name={!errors.name ? 'checkcircle' : ''} color={'green'} size={hp('2%')} style={{ alignSelf: 'center', }} />

                                    </View>
                                </View>
                                {/* <View style={{ height:hp('2%') }}> */}
                                {errors.name &&
                                    <Text style={{ fontSize: hp('1.5%'), color: 'red', marginLeft: hp('2%') }}>{errors.name}</Text>
                                }
                                {/* </View> */}
                                <View style={{ width: wp('92%'), height: hp('5%'), alignSelf: 'center', flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1, borderBottomColor: Colors.primaryColor4, marginTop: hp('1.8%') }}>
                                    {/* <TextInput
                                        placeholder='Enter Your Mobile No.'
                                        placeholderTextColor={Colors.primaryGray}
                                        style={{ fontSize: hp('1.8%'), width: wp('70%'), marginLeft: hp('1%') }}
                                        maxLength={10}
                                        keyboardType='number-pad'
                                        onChangeText={handleChange('mobileno')}
                                        onBlur={handleBlur('mobileno')}
                                        value={values.mobileno}
                                    /> */}
                                     <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                        <Text style={{ fontSize: hp('2%'), color: Colors.black,marginTop:-hp('1%') }}>+91</Text>
                                        <TextInput
                                            placeholder='Enter mobile number'
                                            placeholderTextColor={Colors.primaryGray}
                                            style={{ fontSize: hp('1.8%'), width: wp('70%'), marginLeft: hp('1%') }}
                                            maxLength={10}
                                            keyboardType='number-pad'
                                            onChangeText={handleChange('mobileno')}
                                            onBlur={handleBlur('mobileno')}
                                            value={values.mobileno}
                                        />
                                    </View>

{otp ?
                                        <View style={{ width: wp('17%'), height: hp('4%'), alignSelf: 'center', justifyContent: 'center', }}>
                                            <AntDesign name='checkcircle' color={'green'} size={hp('2%')} style={{ alignSelf: 'center', }} />
                                        </View>
                                        :

                                        <TouchableOpacity onPress={toggleMobileModal} style={{ width: wp('14%'), height: hp('3.5%'), backgroundColor: Colors.primaryColor1, alignSelf: 'center', justifyContent: 'center', borderRadius: hp('0.5%') }}>
                                            <Text style={{ fontSize: hp('1.7%'), alignSelf: 'center', color: Colors.primaryColor9 }}>Get OTP
                                            </Text>
                                        </TouchableOpacity>
                                    }

                                </View>
                                {errors.mobileno &&
                                    <Text style={{ fontSize: hp('1.5%'), color: 'red', marginLeft: hp('2%') }}>{errors.mobileno}</Text>
                                }

                                <View style={{ width: wp('92%'), height: hp('5%'), alignSelf: 'center', flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1, borderBottomColor: Colors.primaryColor4, marginTop: hp('1.8%') }}>
                                    <TextInput
                                        placeholder='Enter Your Email Id'
                                        placeholderTextColor={Colors.primaryGray}
                                        style={{ fontSize: hp('1.8%'), width: wp('70%'), marginLeft: hp('1%') }}
                                        keyboardType='email-address'
                                        onChangeText={handleChange('email')}
                                        onBlur={handleBlur('email')}

                                        value={values.email}

                                    />
                                    {emailOtp ?
                                        <View style={{ width: wp('17%'), height: hp('4%'), alignSelf: 'center', justifyContent: 'center', }}>
                                            <AntDesign name='checkcircle' color={'green'} size={hp('2%')} style={{ alignSelf: 'center', }} />
                                        </View>
                                        :
                                        <TouchableOpacity onPress={toggleEmailModal} style={{ width: wp('14%'), height: hp('3.5%'), backgroundColor: Colors.primaryColor1, alignSelf: 'center', justifyContent: 'center', borderRadius: hp('0.5%') }}>
                                            <Text style={{ fontSize: hp('1.8%'), alignSelf: 'center', color: Colors.primaryColor9 }}>Get OTP
                                            </Text>
                                        </TouchableOpacity>}
                                </View>

                                {errors.email &&
                                    <Text style={{ fontSize: hp('1.5%'), color: 'red', marginLeft: hp('2%') }}>{errors.email}</Text>
                                }

                                <View style={{ width: wp('92%'), height: hp('5%'), alignSelf: 'center', flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1, borderBottomColor: Colors.primaryColor4, marginTop: hp('1.8%') }}>
                                    <TextInput
                                        placeholder='Password'
                                        placeholderTextColor={Colors.primaryGray}
                                        style={{ fontSize: hp('1.8%'), width: wp('75%'), marginLeft: hp('1%') }}
                                        autoCapitalize="none"
                                        onChangeText={handleChange('password')}
                                        onBlur={handleBlur('password')}
                                        value={values.password}
                                        secureTextEntry={!isVisible}
                                    />
                                    <TouchableOpacity onPress={() => setIsVisible(!isVisible)} style={{ width: wp('17%'), height: hp('4%'), alignSelf: 'center', justifyContent: 'center', }}>

                                        <Feather name={isVisible ? 'eye' : 'eye-off'} size={hp('2%')} style={{ alignSelf: 'center', }} />
                                    </TouchableOpacity>
                                </View>
                                {errors.password &&
                                    <Text style={{ fontSize: hp('1.5%'), color: 'red', marginLeft: hp('2%') }}>{errors.password}</Text>
                                }

                                <View style={{ width: wp('92%'), height: hp('5%'), alignSelf: 'center', flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1, borderBottomColor: Colors.primaryColor4, marginTop: hp('1.8%') }}>
                                    <TextInput
                                        placeholder='Confirm Password'
                                        placeholderTextColor={Colors.primaryGray}
                                        style={{ fontSize: hp('1.8%'), width: wp('75%'), marginLeft: hp('1%') }}
                                        onChangeText={handleChange('confirmpassword')}
                                        onBlur={handleBlur('confirmpassword')}
                                        value={values.confirmpassword}
                                    />
                                    <TouchableOpacity style={{ width: wp('17%'), height: hp('4%'), alignSelf: 'center', justifyContent: 'center', }}>

                                        <Feather name='eye-off' size={hp('2%')} style={{ alignSelf: 'center', }} />
                                    </TouchableOpacity>
                                </View>

                                {errors.confirmpassword &&
                                    <Text style={{ fontSize: hp('1.5%'), color: 'red', marginLeft: hp('2%') }}>{errors.confirmpassword}</Text>
                                }


                                <View style={{ width: wp('92%'), height: hp('5%'), alignSelf: 'center', flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: Colors.primaryColor4, marginTop: hp('1.8%') }}>
                                    <TextInput
                                        placeholder='Referral Code'
                                        placeholderTextColor={Colors.primaryGray}
                                        style={{ fontSize: hp('1.8%'), width: wp('75%'), marginLeft: hp('1%') }}

                                    />
                                </View>
                            </View>
                            <TouchableOpacity disabled={!isValid} style={{ width: wp('60%'), height: hp('5.5%'), backgroundColor: isValid ? '#09c6f9' : 'gray', justifyContent: 'center', alignSelf: 'center', borderRadius: hp('1%'), marginTop: hp('3%')}}
                           onPress={authCheckbox}
                            >
                                <Text style={{ alignSelf: 'center', fontFamily: 'Roboto-Bold', fontSize: hp('2%'), color: Colors.primaryColor5 }}>Confirm</Text>
                            </TouchableOpacity>
                        </View>


                        <View style={{ width: wp('100%'), height: hp('28%'), alignSelf: 'center', marginTop: hp('1%'), }}>
                            <View style={{ flexDirection: 'row', width: wp('100%'), height: hp('3.5%'), justifyContent: 'center', }}>
                               {isValid &&
                                <CheckBox
                                    tintColors={{ true: Colors.primaryColor2 }}
                                    disabled={false}
                                    value={checked}
                                    onValueChange={(newValue) => setChecked(newValue)}
                                    style={{ alignSelf: 'center' }}
                                />
                               }
                                <Text style={{ color: Colors.primaryColor6, fontFamily: 'Roboto-Medium', marginLeft: hp('1%') }}>By proceeding, you agree to <Text style={{ color: Colors.primaryColor2, textDecorationLine: 'underline' }}>Terms & Conditions</Text></Text>
                            </View>
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ color: Colors.primaryColor7, fontFamily: 'Roboto-Medium', }} >& <Text style={{ color: Colors.primaryColor2, fontFamily: 'Roboto-Medium', textDecorationLine: 'underline' }}>Privacy policy</Text></Text>
                            </View>


                            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: hp('1%') }}>
                                <Text style={{ color: Colors.primaryColor6, fontFamily: 'Roboto-Medium', }}>Or Sign Up with</Text>
                            </View>
                            <View style={{ width: wp('100%'), height: hp('12%'), justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                                <TouchableOpacity style={{ width: wp('13%'), height: wp('13%'), justifyContent: 'center', backgroundColor: Colors.primaryColor8, borderRadius: hp('6.5%'), borderWidth: 1, borderColor: Colors.primaryGray, }}>
                                    <Image source={require('../Assetst/Images/google.png')} style={{ width: wp('5.2%'), height: wp('5%'), resizeMode: 'center', alignSelf: 'center', }} />
                                </TouchableOpacity>

                                <TouchableOpacity style={{ width: wp('13%'), height: wp('13%'), justifyContent: 'center', backgroundColor: Colors.primaryColor8, borderRadius: hp('6.5%'), borderWidth: 1, borderColor: Colors.primaryGray, marginLeft: hp('1%') }}>
                                    <MaterialCommunityIcons name='facebook' size={hp('3.5%')} color={Colors.primaryColor2} style={{ justifyContent: 'center', alignSelf: 'center', }} />
                                </TouchableOpacity>


                                <TouchableOpacity style={{ width: wp('13%'), height: wp('13%'), justifyContent: 'center', backgroundColor: Colors.primaryColor8, borderRadius: hp('6.5%'), borderWidth: 1, borderColor: Colors.primaryGray, marginLeft: hp('1%') }}>
                                    <Image source={require('../Assetst/Images/fingerprint2.png')} style={{ width: wp('5.2%'), height: wp('5%'), resizeMode: 'center', alignSelf: 'center', borderRadius: hp('100%') }} />
                                </TouchableOpacity>

                            </View>
                            <View style={{ width: wp('100%'), height: hp('8%'), flexDirection: 'row', justifyContent: 'center', }}>
                                <Text style={{ color: Colors.primaryColor7, fontFamily: 'Roboto-Medium', }}>Have an Account?</Text>
                                <TouchableOpacity style={{ alignItems: 'center' }}>
                                    <Text style={{ color: Colors.primaryColor2, fontFamily: 'Roboto-Bold', }} > Log In</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                    </View>
                )}
            </Formik>
        </SafeAreaView >

    )

}

const styles = StyleSheet.create({

    container: {
        width: wp('100%'),
        height: hp('100%'),
        // backgroundColor: Colors.primaryColor9
    },
    underlineStyleBase: {
        width: wp('10%'),
        borderWidth: 0,
        borderBottomWidth: 1,
        color: 'black',
        borderBottomColor: '#a2a2a2',
        marginHorizontal: wp('2%'),
        fontSize: hp('3.5%'),
        textAlign: 'center',
        fontWeight: 'bold',
        justifyContent: 'center',


    },

    underlineStyleHighLighted: {
        borderColor: Colors.primaryGray,
    },

})

export default SignupWithEmail;

                         