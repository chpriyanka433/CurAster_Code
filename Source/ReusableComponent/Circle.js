import React from 'react'
import { Text, TouchableOpacity, Image, View } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Colors from '../Assetst/Constants/Colors';
const Circle = (props) => {

    return (
        <View style={{ width: wp('23%'), height: hp('15%'), marginHorizontal: wp('1%'), alignItems: 'center', justifyContent: 'center', }}>
            <TouchableOpacity style={{
                width: hp('8%'), height: hp('8%'), borderRadius: hp('4%'), alignItems: 'center', justifyContent: 'center', backgroundColor: Colors.white, borderWidth: 0.3

            }}>
                <Image source={props.source} style={{ width: hp('5%'), height: hp('5%'), }} />

            </TouchableOpacity>
            <Text style={{ fontFamily: 'Roboto-Bold', fontSize: hp('1.5%'), color: Colors.black, marginTop: hp('0.5%') }} >{props.text1}</Text>
        </View>
    )
}


export default Circle;