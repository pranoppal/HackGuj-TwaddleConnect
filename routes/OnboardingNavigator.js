import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import BasicDetails from '../src/containers/onboarding/BasicDetails';
import SignUp from '../src/containers/onboarding/SignUp';
import TeacherORStudent from '../src/containers/onboarding/TeacherORStudent';

const OnboardingStack = createStackNavigator();

const OnboardingNavigator = ({navigation}) => (
    <OnboardingStack.Navigator screenOptions={{headerShown: false}}>
        
        <OnboardingStack.Screen
            name="TeacherORStudent"
            component={TeacherORStudent}
        />
        <OnboardingStack.Screen name="SignUp" component={SignUp} />
        <OnboardingStack.Screen name="BasicDetails" component={BasicDetails} />
    </OnboardingStack.Navigator>
);

export default OnboardingNavigator;
