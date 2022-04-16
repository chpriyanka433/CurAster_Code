import { View, Text, StyleSheet, SafeAreaView, FlatList, ScrollView, Image, TouchableOpacity, StatusBar } from 'react-native'
import React from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Colors from '../Assetst/Constants/Colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Rating } from 'react-native-ratings';
import LinearGradient from 'react-native-linear-gradient';
// import { ScrollView } from 'react-native-gesture-handler';
// import { FlatList } from 'react-native-gesture-handler';
import DoctorCard from '../ReusableComponent/DoctorCard';
const MyAppointments = (props) => {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <StatusBar
                    backgroundColor={Colors.primaryColor1} />
                {/* <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#09c6f9', '#035fce']} style={{ width: wp('100%'), height: hp('10%'), }}> */}
                <View style={styles.head}>
                    <Text style={styles.heading}>My Appointments </Text>
                </View>
                {/* </LinearGradient> */}



                {/* <FlatList style={{backgroundColor:"green",height:hp('40%'),width:wp('90%')}}> */}
                <View style={{ backgroundColor: "white", height: hp('90%'), width: wp('100%'), marginBottom: hp('1%') }}>
                    {/* <ScrollView style={{height:hp('20%'),width:wp('95%'),backgroundColor:"green"}}> */}
                    {/* <FlatList
                        keyExtractor={(item) => item.key}
                        showsVerticalScrollIndicator={false}
                        data={Data}
                        renderItem={({ item, index }) =>

                            <DoctorCard
                                hospital={item.hospital}
                                speciality={item.speciality}
                                t1={item.t1}
                                t2={item.t2}
                                t3={item.t3}
                                onPress={() => onclick_it(item, index)}
                            />
                        }
                    /> */}
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <DoctorCard viewDetails={()=> props.navigation.navigate('CancellationDetails')} />
                        <DoctorCard />
                        <DoctorCard />
                        <DoctorCard />
                        <DoctorCard />
                        <DoctorCard />
                    </ScrollView>

                    {/* </ScrollView> */}
                </View>
                {/* </FlatList> */}
            </View>
        </SafeAreaView>
    )
}

export default MyAppointments;

const styles = StyleSheet.create({
    container: {
        width: wp('100%'),
        height: hp('100%'),
        // backgroundColor:Colors.primaryColor7,

    },
    head: {
        width: wp('100%'),
        height: hp('8%'),
        backgroundColor: Colors.primaryColor1,
        justifyContent: "center",
        alignItems: "center"


    },
    heading: {
        color: Colors.primaryColor8,
        fontFamily: 'Roboto-Medium',
        fontSize: hp('2%'),

    },

})
