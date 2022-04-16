import React from 'react'
import { Text, TouchableOpacity, View, Image } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Colors from '../Assetst/Constants/Colors';
const DoctorServices = (props) => {

    return (
        <View style={{ width: wp('100%'), height: hp('10%'), marginTop: props.marginTop }} >
            <View style={{ width: wp('95%'), height: hp('10%'), alignSelf: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
                <TouchableOpacity style={{ width: wp('45.5%'), height: hp('10%'), flexDirection: 'row', backgroundColor: '#bfe7f2', borderRadius: hp('1%'), }} onPress={props.FinddoctorFlow}>
                    <View style={{ width: wp('23%'), height: hp('10%'), }}>
                        <Image source={props.img1} style={{ width: wp('18%'), height: wp('18%'), bottom: 0, position: 'absolute' }} />
                    </View>
                    <View style={{ width: wp('22.5%'), height: hp('10%'), paddingTop: hp('2%'), paddingLeft: wp('1%'), }}>
                        <Text style={{ fontSize: hp('1.8%'), fontFamily: 'Roboto-Bold', color: Colors.black }} numberOfLines={1}>{props.t1}</Text>
                        <Text style={{ fontSize: hp('1.8%'), fontFamily: 'Roboto-Bold', color: Colors.black }} numberOfLines={1}>{props.t2}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{ width: wp('45.5%'), height: hp('10%'), flexDirection: 'row', backgroundColor: '#bfe7f2', borderRadius: hp('1%') }} onPress={props.Finddoctor}>
                    <View style={{ width: wp('23%'), height: hp('10%'), }}>
                        <Image source={props.img2} style={{ width: wp('18%'), height: wp('18%'), bottom: 0, position: 'absolute' }} />
                    </View>
                    <View style={{ width: wp('22.5%'), height: hp('10%'), paddingTop: hp('2%'), paddingLeft: wp('1%'), }}>
                        <Text style={{ fontSize: hp('1.8%'), fontFamily: 'Roboto-Bold', color: Colors.black }} numberOfLines={1}>{props.t3}</Text>
                        <Text style={{ fontSize: hp('1.8%'), fontFamily: 'Roboto-Bold', color: Colors.black }} numberOfLines={1}>{props.t4}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}


export default DoctorServices;