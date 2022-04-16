import { Image, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Colors from '../Assetst/Constants/Colors';
import VideoConsultForGPhysician from './VideoConsultForGPhysician';
import VideoConsultForPediatrician from './VideoConsultForPediatrician';
import {
    createMaterialTopTabNavigator
} from '@react-navigation/material-top-tabs';

const VideoConsultForGP = (props) => {
    //const Stack = createStackNavigator();
    const Tab = createMaterialTopTabNavigator();

    return (

        <SafeAreaView >

            <View style={styles.container}>

               
                <StatusBar  backgroundColor={Colors.primaryColor1} />
            
                <View style={{ flexDirection: 'row', width: wp('100%'), height: hp('8%'), alignItems: 'center', justifyContent: 'space-between', backgroundColor: Colors.primaryColor1 }}>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginLeft: hp('2%'),}} onPress={() => props.navigation.goBack('Home')} >
                        <AntDesign name='left' size={hp('2%')} color='white' />
                        <Text style={{ fontSize: hp('2%'), fontFamily: 'Roboto-Medium', color: Colors.primaryColor3, justifyContent: 'center', textAlignVertical:'center'}}>Back</Text>
                    </TouchableOpacity>
                    <Text style={{ fontSize: hp('2%'), fontFamily: 'Roboto-Bold', color: Colors.primaryColor3, justifyContent: 'center',}}>Video Consult</Text>
                    <Text style={{ fontSize: hp('2%'), fontFamily: 'Roboto-Bold', color: Colors.primaryColor3, justifyContent: 'center', marginRight: hp('1%') }}>Sector 62</Text>
                </View>
                {/* </LinearGradient> */}

                <View style={{
                    width: wp('100%'), height: hp('92%'), backgroundColor: Colors.primaryColor8, alignSelf: 'center', elevation: hp('2%'),
                    shadowColor: Colors.primaryColor4,
                }}>


                    {/* <NavigationContainer > */}
                    <Tab.Navigator
                        initialRouteName="Feed"
                        tabBarOptions={{
                            activeTintColor: Colors.primaryColor1,
                            inactiveTintColor: Colors.black,

                            labelStyle: {
                                textAlign: 'center',
                            },
                            indicatorStyle: {
                                borderBottomColor: '#09c6f9',
                                borderBottomWidth: 2,

                            },
                        }} >
                        <Tab.Screen
                            name="General Physician"
                            component={VideoConsultForGPhysician}
                            options={{
                                tabBarLabel: 'General Physician',
                                tabBarLabelStyle: { fontWeight: 'bold' },
                                // tabBarIcon: ({ color, size }) => (
                                //   <MaterialCommunityIcons
                                //       name="home"
                                //       color={color}
                                //       size={size}
                                //     />
                                // ),
                            }} />
                        <Tab.Screen
                            name="Pediatrician"
                            component={VideoConsultForPediatrician}
                            options={{
                                tabBarLabel: 'Pediatrician',
                                tabBarLabelStyle: { fontWeight: 'bold' },
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

export default VideoConsultForGP;