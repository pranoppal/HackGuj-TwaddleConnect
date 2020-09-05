import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
} from '@react-native-community/google-signin';
import {View,Text, Dimensions} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useStoreState, useStoreActions} from 'easy-peasy';
import {v5 as uuidv5} from 'uuid';
import axios from 'axios';
// import {getBaseUrl} from '../../utils/Constants';
import AsyncStorage from '@react-native-community/async-storage';

export default function SignUp({navigation}) {
    const [isSigninInProgress, setSigninInProgress] = useState(false);
    const {insertUser} = useStoreActions((actions) => actions.user);
    const user = useStoreState((state) => state.user);
    var token;

    useEffect(() => {
        GoogleSignin.configure({
            // scopes: ['https://www.googleapis.com/auth/user.birthday.read'],
            webClientId:
                '645603465740-gvaqp606l2sskm8s7gccrdrobl6sfjoc.apps.googleusercontent.com',
            androidClientId:
                '645603465740-ugep93ql2ajnho4rjgbo7b3krq0ehl35.apps.googleusercontent.com',
        });
    }, []);

    useEffect(() => {
        async function navigateToBasicDetails() {
            await AsyncStorage.setItem('token', token);
            navigation.navigate('BasicDetails');
        }
        if (user.id) navigateToBasicDetails();
    }, [user]);

    async function signInGoogle() {
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            const MY_NAMESPACE = 'f1c0ef65-bd6e-4e89-9572-22a7324c952d';
            const uuid = uuidv5(userInfo.user.id, MY_NAMESPACE);
            const user = {
                uuid: uuid,
                firstName: userInfo.user.givenName,
                lastName: userInfo.user.familyName,
                email: userInfo.user.email,
                photo: userInfo.user.photo,
                isTeacher: false,
            };
            insertUser(user);

            // navigation.navigate('BasicDetails');
        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                console.log('user cancelled the login flow');
            } else if (error.code === statusCodes.IN_PROGRESS) {
                console.log('operation (e.g. sign in) is in progress already');
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                console.log('play services not available or outdated');
            } else {
                console.log('error', error);
                // some other error happened
            }
        }
    }

    return (
        <View style={{flex: 1}}>
            <View style={{flex: 1,justifyContent:'flex-end',alignItems:'center'}}>
                <Text>Welcome to</Text>
                <Text>Twaddle Connect</Text>
            </View>
            <View style={{flex: 1}} />
            <View style={{flex: 1,justifyContent:'flex-start',alignItems:'center'}}>
                <GoogleSigninButton
                    style={{width: width*0.9, height: 48}}
                    size={GoogleSigninButton.Size.Wide}
                    color={GoogleSigninButton.Color.Dark}
                    onPress={() => signInGoogle()}
                />
            </View>
        </View>
    );
}

const { width, height } = Dimensions.get('window');
