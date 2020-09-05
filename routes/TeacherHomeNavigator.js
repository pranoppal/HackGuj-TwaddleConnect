import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ExploreAll from '../src/containers/teacher/feed/ExploreAll'
import ExploreStudent from '../src/containers/teacher/feed/ExploreStudent'

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
    
  </HomeStack.Navigator>
);

export default UserHomeNavigator;
