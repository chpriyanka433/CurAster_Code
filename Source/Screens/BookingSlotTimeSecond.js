
import { Alert, Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Colors from '../Assetst/Constants/Colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import { Rating } from 'react-native-elements';

const BookingSlotTimeSecond = (props) => {

    const [filled, setFilled] = useState("false");


    const favorite = () => {
        setFilled(!filled)
    };


    const [isCheckSelected, setCheckSelected] = useState(1);
    const products = [{
        id: 1,
        name: "Today, 11 Nov",
        slot: "No slots"
    },
    {
        id: 2,
        name: "Tomorrow,12Nov",
        slot: "No slots"
    },
    {
        id: 3,
        name: "Friday, 13 Nov",
        slot: "No slots"
    },
    {
        id: 4,
        name: "Saturday, 14 Nov",
        slot: "No slots"
    }];

    const checkClick = (id) => {
        setCheckSelected(id)
    }
    const [isSelected, setIsSelected] = useState(1);
    const slots = [{
        id: 1,
        slot: "1:00 PM"
    },
    {
        id: 2,
        slot: "1:30 PM"
    },

    {
        id: 3,
        slot: "2:00 PM"
    },
    {
        id: 4,
        slot: "2:30 PM"
    },
    {
        id: 5,
        slot: "3:00 PM"
    },
    {
        id: 6,
        slot: "3:30 PM"
    },
    {
        id: 7,
        slot: "4:00 PM"
    },

    ];

    const checkedClick = (id) => {
        setIsSelected(id)
    }
    //const [isSelectedMe, setIsSelectedMe] = useState(1);
    const slot2 = [{
        id: 8,
        slot2: "5:00 PM"
    },
    {
        id: 9,
        slot2: "5:30 PM"
    },

    {
        id: 10,
        slot2: "6:00 PM"
    },
    {
        id: 11,
        slot2: "6:30 PM"
    },
    {
        id: 12,
        slot2: "7:00 PM"
    },
    ];
    
    const [defaultRating, setDefaultRating] = useState(3);

    const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);


    const starImageFilled =
        'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_filled.png';

    const starImageCorner =
        'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_corner.png';


    return (
        <SafeAreaView>
            <View style={styles.Container}>
                <StatusBar backgroundColor={Colors.primaryColor1} />
                <View style={styles.head}>
                    <TouchableOpacity onPress={() => props.navigation.goBack('OnlineConsultation')} style={{ width: wp('15%'), height: hp('4%'), alignSelf: "center", flexDirection: "row", justifyContent: "center", alignItems: "center", marginLeft: wp('2%') }}>
                        <AntDesign name="left" size={hp('2%')} color='#ffffff' />
                        <Text style={{ fontFamily: "Roboto-Regular", fontSize: hp('2%'), color: Colors.primaryColor8 }}>Back</Text>
                    </TouchableOpacity>
                    <Text style={{ fontFamily: "Roboto-Bold", fontSize: hp('2%'), color: Colors.primaryColor8, textAlignVertical: "center", paddingLeft: wp('24%') }}>Select Time</Text>
                </View>
                <View style={styles.details}>
                    <View style={styles.doctor}>
                        <View style={styles.img}>
                            <Image source={require('../Assetst/Images/doctor4.png')} style={{ width: wp('22%'), height: hp('11%'), borderRadius: hp('0.8%'), }} />
                            <TouchableOpacity style={{ marginTop: hp('0.3%') }} >
                                <Text style={{ color: Colors.primaryColor1, fontFamily: "Roboto-Medium", fontSize: hp('1.5%') }}>View Profile</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.doc}>
                            <Text style={{ color: Colors.primaryColor7, fontFamily: "Roboto-Bold", fontSize: hp('2.5%'), }}>Dr. Shruti Kedia</Text>
                            <Text style={{ color: Colors.primaryGray, fontFamily: "Roboto-Medium", fontSize: hp('2%') }}>Upasana Dental Clinic</Text>
                            <Text style={{ color: Colors.primaryColor6, fontFamily: "Roboto-Medium", fontSize: hp('1.5%') }}>Hindi/English</Text>


                            <View style={{ width: wp('17%'), height: hp('2.3%'), justifyContent: 'center', flexDirection: 'row',alignItems:'center',marginLeft:-wp('1.5%')}}>
                                        {maxRating.map((item, key) => {
                                            return (
                                                <TouchableOpacity
                                                    activeOpacity={0.2}
                                                    key={item}
                                                    onPress={() => setDefaultRating(item)}>
                                                    <Image
                                                        style={{
                                                            width: wp('2.5%'),
                                                            height: hp('1.5%'),
                                                            resizeMode: 'cover',
                                                           marginLeft: wp('0.6%')
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
                        </View>
                        <TouchableOpacity onPress={favorite} style={{ marginTop: hp('2.5%'), marginLeft: hp('1%') }}>
                            <FontAwesome name={filled ? "star" : "star"} size={hp('2.2%')} color={filled ? '#ffd700' : '#BDC3C7'} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ width: wp('96%'), height: hp('12%'), justifyContent: 'center', alignItems: 'center', flexDirection: 'row', marginTop: hp('2%') }}>
                    <ScrollView horizontal={true}
                        showsHorizontalScrollIndicator={false}>
                        {products.map((val) => {
                            return (
                                <TouchableOpacity key={val.id} onPress={checkClick.bind(this, val.id)} style={{ width: wp('35%'), justifyContent: 'center', alignItems: 'center', height: hp('8%'), backgroundColor: val.id == isCheckSelected ? '#00abf6' : "white", borderRadius: hp('1%'), marginRight: hp('1%'), borderWidth: val.id == isCheckSelected ? 0 : 1.3, borderColor: '#696969' }}>
                                    <Text style={{ fontSize: hp('2%'), fontFamily: 'Roboto-Medium', color: val.id == isCheckSelected ? '#ffffff' : '#696969', }}>{val.name}</Text>
                                    <Text style={{ fontSize: hp('2%'), color: val.id == isCheckSelected ? '#ffffff' : '#696969', }}>{val.slot}</Text>
                                </TouchableOpacity>
                            )
                        })}
                    </ScrollView>
                </View>
                <View style={{ width: wp('96%'), height: hp('8%'), justifyContent: 'center', alignItems: "center" }}>
                    <Text style={{ fontSize: hp('2.3%'), fontFamily: 'Roboto-Bold', color: Colors.primaryColor7, }}>Today, 11 Nov</Text>
                </View>
                <View style={{ width: wp('96%'), height: hp('5.2%'), justifyContent: 'center' }}>
                    <Text style={{ fontSize: hp('2.2%'), marginLeft: hp('1%'), fontFamily: 'Roboto-Bold', color: Colors.primaryColor7 }}>Afternoon 7 slots</Text>
                </View>
                <View style={{ width: wp('96%'), height: hp('12%'), flexDirection: 'row', flexWrap: 'wrap' }}>
                    {slots.map((val) => {
                        return (
                            <TouchableOpacity key={val.id} onPress={checkedClick.bind(this, val.id)} style={{ width: wp('22%'), justifyContent: 'center', alignItems: 'center', height: hp('5%'), borderRadius: wp('1%'), marginTop: hp('0.5%'), marginLeft: wp('0.7%'), backgroundColor: val.id == isSelected ? '#00abf6' : "white", borderWidth: hp('0.2%'), borderColor: Colors.primaryColor1, marginRight: wp('1%') }}>
                                <Text style={{ fontSize: hp('1.8%'), fontFamily: 'Roboto-Medium', color: val.id == isSelected ? '#ffffff' : '#09c6f9', }}>{val.slot}</Text>
                            </TouchableOpacity>
                        )
                    })}
                </View>
                <View style={{ width: wp('96%'), height: hp('5.2%'), justifyContent: 'center' }}>
                    <Text style={{ fontSize: hp('2.2%'), marginLeft: hp('1%'), fontFamily: 'Roboto-Bold', color: Colors.primaryColor7 }}>Evening 5 slots</Text>
                </View>
                <View style={{ width: wp('96%'), height: hp('12%'), flexDirection: 'row', flexWrap: 'wrap' }}>
                    {slot2.map((val) => {
                        return (
                            <TouchableOpacity key={val.id} onPress={checkedClick.bind(this, val.id)} style={{ width: wp('22%'), justifyContent: 'center', alignItems: 'center', height: hp('5%'), borderRadius: wp('1%'), marginTop: hp('0.5%'), marginLeft: wp('0.7%'), backgroundColor: val.id == isSelected ? '#00abf6' : "white", borderWidth: hp('0.2%'), borderColor: Colors.primaryColor1, marginRight: wp('1%') }}>
                                <Text style={{ fontSize: hp('1.8%'), fontFamily: 'Roboto-Medium', color: val.id == isSelected ? '#ffffff' : '#09c6f9', }}>{val.slot2}</Text>
                            </TouchableOpacity>
                        )
                    })}
                </View>
                <TouchableOpacity style={{ width: wp('80%'), height: hp('6%'), justifyContent: 'center', alignItems: 'center', backgroundColor: Colors.primaryColor1, borderRadius: hp('1%'), marginTop: hp('3.8%') }} onPress={() => props.navigation.navigate('CheckOutSecond')} >
                    <Text style={{ fontFamily: 'Roboto-Bold', fontSize: hp('2%'), color: Colors.primaryColor9, }}>Proceed</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    Container: {
        width: wp('100%'),
        height: hp('100%'),
        alignItems: 'center',
        backgroundColor: 'white'
    },
    head: {
        width: wp('100%'),
        height: hp('8%'),
        backgroundColor: Colors.primaryColor1,
        flexDirection: "row",
    },
    details: {
        width: wp('98%'),
        height: hp('18%'),
        marginTop: hp('1%'),
        alignItems: "center",
        justifyContent: "center",
    },
    doctor: {
        width: wp('96%'),
        height: hp('17%'),
        borderRadius: hp('1%'),
        flexDirection: "row",
        justifyContent: "center",
        shadowColor: '#d0dae0',
        elevation: wp('0.3%')
    },
    img: {
        width: wp('25%'),
        height: hp('14%'),
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: hp('1.5%')
    },
    doc: {
        width: wp('58%'),
        height: hp('12%'),
        justifyContent: "center",
        paddingLeft: wp('1%'),
        marginTop: hp('1.6%')
    },
})


export default BookingSlotTimeSecond;