import React from 'react';
import UserHomeNavigator from '../routes/UserHomeNavigator';
import UserProfileNavigator from '../routes/UserProfileNavigator';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import UserClubNavigator from '../routes/UserClubNavigator';
import AddPostNavigator from '../routes/AddPostNavigator';
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
        component={UserHomeNavigator}
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
        name="Club"
        component={UserClubNavigator}
        headerMode="none"
        options={{
          tabBarLabel: 'Club',
          tabBarColor: '#1f65ff',
          tabBarIcon: ({ color }) => (
            <Image source={require('../assets/party.png')} style={{width:24, height:24, tintColor:color}}/>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={UserProfileNavigator}
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
