import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import BasicDetails from '../src/containers/onboarding/BasicDetails';
import SignUp from '../src/containers/onboarding/SignUp';
const OnboardingStack = createStackNavigator();

const OnboardingNavigator = ({navigation}) => (
    <OnboardingStack.Navigator screenOptions={{headerShown:false}}>
      <OnboardingStack.Screen
        name="SignUp"
        component={SignUp}
      />
      {/* <OnboardingStack.Screen
        name="Mobile"
        component={Mobile}
      />
      <OnboardingStack.Screen
        name="OTP"
        component={OTP}
        /> */}
        <OnboardingStack.Screen
        name="BasicDetails"
        component={BasicDetails}
        />
    </OnboardingStack.Navigator>
  );
  
  export default OnboardingNavigator;