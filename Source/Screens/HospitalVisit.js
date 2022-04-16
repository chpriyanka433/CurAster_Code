import React,{useState} from 'react'
import { View, Text, StyleSheet, SafeAreaView, FlatList, ScrollView, Image, TouchableOpacity, StatusBar, Alert } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Colors from '../Assetst/Constants/Colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
// import { Rating } from 'react-native-ratings';
import LinearGradient from 'react-native-linear-gradient';
import Modal from "react-native-modal";


const Hospitalvisit = (props) => {


    const [defaultRating, setDefaultRating] = useState(3);

    const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);


    const starImageFilled =
        'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_filled.png';

    const starImageCorner =
        'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_corner.png';


    return (
        <SafeAreaView>
            <View style={styles.container}>
                <StatusBar
                    backgroundColor={Colors.primaryColor1} />
                <View style={styles.head}>
                    <TouchableOpacity onPress={() => props.navigation.goBack("Appointment")} style={{ width: wp('15%'), height: hp('4%'), alignSelf: "center", flexDirection: "row", justifyContent: "center", alignItems: "center", marginLeft: wp('2%') }}>
                        <AntDesign name="left" size={hp('2%')} color='#ffffff' />
                        <Text style={{ fontFamily: "Roboto-Regular", fontSize: hp('2%'), color: Colors.primaryColor8 }}>Back</Text>
                    </TouchableOpacity>
                    <Text style={{ fontFamily: "Roboto-Bold", fontSize: hp('2%'), color: Colors.primaryColor8, textAlignVertical: "center", paddingLeft: wp('22%') }}>Hospital Visit</Text>
                </View>
                <View style={{ width: wp('100%'), height: hp('75%'), alignSelf: 'center', backgroundColor: 'white' }}>
                    <ScrollView showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}>
                        <View style={styles.details}>
                            <View style={styles.doctor}>
                                <View style={styles.img}>
                                    <Image source={require('../Assetst/Images/doctor4.png')} style={{ width: wp('25%'), height: hp('15%'), borderRadius: hp('1%') }} />
                                </View>
                                <View style={styles.doc}>
                                    <Text style={{ color: Colors.primaryColor7, fontFamily: "Roboto-Bold", fontSize: hp('2.5%') }}>Dr. Shruti Kedia</Text>
                                    <Text style={{ color: Colors.primaryColor2, fontFamily: "Roboto-Medium", fontSize: hp('2.2%') }}>Cardiology</Text>
                                    <Text style={{ color: Colors.primaryColor6, fontFamily: "Roboto-Medium", fontSize: hp('1.5%') }}>7 Years experience</Text>
                                    <Text style={{ color: '#677294', fontFamily: "Roboto-Bold", fontSize: hp('1.5%') }}>MBBS,MD</Text>
                                    <Text style={{ color: Colors.primaryColor6, fontFamily: "Roboto-Regular", fontSize: hp('1.5%') }}>English/Hindi</Text>
                                    <View style={{ width: wp('17%'), height: hp('2.2%'), justifyContent: 'center', flexDirection: 'row',alignItems:'center',marginLeft:-wp('1.4%')}}>
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
                                                           marginLeft: wp('0.5%')
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
                                <View style={styles.ico} >
                                    <View style={{ width: wp('29%'), height: hp('7.5%'), alignItems: 'flex-end', paddingRight: wp('0.5%'), paddingTop: hp('0.5%') }}>
                                        <TouchableOpacity style={{ width: wp('5%'), height: hp('2.2%') }}>
                                            <Entypo name='share' size={hp('2%')} color='#09c6f9' />
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{ width: wp('29%'), height: hp('7.5%'), justifyContent: "flex-end" }}>
                                        <TouchableOpacity style={{ width: wp('29%'), height: hp('3.5%'), flexDirection: "row", alignItems: "center" }}>
                                            <MaterialIcons name="chat" size={hp('1.9%')} color='#677294' />
                                            <Text style={{ fontFamily: "Roboto-Regular", fontSize: hp('1.7%'), color: '#677294', marginLeft: wp('0.2%'), textDecorationLine: 'underline', textDecorationColor: '#677294', textDecorationStyle: "solid" }}>Patients Reviews</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={{ width: ('95%'), height: ('30%'), alignSelf: "center", marginTop: hp('2%'), borderRadius: hp('1%'), borderWidth: hp('0.2%'), borderColor: '#d0dae0', }}>
                            <View style={{ width: wp('85%'), height: hp('5%'), alignSelf: "center", flexDirection: "row", marginTop: hp('1.3%'), justifyContent: "space-between", paddingLeft: wp('1%'), paddingRight: wp('1%'), borderBottomColor: Colors.primaryColor5, borderBottomWidth: hp('0.2%'), alignItems: "center" }}>
                                <Text style={{ color: Colors.primaryColor1, fontFamily: "Roboto-Bold", fontSize: hp('2.3%') }}>Hospital Visit</Text>
                                <Text style={{ color: Colors.primaryColor7, fontFamily: "Roboto-Bold", fontSize: hp('2.3%') }}>₹249</Text>
                            </View>
                            <View style={{ width: wp('85%'), height: hp('5%'), alignSelf: "center", paddingLeft: wp('1%'), justifyContent: "center" }}>
                                <Text style={{ color: Colors.primaryColor7, fontFamily: "Roboto-Bold", fontSize: hp('1.5%') }}>How to consult via text/audio/video?</Text>
                            </View>
                            <View style={{ width: wp('85%'), height: hp('19%'), alignSelf: "center", paddingLeft: wp('2%') }}>
                                <TouchableOpacity style={{ width: wp('60%'), height: hp('3%'), flexDirection: "row", alignItems: "center" }}>
                                    <Fontisto name="doctor" size={hp('1.9%')} color='#677294' />
                                    <Text style={{ fontFamily: "Roboto-Regular", fontSize: hp('1.5%'), color: '#677294', marginLeft: wp('1%'), }}>Choose the doctor</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ width: wp('60%'), height: hp('3%'), flexDirection: "row", alignItems: "center" }}>
                                    <AntDesign name="calendar" size={hp('1.9%')} color='#677294' />
                                    <Text style={{ fontFamily: "Roboto-Regular", fontSize: hp('1.5%'), color: '#677294', marginLeft: wp('1%'), }}>Book a slot</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ width: wp('60%'), height: hp('3%'), flexDirection: "row", alignItems: "center", }}>
                                    <MaterialIcons name="payment" size={hp('1.9%')} color='#677294' />
                                    <Text style={{ fontFamily: "Roboto-Regular", fontSize: hp('1.5%'), color: '#677294', marginLeft: wp('1%'), }}>Make Payment</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ width: wp('60%'), height: hp('3%'), flexDirection: "row", alignItems: "center", }}>
                                    <AntDesign name="mobile1" size={hp('1.9%')} color='#677294' />
                                    <Text style={{ fontFamily: "Roboto-Regular", fontSize: hp('1.5%'), color: '#677294', marginLeft: wp('1%'), }}>Visit the doctor at Hospital/Clinic</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ width: wp('60%'), height: hp('3%'), flexDirection: "row", alignItems: "center", }}>
                                    <FontAwesome5 name="file-prescription" size={hp('1.9%')} color='#677294' />
                                    <Text style={{ fontFamily: "Roboto-Regular", fontSize: hp('1.5%'), color: '#677294', marginLeft: wp('1%'), }}>Receive prescriptions instantly</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ width: wp('60%'), height: hp('3%'), flexDirection: "row", alignItems: "center", }}>
                                    <Entypo name="chat" size={hp('1.9%')} color='#677294' />
                                    <Text style={{ fontFamily: "Roboto-Regular", fontSize: hp('1.5%'), color: '#677294', marginLeft: wp('1%') }}>Follow Up via text-valid for 1 day</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ height: hp('55%'), width: wp('95%'), marginTop: hp('3.5%'), alignSelf: "center" }}>
                            <View style={{ height: hp('5%'), width: wp('85%'), alignSelf: "center", justifyContent: "center", paddingLeft: wp('0.6%') }}>
                                <Text style={{ color: Colors.primaryColor7, fontFamily: "Roboto-Bold", fontSize: hp('2.3%') }}>
                                    Location
                                </Text>
                            </View>
                            <View style={{ height: hp('21%'), width: wp('87%'), alignSelf: "center", justifyContent: "center", marginTop: hp('1%') }}>
                                <Image source={require('../Assetst/Images/Map.png')} style={{ width: wp('85%'), height: hp('19%'), alignSelf: "center", borderRadius: hp('1%') }} />
                            </View>
                            <View style={{ height: hp('5%'), width: wp('85%'), alignSelf: "center", justifyContent: "center", marginTop: hp('1.5%'), borderBottomColor: '#d0dae0', borderBottomWidth: wp('0.2%'), paddingLeft: wp('0.6%') }}>
                                <Text style={{ color: Colors.primaryColor7, fontFamily: "Roboto-Bold", fontSize: hp('2.3%') }}>
                                    Services by Dr. Shruti Kedia
                                </Text>
                            </View>
                            <View style={{ height: hp('13%'), width: wp('85%'), alignSelf: "center", marginTop: hp('0.5%'), borderBottomColor: '#d0dae0', borderBottomWidth: wp('0.3%'), padding: wp('1%') }}>
                                <View style={{ height: hp('3%'), width: wp('50%'), flexDirection: "row", alignItems: "center" }}>
                                    <Entypo name="dot-single" size={hp('1.9%')} color='#000000' />
                                    <Text style={{ fontFamily: "Roboto-Regular", fontSize: hp('1.5%'), color: '#000000', marginLeft: wp('1%'), }}>Health Checkup(General) </Text>
                                </View>
                                <View style={{ height: hp('3%'), width: wp('50%'), flexDirection: "row", alignItems: "center" }}>
                                    <Entypo name="dot-single" size={hp('1.9%')} color='#000000' />
                                    <Text style={{ fontFamily: "Roboto-Regular", fontSize: hp('1.5%'), color: '#000000', marginLeft: wp('1%'), }}>Diabetes Management </Text>
                                </View>
                                <View style={{ height: hp('3%'), width: wp('50%'), flexDirection: "row", alignItems: "center" }}>
                                    <Entypo name="dot-single" size={hp('1.9%')} color='#000000' />
                                    <Text style={{ fontFamily: "Roboto-Regular", fontSize: hp('1.5%'), color: '#000000', marginLeft: wp('1%'), }}>Fever Treatment</Text>
                                </View>
                                <View style={{ height: hp('3%'), width: wp('50%'), flexDirection: "row", alignItems: "center" }}>
                                    <Entypo name="dot-single" size={hp('1.9%')} color='#000000' />
                                    <Text style={{ fontFamily: "Roboto-Regular", fontSize: hp('1.5%'), color: '#000000', marginLeft: wp('1%'), }}>Immunity Therapy</Text>
                                </View>
                                <View style={{ height: hp('5%'), width: wp('85%'), alignSelf: "center", justifyContent: "center", marginTop: hp('0.8%') }}>
                                    <TouchableOpacity style={{ height: hp('4%'), width: wp('38%'), justifyContent: "center", paddingLeft: wp('0.6%') }}>
                                        <Text style={{ color: Colors.primaryColor1, fontFamily: "Roboto-Bold", fontSize: hp('2.3%') }}>
                                            Show all Services
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </View>
                <View style={{ width: wp('86%'), height: hp('9%'), alignSelf: "center", justifyContent: "center", alignItems: "center", marginTop: hp('1.5%') }}>
                    <TouchableOpacity style={{
                        width: wp('80%'), height: hp('7%'), backgroundColor: "white", borderRadius: hp('1%'),
                        backgroundColor: Colors.primaryColor1, alignItems: "center", justifyContent: "center"
                    }} onPress={() => props.navigation.navigate('BookingSlotTimeSecond')}>
                        <Text style={{ color: Colors.primaryColor8, fontFamily: "Roboto-Bold", fontSize: hp('2%') }}>Book Slot</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Hospitalvisit;

const styles = StyleSheet.create({
    container: {
        width: wp('100%'),
        height: hp('100%'),
        backgroundColor: '#ffffff',
    },
    head: {
        width: wp('100%'),
        height: hp('8%'),
        backgroundColor: Colors.primaryColor1,
        flexDirection: "row",
    },
    details: {
        width: wp('95%'),
        height: hp('18%'),
        alignSelf: 'center',
        justifyContent: 'center',
        borderBottomColor: Colors.primaryColor5,
        borderBottomWidth: hp('0.2%'),
        marginTop: hp('3%')
    },
    doctor: {
        width: wp('95%'),
        height: hp('17%'),
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    img: {
        width: wp('28%'),
        height: hp('15.5%'),
        alignItems: 'center',
        justifyContent: 'center'
    },
    doc: {
        width: wp('36%'),
        height: hp('15%'),
        paddingLeft: wp('1%'),
    },
    ico: {
        width: wp('29%'),
        height: hp('15%'),
    }

})