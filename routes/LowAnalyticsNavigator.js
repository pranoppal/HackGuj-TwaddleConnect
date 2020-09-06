import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LowAnalytics from '../src/containers/teacher/feed/TopAnalytics';


const LowAnalyticsStack = createStackNavigator();

const LowAnalyticsNavigator = ({navigation}) => (
  <LowAnalyticsStack.Navigator screenOptions={{headerShown:false}}>
    <LowAnalyticsStack.Screen
      name="LowAnalytics"
      component={LowAnalytics}
    />
  </LowAnalyticsStack.Navigator>
);

export default LowAnalyticsNavigator;
