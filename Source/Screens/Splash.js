import * as Animatable from 'react-native-animatable';

import { Image, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useRef } from 'react';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

// const zoomeIn = Animatable.createAnimatableComponent(MyCustomComponent);

const MySplashScreen = (props) => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={'#f5f5f5'}/>
            {/* <Animatable.Text animation="zoomInUp" iterationCount={5}>Zoom me up, Scotty</Animatable.Text>
            <Animatable.Text animation="zoomOutLeft" iterationCount={5} direction="alternate">Up and down you go</Animatable.Text>
            <Animatable.Text animation="zoomOutRight" easing="ease-out" iterationCount={5} style={{ textAlign: 'center' }}>❤️</Animatable.Text> */}
            <Animatable.Image style={styles.logo}
                animation="zoomIn" delay={200} duration={5000}
                source={require('../Assetst/Images/Logo.png')}
                onAnimationEnd={() => props.navigation.replace('LoginsignupScreen')}
            />
            {/* <View >
                <Animatable.Text style={[styles.logoText, { color: '#035FCE', fontFamily: 'Roboto-Bold' }]} animation="zoomIn" delay={1000} duration={4000}

                > C u r A s t e r
                </Animatable.Text>


            </View>
            <View>
                <Animatable.Text style={[styles.logoText, { color: 'black', fontFamily: 'Roboto-Regular', fontSize: hp('2%') }]} animation="zoomIn" delay={1000} duration={4000}

                >  For your family's wellness
                </Animatable.Text>
            </View> */}
        </SafeAreaView>
    )
};

export const styles = StyleSheet.create({
    container: {
        width: wp('100%'),
        height: hp('100%'),
        backgroundColor: '#f5f5f5',
        justifyContent: 'center',
        alignItems: 'center'
    },

    logo: {
        width: wp('50%'),
        height: wp('50%'),
        // backgroundColor:'#09C6F9',
        // backgroundColor:'#035FCE',
        // backgroundColor:'#F1F8F9',
        // backgroundColor:'#ABB286',

        // backgroundColor:'#D0DAE0',
    },

    logoText: {
        fontSize: hp('5%'),

    },
});

export default MySplashScreen;




