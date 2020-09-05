import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import UserHome from '../src/containers/user/feed/UserHome';
import PostDetail from '../src/containers/user/feed/PostDetail';

const HomeStack = createStackNavigator();

const UserHomeNavigator = ({navigation}) => (
  <HomeStack.Navigator screenOptions={{headerShown:false}}>
    <HomeStack.Screen
      name="UserHome"
      component={UserHome}
    />
    <HomeStack.Screen
      name="PostDetail"
      component={PostDetail}
    />
    
  </HomeStack.Navigator>
);

export default UserHomeNavigator;
