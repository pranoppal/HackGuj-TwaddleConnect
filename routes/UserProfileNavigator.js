import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import UserProfile from '../src/containers/user/profile/UserProfile';

const ProfileStack = createStackNavigator();

const UserProfileNavigator = ({navigation}) => (
  <ProfileStack.Navigator screenOptions={{headerShown:false}}>
    <ProfileStack.Screen
      name="UserProfile"
      component={UserProfile}
    />
    
  </ProfileStack.Navigator>
);

export default UserProfileNavigator;
