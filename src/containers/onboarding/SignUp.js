import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
} from '@react-native-community/google-signin';
import {View, Text, Dimensions, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useStoreState, useStoreActions} from 'easy-peasy';
import {v5 as uuidv5} from 'uuid';
// import {getBaseUrl} from '../../utils/Constants';

import {TouchableRipple} from 'react-native-paper';

export default function SignUp({navigation,route}) {

    const [isSigninInProgress, setSigninInProgress] = useState(false);
    
    const userType = route.params.userType;
    // var userCopy;
    // var token;

    
    useEffect(() => {
        GoogleSignin.configure({
            // scopes: ['https://www.googleapis.com/auth/user.birthday.read'],
            webClientId:
                '645603465740-gvaqp606l2sskm8s7gccrdrobl6sfjoc.apps.googleusercontent.com',
            androidClientId:
                '645603465740-ugep93ql2ajnho4rjgbo7b3krq0ehl35.apps.googleusercontent.com',
        });
    }, []);

    

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
                userType: userType,
                token: userInfo.idToken,
            };
            // userCopy = user;
            // token = userInfo.idToken;
            // insertUser(user);

            navigation.navigate('BasicDetails',{
                userDetails: user,
            });
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
            <View
                style={{
                    flex: 1,
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                }}>
                <Text style={{fontSize: 36}}>Welcome to</Text>
                <Text
                    style={{
                        fontSize: 36,
                        fontFamily: 'RedHatDisplay-Regular',
                        color: '#5382fa',
                    }}>
                    Twaddle Connect
                </Text>
            </View>
            <View style={{flex: 1}} />
            <View
                style={{
                    flex: 1,
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                }}>
                <TouchableRipple onPress={() => signInGoogle()}>
                    <View
                        style={{
                            flexDirection: 'row',
                            width: width * 0.85,
                            borderRadius: 10,
                            height: 50,
                            backgroundColor: '#5382fa',
                            justifyContent: 'space-evenly',
                            alignItems: 'center',
                        }}>
                        <Image
                            source={require('../../../assets/GoogleIcon.png')}
                            style={{width: 24, height: 24, marginEnd: -32}}
                        />
                        <Text style={{color: '#fff'}}>Sign in with Google</Text>
                    </View>
                </TouchableRipple>
                <Text style={{fontSize:11,fontFamily:'Nunito-Regular',marginTop:24,}}>
                    *By signing up, your are agreeing to our{' '}
                    <Text style={{color: '#5382fa'}}>Privacy Policy</Text>
                </Text>
            </View>
        </View>
    );
}

const {width, height} = Dimensions.get('window');
