import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Colors from '../Assetst/Constants/Colors';
import LottieView from 'lottie-react-native';

const SearchingDoctors = (props) => {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={{ width: wp('83%'), height: hp('50%'), alignSelf: "center", justifyContent: "center" }}>
                    <LottieView source={require('../Assetst/Images/Lottie/98877-search.json')} autoPlay loop
                        style={{ height: hp('24%'), alignSelf: "center" }} />
                    <TouchableOpacity onPress={() => props.navigation.navigate('voicePage')}>
                        <Text style={{ textAlign: "center", color: Colors.primaryColor1, fontFamily: "Roboto-Regular", fontSize: hp('2%'), marginTop: hp('1.5%') }} >We are connecting you to the Doctor</Text>
                    </TouchableOpacity>
                    <Text style={{ textAlign: "center", color: Colors.primaryColor7, fontFamily: "Roboto-Regular", fontSize: hp('2%') }}>Please Wait!</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}
11
export default SearchingDoctors;

const styles = StyleSheet.create({
    container: {
        width: wp('100%'),
        height: hp('100%'),
        // backgroundColor: "pink",
        alignSelf: "center",
        justifyContent: "center"
    },
})