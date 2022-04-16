import React from 'react'
import { View, Text,SafeAreaView,ScrollView,StyleSheet } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
const GameDetailsScreen = ({navigation, route}) => {
  return (
    // <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
    //   <Text>Game Details Screen</Text>
    //   <Text>{route.params?.title}</Text>
    // </View>
    <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                    <Text style={{ fontSize:38,fontWeight: 'bold',  color: '#3da0d9' }}>Coming Soon......</Text>
                </View>
            </ScrollView >
        </SafeAreaView>
  )
}

export default GameDetailsScreen
const styles = StyleSheet.create({
  container: {
      flex:1,
      justifyContent:"center",
      padding: wp('2%'),
      width: wp('100%'),
      height: hp('66%'),

  },

});