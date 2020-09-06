import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import TopAnalyticsNavigator from './TopAnalyticsNavigator';
import MediumAnalyticsNavigator from './MediumAnalyticsNavigator';
import LowAnalyticsNavigator from './LowAnalyticsNavigator';

const Tab = createMaterialTopTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator initialRouteName="TopAnalyticsNavigator"
    
    tabBarOptions={{
      labelStyle : {
        
        color:'#000000'
      },
      activeTintColor: '#ffffff',
      inactiveTintColor: '#ffffff',
  }}>
      <Tab.Screen name="Top" component={TopAnalyticsNavigator} />
      <Tab.Screen name="Medium" component={MediumAnalyticsNavigator} />
      <Tab.Screen name="Low" component={LowAnalyticsNavigator} />
    </Tab.Navigator>
  );
}