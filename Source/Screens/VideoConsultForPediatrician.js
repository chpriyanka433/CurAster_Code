import { Alert, FlatList, Image, SafeAreaView,StyleSheet, Text,TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Colors from '../Assetst/Constants/Colors';
import { RadioButton } from 'react-native-paper';
import { Rating } from 'react-native-elements';
const VideoConsultForPediatrician = (props) => {

    const [checked, setChecked] = React.useState('Insurance');

    const [generalDoctor, setGeneralDoctor] = useState([
        {
            id: 1,
        },
        {
            id: 2,
        },
        {
            id: 3,
        },
        {
            id: 4,
        },
        {
            id: 5,
        },
    ]);

    const [defaultRating, setDefaultRating] = useState(4);

    const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);


    const starImageFilled =
        'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_filled.png';

    const starImageCorner =
        'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_corner.png';


    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={{ width: wp('96%'), marginLeft: hp('2%') }}>
                    <Text style={{ fontFamily: 'Roboto-Bold', color: Colors.primaryColor7, fontSize: hp('2%'), marginTop: hp('2%') }}>We will assign you one of the below doctor</Text>
                </View>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={generalDoctor}
                    style={{
                        width: wp('96%'), maxHeight: hp('20%'), marginLeft: hp('2%')
                    }}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity style={{
                                width: wp('50%'), height: hp('16%'), borderColor: Colors.primaryColor1, borderWidth: 1, borderRadius: hp('1%'), marginTop: hp('2%'), justifyContent: 'center', marginLeft: hp('1%')
                            }}>
                                <View style={{
                                    flexDirection: 'row', justifyContent
                                        : 'center',
                                }}>
                                    <View style={{
                                        width: wp('18%'),
                                        justifyContent
                                            : 'center',
                                    }} >
                                        <Image source={require('../Assetst/Images/doctor4.png')} style={{ width: wp('15%'), height: wp('15%'), marginLeft: hp('1%'), borderRadius: hp('1%'), }} />
                                    </View>
                                    <View style={{ width: wp('31%'), justifyContent: 'center' }}>
                                        <Text style={{ fontFamily: 'Roboto-Bold', fontSize: hp('1.8%'), marginLeft: hp('1.2%'), }}>Dr. Shruti Kakkar</Text>
                                        <Text style={{ fontFamily: 'Roboto-Medium', fontSize: hp('1.6%'), marginLeft: hp('1.2%'), }}>Pediatrician</Text>
                                        <Text style={{ fontFamily: 'Roboto-Medium', fontSize: hp('1.6%'), marginLeft: hp('1.2%'), }}>10 Year Experience</Text>
                                        <Text style={{ fontFamily: 'Roboto-Medium', fontSize: hp('1.6%'), marginLeft: hp('1.2%'), }}>Hindi/ English</Text>
                                    </View>
                                </View>
                                <View style={{ width: wp('22%'), height: hp('3.5%'), justifyContent: 'center', flexDirection: 'row',alignItems:'center',marginTop:hp('0.5%')}}>
                                        {maxRating.map((item, key) => {
                                            return (
                                                <TouchableOpacity
                                                    activeOpacity={0.2}
                                                    key={item}
                                                    onPress={() => setDefaultRating(item)}>
                                                    <Image
                                                        style={{
                                                            width: wp('2.7%'),
                                                            height: hp('1.7%'),
                                                            resizeMode: 'cover',
                                                           marginLeft: wp('0.7%')
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
                           </TouchableOpacity>
                        )}} />
                <View style={{ width: wp('100%'), alignItems: 'center', justifyContent: 'space-between', marginTop: hp('1%'), borderBottomWidth: 1, borderBottomColor: '#d3d3d3',}}>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: hp('2%'), }}>
                    <View style={{
                        width: wp('94%'), height: hp('30%'), borderWidth: 1, borderColor: '#d3d3d3', borderRadius: hp('2%'), marginTop: hp('2%')}}>
                        <View style={{ width: wp('94%'), flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: hp('0.5%'), }}>
                            <Text style={{ fontFamily: 'Roboto-Bold', color: Colors.primaryColor1, fontSize: hp('2%'), marginLeft: hp('3%') }}>Timing</Text>
                            <Text style={{ fontFamily: 'Roboto-Bold', color: Colors.primaryColor1, fontSize: hp('2%'), marginRight: hp('3%'), }}>Consultant Fee</Text>
                        </View>
                        <View style={{ width: wp('93.2%'), alignItems: 'center', justifyContent: 'space-between', marginTop: hp('0.3%'), borderBottomWidth:wp('0.3%'), borderBottomColor: '#d0dae0', }}></View>
                        <View style={{ width: wp('92%'), flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <View style={{ width: wp('50%'), flexDirection: 'row', alignItems: 'center' }}>
                                <RadioButton
                                    color='#09c6f9'
                                    value="Midnight to Early Morning"
                                    status={checked === 'Midnight to Early Morning' ? 'checked' : 'unchecked'}
                                    onPress={() => setChecked('Midnight to Early Morning')}
                                />
                                <Text style={{ fontFamily: 'Roboto-Bold', fontSize: hp('2%'), }}>Midnight to Early Morning</Text>
                            </View>
                            <Text style={{ fontFamily: 'Roboto-Bold', fontSize: hp('2%'), marginRight: hp('1.8%') }}>{'\u20B9'}500</Text>
                        </View>
                        <View style={{ width: wp('92%'), flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: hp('1%'), }}>
                            <View style={{ width: wp('50%'), flexDirection: 'row', alignItems: 'center' }}>
                                <RadioButton
                                    color='#09c6f9'
                                    value="Morning to Afternoon"
                                    status={checked === 'Morning to Afternoon' ? 'checked' : 'unchecked'}
                                    onPress={() => setChecked('Morning to Afternoon')}/>
                                <Text style={{ fontFamily: 'Roboto-Bold', fontSize: hp('2%'), }}>Morning to Afternoon</Text>
                            </View>
                            <Text style={{ fontFamily: 'Roboto-Bold', fontSize: hp('2%'), marginRight: hp('1.8%') }}>{'\u20B9'}500</Text>
                        </View>
                        <View style={{ width: wp('92%'), flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: hp('1%'), }}>
                            <View style={{ width: wp('50%'), flexDirection: 'row', alignItems: 'center' }}>
                                <RadioButton
                                    color='#09c6f9'
                                    value="Evening to Night"
                                    status={checked === 'Evening to Night' ? 'checked' : 'unchecked'}
                                    onPress={() => setChecked('Evening to Night')} />
                                <Text style={{ fontFamily: 'Roboto-Bold', fontSize: hp('2%'), }}>Evening to Night</Text>
                            </View>
                            <Text style={{ fontFamily: 'Roboto-Bold', fontSize: hp('2%'), marginRight: hp('1.8%') }}>{'\u20B9'}500</Text>
                        </View>
                        <View style={{ width: wp('92%'), flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: hp('1%'), }}>
                            <View style={{ width: wp('50%'), flexDirection: 'row', alignItems: 'center' }}>
                                <RadioButton
                                    color='#09c6f9'
                                    value="Afternoon to Evening"
                                    status={checked === 'Afternoon to Evening' ? 'checked' : 'unchecked'}
                                    onPress={() => setChecked('Afternoon to Evening')} />
                                <Text style={{ fontFamily: 'Roboto-Bold', fontSize: hp('2%'), }}>Afternoon to Evening</Text>
                            </View>
                            <Text style={{ fontFamily: 'Roboto-Bold', fontSize: hp('2%'), marginRight: hp('1.8%') }}>{'\u20B9'}500</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={{ width: wp('80%'), height: hp('6%'), justifyContent: 'center', alignItems: 'center', backgroundColor: Colors.primaryColor1, marginTop: hp('4%'), borderRadius: hp('1.2%') }} onPress={() => props.navigation.navigate('PaymentMethod')}>
                        <Text style={{ fontFamily: 'Roboto-Bold', fontSize: hp('2%'), color: Colors.primaryColor9, }}>Pay</Text>
                    </TouchableOpacity>
                </View>
            </View>
       </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        width: wp('100%'),
        height: hp('100%'),
        backgroundColor: Colors.primaryColor8,
    },

});


export default VideoConsultForPediatrician;