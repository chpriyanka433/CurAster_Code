import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Splash from '../Screens/Splash'
import LoginsignupScreen from '../Screens/LoginsignupScreen';
import Signup from '../Screens/Signup';
import Login from '../Screens/Login';
import SignupOtp from '../Screens/SignupOtp';
import DrawerNavigation from '../Navigations/DrawerNavigation';
import DrawerNavigationForGuest from '../Navigations/DrawerNavigationForGuest';
import EmailMobileLogin from '../Screens/EmailMobileLogin'
import VoiceScreen from '../Screens/Speech';
import voicePage from '../Screens/VoicePage';
import VideoConsultForGP from '../Screens/VideoConsultForGP';
import PaymentMethod from '../Screens/PaymentMethod';
import PaymentStatus from '../Screens/PaymentStatus';
import VideoCalling from '../Screens/VideoCalling';
import MyAppointments from '../Screens/MyAppointments';
import CancellationDetails from '../Screens/CancellationDetails';
import VideoCallConnecting from '../Screens/VideoCallConnecting';
import FindYourDoctors from '../Screens/FindYourDoctors';
import FindLocation from '../Screens/FindDocLocation';
import OnlineConsultation from '../Screens/OnlineConsultation';
import BookingSlotTime from '../Screens/BookingSlotTime';
import checkOut from '../Screens/checkOut';
import PaymentMethod2 from '../Screens/PaymentMethod2';
import PaymentStatus2 from '../Screens/PaymentStatus2';
import HospitalVisit from '../Screens/HospitalVisit';
import SearchingDoctors from '../Screens/SearchingDoctors';
import Loading from '../Screens/Loading';
import HospitalVisitFindDoctor from '../Screens/HospitalVisitFindDoctor';
import PastAppointmentFindDoctor from '../Screens/PastAppointment';
import BookingSlotTimeSecond from '../Screens/BookingSlotTimeSecond';
import CheckOutSecond from '../Screens/CheckOutSecond';
import PaymentMethodThird from '../Screens/PaymentMethodThird';
import PaymentStatusThird from '../Screens/PaymentStatusThird';
import LoadingTwo from '../Screens/LoadingTwo';
import MyAppointmentFindDoctors from '../Screens/MyAppointmentFindDoctors';
import CancellationDetailsTwo from '../Screens/CancellationDetailsTwo';
import CancellationDetailsThird from '../Screens/CancellationDetailsThird';
import BookingSlotTimeThird from '../Screens/BookingSlotTimeThird';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
    return (
        // <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="LoginsignupScreen" component={LoginsignupScreen} />
            <Stack.Screen name="Signup" component={Signup} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SignupOtp" component={SignupOtp} />
            <Stack.Screen name="DrawerNavigation" component={DrawerNavigation} />
            <Stack.Screen name="DrawerNavigationForGuest" component={DrawerNavigationForGuest} />
            <Stack.Screen name="EmailMobileLogin" component={EmailMobileLogin} />
            <Stack.Screen name="VoiceScreen" component={VoiceScreen} />
            <Stack.Screen name="voicePage" component={voicePage} />
            <Stack.Screen name="VideoConsultForGP" component={VideoConsultForGP} />
            <Stack.Screen name="PaymentMethod" component={PaymentMethod} />
            <Stack.Screen name="PaymentStatus" component={PaymentStatus} />
            <Stack.Screen name="VideoCalling" component={VideoCalling} />
            <Stack.Screen name="MyAppointments" component={MyAppointments} />
            <Stack.Screen name="CancellationDetails" component={CancellationDetails} />
            <Stack.Screen name="VideoCallConnecting" component={VideoCallConnecting} />
            <Stack.Screen name="FindYourDoctors" component={FindYourDoctors} />
            <Stack.Screen name="FindLocation" component={FindLocation} />
            <Stack.Screen name="OnlineConsultation" component={OnlineConsultation} />
            <Stack.Screen name="BookingSlotTime" component={BookingSlotTime} />
            <Stack.Screen name="checkOut" component={checkOut} />
            <Stack.Screen name="PaymentMethod2" component={PaymentMethod2} />
            <Stack.Screen name="PaymentStatus2" component={PaymentStatus2} />
            <Stack.Screen name="HospitalVisit" component={HospitalVisit} />
            <Stack.Screen name="SearchingDoctors" component={SearchingDoctors} />
            <Stack.Screen name="Loading" component={Loading} />
            <Stack.Screen name="HospitalVisitFindDoctor" component={HospitalVisitFindDoctor} />
            <Stack.Screen name="PastAppointmentFindDoctor" component={PastAppointmentFindDoctor} />
            <Stack.Screen name="BookingSlotTimeSecond" component={BookingSlotTimeSecond} />
            <Stack.Screen name="CheckOutSecond" component={CheckOutSecond} />
            <Stack.Screen name="PaymentMethodThird" component={PaymentMethodThird} />
            <Stack.Screen name="PaymentStatusThird" component={PaymentStatusThird} />
            <Stack.Screen name="LoadingTwo" component={LoadingTwo} />
            <Stack.Screen name="MyAppointmentFindDoctors" component={MyAppointmentFindDoctors} />
            <Stack.Screen name="CancellationDetailsTwo" component={CancellationDetailsTwo} />
            <Stack.Screen name="CancellationDetailsThird" component={CancellationDetailsThird} />
            <Stack.Screen name="BookingSlotTimeThird" component={BookingSlotTimeThird} />
        </Stack.Navigator>
        // </NavigationContainer>
    );
};

export default StackNavigation;