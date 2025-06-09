import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen, TasksListScreen} from '../screens';
import {IProject} from '../interfaces';

export type HomeStackParamList = {
  Home: undefined;
  TasksListScreen: {project: IProject};
};

const Stack = createNativeStackNavigator<HomeStackParamList>();

const AuthStack: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TasksListScreen"
        component={TasksListScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
