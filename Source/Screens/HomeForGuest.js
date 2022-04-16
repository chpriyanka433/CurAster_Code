import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Image, StatusBar, ScrollView, Dimensions, ActivityIndicator } from 'react-native';
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Colors from '../Assetst/Constants/Colors';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import { Searchbar } from 'react-native-paper';
import DoctorServices from '../ReusableComponent/DoctorServices';
import Circle from '../ReusableComponent/Circle';
import { SliderBox } from "react-native-image-slider-box";
import ImageBanner from '../Assetst/Images/banner2.png'

const HomeForGuest = (props) => {
    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);

    const banners1 = [
        require('../Assetst/Images/banner3.png'),
        require('../Assetst/Images/banner4.png'),
        require('../Assetst/Images/banner5.png'),
        require('../Assetst/Images/banner5.png'),
        require('../Assetst/Images/banner5.png'),
        require('../Assetst/Images/banner5.png'),

    ]
    const banners2 = [
        require('../Assetst/Images/banner2.png'),
        require('../Assetst/Images/banner2.png'),
        require('../Assetst/Images/banner2.png'),
        require('../Assetst/Images/banner2.png'),
        require('../Assetst/Images/banner2.png'),
        require('../Assetst/Images/banner2.png'),

    ]



    return (
        <SafeAreaView>
            <View style={styles.container}>
                {/* <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#09c6f9', '#035fce']} style={{ height: hp('6%') }} >
                <StatusBar
                    translucent={true}
                    backgroundColor={'transparent'}
                />
            </LinearGradient> */}
                <StatusBar
                    backgroundColor={Colors.primaryColor1}
                />
                <View style={{ width: wp('100%'), height: hp('10%'), flexDirection: 'row', justifyContent: 'space-between', backgroundColor: Colors.primaryColor1 }}>
                    <View style={{ width: wp('40%'), height: hp('10%'), alignItems: 'center', flexDirection: 'row', justifyContent: 'space-around' }}>
                        <TouchableOpacity onPress={() => props.navigation.openDrawer()}>
                            <FontAwesome5Icon name='bars' size={hp('3%')} style={{ color: "#ffffff" }} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={require('../Assetst/Images/doctor4.png')} style={{ width: hp('5%'), height: hp('5%'), borderRadius: hp('5%') }} />
                        </TouchableOpacity>
                        <Text style={{ fontWeight: 'bold', fontSize: hp('2%'), color: Colors.primaryColor8 }}>Hi,Guest</Text>

                    </View>
                    <View style={{ width: wp('30%'), height: hp('10%'), flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', }}>
                        <TouchableOpacity style={{ width: wp('25%'), height: hp('5%'), backgroundColor: Colors.white, alignItems: 'center', justifyContent: "center", borderRadius: hp('1%') }} onPress={() => props.navigation.navigate('LoginsignupScreen')} >
                            <Text style={{ fontSize: hp('1.5%'), color: Colors.blue, fontFamily: 'Roboto-Medium' }}>Signup/Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <Searchbar style={{ width: wp('95%'), height: hp('6%'), alignSelf: 'center', marginTop: hp('1%'), }}
                    placeholder="Search"
                    onChangeText={onChangeSearch}
                    value={searchQuery}
                />
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{ width: wp('100%'), height: hp('18%'), }}>
                        <SliderBox
                            images={banners2}
                            style={{ width: wp('95%'), height: hp('15%'), alignSelf: 'center', marginTop: hp('1%'), borderRadius: hp('1%'), resizeMode: 'contain', marginTop: hp('1.5%'), }}
                            autoplay={true}
                            autoPlayWithInterval={500}
                            circleLoop={true}
                            inactiveDotColor={true}

                        />
                    </View>

                    {/* <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <Image source={require('../Assetst/Images/banner2.png')}
                            style={{ width: wp('95%'), height: hp('15%'), alignSelf: 'center', marginTop: hp('1%'), borderRadius: hp('1%'), resizeMode: 'contain', marginHorizontal: wp('1%') }} />
                        <Image source={require('../Assetst/Images/banner2.png')}
                            style={{ width: wp('95%'), height: hp('15%'), alignSelf: 'center', marginTop: hp('1%'), borderRadius: hp('1%'), resizeMode: 'contain', marginHorizontal: wp('1%') }} />
                        <Image source={require('../Assetst/Images/banner2.png')}
                            style={{ width: wp('95%'), height: hp('15%'), alignSelf: 'center', marginTop: hp('1%'), borderRadius: hp('1%'), resizeMode: 'contain', marginHorizontal: wp('1%') }} />
                    </ScrollView> */}
                    <View style={{ width: wp('100%'), height: hp('14%'), }}>
                        <View style={{ width: wp('100%'), height: hp('4%'), justifyContent: 'center' }}>
                            <Text style={{ marginLeft: wp('2.5%'), fontFamily: 'Roboto-Bold', fontSize: hp('2%'), color: Colors.black }}>Book Doctor Consult</Text>
                        </View>
                        <DoctorServices t1='Find' t2='Doctor' t3='Instant Video' t4='Consultation' img1={require('../Assetst/Images/Doctorlist1.png')} img2={require('../Assetst/Images/Doctorlist2.png')} FinddoctorFlow={() => props.navigation.navigate('FindYourDoctors')} Finddoctor={() => props.navigation.navigate('VideoConsultForGP')} />
                    </View>
                    <View style={{ width: wp('100%'), height: hp('30%'), }}>
                        <View style={{ width: wp('100%'), height: hp('4%'), justifyContent: 'center', marginTop: hp('1%') }}>
                            <Text style={{ marginLeft: wp('2.5%'), fontFamily: 'Roboto-Bold', fontSize: hp('2%'), color: Colors.black }}>Services For You</Text>
                        </View>
                        <DoctorServices t1='Find' t2='Hospitals' t3='Book Health' t4='Packages' marginTop={hp('1%')} img1={require('../Assetst/Images/Hospitallist.png')} img2={require('../Assetst/Images/Doctorlist3.png')} />
                        <DoctorServices t1='Book Lab' t2='Tests' t3='Buy' t4='Medicines' marginTop={hp('2%')} img1={require('../Assetst/Images/Labtest.png')} img2={require('../Assetst/Images/Buymedicine.png')} />
                    </View>
                    <View style={{ width: wp('100%'), height: hp('25%'), marginTop: hp('1%') }}>
                        <View style={{ width: wp('100%'), height: hp('4%'), justifyContent: 'center', marginTop: hp('1%'), }}>
                            <Text style={{ fontFamily: 'Roboto-Bold', fontSize: hp('2%'), marginLeft: wp('2.5%'), color: Colors.black }}>Upcoming Consultation</Text>
                        </View>
                        <View style={{ width: wp('95%'), height: hp('18%'), alignSelf: 'center', borderRadius: hp('1%'), flexDirection: 'row', backgroundColor: '#f4f4f4', borderWidth: 0.3 }}>
                            <View style={{ width: wp('20%'), height: hp('18%'), alignItems: 'center' }}>
                                <Image source={require('../Assetst/Images/banner1.png')} style={{ width: hp('8%'), height: hp('8%'), borderRadius: hp('4%'), marginTop: hp('2%'), }} />
                            </View>
                            <View style={{ width: wp('50%'), height: hp('18%'), }}>
                                <Text style={{ fontSize: hp('2%'), fontFamily: 'Roboto-Bold', marginTop: hp('2%'), color: Colors.black }} numberOfLines={1}>Dr Vineeta Singh Tandon</Text>
                                <Text style={{ fontSize: hp('1.8%'), fontFamily: 'Roboto-Bold', marginTop: hp('1%'), color: Colors.primaryColor1 }} numberOfLines={1}>General Physician/Internal Medicine</Text>
                            </View>
                            <View style={{ width: wp('25%'), height: hp('18%'), alignItems: 'center', }}>
                                <Text style={{ marginTop: hp('1%'), fontSize: hp('1.8%'), color: Colors.darkGreen, fontFamily: 'Roboto-Bold' }}>Active</Text>
                                <TouchableOpacity style={{
                                    width: wp('20%'), height: hp('4%'), backgroundColor: Colors.primaryColor1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
                                    marginTop: hp('8%'), borderRadius: hp('1%')
                                }}
                                    onPress={() => props.navigation.navigate('voicePage')}>
                                    <FontAwesome5Icon name='video' size={hp('2%')} style={{ color: "#ffffff" }} />
                                    <Text style={{ marginLeft: wp('1%'), fontSize: hp('1.5%'), color: '#ffffff', fontFamily: 'Roboto-Bold' }}>Join Call</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={{ width: wp('100%'), height: hp('40%'), marginTop: hp('1%'), }}>
                        <View style={{ width: wp('100%'), height: hp('5%'), justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', paddingHorizontal: wp('2.5%') }}>
                            <Text style={{ fontFamily: 'Roboto-Bold', fontSize: hp('2%'), color: Colors.black }}>Search by Department</Text>
                            <TouchableOpacity>
                                <Text style={{ fontFamily: 'Roboto-Bold', fontSize: hp('1.5%'), color: Colors.primaryColor1 }}>View All</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: hp('1%') }} >
                            <Circle source={require('../Assetst/Images/coronavirus.png')} text1='Pediatrics' />
                            <Circle source={require('../Assetst/Images/brain.png')} text1='Dematology' />
                            <Circle source={require('../Assetst/Images/orthopedics.png')} text1='Pulmonology' />
                            <Circle source={require('../Assetst/Images/uterus.png')} text1='Nephrology' />
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: hp('1%') }} >
                            <Circle source={require('../Assetst/Images/coronavirus.png')} text1='Pediatrics' />
                            <Circle source={require('../Assetst/Images/brain.png')} text1='Dematology' />
                            <Circle source={require('../Assetst/Images/orthopedics.png')} text1='Pulmonology' />
                            <Circle source={require('../Assetst/Images/uterus.png')} text1='Nephrology' />
                        </View>
                    </View>
                    <View style={{ width: wp('100%'), height: hp('25%'), }}>
                        <SliderBox
                            images={banners1}
                            style={{ width: wp('85%'), height: hp('20%'), borderRadius: hp('1%'), alignSelf: 'center', marginTop: hp('2.5%') }}
                            autoplay={true}
                            autoPlayWithInterval={500}
                            circleLoop={true}
                            inactiveDotColor={true}

                        />
                    </View>
                    {/* <ScrollView style={{ flexDirection: 'row', marginTop: hp('1%'), width: wp('100%'), height: hp('25%'), marginTop: hp('1%') }} horizontal={true} showsHorizontalScrollIndicator={false}>
                        <Image source={require('../Assetst/Images/banner3.png')}
                            style={{ width: wp('80%'), height: hp('20%'), borderRadius: hp('1%'), alignSelf: 'center', marginHorizontal: wp('1%') }} />
                        <Image source={require('../Assetst/Images/banner4.png')}
                            style={{ width: wp('80%'), height: hp('20%'), borderRadius: hp('1%'), alignSelf: 'center', marginHorizontal: wp('1%') }} />
                        <Image source={require('../Assetst/Images/banner5.png')}
                            style={{ width: wp('80%'), height: hp('20%'), borderRadius: hp('1%'), alignSelf: 'center', marginHorizontal: wp('1%') }} />
                    </ScrollView> */}
                    <View style={{ width: wp('100%'), height: hp('40%'), marginTop: hp('1%'), }}>
                        <View style={{ width: wp('100%'), height: hp('5%'), justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', paddingHorizontal: wp('2.5%') }}>
                            <Text style={{ fontFamily: 'Roboto-Bold', fontSize: hp('2%'), color: Colors.black }}>Search by Category</Text>
                            <TouchableOpacity>
                                <Text style={{ fontFamily: 'Roboto-Bold', fontSize: hp('1.5%'), color: Colors.primaryColor1 }}>View All</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: hp('1%') }} >
                            <Circle source={require('../Assetst/Images/coronavirus.png')} text1='Fever' />
                            <Circle source={require('../Assetst/Images/brain.png')} text1='Toothache' />
                            <Circle source={require('../Assetst/Images/orthopedics.png')} text1='Pragnancy Issue' />
                            <Circle source={require('../Assetst/Images/uterus.png')} text1='Itchy Eyes' />
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: hp('1%') }} >
                            <Circle source={require('../Assetst/Images/coronavirus.png')} text1='Lung Cancer' />
                            <Circle source={require('../Assetst/Images/brain.png')} text1='Pimples & Acne' />
                            <Circle source={require('../Assetst/Images/orthopedics.png')} text1='Breathing Problems' />
                            <Circle source={require('../Assetst/Images/uterus.png')} text1='Frequent Urination' />
                        </View>
                    </View>

                </ScrollView>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        width: wp('100%'),
        height: hp('100%'),
        backgroundColor: Colors.white

    }
})
export default HomeForGuest;


//onPress={() => props.navigation.openDrawer()}
