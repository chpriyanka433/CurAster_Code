import * as React from 'react'
import * as yup from 'yup';

import { Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'

import AntDesign from 'react-native-vector-icons/AntDesign';
import Colors from '../Assetst/Constants/Colors'
import { Formik } from 'formik';
import { TextInput } from 'react-native-paper';
import moment from 'moment';

const ProfileForm = () => {

    const schema = yup.object().shape({
        firstname: yup.string()
            .min(4, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Name is required')
            .matches(
                "^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z])$",
                "Name should be in this format"
            ),
        lastname: yup.string()
            .min(4, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Name is required')
            .matches(
                "^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z])$",
                "Name should be in this format"
            ),
        email: yup.string().email('Please enter valid email').required('Email id is required'),

        mobileno: yup.string()
            .min(10, ({ min }) => `Mobile No. must contain at least ${min} digit`).required('Mobile No. is required'),

        countrycode: yup.string()
            .min(4, ({ min }) => `Mobile No. must contain at least ${min} digit`).required('Mobile No. is required'),

        countrycodestd: yup.string()
            .min(4, ({ min }) => `Mobile No. must contain at least ${min} digit`).required('Mobile No. is required'),

        stdcode: yup.string()
            .min(10, ({ min }) => `Mobile No. must contain at least ${min} digit`).required('Mobile No. is required'),

        landlineno: yup.string()
            .min(10, ({ min }) => `Mobile No. must contain at least ${min} digit`).required('Mobile No. is required'),

        dateofbirth: yup.string()
            .required("DOB is Required")
            .test("DOB", "Please choose a valid date of birth", (value) => {
                return moment().diff(moment(value), "years") >= 10;
            }),

        occupation: yup.string()
            .min(6, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Name is required')
            .matches(
                "^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z])$",
                "Name should be in this format"
            ),
        zip_code: yup.string()
            .min(6, ({ min }) => `Mobile No. must contain at least ${min} digit`).required('Mobile No. is required'),

    });



    return (
        <SafeAreaView>

            <Formik
                initialValues={{ firstname: '', lastname: '', email: '', mobileno: '', countrycodestd: '', countrycode: '', stdcode: '', landlineno: '', occupation: '', zip_code: '' }}
                validateOnMount={true}
                onSubmit={values => console.log(values)}
                validationSchema={schema}
            >
                {({ values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit }) => (
                    <View style={styles.container}>
                        <StatusBar backgroundColor={Colors.primaryColor1} />
                        <View style={{ width: wp('100%'), height: hp('88%'), }}>
                            <ScrollView>

                                <View style={styles.head}>
                                    <TouchableOpacity onPress={() => props.navigation.goBack("Appointment")} style={{ width: wp('15%'), height: hp('4%'), alignSelf: "center", flexDirection: "row", justifyContent: "center", alignItems: "center", marginLeft: wp('1.7%') }}>
                                        <AntDesign name="left" size={hp('2%')} color='#ffffff' />
                                        <Text style={{ fontFamily: "Roboto-Regular", fontSize: hp('2%'), color: Colors.primaryColor8 }}>Back</Text>
                                    </TouchableOpacity>
                                    <Text style={{ fontFamily: "Roboto-Bold", fontSize: hp('2%'), color: Colors.primaryColor8, textAlignVertical: "center", marginLeft: wp('27%') }}>Profile</Text>
                                </View>
                                <View style={styles.picture}>
                                    <TouchableOpacity style={{ height: hp('14%'), width: hp('14%'), borderRadius: hp('7%'), alignItems: "center", justifyContent: 'center' }}>
                                        <Image source={require('../Assetst/Images/client.jpg')} style={{ width: hp('13%'), height: hp('13%'), borderRadius: wp('13/2%') }} />
                                    </TouchableOpacity>
                                </View>
                                <View style={{ width: wp('90%'), height: hp('5%'), alignSelf: "center", marginTop: hp('1%'), justifyContent: "center", paddingLeft: wp('1%') }}>
                                    <Text style={{ fontFamily: "Roboto-Bold", fontSize: hp('2.2%'), color: Colors.primaryColor7 }}>Personal Details</Text>
                                </View>



                                <View style={{ flexDirection: "row", width: wp('92%'), alignSelf: "center", marginTop: hp('0.8%'), justifyContent: 'space-between', alignItems: "center", paddingLeft: wp('1.2%'), paddingRight: wp('1.2%'), paddingBottom: hp('1%') }}>
                                    <TextInput
                                        style={{ width: wp('43%'), height: hp('5%'), }}
                                        label="First Name"
                                        value={values.firstname}
                                        outlineColor={touched.firstname && errors.firstname ? 'red' : '#000000'}
                                        activeOutlineColor={touched.firstname && errors.firstname ? 'red' : '#000000'}
                                        mode="outlined"
                                        onChangeText={handleChange('firstname')}
                                        onBlur={() => setFieldTouched('firstname')}

                                    />

                                    <TextInput
                                        style={{ width: wp('43%'), height: hp('5%') }}
                                        label="Last Name"
                                        value={values.lastname}
                                        outlineColor={touched.lastname && errors.lastname ? 'red' : '#000000'}
                                        activeOutlineColor={touched.lastname && errors.lastname ? 'red' : '#000000'}
                                        mode="outlined"
                                        onBlur={() => setFieldTouched('lastname')}
                                        onChangeText={handleChange('lastname')}
                                    />
                                </View>
                                {/* {errors.firstname &&
                                    <Text style={{ fontSize: hp('1.5%'), color: 'red', marginLeft: hp('2%') }}>Fill your first name</Text>
                                } */}

                                <View style={{ width: wp('92%'), alignSelf: "center", marginTop: hp('0.8%'), justifyContent: 'space-between', alignItems: "center", paddingLeft: wp('1.2%'), paddingRight: wp('1.2%'), paddingBottom: hp('1%'), }}>
                                    <TextInput
                                        style={{ width: wp('91%'), height: hp('5%'), }}
                                        label="E-mail Id"
                                        value={values.email}
                                        outlineColor={touched.email && errors.email ? 'red' : '#000000'}
                                        activeOutlineColor={touched.email && errors.email ? 'red' : '#000000'}
                                        mode="outlined"
                                        onChangeText={handleChange('email')}
                                        onBlur={() => setFieldTouched('email')}
                                    />


                                </View>

                                <View style={{ flexDirection: "row", width: wp('92%'), alignSelf: "center", marginTop: hp('0.8%'), justifyContent: 'space-between', alignItems: "center", paddingLeft: wp('1.2%'), paddingRight: wp('1.2%'), paddingBottom: hp('1%'), }}>
                                    <TextInput

                                        style={{ width: wp('43%'), height: hp('5%'), }}
                                        label="Country Code"
                                        value={values.countrycode}
                                        outlineColor={touched.countrycode && errors.countrycode ? 'red' : '#000000'}
                                        activeOutlineColor={touched.countrycode && errors.countrycode ? 'red' : '#000000'}
                                        mode="outlined"
                                        onChangeText={handleChange('countrycode')}
                                        onBlur={() => setFieldTouched('countrycode')}
                                    />

                                    <TextInput
                                        style={{ width: wp('43%'), height: hp('5%') }}
                                        label="Mobile No."
                                        value={values.mobileno}
                                        maxLength={10}
                                        outlineColor={touched.mobileno && errors.mobileno ? 'red' : '#000000'}
                                        activeOutlineColor={touched.mobileno && errors.mobileno ? 'red' : '#000000'}
                                        mode="outlined"
                                        onChangeText={handleChange('mobileno')}
                                        onBlur={() => setFieldTouched('mobileno')}
                                    />
                                </View>


                                <View style={{ flexDirection: "row", width: wp('92%'), alignSelf: "center", marginTop: hp('0.8%'), justifyContent: 'space-between', alignItems: "center", paddingLeft: wp('1.2%'), paddingRight: wp('1.2%'), paddingBottom: hp('1%'), }}>
                                    <TextInput
                                        style={{ width: wp('43%'), height: hp('5%'), }}
                                        label="Country Code"
                                        value={values.countrycodestd}
                                        outlineColor={touched.countrycodestd && errors.countrycodestd ? 'red' : '#000000'}
                                        activeOutlineColor={touched.countrycodestd && errors.countrycodestd ? 'red' : '#000000'}
                                        mode="outlined"
                                        onChangeText={handleChange('countrycodestd')}
                                        onBlur={() => setFieldTouched('countrycodestd')}
                                    />

                                    <TextInput
                                        style={{ width: wp('43%'), height: hp('5%') }}
                                        label="STD Code"
                                        value={values.stdcode}
                                        outlineColor={touched.stdcode && errors.stdcode ? 'red' : '#000000'}
                                        activeOutlineColor={touched.stdcode && errors.stdcode ? 'red' : '#000000'}
                                        mode="outlined"
                                        onChangeText={handleChange('stdcode')}
                                        onBlur={() => setFieldTouched('stdcode')}
                                    />
                                </View>


                                <View style={{ width: wp('92%'), alignSelf: "center", marginTop: hp('0.8%'), justifyContent: 'space-between', alignItems: "center", paddingLeft: wp('1.2%'), paddingRight: wp('1.2%'), paddingBottom: hp('1%'), flexDirection: "row" }}>
                                    <TextInput
                                        style={{ width: wp('90%'), height: hp('5%'), position: 'relative' }}
                                        label="Landline No."
                                        value={values.landlineno}
                                        outlineColor={touched.landlineno && errors.landlineno ? 'red' : '#000000'}
                                        activeOutlineColor={touched.landlineno && errors.landlineno ? 'red' : '#000000'}
                                        mode="outlined"
                                        onChangeText={handleChange('landlineno')}
                                        onBlur={() => setFieldTouched('stdcode')}
                                    />

                                </View>


                                <View style={{ width: wp('92%'), alignSelf: "center", marginTop: hp('0.8%'), justifyContent: 'space-between', alignItems: "center", paddingLeft: wp('1.2%'), paddingRight: wp('1.2%'), paddingBottom: hp('1%'), flexDirection: "row" }}>
                                    <TextInput
                                        style={{ width: wp('90%'), height: hp('5%'), position: 'relative' }}
                                        label="Gender"
                                        // value={text8}
                                        outlineColor='#000000'
                                        activeOutlineColor='#09c6f9'
                                        mode="outlined"
                                    // onChangeText={text8 => setText8(text8)} 
                                    />
                                    <TouchableOpacity style={{ position: 'absolute', marginLeft: wp('86%') }}>
                                        <AntDesign name='caretdown' size={hp('2%')} />
                                    </TouchableOpacity>
                                </View>

                                <View style={{ width: wp('92%'), alignSelf: "center", marginTop: hp('0.8%'), justifyContent: 'space-between', alignItems: "center", paddingLeft: wp('1.2%'), paddingRight: wp('1.2%'), paddingBottom: hp('1%'), flexDirection: "row" }}>
                                    <TextInput
                                        style={{ width: wp('90%'), height: hp('5%') }}
                                        label="Date Of Birth"
                                        value={values.dateofbirth}
                                        outlineColor={touched.dateofbirth && errors.dateofbirth ? 'red' : '#000000'}
                                        activeOutlineColor={touched.dateofbirth && errors.dateofbirth ? 'red' : '#000000'}
                                        mode="outlined"
                                        onChangeText={handleChange('dateofbirth')}
                                        onBlur={() => setFieldTouched('dateofbirth')}
                                    />

                                </View>


                                <View style={{ width: wp('92%'), alignSelf: "center", marginTop: hp('0.8%'), alignItems: "center", paddingLeft: wp('1.2%'), paddingRight: wp('1.2%'), paddingBottom: hp('1%'), flexDirection: "row" }}>
                                    <TextInput
                                        style={{ width: wp('90%'), height: hp('5%') }}
                                        label="Occupation"
                                        value={values.occupation}
                                        outlineColor={touched.occupation && errors.occupation ? 'red' : '#000000'}
                                        activeOutlineColor={touched.occupation && errors.occupation ? 'red' : '#000000'}
                                        mode="outlined"
                                        onChangeText={handleChange('occupation')}
                                        onBlur={() => setFieldTouched('occupation')}
                                    />

                                </View>

                                <View style={{ width: wp('92%'), alignSelf: "center", marginTop: hp('0.8%'), alignItems: "center", paddingLeft: wp('1.2%'), paddingRight: wp('1.2%'), paddingBottom: hp('1%'), flexDirection: "row" }}>
                                    <TextInput
                                        style={{ width: wp('90%'), height: hp('5%'), position: 'relative' }}
                                        label="Upload Occupation Id"
                                        // value={text10}
                                        outlineColor='#000000'
                                        activeOutlineColor='#09c6f9'
                                        mode="outlined"
                                    // onChangeText={text10 => setText10(text10)}
                                    />

                                    <TouchableOpacity style={{ position: 'absolute', marginLeft: wp('85%') }}>
                                        <AntDesign name='upload' size={hp('2%')} />
                                    </TouchableOpacity>

                                </View>

                                <View style={{ width: wp('92%'), alignSelf: "center", marginTop: hp('0.8%'), justifyContent: 'space-between', alignItems: "center", paddingLeft: wp('1.2%'), paddingRight: wp('1.2%'), paddingBottom: hp('1%'), flexDirection: "row" }}>
                                    <TextInput
                                        style={{ width: wp('90%'), height: hp('5%'), position: 'relative' }}
                                        label="Nationality"
                                        // value={text11}
                                        outlineColor='#000000'
                                        activeOutlineColor='#09c6f9'
                                        mode="outlined"
                                    // onChangeText={text11 => setText11(text11)} 
                                    />
                                    <TouchableOpacity style={{ position: 'absolute', marginLeft: wp('86%') }}>
                                        <AntDesign name='caretdown' size={hp('2%')} />
                                    </TouchableOpacity>
                                </View>

                                <View style={{ width: wp('92%'), alignSelf: "center", marginTop: hp('0.8%'), justifyContent: 'space-between', alignItems: "center", paddingLeft: wp('1.2%'), paddingRight: wp('1.2%'), paddingBottom: hp('1%'), flexDirection: "row" }}>
                                    <TextInput
                                        style={{ width: wp('90%'), height: hp('5%'), position: 'relative' }}
                                        label="Language"
                                        // value={text12}
                                        outlineColor='#000000'
                                        activeOutlineColor='#09c6f9'
                                        mode="outlined"
                                    // onChangeText={text12 => setText12(text12)}
                                    />
                                    <TouchableOpacity style={{ position: 'absolute', marginLeft: wp('86%') }}>
                                        <AntDesign name='caretdown' size={hp('2%')} />
                                    </TouchableOpacity>
                                </View>

                                <View style={{ width: wp('92%'), alignSelf: "center", marginTop: hp('0.8%'), justifyContent: 'space-between', alignItems: "center", paddingLeft: wp('1.2%'), paddingRight: wp('1.2%'), paddingBottom: hp('1%'), flexDirection: "row", borderBottomColor: '#696969', borderBottomWidth: hp('0.2%') }}>
                                    <TextInput
                                        style={{ width: wp('90%'), height: hp('5%'), position: 'relative' }}
                                        label="Marrital Status"
                                        // value={text13}
                                        outlineColor='#000000'
                                        activeOutlineColor='#09c6f9'
                                        mode="outlined"
                                    // onChangeText={text13 => setText13(text13)}
                                    />
                                    <TouchableOpacity style={{ position: 'absolute', marginLeft: wp('86%') }}>
                                        <AntDesign name='caretdown' size={hp('2%')} />
                                    </TouchableOpacity>
                                </View>


                                <View style={{ width: wp('90%'), height: hp('5%'), alignSelf: "center", marginTop: hp('1%'), justifyContent: "center", paddingLeft: wp('1%') }}>
                                    <Text style={{ fontFamily: "Roboto-Bold", fontSize: hp('2.2%'), color: Colors.primaryColor7 }}>Personal Identification</Text>
                                </View>


                                <View style={{ width: wp('92%'), alignSelf: "center", marginTop: hp('0.8%'), justifyContent: 'space-between', alignItems: "center", paddingLeft: wp('1.2%'), paddingRight: wp('1.2%'), paddingBottom: hp('1%'), flexDirection: "row", }}>
                                    <TextInput
                                        style={{ width: wp('90%'), height: hp('5%'), position: 'relative' }}
                                        label="Id Type"
                                        // value={text14}
                                        outlineColor='#000000'
                                        activeOutlineColor='#09c6f9'
                                        mode="outlined"
                                    // onChangeText={text14 => setText14(text14)} 
                                    />
                                    <TouchableOpacity style={{ position: 'absolute', marginLeft: wp('86%') }}>
                                        <AntDesign name='caretdown' size={hp('2%')} />
                                    </TouchableOpacity>
                                </View>


                                <View style={{ width: wp('92%'), alignSelf: "center", marginTop: hp('0.8%'), justifyContent: 'space-between', alignItems: "center", paddingLeft: wp('1.2%'), paddingRight: wp('1.2%'), paddingBottom: hp('1%'), flexDirection: "row" }}>
                                    <TextInput
                                        style={{ width: wp('90%'), height: hp('5%'), position: 'relative' }}
                                        label="Id Number"
                                        // value={text15}
                                        outlineColor='#000000'
                                        activeOutlineColor='#09c6f9'
                                        mode="outlined"
                                    // onChangeText={text15 => setText15(text15)} 
                                    />
                                    <TouchableOpacity style={{ position: 'absolute', marginLeft: wp('86%') }}>
                                        <AntDesign name='caretdown' size={hp('2%')} />
                                    </TouchableOpacity>
                                </View>

                                <View style={{ width: wp('92%'), alignSelf: "center", marginTop: hp('0.8%'), alignItems: "center", paddingLeft: wp('1.2%'), paddingRight: wp('1.2%'), paddingBottom: hp('1%'), flexDirection: "row", borderBottomColor: '#696969', borderBottomWidth: hp('0.2%') }}>
                                    <TextInput
                                        style={{ width: wp('90%'), height: hp('5%'), position: 'relative' }}
                                        label="Upload Id"
                                        // value={text16}
                                        outlineColor='#000000'
                                        activeOutlineColor='#09c6f9'
                                        mode="outlined"
                                    // onChangeText={text16 => setText16(text16)} 
                                    />

                                    <TouchableOpacity style={{ position: 'absolute', marginLeft: wp('85%') }}>
                                        <AntDesign name='upload' size={hp('2%')} />
                                    </TouchableOpacity>

                                </View>


                                <View style={{ width: wp('90%'), height: hp('5%'), alignSelf: "center", marginTop: hp('1%'), justifyContent: "center", paddingLeft: wp('1%'), }}>
                                    <Text style={{ fontFamily: "Roboto-Bold", fontSize: hp('2.2%'), color: Colors.primaryColor7 }}>Address</Text>
                                </View>

                                <View style={{ width: wp('92%'), alignSelf: "center", marginTop: hp('0.8%'), justifyContent: 'space-between', alignItems: "center", paddingLeft: wp('1.2%'), paddingRight: wp('1.2%'), paddingBottom: hp('1%'), flexDirection: "row", }}>
                                    <TextInput
                                        style={{ width: wp('90%'), height: hp('5%'), position: 'relative' }}
                                        label="Address Type"
                                        // value={text17}
                                        outlineColor='#000000'
                                        activeOutlineColor='#09c6f9'
                                        mode="outlined"
                                    // onChangeText={text17 => setText17(text17)}
                                    />
                                    <TouchableOpacity style={{ position: 'absolute', marginLeft: wp('86%') }}>
                                        <AntDesign name='caretdown' size={hp('2%')} />
                                    </TouchableOpacity>
                                </View>

                                <View style={{ width: wp('92%'), alignSelf: "center", marginTop: hp('0.8%'), justifyContent: 'space-between', alignItems: "center", paddingLeft: wp('1.2%'), paddingRight: wp('1.2%'), paddingBottom: hp('1%'), flexDirection: "row", }}>
                                    <TextInput
                                        style={{ width: wp('90%'), height: hp('5%'), position: 'relative' }}
                                        label="Address Type"
                                        // value={text17}
                                        outlineColor='#000000'
                                        activeOutlineColor='#09c6f9'
                                        mode="outlined"
                                    // onChangeText={text17 => setText17(text17)} 
                                    />
                                    <TouchableOpacity style={{ position: 'absolute', marginLeft: wp('86%') }}>
                                        <AntDesign name='caretdown' size={hp('2%')} />
                                    </TouchableOpacity>
                                </View>

                                <View style={{ width: wp('92%'), alignSelf: "center", marginTop: hp('0.8%'), justifyContent: 'space-between', alignItems: "center", paddingLeft: wp('1.2%'), paddingRight: wp('1.2%'), paddingBottom: hp('1%'), flexDirection: "row", }}>
                                    <TextInput
                                        style={{ width: wp('90%'), height: hp('5%'), position: 'relative' }}
                                        label="Address Line 1"
                                        // value={text18}
                                        outlineColor='#000000'
                                        activeOutlineColor='#09c6f9'
                                        mode="outlined"
                                    // onChangeText={text18 => setText18(text18)} 
                                    />
                                </View>

                                <View style={{ width: wp('92%'), alignSelf: "center", marginTop: hp('0.8%'), justifyContent: 'space-between', alignItems: "center", paddingLeft: wp('1.2%'), paddingRight: wp('1.2%'), paddingBottom: hp('1%'), flexDirection: "row", }}>
                                    <TextInput
                                        style={{ width: wp('90%'), height: hp('5%'), position: 'relative' }}
                                        label="Address Line 2"
                                        // value={text19}
                                        outlineColor='#000000'
                                        activeOutlineColor='#09c6f9'
                                        mode="outlined"
                                    // onChangeText={text19 => setText19(text19)} 
                                    />
                                </View>

                                <View style={{ width: wp('92%'), alignSelf: "center", marginTop: hp('0.8%'), justifyContent: 'space-between', alignItems: "center", paddingLeft: wp('1.2%'), paddingRight: wp('1.2%'), paddingBottom: hp('1%'), flexDirection: "row" }}>
                                    <TextInput
                                        style={{ width: wp('90%'), height: hp('5%'), position: 'relative' }}
                                        label="Address Line 3"
                                        // value={text20}
                                        outlineColor='#000000'
                                        activeOutlineColor='#09c6f9'
                                        mode="outlined"
                                    // onChangeText={text20 => setText20(text20)}
                                    />
                                </View>

                                <View style={{ flexDirection: "row", width: wp('92%'), alignSelf: "center", marginTop: hp('0.8%'), justifyContent: 'space-between', alignItems: "center", paddingLeft: wp('1.2%'), paddingRight: wp('1.2%'), paddingBottom: hp('1%'), }}>
                                    <TextInput
                                        style={{ width: wp('43%'), height: hp('5%'), position: 'relative' }}
                                        label="City"
                                        // value={text21}
                                        outlineColor='#000000'
                                        activeOutlineColor='#09c6f9'
                                        mode="outlined"
                                    // onChangeText={text21 => setText21(text21)}
                                    />

                                    <TouchableOpacity style={{ position: 'absolute', marginLeft: wp('38%') }}>
                                        <AntDesign name='caretdown' size={hp('2%')} />
                                    </TouchableOpacity>

                                    <TextInput
                                        style={{ width: wp('43%'), height: hp('5%') }}
                                        label="State"
                                        // value={text22}
                                        outlineColor='#000000'
                                        activeOutlineColor='#09c6f9'
                                        mode="outlined"
                                    // onChangeText={text22 => setText22(text22)}
                                    />
                                    <TouchableOpacity style={{ position: 'absolute', marginLeft: wp('85%') }}>
                                        <AntDesign name='caretdown' size={hp('2%')} />
                                    </TouchableOpacity>

                                </View>


                                <View style={{ flexDirection: "row", width: wp('92%'), alignSelf: "center", marginTop: hp('0.8%'), justifyContent: 'space-between', alignItems: "center", paddingLeft: wp('1.2%'), paddingRight: wp('1.2%'), paddingBottom: hp('1%'), borderBottomColor: '#696969', borderBottomWidth: hp('0.2%') }}>
                                    <TextInput
                                        style={{ width: wp('43%'), height: hp('5%'), position: 'relative' }}
                                        label="Zip Code"
                                        value={values.zip_code}
                                        outlineColor={touched.zip_code && errors.zip_code ? 'red' : '#000000'}
                                        activeOutlineColor={touched.zip_code && errors.zip_code ? 'red' : '#000000'}
                                        mode="outlined"
                                        onChangeText={handleChange('zip_code')}
                                        onBlur={() => setFieldTouched('zip_code')}
                                    />



                                    <TextInput
                                        style={{ width: wp('43%'), height: hp('5%') }}
                                        label="Country"
                                        // value={text24}
                                        outlineColor='#000000'
                                        activeOutlineColor='#09c6f9'
                                        mode="outlined"
                                    // onChangeText={text24 => setText24(text24)}
                                    />
                                    <TouchableOpacity style={{ position: 'absolute', marginLeft: wp('85%') }}>
                                        <AntDesign name='caretdown' size={hp('2%')} />
                                    </TouchableOpacity>

                                </View>


                                <View style={{ width: wp('90%'), height: hp('5%'), alignSelf: "center", marginTop: hp('1%'), justifyContent: "center", paddingLeft: wp('1%'), }}>
                                    <Text style={{ fontFamily: "Roboto-Bold", fontSize: hp('2.2%'), color: Colors.primaryColor7 }}>Health</Text>
                                </View>

                                <View style={{ width: wp('92%'), alignSelf: "center", marginTop: hp('0.8%'), justifyContent: 'space-between', alignItems: "center", paddingLeft: wp('1.2%'), paddingRight: wp('1.2%'), paddingBottom: hp('1%'), flexDirection: "row", }}>
                                    <TextInput
                                        style={{ width: wp('90%'), height: hp('5%'), position: 'relative' }}
                                        label="Medical Insurance(if any)"
                                        // value={text25}
                                        outlineColor='#000000'
                                        activeOutlineColor='#09c6f9'
                                        mode="outlined"
                                    // onChangeText={text25 => setText25(text25)}
                                    />
                                    <TouchableOpacity style={{ position: 'absolute', marginLeft: wp('86%') }}>
                                        <AntDesign name='caretdown' size={hp('2%')} />
                                    </TouchableOpacity>
                                </View>

                                <View style={{ width: wp('92%'), alignSelf: "center", marginTop: hp('0.8%'), justifyContent: 'space-between', alignItems: "center", paddingLeft: wp('1.2%'), paddingRight: wp('1.2%'), paddingBottom: hp('1%'), flexDirection: "row", }}>
                                    <TextInput
                                        style={{ width: wp('90%'), height: hp('5%'), position: 'relative' }}
                                        label="Existing Medical Condition(if any)"
                                        // value={text25}
                                        outlineColor='#000000'
                                        activeOutlineColor='#09c6f9'
                                        mode="outlined"
                                    // onChangeText={text25 => setText25(text25)} 
                                    />
                                    <TouchableOpacity style={{ position: 'absolute', marginLeft: wp('86%') }}>
                                        <AntDesign name='caretdown' size={hp('2%')} />
                                    </TouchableOpacity>
                                </View>


                                <View style={{ width: wp('90%'), height: hp('5%'), alignSelf: "center", marginTop: hp('1%'), justifyContent: "center", paddingLeft: wp('1%'), }}>
                                    <Text style={{ fontFamily: "Roboto-Bold", fontSize: hp('2.2%'), color: Colors.primaryColor7 }}>Emergency Contact</Text>
                                </View>

                                <View style={{ width: wp('92%'), alignSelf: "center", marginTop: hp('0.8%'), justifyContent: 'space-between', alignItems: "center", paddingLeft: wp('1.2%'), paddingRight: wp('1.2%'), paddingBottom: hp('1%'), }}>
                                    <TextInput
                                        style={{ width: wp('90%'), height: hp('5%') }}
                                        label="Emergency Contact Name"
                                        // value={text27}
                                        outlineColor='#000000'
                                        activeOutlineColor='#09c6f9'
                                        mode="outlined"
                                    // onChangeText={text27 => setText27(text27)} 
                                    />

                                </View>

                                <View style={{ width: wp('92%'), alignSelf: "center", marginTop: hp('0.8%'), justifyContent: 'space-between', alignItems: "center", paddingLeft: wp('1.2%'), paddingRight: wp('1.2%'), paddingBottom: hp('1%'), }}>
                                    <TextInput
                                        style={{ width: wp('90%'), height: hp('5%') }}
                                        label="Relationship"
                                        // value={text28}
                                        outlineColor='#000000'
                                        activeOutlineColor='#09c6f9'
                                        mode="outlined"
                                    // onChangeText={text28 => setText28(text28)} 
                                    />

                                </View>

                                <View style={{ width: wp('92%'), alignSelf: "center", marginTop: hp('0.8%'), justifyContent: 'space-between', alignItems: "center", paddingLeft: wp('1.2%'), paddingRight: wp('1.2%'), paddingBottom: hp('1%'), flexDirection: "row", borderBottomColor: '#696969', borderBottomWidth: hp('0.3%') }}>
                                    <TextInput
                                        style={{ width: wp('90%'), height: hp('5%'), position: 'relative' }}
                                        label="Emergency Contact Number"
                                        // value={text29}
                                        outlineColor='#000000'
                                        activeOutlineColor='#09c6f9'
                                        mode="outlined"
                                    // onChangeText={text29 => setText29(text29)} 
                                    />

                                </View>


                                <View style={{ width: wp('90%'), height: hp('5%'), alignSelf: "center", marginTop: hp('1%'), justifyContent: "center", paddingLeft: wp('1%') }}>
                                    <Text style={{ fontFamily: "Roboto-Bold", fontSize: hp('2.2%'), color: Colors.primaryColor7 }}>Other</Text>
                                </View>

                                <View style={{ width: wp('92%'), alignSelf: "center", marginTop: hp('0.8%'), justifyContent: 'space-between', alignItems: "center", paddingLeft: wp('1.2%'), paddingRight: wp('1.2%'), paddingBottom: hp('1%'), flexDirection: "row" }}>
                                    <TextInput
                                        style={{ width: wp('90%'), height: hp('5%'), position: 'relative' }}
                                        label="Referral Code(if any)"
                                        // value={text30}
                                        outlineColor='#000000'
                                        activeOutlineColor='#09c6f9'
                                        mode="outlined"
                                    // onChangeText={text30 => setText30(text30)}
                                    />

                                </View>

                            </ScrollView>
                            {/* {!isValid &&
                                <Text style={{ fontSize: hp('1.5%'), color: 'red', marginLeft: hp('2%') }}>Fill the required field</Text>
                            } */}
                        </View>

                        <View style={{ width: wp('86%'), height: hp('8%'), alignSelf: "center", justifyContent: "center", alignItems: "center", marginTop: hp('1%') }}>
                            <TouchableOpacity
                                onPress={handleSubmit}
                                style={{ width: wp('80%'), height: hp('6.5%'), backgroundColor: "white", borderRadius: hp('0.8%'), backgroundColor: Colors.primaryColor1, alignItems: "center", justifyContent: "center" }}>
                                <Text style={{ color: Colors.primaryColor8, fontFamily: "Roboto-Bold", fontSize: hp('2%') }}>Save Change</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            </Formik>
        </SafeAreaView>
    )
}

export default ProfileForm;

const styles = StyleSheet.create({
    container: {
        width: wp('100%'),
        height: hp('100%'),
        backgroundColor: '#ffffff',
    },
    head: {
        width: wp('100%'),
        height: hp('6%'),
        backgroundColor: Colors.primaryColor1,
        flexDirection: "row",
    },
    picture: {
        width: wp('100%'),
        height: hp('15%'),
        backgroundColor: Colors.primaryColor1,
        alignItems: "center",
        justifyContent: 'center'


    }
})