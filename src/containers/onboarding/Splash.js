import React, {useEffect, useState} from 'react';
import {ImageBackground} from 'react-native';
import {useStoreState, useStoreActions} from 'easy-peasy';

export default function Splash({navigation}) {
    const user = useStoreState((state) => state.user);

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('OnboardingNavigator');
            // if (user.userId) {
            //   navigation.navigate('BottomTabNavigator');
            // } else {
            //   navigation.navigate('OnboardingNavigator');
            // }
        }, 2000);
    }, []);

    return (
        <ImageBackground
            source={require('../../../assets/SplashScreen.png')}
            style={{width: '100%', height: '100%'}}/>
    );
}

