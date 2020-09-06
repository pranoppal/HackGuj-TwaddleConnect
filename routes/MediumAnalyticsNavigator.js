import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MediumAnalytics from '../src/containers/teacher/feed/TopAnalytics';


const MediumAnalyticsStack = createStackNavigator();

const MediumAnalyticsNavigator = ({navigation}) => (
  <MediumAnalyticsStack.Navigator screenOptions={{headerShown:false}}>
    <MediumAnalyticsStack.Screen
      name="MediumAnalytics"
      component={MediumAnalytics}
    />
  </MediumAnalyticsStack.Navigator>
);

export default MediumAnalyticsNavigator;
