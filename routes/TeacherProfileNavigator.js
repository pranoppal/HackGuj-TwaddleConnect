import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import TeacherProfile from '../src/containers/teacher/profile/TeacherProfile';

const ProfileStack = createStackNavigator();

const TeacherProfileNavigator = ({navigation}) => (
  <ProfileStack.Navigator screenOptions={{headerShown:false}}>
    <ProfileStack.Screen
      name="TeacherProfile"
      component={TeacherProfile}
    />
    
  </ProfileStack.Navigator>
);

export default TeacherProfileNavigator;
