import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import UserClub from '../src/containers/user/club/UserClub';
import ClubDetail from '../src/containers/user/club/ClubDetail';

const HomeStack = createStackNavigator();

const ClubNavigator = ({navigation}) => (
  <HomeStack.Navigator screenOptions={{headerShown:false}}>
    <HomeStack.Screen
      name="UserClub"
      component={UserClub}
    />
    <HomeStack.Screen
      name="ClubDetail"
      component={ClubDetail}
    />
  </HomeStack.Navigator>
);

export default ClubNavigator;
