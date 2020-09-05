import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import TeacherProfileNavigator from '../routes/TeacherProfileNavigator';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import AddPostNavigator from '../routes/AddPostNavigator';
import TeacherHomeNavigator from './TeacherHomeNavigator';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => (
  <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
      tabBarOptions={{
        labelStyle : {
          fontSize:0,
        },
        activeBackgroundColor:'#5382FA',
        inactiveBackgroundColor:'#1F3549',
        activeTintColor: '#ffffff',
        inactiveTintColor: '#ffffff',
    }}
    >
      
      <Tab.Screen
        name="Home"
        component={TeacherHomeNavigator}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#009387',
          tabBarIcon: ({ color }) => (
            <Feather name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Add"
        component={AddPostNavigator}
        options={{
          tabBarLabel: 'Post',
          tabBarColor: '#009387',
          tabBarIcon: ({ color }) => (
            <Feather name="plus-circle" size={24} color={color} />
          ),
        }}
      />
      
      <Tab.Screen
        name="Profile"
        component={TeacherProfileNavigator}
        headerMode="none"
        options={{
          tabBarLabel: 'Profile',
          tabBarColor: '#1f65ff',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account-outline" color={color} size={30} />
          ),
        }}
      />
    </Tab.Navigator>
);

export default BottomTabNavigator;
