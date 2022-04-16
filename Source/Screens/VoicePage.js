import { View, Text, SafeAreaView, StyleSheet, Image, Textarea, Alert, TextInput, TouchableHighlight, TouchableOpacity, ActivityIndicator, ScrollView, StatusBar, } from 'react-native'
import React, { useState, useEffect } from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Colors from '../Assetst/Constants/Colors';
import { Rating } from 'react-native-elements';
import Voice from 'react-native-voice';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';


const Video = (props) => {
    const [pitch, setPitch] = useState('');
    const [error, setError] = useState('');
    const [end, setEnd] = useState('');
    const [started, setStarted] = useState('');
    const [results, setResults] = useState([]);
    const [partialResults, setPartialResults] = useState([]);

    useEffect(() => {
        //Setting callbacks for the process status
        Voice.onSpeechStart = onSpeechStart;
        Voice.onSpeechEnd = onSpeechEnd;
        Voice.onSpeechError = onSpeechError;
        Voice.onSpeechResults = onSpeechResults;
        Voice.onSpeechPartialResults = onSpeechPartialResults;
        Voice.onSpeechVolumeChanged = onSpeechVolumeChanged;

        return () => {
            //destroy the process after switching the screen
            Voice.destroy().then(Voice.removeAllListeners);
        };
    }, []);

    const onSpeechStart = (e) => {
        //Invoked when .start() is called without error
        console.log('onSpeechStart: ', e);
        setStarted('√');
    };

    const onSpeechEnd = (e) => {
        //Invoked when SpeechRecognizer stops recognition
        console.log('onSpeechEnd: ', e);
        setEnd('√');
    };

    const onSpeechError = (e) => {
        //Invoked when an error occurs.
        console.log('onSpeechError: ', e);
        setError(JSON.stringify(e.error));
    };

    const onSpeechResults = (e) => {
        //Invoked when SpeechRecognizer is finished recognizing
        console.log('onSpeechResults: ', e);
        setResults(e.value);
    };

    const onSpeechPartialResults = (e) => {
        //Invoked when any results are computed
        console.log('onSpeechPartialResults: ', e);
        setPartialResults(e.value);
    };

    const onSpeechVolumeChanged = (e) => {
        //Invoked when pitch that is recognized changed
        console.log('onSpeechVolumeChanged: ', e);
        setPitch(e.value);
    };

    const startRecognizing = async () => {
        //Starts listening for speech for a specific locale
        try {
            await Voice.start('en-US');
            setPitch('');
            setError('');
            setStarted('');
            setResults([]);
            setPartialResults([]);
            setEnd('');
        } catch (e) {
            //eslint-disable-next-line
            console.error(e);
        }
    };

    const stopRecognizing = async () => {
        //Stops listening for speech
        try {
            await Voice.stop();
        } catch (e) {
            //eslint-disable-next-line
            console.error(e);
        }
    };

    const cancelRecognizing = async () => {
        //Cancels the speech recognition
        try {
            await Voice.cancel();
        } catch (e) {
            //eslint-disable-next-line
            console.error(e);
        }
    };

    const destroyRecognizer = async (props) => {
        //Destroys the current SpeechRecognizer instance
        try {
            await Voice.destroy();
            setPitch('');
            setError('');
            setStarted('');
            setResults([]);
            setPartialResults([]);
            setEnd('');
        } catch (e) {
            //eslint-disable-next-line
            console.error(e);
        }
    };

    const [defaultRating, setDefaultRating] = useState(4);

    const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);


    const starImageFilled =
        'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_filled.png';

    const starImageCorner =
        'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_corner.png';



    return (


        <SafeAreaView>
            <View style={styles.container}>
                <StatusBar
                    animated={true}
                    backgroundColor={Colors.primaryColor1}
                />

                <View style={styles.head}>
                    <Text style={styles.heading}>Video Consult</Text>
                </View>
                <View style={styles.details}>
                    <View style={styles.doctor}>

                        <View style={styles.img}>
                            <Image source={require('../Assetst/Images/doctor4.png')} style={{ width: wp('25.5%'), height: hp('14.5%'), borderRadius: hp('2%') }} />
                        </View>
                        <View style={styles.doc}>
                            <Text style={{ color: Colors.primaryColor7, fontFamily: "Roboto-Bold", fontSize: hp('3%') }}>Dr. Shruti Kedia</Text>
                            <Text style={{ color: Colors.primaryColor2, fontFamily: "Roboto-Medium", fontSize: hp('2.3%') }}>General Physician</Text>
                            <Text style={{ color: Colors.primaryColor6, fontFamily: "Roboto-Medium", fontSize: hp('1.7%') }}>7 Years experience</Text>
                            <Text style={{ color: Colors.primaryColor7, fontFamily: "Roboto-Bold", fontSize: hp('1.7%') }}>MBBS,MD</Text>
                            <Text style={{ color: Colors.primaryColor6, fontFamily: "Roboto-Regular", fontSize: hp('1.7%') }}>English/Hindi</Text>
                           
                            <View style={{ width: wp('19%'), height: hp('2.5%'), justifyContent: 'center', flexDirection: 'row',alignItems:'center',marginLeft:-wp('2%')}}>
                                        {maxRating.map((item, key) => {
                                            return (
                                                <TouchableOpacity
                                                    activeOpacity={0.2}
                                                    key={item}
                                                    onPress={() => setDefaultRating(item)}>
                                                    <Image
                                                        style={{
                                                            width: wp('2.7%'),
                                                            height: hp('1.6%'),
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
                        </View>
                    </View>
                </View>

                <View style={styles.patient}>
                    <Text style={{ color: Colors.primaryColor2, fontFamily: "Roboto-Bold", fontSize: hp('2.3%') }}>Patient Details</Text>
                    <View
                        style={{
                            width: wp('100%'),

                            borderBottomColor: Colors.primaryColor5,
                            borderBottomWidth: wp('0.2%'),
                            
                            alignSelf: "center"
                        }}
                    />

                    <View style={styles.patientDet}>
                        <Text style={{ color: Colors.primaryColor6, fontFamily: "Roboto-Medium", fontSize: hp('2%'), }}>Olivia Rodrigo</Text>
                        <Text style={{ color: Colors.primaryColor6, fontFamily: "Roboto-Medium", fontSize: hp('2%') }}>21,Female</Text>
                        <Text style={{ color: Colors.primaryColor6, fontFamily: "Roboto-Medium", fontSize: hp('2%'), }}>9891502453</Text>
                        <Text style={{ color: Colors.primaryColor7, fontFamily: "Roboto-Bold", fontSize: hp('2%'), }}>olivia@gmail.com</Text>


                    </View>

                    <View
                        style={{
                            width: wp('100%'),
                            borderBottomColor: Colors.primaryColor5,
                            borderBottomWidth: wp('0.2%'),
                            alignSelf: "center"
                        }}
                    />

                </View>
                <View style={{ width: wp('95%'), height: hp('20%'), backgroundColor: Colors.primaryColor5, alignSelf: "center", borderRadius: hp('1%')}}>
                    <TextInput placeholder='Type your problem' placeholderTextColor={'#696969'}  />
                    <ScrollView>
                        {partialResults.map((result, index) => {
                            return (
                                <Text
                                    key={`partial-result-${index}`}
                                    style={styles.textStyle}>
                                    {result}
                                </Text>
                            );
                        })}
                    </ScrollView>
                </View>
                <TouchableHighlight onPress={startRecognizing} style={{ alignItems: "center", width: hp('5%'), height: hp('5%'), borderRadius: hp('5%'), backgroundColor: Colors.primaryColor1, alignSelf: 'center', alignItems: 'center', justifyContent: 'center', marginTop: -hp('2.5%') }}>
                  <FontAwesome5Icon name='microphone' size={hp('3%')} style={{ color: "#ffffff" }} />
                </TouchableHighlight>

                <View style={{ width: wp('100%'), height: hp('5%'), marginTop: hp('1%'), alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ color: Colors.black, fontFamily: "Roboto-Bold", fontSize: hp('1.8%'), }}>Tap on the mic to speak</Text>
                </View>
                <TouchableOpacity style={{
                    height: hp('7%'), width: wp('80%'), borderRadius: hp('1%'), alignSelf: "center", borderColor: Colors.primaryColor1, borderWidth: hp('0.2%'),
                    marginTop: hp('4%'), justifyContent: "center"
                }} onPress={() => props.navigation.navigate('VideoCalling')}>
                    <Text style={{ color: Colors.primaryColor1, fontFamily: "Roboto-Medium", fontSize: hp('1.8%'), textAlign: "center" }}>Connecting.....</Text>

                </TouchableOpacity>


            </View>

        </SafeAreaView>
    )
}

export default Video;

const styles = StyleSheet.create({
    container: {
        width: wp('100%'),
        height: hp('100%'),
        backgroundColor: Colors.white,

    },
    head: {
        width: wp('100%'),
        height: hp('8%'),
        backgroundColor: Colors.primaryColor1,
        justifyContent: "center"
    },
    heading: {
        color: Colors.primaryColor8,
        fontFamily: 'Roboto-Medium',
        fontSize: hp('2%'),
        textAlign: "center"
    },
    details: {
        width: wp('95%'),
        height: hp('20%'),
        //  backgroundColor:Colors.primaryDark,
        alignSelf: "center",
        justifyContent: "center",
        marginTop:hp('2%')


    },
    doctor: {
        width: wp('95%'),
        height: hp('18%'),
         backgroundColor:Colors.primaryRed,
        alignSelf: "center",
        flexDirection: "row",
        justifyContent: "center",



    },
    img: {
        width: wp('28%'),
        height: hp('18%'),
        // backgroundColor:Colors.primaryDark,
        alignSelf: "center",
        alignItems:'center',
        paddingTop:hp('0.5%')
    },
    imageButton: {
        width: 50,
        height: 50,
    },
    doc: {
        width: wp('65.5%'),
        height: hp('18%'),
        //  backgroundColor:Colors.primaryColor3,
        alignSelf: "center",
        paddingLeft: wp('0.5%')

    },
    patient: {
        width: wp('92%'),

        height: hp('17%'),
        // backgroundColor:Colors.primaryRed,
        alignSelf: "center",


    },
    patientDet: {
        width: wp('92%'),
        height: hp('12%'),
        // backgroundColor:Colors.greenSyan,


    },
    textInputStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        height: 48,
        borderRadius: 20,
        paddingHorizontal: 16,
        shadowOffset: { width: 0, height: 1 },
        shadowRadius: 2,
        elevation: 2,
        shadowOpacity: 0.4
    },
    textStyle: {
        textAlign: 'left',
        padding: 12,
        //backgroundColor: 'pink'
    },




});




