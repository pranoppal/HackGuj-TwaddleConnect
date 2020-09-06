import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTabNavigator from '../routes/BottomTabNavigator';
import Splash from '../src/containers/onboarding/Splash';
import OnboardingNavigator from './OnboardingNavigator';
import TeacherBottomTabNavigator from './TeacherBottomTabNavigator';


const AppStack = createStackNavigator();

export default function AppNavigator() {
  return (
    <AppStack.Navigator initialRouteName="Splash" headerMode="none">
      <AppStack.Screen name="Splash" component={Splash}/>
      <AppStack.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
      <AppStack.Screen name="OnboardingNavigator" component={OnboardingNavigator} />
      <AppStack.Screen name="TeacherBottomTabNavigator" component={TeacherBottomTabNavigator} />
    </AppStack.Navigator>
  );
}
