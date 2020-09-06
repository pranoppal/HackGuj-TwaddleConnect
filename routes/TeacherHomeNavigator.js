import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ExploreAll from '../src/containers/teacher/feed/ExploreAll'
import ExploreStudent from '../src/containers/teacher/feed/ExploreStudent'
import StudentAnalyticsTopBarNavigator from '../routes/StudentAnalyticsTopBarNavigator';

const HomeStack = createStackNavigator();

const UserHomeNavigator = ({navigation}) => (
  <HomeStack.Navigator screenOptions={{headerShown:false}}>
    <HomeStack.Screen
      name="ExploreAll"
      component={ExploreAll}
    />
    <HomeStack.Screen
      name="ExploreStudent"
      component={ExploreStudent}
    />
    <HomeStack.Screen
      name="StudentAnalyticsTopBarNavigator"
      component={StudentAnalyticsTopBarNavigator}
      />
  </HomeStack.Navigator>
);

export default UserHomeNavigator;
