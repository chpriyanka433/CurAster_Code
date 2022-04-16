import { Image, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

import AllDoctor from './AllDoctors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CheckBox from '@react-native-community/checkbox';
import Colors from '../Assetst/Constants/Colors';
import CurAster24 from './FindDocCuraster24';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Modal from "react-native-modal";
import { Searchbar } from 'react-native-paper';
import { Slider } from "@miblanchard/react-native-slider";
import {
    createMaterialTopTabNavigator
} from '@react-navigation/material-top-tabs';
import { color } from 'react-native-reanimated';

const FindYourDoctors = (props) => {
    //const Stack = createStackNavigator();
    const Tab = createMaterialTopTabNavigator();

    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);

    const [filter, setFilter] = useState(false);

    const Filter = () => {
        setFilter(!filter);
    };

    const [maleCheckbox, setMaleCheckbox] = useState(false);
    const [femaleCheckbox, setFemaleCheckbox] = useState(false);

    const ToggleMaleCheckbox = () => {
        setMaleCheckbox(true);
        setFemaleCheckbox(false)
    }

    const ToggleFemaleCheckbox = () => {
        setFemaleCheckbox(true)
        setMaleCheckbox(false);
    }

    const [videoCheckbox, setVideoCheckbox] = useState(false);
    const [hospitalCheckbox, setHospitalCheckbox] = useState(false);

    const ToggleVideoCheckbox = () => {
        setVideoCheckbox(true);
        setHospitalCheckbox(false)
    }

    const ToggleHospitalCheckbox = () => {
        setHospitalCheckbox(true)
        setVideoCheckbox(false);
    }

    const [yearsValue, setYearsValue] = useState(10);
    const [consultFee, setConsultFee] = useState(10);



    return (

        <SafeAreaView >

            <View style={styles.container}>
                <StatusBar
                    // translucent={true}
                    backgroundColor={Colors.primaryColor1}
                />

                <View style={{ flexDirection: 'row', width: wp('100%'), height: hp('8%'), alignItems: 'center', justifyContent: 'space-between', backgroundColor: Colors.primaryColor1 }}>
                    <TouchableOpacity onPress={() => props.navigation.goBack('Home')} style={{ flexDirection: 'row', alignItems: 'center', marginLeft: hp('2%'), }}  >
                        <AntDesign name='left' size={hp('2%')} color='white' />
                        <Text style={{ fontSize: hp('2%'), fontFamily: 'Roboto-Medium', color: Colors.primaryColor3, justifyContent: 'center' }}>Back</Text>
                    </TouchableOpacity>
                    <Text style={{ fontSize: hp('2%'), fontFamily: 'Roboto-Bold', color: Colors.primaryColor3, justifyContent: 'center', }}>Find Your Doctors</Text>
                    <TouchableOpacity onPress={() => props.navigation.navigate('FindLocation')} >
                    <Text style={{ fontSize: hp('2%'), fontFamily: 'Roboto-Medium', color: Colors.primaryColor3, justifyContent: 'center', marginRight: hp('1%') }}>LOCATION</Text>
                        <Text style={{ fontSize: hp('2%'), fontFamily: 'Roboto-Medium', color: Colors.primaryColor3, justifyContent: 'center', marginRight: hp('1%') }}>Sector 62</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ height: hp('8%'), justifyContent: 'center', alignItems: 'center', flexDirection: 'row', }}>
                    <Searchbar style={{ width: wp('80%'), height: hp('7%'), alignSelf: 'center', marginTop: hp('1%'), }}
                        placeholder="Search,doctors,specialist..."
                        onChangeText={onChangeSearch}
                        value={searchQuery}

                    />
                    <TouchableOpacity onPress={Filter} style={{ width: wp('10%'), height: wp('10%'), justifyContent: 'center', alignItems: 'center', borderRadius: hp('6%'), marginLeft: hp('1%'), }}>
                        <Image source={require('../Assetst/Images/filter.png')} style={{ width: wp('11%'), height: wp('11%'), }} />

                    </TouchableOpacity>

                </View>

                <View style={{
                    width: wp('100%'), height: hp('81%'), backgroundColor: Colors.primaryGray, alignSelf: 'center', elevation: hp('2%'),
                    shadowColor: Colors.primaryColor4, marginTop: hp('1%')
                }}>


                    {/* <NavigationContainer > */}
                    <Tab.Navigator
                        initialRouteName="Feed"
                        tabBarOptions={{
                            activeTintColor: Colors.primaryColor1,
                            inactiveTintColor: Colors.black,
                            style: {
                                backgroundColor: '#f7f7f7',
                              },
                            
                            labelStyle: {
                                textAlign: 'center',
                            },
                            indicatorStyle: {
                                borderBottomColor: '#09c6f9',
                                borderBottomWidth: 2,
                               
                                
                            },
                        }} >
                        <Tab.Screen
                            name="All Doctors"
                            component={AllDoctor}
                            screenOptions={{
                                tabBarLabel: 'AllDoctor',
                                // tabBarIcon: ({ color, size }) => (
                                //   <MaterialCommunityIcons
                                //       name="home"
                                //       color={color}
                                //       size={size}
                                //     />
                                // ),
                            }} />
                        <Tab.Screen
                            name="CurAster 24/7"
                            component={CurAster24}
                            screenOptions={{
                                tabBarLabel: 'CurAster24',
                                // tabBarIcon: ({ color, size }) => (
                                //   <MaterialCommunityIcons
                                //       name="settings"
                                //       color={color}
                                //       size={size}
                                //     />
                                // ),
                            }} />
                    </Tab.Navigator>
                    {/* </NavigationContainer> */}
                </View>
                {/* <View style={{ height: hp('10%'), justifyContent: 'center', alignItems: 'center', backgroundColor: Colors.primaryColor1, flexDirection: 'row', justifyContent: 'space-evenly', marginTop: hp('2%') }}>
                </View> */}

                <View style={{ bottom: 0, }}>
                    <Modal isVisible={filter}
                        animationIn='slideInUp'
                        // animationOutTiming={500}
                        // animationInTiming={500}
                        hideModalContentWhileAnimating={true}
                        useNativeDriverForBackdrop={true}
                        onBackdropPress={() => setFilter(false)}
                        onSwipeComplete={() => setFilter(false)}
                        swipeDirection={['down']}
                        avoidKeyboard={true}
                        useNativeDriver={true}
                        style={{ width: wp('98%'), alignSelf: 'center', }}
                    >

                        <View style={{ width: wp('98%'), height: hp('90%'), backgroundColor: 'white', borderTopLeftRadius: hp('2%'), borderTopRightRadius: hp('2%'), marginTop: hp('30%'), }}>
                            <View style={{ width: wp('83%'), height: hp('30%'), alignSelf: "center", alignItems: "flex-start", }}>
                                <View style={{ width: wp('83%'), height: hp('5%'), flexDirection: 'row', alignItems: 'center', marginTop: hp('1%') }}>
                                    <View style={{ width: wp('75%'), }}></View>
                                    <TouchableOpacity onPress={() => setFilter(false)} style={{ width: wp('8%') }}>
                                        <MaterialIcons name='cancel' size={hp('4%')} color={Colors.primaryColor7} />
                                    </TouchableOpacity>
                                </View>
                                <View style={{ width: wp('83%'), alignItems: 'center', marginTop: hp('1%'), borderWidth: hp('0.08%'), borderColor: Colors.primaryGrayLight, marginTop: hp('1%') }}>
                                </View>
                                <View style={{ width: wp('83%'), height: hp('14%'), marginTop: hp('1%') }}>
                                    <Text style={{ fontFamily: 'Roboto-Bold', fontSize: hp('2%'), color: Colors.primaryColor1 }}>Gender</Text>
                                    <View style={{ width: wp('83%'), height: hp('5%'), flexDirection: 'row', alignItems: 'center', marginTop: hp('1%'), justifyContent: 'space-between' }}>
                                        <Text style={{ fontFamily: 'Roboto-Medium', fontSize: hp('2%'), color: Colors.primaryColor7 }}>Male</Text>
                                        <CheckBox
                                            disabled={false}
                                            value={maleCheckbox}
                                            tintColors={{ true: Colors.primaryColor1 }}
                                            onValueChange={ToggleMaleCheckbox}
                                            style={{}}
                                        />
                                    </View>

                                    <View style={{ width: wp('83%'), height: hp('5%'), flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
                                        <Text style={{ fontFamily: 'Roboto-Medium', fontSize: hp('2%'), color: Colors.primaryColor7 }}>Female</Text>
                                        <CheckBox
                                            disabled={false}
                                            value={femaleCheckbox}
                                            tintColors={{ true: Colors.primaryColor1 }}
                                            onValueChange={ToggleFemaleCheckbox}
                                            style={{}}
                                        />
                                    </View>
                                </View>
                                
                                <View style={{ width: wp('83%'), alignItems: 'center', marginTop: hp('1%'), borderWidth: hp('0.08%'), borderColor: Colors.primaryGrayLight, marginTop: hp('1%') }}>
                                </View>

                                <View style={{ width: wp('83%'), height: hp('11%'), marginTop: hp('1%'), }}>
                                    <Text style={{ fontFamily: 'Roboto-Bold', fontSize: hp('2%'), color: Colors.primaryColor1 }}>Total Experience</Text>
                                    <Text style={{ fontFamily: 'Roboto-Medium', fontSize: hp('2%'), color: Colors.primaryColor7 }}>Total Experience ={yearsValue}</Text>
                                    <Slider
                                        maximumValue={60}
                                        minimumValue={0}
                                        minimumTrackTintColor={Colors.primaryColor1}
                                        // maximumTrackTintColor={Colors.primaryColor1}
                                        // step={1}
                                        thumbTintColor={Colors.primaryColor1}
                                        step={1}
                                        value={yearsValue}
                                        onValueChange={
                                            (yearsValue) => setYearsValue(yearsValue)
                                        }
                                    />
                                </View>

                                <View style={{ width: wp('83%'), alignItems: 'center', marginTop: hp('1%'), borderWidth: hp('0.08%'), borderColor: Colors.primaryGrayLight, marginTop: hp('1%') }}>
                                </View>

                                <View style={{ width: wp('83%'), height: hp('11%'), marginTop: hp('1%'), }}>
                                    <Text style={{ fontFamily: 'Roboto-Bold', fontSize: hp('2%'), color: Colors.primaryColor1 }}>Consultation Fee</Text>
                                    <Text style={{ fontFamily: 'Roboto-Medium', fontSize: hp('2%'), color: Colors.primaryColor7 }}>Consult Fee ={consultFee}</Text>
                                    <Slider
                                        maximumValue={2000}
                                        minimumValue={0}
                                        // maximumTrackTintColor="red"
                                        // minimumTrackTintColor="#307ecc"
                                        thumbTintColor={Colors.primaryColor1}
                                        minimumTrackTintColor={Colors.primaryColor1}
                                        step={1}
                                        value={consultFee}
                                        onValueChange={
                                            (consultFee) => setConsultFee(consultFee)
                                        }
                                    />
                                </View>

                                <View style={{ width: wp('83%'), alignItems: 'center', marginTop: hp('1%'), borderWidth: hp('0.08%'), borderColor: Colors.primaryGrayLight, marginTop: hp('1%') }}>
                                </View>

                                <View style={{ width: wp('83%'), height: hp('14%'), marginTop: hp('1%') }}>
                                    <Text style={{ fontFamily: 'Roboto-Bold', fontSize: hp('2%'), color: Colors.primaryColor1 }}>Choose the visit</Text>
                                    <View style={{ width: wp('83%'), height: hp('5%'), flexDirection: 'row', alignItems: 'center', marginTop: hp('1%'), justifyContent: 'space-between' }}>
                                        <Text style={{ fontFamily: 'Roboto-Medium', fontSize: hp('2%'), color: Colors.primaryColor7 }}>Video</Text>
                                        <CheckBox
                                            disabled={false}
                                            value={videoCheckbox}
                                            tintColors={{ true: Colors.primaryColor1 }}
                                            onValueChange={ToggleVideoCheckbox}
                                            style={{}}
                                        />
                                    </View>

                                    <View style={{ width: wp('83%'), height: hp('5%'), flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
                                        <Text style={{ fontFamily: 'Roboto-Medium', fontSize: hp('2%'), color: Colors.primaryColor7 }}>Hospita/Clinic</Text>
                                        <CheckBox
                                            disabled={false}
                                            value={hospitalCheckbox}
                                            tintColors={{ true: Colors.primaryColor1 }}
                                            onValueChange={ToggleHospitalCheckbox}
                                        />
                                    </View>
                                </View>

                                <View style={{ width: wp('83%'), alignItems: 'center', marginTop: hp('1%'), borderWidth: hp('0.08%'), borderColor: Colors.primaryGrayLight, marginTop: hp('1%') }}>
                                </View>

                                <View style={{ width: wp('84%'), height: hp('7%'), justifyContent: "center", alignItems: "center", marginTop: hp('2%') }}>
                                    <TouchableOpacity onPress={() => setFilter(false)} style={{ width: wp('75%'), height: hp('5%'), backgroundColor: Colors.primaryColor1, justifyContent: 'center', alignItems: 'center', borderRadius: hp('1%'), marginTop: hp('1%') }} >
                                        <Text style={{ color: Colors.primaryColor8, fontFamily: 'Roboto-Bold' }}>Show Doctor</Text>
                                    </TouchableOpacity>

                                </View>
                            </View>
                        </View>
                    </Modal>
                </View>



            </View>
        </SafeAreaView>

    )

}

const styles = StyleSheet.create({

    container: {
        width: wp('100%'),
        height: hp('100%'),
        backgroundColor: Colors.primaryColor8,
        // borderRadius: hp('3%')
    }

})

export default FindYourDoctors;