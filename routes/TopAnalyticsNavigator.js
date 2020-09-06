import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import TopAnalytics from '../src/containers/teacher/feed/TopAnalytics';


const TopAnalyticsStack = createStackNavigator();

const TopAnalyticsNavigator = ({navigation}) => (
  <TopAnalyticsStack.Navigator screenOptions={{headerShown:false}}>
    <TopAnalyticsStack.Screen
      name="TopAnalytics"
      component={TopAnalytics}
    />
  </TopAnalyticsStack.Navigator>
);

export default TopAnalyticsNavigator;
