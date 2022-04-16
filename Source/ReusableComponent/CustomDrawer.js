import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Colors from '../Assetst/Constants/Colors';

const CustomDrawer = props => {
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView
                {...props}
                contentContainerStyle={{ backgroundColor: Colors.primaryColor1 }}>
                {/* <ImageBackground
                    source={require('../Assetst/Images/menu-bg.jpeg')}
                    style={{ padding: 20 }}> */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginRight: 5 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 10 }}>
                        <Image
                            source={require('../Assetst/Images/client.jpg')}
                            style={{ height: 70, width: 70, borderRadius: 35, marginBottom: 10, }}
                        />
                        <View>
                            <Text
                                style={{
                                    color: '#fff',
                                    fontSize: 16,
                                    fontFamily: 'Roboto-Medium',
                                    marginLeft: 5
                                }}>
                                Hello
                            </Text>
                            <Text
                                style={{
                                    color: '#fff',
                                    fontSize: 16,
                                    fontFamily: 'Roboto-Medium',
                                    marginLeft: 5
                                }}>
                                Olivia
                            </Text>
                        </View>
                    </View>
                    <TouchableOpacity>
                        <Ionicons name="create-outline" size={22} />
                    </TouchableOpacity>
                </View>

                {/* </ImageBackground> */}
                <View style={{ flex: 1, backgroundColor: '#fff', paddingTop: 10 }}>
                    <DrawerItemList {...props} />
                </View>
            </DrawerContentScrollView>
            <View style={{ padding: 20, borderTopWidth: 1, borderTopColor: '#ccc' }}>

                <TouchableOpacity onPress={() => { }} style={{ paddingVertical: 15 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Ionicons name="exit-outline" size={22} />
                        <Text
                            style={{
                                fontSize: 15,
                                fontFamily: 'Roboto-Medium',
                                marginLeft: 5,
                            }}>
                            Log Out
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default CustomDrawer;
