import React, {useEffect, useState} from 'react';
import {ImageBackground} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {CommonActions} from '@react-navigation/native';
import {useStoreActions, useStoreState} from 'easy-peasy';

export default function Splash({navigation}) {
    const {getUser} = useStoreActions((actions) => actions.user);
    const user = useStoreState((state) => state.user);

    useEffect(() => {
        if (user && user.user && user.user.uuid) {
            navigation.dispatch(
                CommonActions.reset({
                    index: 0,
                    routes: [{name: 'TeacherBottomTabNavigator'}],
                }),
            );
        }
    }, [user]);

    useEffect(() => {
        setTimeout(async () => {
            const userId = await AsyncStorage.getItem('userId');
            const userType = await AsyncStorage.getItem('userType');
            if (userId !== null) {
                getUser({userId: userId, userType: userType});
            } else {
                navigation.dispatch(
                    CommonActions.reset({
                        index: 0,
                        routes: [{name: 'OnboardingNavigator'}],
                    }),
                );
            }
        }, 2000);
    }, []);

    return (
        <ImageBackground
            source={require('../../../assets/SplashScreen.png')}
            style={{width: '100%', height: '100%'}}
        />
    );
}
