import React from 'react'
import { Text, TouchableOpacity, Image, View } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Colors from '../Assetst/Constants/Colors';
const DoctorCard = (props) => {

    return (
        <View style={{
            backgroundColor: Colors.white, height: hp('20%'), width: wp('88%'), alignSelf: "center", marginTop: hp('2%'), borderRadius: hp('1%'),
            shadowColor: Colors.primaryColor7,

            elevation: hp('2%')
        }}>
            <View style={{ flexDirection: "row", backgroundColor: Colors.lightskybluel, height: hp('3%'), width: wp('88%'), borderTopLeftRadius: hp('1%'), borderTopRightRadius: hp('1%'), justifyContent: "space-between", paddingLeft: wp('1.5%'), paddingRight: wp('1.5%'), alignItems: "center" }}>
                <Text style={{ fontFamily: "Roboto-Medium", fontSize: hp('1.2%') }}>12 Feb,2022  5:00 PM</Text>
                <TouchableOpacity>
                    <Text style={{ fontFamily: "Roboto-Medium", fontSize: hp('1.2%'), color: Colors.primaryColor1 }}>Cancelled</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: "row", height: hp('4%'), width: wp('88%'), paddingLeft: wp('1.5%'), alignItems: "center" }}>

                <Text style={{ fontFamily: "Roboto-Medium", fontSize: hp('1.5%'), color: Colors.primaryColor1 }}>Fortis Hospital.Sector 62, Noida</Text>
            </View>
            <View style={{ flexDirection: "row", height: hp('9%'), width: wp('88%'), justifyContent: "center", borderBottomColor: Colors.primaryColor7, borderBottomWidth: hp('0.1%') }}>
                <View style={{ height: hp('8%'), width: wp('15%'), justifyContent: "center", borderRadius: hp('1%') }}>
                    <Image source={require('../Assetst/Images/doctor4.png')} style={{ width: wp('15%'), height: hp('8%'), borderRadius: hp('1%') }} />
                </View>
                <View style={{ height: hp('8%'), width: wp('40%'), justifyContent: "center", paddingLeft: wp('1%') }}>
                    <Text style={{ fontFamily: "Roboto-Bold", fontSize: hp('1.9%'), color: Colors.primaryColor7, }}>Dr. Shruti Kedia</Text>
                    <Text style={{ fontFamily: "Roboto-Medium", fontSize: hp('1.5%'), color: Colors.primaryColor1 }}>General Physician</Text>
                </View>
                <View style={{ height: hp('8%'), width: wp('30%') }}>
                    <TouchableOpacity style={{ width: wp('24%'), height: hp('4%'), backgroundColor: Colors.primaryColor1, borderRadius: hp('0.8%'), alignSelf: "center", justifyContent: "center"}} onPress={props.viewDetails}>
                        <Text style={{ fontFamily: "Roboto-Bold", fontSize: hp('1.5%'), color: Colors.primaryColor8, textAlign: "center" }}>VIEW DETAILS</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ width: wp('88%'), height: hp('3%'), flexDirection: 'row', alignItems: "center" }}>
                <Text style={{ fontFamily: "Roboto-Bold", fontSize: hp('1%'), color: Colors.primaryColor1, marginLeft: wp('1.5%') }}>Patient Name</Text>
                <Text style={{ fontFamily: "Roboto-Medium", fontSize: hp('1%'), color: Colors.primaryColor7, marginLeft: wp('1.5%') }}>Aarush Gupta/22/Male </Text>

            </View>



        </View>
    )
}


export default DoctorCard;