import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AddPost from '../src/containers/user/addPost/AddPost';

const AddPostStack = createStackNavigator();

const ClubNavigator = ({navigation}) => (
  <AddPostStack.Navigator>
    <AddPostStack.Screen
      name="AddPost"
      component={AddPost}
    />
    
  </AddPostStack.Navigator>
);

export default ClubNavigator;
