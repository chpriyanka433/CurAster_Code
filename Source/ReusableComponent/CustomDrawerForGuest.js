import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Colors from '../Assetst/Constants/Colors';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
const CustomDrawerForGuest = props => {
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView
                {...props}
                contentContainerStyle={{ backgroundColor: Colors.primaryColor1 }}>
                {/* <ImageBackground
                    source={require('../Assetst/Images/menu-bg.jpeg')}
                    style={{ padding: 20 }}> */}
                <View style={{ justifyContent: 'space-between', alignItems: 'center', marginRight: 5, }}>
                    <View style={{ alignItems: 'center', marginLeft: 10 }}>
                        <Image
                            source={require('../Assetst/Images/user.jpeg')}
                            style={{ height: 80, width: 80, borderRadius: 40, marginBottom: 15, }}
                        />

                    </View>

                </View>
                <View style={{ width: wp('100%'), height: hp('15%'), backgroundColor: Colors.white, padding: wp('3%') }}>
                    <Text style={{ fontSize: hp('2.5%'), fontFamily: 'Roboto-Bold' }}>Your profile</Text>
                    <Text numberOfLines={1} style={{ fontSize: hp('1.5%'), fontFamily: 'Roboto-Medium', color: Colors.primaryColor1, marginTop: hp('2%') }}>Create an account to not lose you records and </Text>
                    <Text numberOfLines={1} style={{ fontSize: hp('1.5%'), fontFamily: 'Roboto-Medium', color: Colors.primaryColor1, }}>results when you change your smartphone or </Text>
                    <Text numberOfLines={1} style={{ fontSize: hp('1.5%'), fontFamily: 'Roboto-Medium', color: Colors.primaryColor1, }}>delete the app </Text>
                </View>
                <View style={{ width: wp('100%'), height: hp('15%'), backgroundColor: Colors.white, justifyContent: 'center', paddingLeft: wp('2.5%') }}>
                    <TouchableOpacity onPress={() => props.navigation.navigate('Signup')} style={{ width: wp('60%'), height: hp('6%'), alignItems: 'center', justifyContent: 'center', backgroundColor: Colors.primaryColor1, borderRadius: hp('1%') }}>
                        <Text style={{ fontSize: hp('2%'), color: Colors.white }}>Sign up</Text>
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row', width: wp('100%'), height: hp('5%'), }}>

                        <Text style={{ marginTop: hp('2%'), fontSize: hp('2%'), color: Colors.black, }}>Already have an account?</Text>

                        <TouchableOpacity style={{ marginTop: hp('2%'), marginLeft: wp('0.5%') }}>
                            <Text style={{ fontSize: hp('2%'), color: Colors.primaryColor1 }}>Login</Text>
                        </TouchableOpacity>
                    </View>

                </View>
                <View style={{ width: wp('100%'), height: hp('2%'), backgroundColor: Colors.verylightGray }} />


                {/* </ImageBackground> */}
                <View style={{ flex: 1, backgroundColor: '#fff', paddingTop: 10 }}>
                    <DrawerItemList {...props} />
                </View>
            </DrawerContentScrollView>
            {/* <View style={{ padding: 20, borderTopWidth: 1, borderTopColor: '#ccc' }}>
                <TouchableOpacity onPress={() => { }} style={{ paddingVertical: 15 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Ionicons name="share-social-outline" size={22} />
                        <Text
                            style={{
                                fontSize: 15,
                                fontFamily: 'Roboto-Medium',
                                marginLeft: 5,
                            }}>
                            Tell a Friend
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { }} style={{ paddingVertical: 15 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Ionicons name="exit-outline" size={22} />
                        <Text
                            style={{
                                fontSize: 15,
                                fontFamily: 'Roboto-Medium',
                                marginLeft: 5,
                            }}>
                            Sign Out
                        </Text>
                    </View>
                </TouchableOpacity>
            </View> */}
        </View>
    );
};

export default CustomDrawerForGuest;
